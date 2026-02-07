"use client";

import { createContext, useContext, useCallback, useRef, useState } from "react";

const ConfirmContext = createContext(null);

export function ConfirmProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const resolveRef = useRef(null);

  const showConfirm = useCallback((msg) => {
    setMessage(msg);
    setOpen(true);
    return new Promise((resolve) => {
      resolveRef.current = resolve;
    });
  }, []);

  const handleConfirm = useCallback(() => {
    setOpen(false);
    if (resolveRef.current) {
      resolveRef.current(true);
      resolveRef.current = null;
    }
  }, []);

  const handleCancel = useCallback(() => {
    setOpen(false);
    if (resolveRef.current) {
      resolveRef.current(false);
      resolveRef.current = null;
    }
  }, []);

  const value = { showConfirm };

  return (
    <ConfirmContext.Provider value={value}>
      {children}
      {open && (
        <ConfirmModal
          message={message}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </ConfirmContext.Provider>
  );
}

function ConfirmModal({ message, onConfirm, onCancel }) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm"
        onClick={onCancel}
        aria-hidden="true"
      />

      {/* Modal card - sesuai tema website */}
      <div
        className="relative w-full max-w-sm rounded-lg bg-white border border-neutral-200 shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
          <p
            id="confirm-title"
            className="text-center text-neutral-800 text-sm sm:text-base leading-relaxed"
          >
            {message}
          </p>
        </div>
        <div className="flex border-t border-neutral-100">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-3.5 text-[0.7rem] font-medium tracking-[0.15em] uppercase text-neutral-600 hover:bg-neutral-50 transition-colors"
          >
            Batal
          </button>
          <div className="w-px bg-neutral-100" />
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 py-3.5 text-[0.7rem] font-medium tracking-[0.15em] uppercase text-neutral-900 bg-neutral-100 hover:bg-neutral-900 hover:text-white transition-colors"
          >
            Ya, lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
}

export function useConfirm() {
  const ctx = useContext(ConfirmContext);
  if (!ctx)
    throw new Error("useConfirm must be used within ConfirmProvider");
  return ctx;
}
