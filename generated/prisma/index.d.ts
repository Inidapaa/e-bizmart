
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model barang
 * 
 */
export type barang = $Result.DefaultSelection<Prisma.$barangPayload>
/**
 * Model detail_transaksi
 * 
 */
export type detail_transaksi = $Result.DefaultSelection<Prisma.$detail_transaksiPayload>
/**
 * Model kategori
 * 
 */
export type kategori = $Result.DefaultSelection<Prisma.$kategoriPayload>
/**
 * Model pelanggan
 * 
 */
export type pelanggan = $Result.DefaultSelection<Prisma.$pelangganPayload>
/**
 * Model pembayaran
 * 
 */
export type pembayaran = $Result.DefaultSelection<Prisma.$pembayaranPayload>
/**
 * Model penjualan
 * 
 */
export type penjualan = $Result.DefaultSelection<Prisma.$penjualanPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const barang_STATUS_KETERSEDIAAN: {
  Tersedia: 'Tersedia',
  Habis: 'Habis',
  Preorder: 'Preorder'
};

export type barang_STATUS_KETERSEDIAAN = (typeof barang_STATUS_KETERSEDIAAN)[keyof typeof barang_STATUS_KETERSEDIAAN]


export const pembayaran_NAMA_PEMBAYARAN: {
  Cash: 'Cash',
  Transaksi: 'Transaksi',
  Kredit: 'Kredit'
};

export type pembayaran_NAMA_PEMBAYARAN = (typeof pembayaran_NAMA_PEMBAYARAN)[keyof typeof pembayaran_NAMA_PEMBAYARAN]


export const user_ROLE: {
  Owner: 'Owner',
  admin: 'admin',
  EMPTY_ENUM_VALUE: 'EMPTY_ENUM_VALUE'
};

export type user_ROLE = (typeof user_ROLE)[keyof typeof user_ROLE]


export const penjualan_STATUS_TRANSAKSI: {
  Belum_bayar: 'Belum_bayar',
  Dalam_proses: 'Dalam_proses',
  Selesai: 'Selesai',
  Gagal: 'Gagal'
};

export type penjualan_STATUS_TRANSAKSI = (typeof penjualan_STATUS_TRANSAKSI)[keyof typeof penjualan_STATUS_TRANSAKSI]

}

export type barang_STATUS_KETERSEDIAAN = $Enums.barang_STATUS_KETERSEDIAAN

export const barang_STATUS_KETERSEDIAAN: typeof $Enums.barang_STATUS_KETERSEDIAAN

export type pembayaran_NAMA_PEMBAYARAN = $Enums.pembayaran_NAMA_PEMBAYARAN

export const pembayaran_NAMA_PEMBAYARAN: typeof $Enums.pembayaran_NAMA_PEMBAYARAN

export type user_ROLE = $Enums.user_ROLE

export const user_ROLE: typeof $Enums.user_ROLE

export type penjualan_STATUS_TRANSAKSI = $Enums.penjualan_STATUS_TRANSAKSI

export const penjualan_STATUS_TRANSAKSI: typeof $Enums.penjualan_STATUS_TRANSAKSI

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Barangs
 * const barangs = await prisma.barang.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Barangs
   * const barangs = await prisma.barang.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.barang`: Exposes CRUD operations for the **barang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Barangs
    * const barangs = await prisma.barang.findMany()
    * ```
    */
  get barang(): Prisma.barangDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detail_transaksi`: Exposes CRUD operations for the **detail_transaksi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detail_transaksis
    * const detail_transaksis = await prisma.detail_transaksi.findMany()
    * ```
    */
  get detail_transaksi(): Prisma.detail_transaksiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kategori`: Exposes CRUD operations for the **kategori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kategoris
    * const kategoris = await prisma.kategori.findMany()
    * ```
    */
  get kategori(): Prisma.kategoriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pelanggan`: Exposes CRUD operations for the **pelanggan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pelanggans
    * const pelanggans = await prisma.pelanggan.findMany()
    * ```
    */
  get pelanggan(): Prisma.pelangganDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pembayaran`: Exposes CRUD operations for the **pembayaran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pembayarans
    * const pembayarans = await prisma.pembayaran.findMany()
    * ```
    */
  get pembayaran(): Prisma.pembayaranDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.penjualan`: Exposes CRUD operations for the **penjualan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penjualans
    * const penjualans = await prisma.penjualan.findMany()
    * ```
    */
  get penjualan(): Prisma.penjualanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    barang: 'barang',
    detail_transaksi: 'detail_transaksi',
    kategori: 'kategori',
    pelanggan: 'pelanggan',
    pembayaran: 'pembayaran',
    penjualan: 'penjualan',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "barang" | "detail_transaksi" | "kategori" | "pelanggan" | "pembayaran" | "penjualan" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      barang: {
        payload: Prisma.$barangPayload<ExtArgs>
        fields: Prisma.barangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.barangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.barangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barangPayload>
          }
          findFirst: {
            args: Prisma.barangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.barangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barangPayload>
          }
          findMany: {
            args: Prisma.barangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barangPayload>[]
          }
          create: {
            args: Prisma.barangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barangPayload>
          }
          createMany: {
            args: Prisma.barangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.barangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barangPayload>
          }
          update: {
            args: Prisma.barangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barangPayload>
          }
          deleteMany: {
            args: Prisma.barangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.barangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.barangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barangPayload>
          }
          aggregate: {
            args: Prisma.BarangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarang>
          }
          groupBy: {
            args: Prisma.barangGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarangGroupByOutputType>[]
          }
          count: {
            args: Prisma.barangCountArgs<ExtArgs>
            result: $Utils.Optional<BarangCountAggregateOutputType> | number
          }
        }
      }
      detail_transaksi: {
        payload: Prisma.$detail_transaksiPayload<ExtArgs>
        fields: Prisma.detail_transaksiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detail_transaksiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_transaksiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detail_transaksiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_transaksiPayload>
          }
          findFirst: {
            args: Prisma.detail_transaksiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_transaksiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detail_transaksiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_transaksiPayload>
          }
          findMany: {
            args: Prisma.detail_transaksiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_transaksiPayload>[]
          }
          create: {
            args: Prisma.detail_transaksiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_transaksiPayload>
          }
          createMany: {
            args: Prisma.detail_transaksiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.detail_transaksiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_transaksiPayload>
          }
          update: {
            args: Prisma.detail_transaksiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_transaksiPayload>
          }
          deleteMany: {
            args: Prisma.detail_transaksiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detail_transaksiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.detail_transaksiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_transaksiPayload>
          }
          aggregate: {
            args: Prisma.Detail_transaksiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetail_transaksi>
          }
          groupBy: {
            args: Prisma.detail_transaksiGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detail_transaksiGroupByOutputType>[]
          }
          count: {
            args: Prisma.detail_transaksiCountArgs<ExtArgs>
            result: $Utils.Optional<Detail_transaksiCountAggregateOutputType> | number
          }
        }
      }
      kategori: {
        payload: Prisma.$kategoriPayload<ExtArgs>
        fields: Prisma.kategoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kategoriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kategoriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>
          }
          findFirst: {
            args: Prisma.kategoriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kategoriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>
          }
          findMany: {
            args: Prisma.kategoriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>[]
          }
          create: {
            args: Prisma.kategoriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>
          }
          createMany: {
            args: Prisma.kategoriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.kategoriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>
          }
          update: {
            args: Prisma.kategoriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>
          }
          deleteMany: {
            args: Prisma.kategoriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.kategoriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.kategoriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kategoriPayload>
          }
          aggregate: {
            args: Prisma.KategoriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKategori>
          }
          groupBy: {
            args: Prisma.kategoriGroupByArgs<ExtArgs>
            result: $Utils.Optional<KategoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.kategoriCountArgs<ExtArgs>
            result: $Utils.Optional<KategoriCountAggregateOutputType> | number
          }
        }
      }
      pelanggan: {
        payload: Prisma.$pelangganPayload<ExtArgs>
        fields: Prisma.pelangganFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pelangganFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pelangganFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>
          }
          findFirst: {
            args: Prisma.pelangganFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pelangganFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>
          }
          findMany: {
            args: Prisma.pelangganFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>[]
          }
          create: {
            args: Prisma.pelangganCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>
          }
          createMany: {
            args: Prisma.pelangganCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pelangganDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>
          }
          update: {
            args: Prisma.pelangganUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>
          }
          deleteMany: {
            args: Prisma.pelangganDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pelangganUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pelangganUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pelangganPayload>
          }
          aggregate: {
            args: Prisma.PelangganAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePelanggan>
          }
          groupBy: {
            args: Prisma.pelangganGroupByArgs<ExtArgs>
            result: $Utils.Optional<PelangganGroupByOutputType>[]
          }
          count: {
            args: Prisma.pelangganCountArgs<ExtArgs>
            result: $Utils.Optional<PelangganCountAggregateOutputType> | number
          }
        }
      }
      pembayaran: {
        payload: Prisma.$pembayaranPayload<ExtArgs>
        fields: Prisma.pembayaranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pembayaranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pembayaranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pembayaranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pembayaranPayload>
          }
          findFirst: {
            args: Prisma.pembayaranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pembayaranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pembayaranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pembayaranPayload>
          }
          findMany: {
            args: Prisma.pembayaranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pembayaranPayload>[]
          }
          create: {
            args: Prisma.pembayaranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pembayaranPayload>
          }
          createMany: {
            args: Prisma.pembayaranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pembayaranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pembayaranPayload>
          }
          update: {
            args: Prisma.pembayaranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pembayaranPayload>
          }
          deleteMany: {
            args: Prisma.pembayaranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pembayaranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pembayaranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pembayaranPayload>
          }
          aggregate: {
            args: Prisma.PembayaranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePembayaran>
          }
          groupBy: {
            args: Prisma.pembayaranGroupByArgs<ExtArgs>
            result: $Utils.Optional<PembayaranGroupByOutputType>[]
          }
          count: {
            args: Prisma.pembayaranCountArgs<ExtArgs>
            result: $Utils.Optional<PembayaranCountAggregateOutputType> | number
          }
        }
      }
      penjualan: {
        payload: Prisma.$penjualanPayload<ExtArgs>
        fields: Prisma.penjualanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.penjualanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.penjualanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanPayload>
          }
          findFirst: {
            args: Prisma.penjualanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.penjualanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanPayload>
          }
          findMany: {
            args: Prisma.penjualanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanPayload>[]
          }
          create: {
            args: Prisma.penjualanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanPayload>
          }
          createMany: {
            args: Prisma.penjualanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.penjualanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanPayload>
          }
          update: {
            args: Prisma.penjualanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanPayload>
          }
          deleteMany: {
            args: Prisma.penjualanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.penjualanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.penjualanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penjualanPayload>
          }
          aggregate: {
            args: Prisma.PenjualanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePenjualan>
          }
          groupBy: {
            args: Prisma.penjualanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenjualanGroupByOutputType>[]
          }
          count: {
            args: Prisma.penjualanCountArgs<ExtArgs>
            result: $Utils.Optional<PenjualanCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    barang?: barangOmit
    detail_transaksi?: detail_transaksiOmit
    kategori?: kategoriOmit
    pelanggan?: pelangganOmit
    pembayaran?: pembayaranOmit
    penjualan?: penjualanOmit
    user?: userOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BarangCountOutputType
   */

  export type BarangCountOutputType = {
    detail_transaksi: number
  }

  export type BarangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail_transaksi?: boolean | BarangCountOutputTypeCountDetail_transaksiArgs
  }

  // Custom InputTypes
  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangCountOutputType
     */
    select?: BarangCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeCountDetail_transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_transaksiWhereInput
  }


  /**
   * Count Type KategoriCountOutputType
   */

  export type KategoriCountOutputType = {
    barang: number
  }

  export type KategoriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | KategoriCountOutputTypeCountBarangArgs
  }

  // Custom InputTypes
  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriCountOutputType
     */
    select?: KategoriCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeCountBarangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: barangWhereInput
  }


  /**
   * Count Type PelangganCountOutputType
   */

  export type PelangganCountOutputType = {
    penjualan: number
  }

  export type PelangganCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualan?: boolean | PelangganCountOutputTypeCountPenjualanArgs
  }

  // Custom InputTypes
  /**
   * PelangganCountOutputType without action
   */
  export type PelangganCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PelangganCountOutputType
     */
    select?: PelangganCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PelangganCountOutputType without action
   */
  export type PelangganCountOutputTypeCountPenjualanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penjualanWhereInput
  }


  /**
   * Count Type PembayaranCountOutputType
   */

  export type PembayaranCountOutputType = {
    penjualan: number
  }

  export type PembayaranCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualan?: boolean | PembayaranCountOutputTypeCountPenjualanArgs
  }

  // Custom InputTypes
  /**
   * PembayaranCountOutputType without action
   */
  export type PembayaranCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembayaranCountOutputType
     */
    select?: PembayaranCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PembayaranCountOutputType without action
   */
  export type PembayaranCountOutputTypeCountPenjualanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penjualanWhereInput
  }


  /**
   * Count Type PenjualanCountOutputType
   */

  export type PenjualanCountOutputType = {
    detail_transaksi: number
  }

  export type PenjualanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail_transaksi?: boolean | PenjualanCountOutputTypeCountDetail_transaksiArgs
  }

  // Custom InputTypes
  /**
   * PenjualanCountOutputType without action
   */
  export type PenjualanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenjualanCountOutputType
     */
    select?: PenjualanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PenjualanCountOutputType without action
   */
  export type PenjualanCountOutputTypeCountDetail_transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_transaksiWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    penjualan: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualan?: boolean | UserCountOutputTypeCountPenjualanArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPenjualanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penjualanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model barang
   */

  export type AggregateBarang = {
    _count: BarangCountAggregateOutputType | null
    _avg: BarangAvgAggregateOutputType | null
    _sum: BarangSumAggregateOutputType | null
    _min: BarangMinAggregateOutputType | null
    _max: BarangMaxAggregateOutputType | null
  }

  export type BarangAvgAggregateOutputType = {
    KODE_BARANG: number | null
    ID_KATEGORI: number | null
    HARGA_BARANG: number | null
    STOK_BARANG: number | null
  }

  export type BarangSumAggregateOutputType = {
    KODE_BARANG: number | null
    ID_KATEGORI: number | null
    HARGA_BARANG: number | null
    STOK_BARANG: number | null
  }

  export type BarangMinAggregateOutputType = {
    KODE_BARANG: number | null
    ID_KATEGORI: number | null
    NAMA_BARANG: string | null
    GAMBAR_BARANG: string | null
    HARGA_BARANG: number | null
    KETERANGAN_BARANG: string | null
    STOK_BARANG: number | null
    EXP_BARANG: Date | null
    STATUS_KETERSEDIAAN: $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28: string | null
  }

  export type BarangMaxAggregateOutputType = {
    KODE_BARANG: number | null
    ID_KATEGORI: number | null
    NAMA_BARANG: string | null
    GAMBAR_BARANG: string | null
    HARGA_BARANG: number | null
    KETERANGAN_BARANG: string | null
    STOK_BARANG: number | null
    EXP_BARANG: Date | null
    STATUS_KETERSEDIAAN: $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28: string | null
  }

  export type BarangCountAggregateOutputType = {
    KODE_BARANG: number
    ID_KATEGORI: number
    NAMA_BARANG: number
    GAMBAR_BARANG: number
    HARGA_BARANG: number
    KETERANGAN_BARANG: number
    STOK_BARANG: number
    EXP_BARANG: number
    STATUS_KETERSEDIAAN: number
    ATTRIBUTE_28: number
    _all: number
  }


  export type BarangAvgAggregateInputType = {
    KODE_BARANG?: true
    ID_KATEGORI?: true
    HARGA_BARANG?: true
    STOK_BARANG?: true
  }

  export type BarangSumAggregateInputType = {
    KODE_BARANG?: true
    ID_KATEGORI?: true
    HARGA_BARANG?: true
    STOK_BARANG?: true
  }

  export type BarangMinAggregateInputType = {
    KODE_BARANG?: true
    ID_KATEGORI?: true
    NAMA_BARANG?: true
    GAMBAR_BARANG?: true
    HARGA_BARANG?: true
    KETERANGAN_BARANG?: true
    STOK_BARANG?: true
    EXP_BARANG?: true
    STATUS_KETERSEDIAAN?: true
    ATTRIBUTE_28?: true
  }

  export type BarangMaxAggregateInputType = {
    KODE_BARANG?: true
    ID_KATEGORI?: true
    NAMA_BARANG?: true
    GAMBAR_BARANG?: true
    HARGA_BARANG?: true
    KETERANGAN_BARANG?: true
    STOK_BARANG?: true
    EXP_BARANG?: true
    STATUS_KETERSEDIAAN?: true
    ATTRIBUTE_28?: true
  }

  export type BarangCountAggregateInputType = {
    KODE_BARANG?: true
    ID_KATEGORI?: true
    NAMA_BARANG?: true
    GAMBAR_BARANG?: true
    HARGA_BARANG?: true
    KETERANGAN_BARANG?: true
    STOK_BARANG?: true
    EXP_BARANG?: true
    STATUS_KETERSEDIAAN?: true
    ATTRIBUTE_28?: true
    _all?: true
  }

  export type BarangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which barang to aggregate.
     */
    where?: barangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barangs to fetch.
     */
    orderBy?: barangOrderByWithRelationInput | barangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: barangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned barangs
    **/
    _count?: true | BarangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarangMaxAggregateInputType
  }

  export type GetBarangAggregateType<T extends BarangAggregateArgs> = {
        [P in keyof T & keyof AggregateBarang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarang[P]>
      : GetScalarType<T[P], AggregateBarang[P]>
  }




  export type barangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: barangWhereInput
    orderBy?: barangOrderByWithAggregationInput | barangOrderByWithAggregationInput[]
    by: BarangScalarFieldEnum[] | BarangScalarFieldEnum
    having?: barangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarangCountAggregateInputType | true
    _avg?: BarangAvgAggregateInputType
    _sum?: BarangSumAggregateInputType
    _min?: BarangMinAggregateInputType
    _max?: BarangMaxAggregateInputType
  }

  export type BarangGroupByOutputType = {
    KODE_BARANG: number
    ID_KATEGORI: number | null
    NAMA_BARANG: string | null
    GAMBAR_BARANG: string | null
    HARGA_BARANG: number | null
    KETERANGAN_BARANG: string | null
    STOK_BARANG: number | null
    EXP_BARANG: Date | null
    STATUS_KETERSEDIAAN: $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28: string | null
    _count: BarangCountAggregateOutputType | null
    _avg: BarangAvgAggregateOutputType | null
    _sum: BarangSumAggregateOutputType | null
    _min: BarangMinAggregateOutputType | null
    _max: BarangMaxAggregateOutputType | null
  }

  type GetBarangGroupByPayload<T extends barangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarangGroupByOutputType[P]>
            : GetScalarType<T[P], BarangGroupByOutputType[P]>
        }
      >
    >


  export type barangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    KODE_BARANG?: boolean
    ID_KATEGORI?: boolean
    NAMA_BARANG?: boolean
    GAMBAR_BARANG?: boolean
    HARGA_BARANG?: boolean
    KETERANGAN_BARANG?: boolean
    STOK_BARANG?: boolean
    EXP_BARANG?: boolean
    STATUS_KETERSEDIAAN?: boolean
    ATTRIBUTE_28?: boolean
    kategori?: boolean | barang$kategoriArgs<ExtArgs>
    detail_transaksi?: boolean | barang$detail_transaksiArgs<ExtArgs>
    _count?: boolean | BarangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barang"]>



  export type barangSelectScalar = {
    KODE_BARANG?: boolean
    ID_KATEGORI?: boolean
    NAMA_BARANG?: boolean
    GAMBAR_BARANG?: boolean
    HARGA_BARANG?: boolean
    KETERANGAN_BARANG?: boolean
    STOK_BARANG?: boolean
    EXP_BARANG?: boolean
    STATUS_KETERSEDIAAN?: boolean
    ATTRIBUTE_28?: boolean
  }

  export type barangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"KODE_BARANG" | "ID_KATEGORI" | "NAMA_BARANG" | "GAMBAR_BARANG" | "HARGA_BARANG" | "KETERANGAN_BARANG" | "STOK_BARANG" | "EXP_BARANG" | "STATUS_KETERSEDIAAN" | "ATTRIBUTE_28", ExtArgs["result"]["barang"]>
  export type barangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | barang$kategoriArgs<ExtArgs>
    detail_transaksi?: boolean | barang$detail_transaksiArgs<ExtArgs>
    _count?: boolean | BarangCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $barangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "barang"
    objects: {
      kategori: Prisma.$kategoriPayload<ExtArgs> | null
      detail_transaksi: Prisma.$detail_transaksiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      KODE_BARANG: number
      ID_KATEGORI: number | null
      NAMA_BARANG: string | null
      GAMBAR_BARANG: string | null
      HARGA_BARANG: number | null
      KETERANGAN_BARANG: string | null
      STOK_BARANG: number | null
      EXP_BARANG: Date | null
      STATUS_KETERSEDIAAN: $Enums.barang_STATUS_KETERSEDIAAN | null
      ATTRIBUTE_28: string | null
    }, ExtArgs["result"]["barang"]>
    composites: {}
  }

  type barangGetPayload<S extends boolean | null | undefined | barangDefaultArgs> = $Result.GetResult<Prisma.$barangPayload, S>

  type barangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<barangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarangCountAggregateInputType | true
    }

  export interface barangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['barang'], meta: { name: 'barang' } }
    /**
     * Find zero or one Barang that matches the filter.
     * @param {barangFindUniqueArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends barangFindUniqueArgs>(args: SelectSubset<T, barangFindUniqueArgs<ExtArgs>>): Prisma__barangClient<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Barang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {barangFindUniqueOrThrowArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends barangFindUniqueOrThrowArgs>(args: SelectSubset<T, barangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__barangClient<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barangFindFirstArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends barangFindFirstArgs>(args?: SelectSubset<T, barangFindFirstArgs<ExtArgs>>): Prisma__barangClient<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barangFindFirstOrThrowArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends barangFindFirstOrThrowArgs>(args?: SelectSubset<T, barangFindFirstOrThrowArgs<ExtArgs>>): Prisma__barangClient<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Barangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barangs
     * const barangs = await prisma.barang.findMany()
     * 
     * // Get first 10 Barangs
     * const barangs = await prisma.barang.findMany({ take: 10 })
     * 
     * // Only select the `KODE_BARANG`
     * const barangWithKODE_BARANGOnly = await prisma.barang.findMany({ select: { KODE_BARANG: true } })
     * 
     */
    findMany<T extends barangFindManyArgs>(args?: SelectSubset<T, barangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Barang.
     * @param {barangCreateArgs} args - Arguments to create a Barang.
     * @example
     * // Create one Barang
     * const Barang = await prisma.barang.create({
     *   data: {
     *     // ... data to create a Barang
     *   }
     * })
     * 
     */
    create<T extends barangCreateArgs>(args: SelectSubset<T, barangCreateArgs<ExtArgs>>): Prisma__barangClient<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Barangs.
     * @param {barangCreateManyArgs} args - Arguments to create many Barangs.
     * @example
     * // Create many Barangs
     * const barang = await prisma.barang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends barangCreateManyArgs>(args?: SelectSubset<T, barangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Barang.
     * @param {barangDeleteArgs} args - Arguments to delete one Barang.
     * @example
     * // Delete one Barang
     * const Barang = await prisma.barang.delete({
     *   where: {
     *     // ... filter to delete one Barang
     *   }
     * })
     * 
     */
    delete<T extends barangDeleteArgs>(args: SelectSubset<T, barangDeleteArgs<ExtArgs>>): Prisma__barangClient<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Barang.
     * @param {barangUpdateArgs} args - Arguments to update one Barang.
     * @example
     * // Update one Barang
     * const barang = await prisma.barang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends barangUpdateArgs>(args: SelectSubset<T, barangUpdateArgs<ExtArgs>>): Prisma__barangClient<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Barangs.
     * @param {barangDeleteManyArgs} args - Arguments to filter Barangs to delete.
     * @example
     * // Delete a few Barangs
     * const { count } = await prisma.barang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends barangDeleteManyArgs>(args?: SelectSubset<T, barangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barangs
     * const barang = await prisma.barang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends barangUpdateManyArgs>(args: SelectSubset<T, barangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Barang.
     * @param {barangUpsertArgs} args - Arguments to update or create a Barang.
     * @example
     * // Update or create a Barang
     * const barang = await prisma.barang.upsert({
     *   create: {
     *     // ... data to create a Barang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barang we want to update
     *   }
     * })
     */
    upsert<T extends barangUpsertArgs>(args: SelectSubset<T, barangUpsertArgs<ExtArgs>>): Prisma__barangClient<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Barangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barangCountArgs} args - Arguments to filter Barangs to count.
     * @example
     * // Count the number of Barangs
     * const count = await prisma.barang.count({
     *   where: {
     *     // ... the filter for the Barangs we want to count
     *   }
     * })
    **/
    count<T extends barangCountArgs>(
      args?: Subset<T, barangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Barang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BarangAggregateArgs>(args: Subset<T, BarangAggregateArgs>): Prisma.PrismaPromise<GetBarangAggregateType<T>>

    /**
     * Group by Barang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barangGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends barangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: barangGroupByArgs['orderBy'] }
        : { orderBy?: barangGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, barangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the barang model
   */
  readonly fields: barangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for barang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__barangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kategori<T extends barang$kategoriArgs<ExtArgs> = {}>(args?: Subset<T, barang$kategoriArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    detail_transaksi<T extends barang$detail_transaksiArgs<ExtArgs> = {}>(args?: Subset<T, barang$detail_transaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the barang model
   */
  interface barangFieldRefs {
    readonly KODE_BARANG: FieldRef<"barang", 'Int'>
    readonly ID_KATEGORI: FieldRef<"barang", 'Int'>
    readonly NAMA_BARANG: FieldRef<"barang", 'String'>
    readonly GAMBAR_BARANG: FieldRef<"barang", 'String'>
    readonly HARGA_BARANG: FieldRef<"barang", 'Int'>
    readonly KETERANGAN_BARANG: FieldRef<"barang", 'String'>
    readonly STOK_BARANG: FieldRef<"barang", 'Int'>
    readonly EXP_BARANG: FieldRef<"barang", 'DateTime'>
    readonly STATUS_KETERSEDIAAN: FieldRef<"barang", 'barang_STATUS_KETERSEDIAAN'>
    readonly ATTRIBUTE_28: FieldRef<"barang", 'String'>
  }
    

  // Custom InputTypes
  /**
   * barang findUnique
   */
  export type barangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    /**
     * Filter, which barang to fetch.
     */
    where: barangWhereUniqueInput
  }

  /**
   * barang findUniqueOrThrow
   */
  export type barangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    /**
     * Filter, which barang to fetch.
     */
    where: barangWhereUniqueInput
  }

  /**
   * barang findFirst
   */
  export type barangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    /**
     * Filter, which barang to fetch.
     */
    where?: barangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barangs to fetch.
     */
    orderBy?: barangOrderByWithRelationInput | barangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for barangs.
     */
    cursor?: barangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of barangs.
     */
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * barang findFirstOrThrow
   */
  export type barangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    /**
     * Filter, which barang to fetch.
     */
    where?: barangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barangs to fetch.
     */
    orderBy?: barangOrderByWithRelationInput | barangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for barangs.
     */
    cursor?: barangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of barangs.
     */
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * barang findMany
   */
  export type barangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    /**
     * Filter, which barangs to fetch.
     */
    where?: barangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barangs to fetch.
     */
    orderBy?: barangOrderByWithRelationInput | barangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing barangs.
     */
    cursor?: barangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barangs.
     */
    skip?: number
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * barang create
   */
  export type barangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    /**
     * The data needed to create a barang.
     */
    data: XOR<barangCreateInput, barangUncheckedCreateInput>
  }

  /**
   * barang createMany
   */
  export type barangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many barangs.
     */
    data: barangCreateManyInput | barangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * barang update
   */
  export type barangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    /**
     * The data needed to update a barang.
     */
    data: XOR<barangUpdateInput, barangUncheckedUpdateInput>
    /**
     * Choose, which barang to update.
     */
    where: barangWhereUniqueInput
  }

  /**
   * barang updateMany
   */
  export type barangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update barangs.
     */
    data: XOR<barangUpdateManyMutationInput, barangUncheckedUpdateManyInput>
    /**
     * Filter which barangs to update
     */
    where?: barangWhereInput
    /**
     * Limit how many barangs to update.
     */
    limit?: number
  }

  /**
   * barang upsert
   */
  export type barangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    /**
     * The filter to search for the barang to update in case it exists.
     */
    where: barangWhereUniqueInput
    /**
     * In case the barang found by the `where` argument doesn't exist, create a new barang with this data.
     */
    create: XOR<barangCreateInput, barangUncheckedCreateInput>
    /**
     * In case the barang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<barangUpdateInput, barangUncheckedUpdateInput>
  }

  /**
   * barang delete
   */
  export type barangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    /**
     * Filter which barang to delete.
     */
    where: barangWhereUniqueInput
  }

  /**
   * barang deleteMany
   */
  export type barangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which barangs to delete
     */
    where?: barangWhereInput
    /**
     * Limit how many barangs to delete.
     */
    limit?: number
  }

  /**
   * barang.kategori
   */
  export type barang$kategoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
    where?: kategoriWhereInput
  }

  /**
   * barang.detail_transaksi
   */
  export type barang$detail_transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    where?: detail_transaksiWhereInput
    orderBy?: detail_transaksiOrderByWithRelationInput | detail_transaksiOrderByWithRelationInput[]
    cursor?: detail_transaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detail_transaksiScalarFieldEnum | Detail_transaksiScalarFieldEnum[]
  }

  /**
   * barang without action
   */
  export type barangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
  }


  /**
   * Model detail_transaksi
   */

  export type AggregateDetail_transaksi = {
    _count: Detail_transaksiCountAggregateOutputType | null
    _avg: Detail_transaksiAvgAggregateOutputType | null
    _sum: Detail_transaksiSumAggregateOutputType | null
    _min: Detail_transaksiMinAggregateOutputType | null
    _max: Detail_transaksiMaxAggregateOutputType | null
  }

  export type Detail_transaksiAvgAggregateOutputType = {
    ID_DETAILTRANSAKSI: number | null
    ID_PENJUALAN: number | null
    KODE_BARANG: number | null
    JUMLAH: number | null
    HARGA_SATUAN: number | null
    SUB_TOTAL: number | null
  }

  export type Detail_transaksiSumAggregateOutputType = {
    ID_DETAILTRANSAKSI: number | null
    ID_PENJUALAN: number | null
    KODE_BARANG: number | null
    JUMLAH: number | null
    HARGA_SATUAN: number | null
    SUB_TOTAL: number | null
  }

  export type Detail_transaksiMinAggregateOutputType = {
    ID_DETAILTRANSAKSI: number | null
    ID_PENJUALAN: number | null
    KODE_BARANG: number | null
    JUMLAH: number | null
    HARGA_SATUAN: number | null
    SUB_TOTAL: number | null
  }

  export type Detail_transaksiMaxAggregateOutputType = {
    ID_DETAILTRANSAKSI: number | null
    ID_PENJUALAN: number | null
    KODE_BARANG: number | null
    JUMLAH: number | null
    HARGA_SATUAN: number | null
    SUB_TOTAL: number | null
  }

  export type Detail_transaksiCountAggregateOutputType = {
    ID_DETAILTRANSAKSI: number
    ID_PENJUALAN: number
    KODE_BARANG: number
    JUMLAH: number
    HARGA_SATUAN: number
    SUB_TOTAL: number
    _all: number
  }


  export type Detail_transaksiAvgAggregateInputType = {
    ID_DETAILTRANSAKSI?: true
    ID_PENJUALAN?: true
    KODE_BARANG?: true
    JUMLAH?: true
    HARGA_SATUAN?: true
    SUB_TOTAL?: true
  }

  export type Detail_transaksiSumAggregateInputType = {
    ID_DETAILTRANSAKSI?: true
    ID_PENJUALAN?: true
    KODE_BARANG?: true
    JUMLAH?: true
    HARGA_SATUAN?: true
    SUB_TOTAL?: true
  }

  export type Detail_transaksiMinAggregateInputType = {
    ID_DETAILTRANSAKSI?: true
    ID_PENJUALAN?: true
    KODE_BARANG?: true
    JUMLAH?: true
    HARGA_SATUAN?: true
    SUB_TOTAL?: true
  }

  export type Detail_transaksiMaxAggregateInputType = {
    ID_DETAILTRANSAKSI?: true
    ID_PENJUALAN?: true
    KODE_BARANG?: true
    JUMLAH?: true
    HARGA_SATUAN?: true
    SUB_TOTAL?: true
  }

  export type Detail_transaksiCountAggregateInputType = {
    ID_DETAILTRANSAKSI?: true
    ID_PENJUALAN?: true
    KODE_BARANG?: true
    JUMLAH?: true
    HARGA_SATUAN?: true
    SUB_TOTAL?: true
    _all?: true
  }

  export type Detail_transaksiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detail_transaksi to aggregate.
     */
    where?: detail_transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_transaksis to fetch.
     */
    orderBy?: detail_transaksiOrderByWithRelationInput | detail_transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detail_transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detail_transaksis
    **/
    _count?: true | Detail_transaksiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detail_transaksiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detail_transaksiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detail_transaksiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detail_transaksiMaxAggregateInputType
  }

  export type GetDetail_transaksiAggregateType<T extends Detail_transaksiAggregateArgs> = {
        [P in keyof T & keyof AggregateDetail_transaksi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetail_transaksi[P]>
      : GetScalarType<T[P], AggregateDetail_transaksi[P]>
  }




  export type detail_transaksiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_transaksiWhereInput
    orderBy?: detail_transaksiOrderByWithAggregationInput | detail_transaksiOrderByWithAggregationInput[]
    by: Detail_transaksiScalarFieldEnum[] | Detail_transaksiScalarFieldEnum
    having?: detail_transaksiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detail_transaksiCountAggregateInputType | true
    _avg?: Detail_transaksiAvgAggregateInputType
    _sum?: Detail_transaksiSumAggregateInputType
    _min?: Detail_transaksiMinAggregateInputType
    _max?: Detail_transaksiMaxAggregateInputType
  }

  export type Detail_transaksiGroupByOutputType = {
    ID_DETAILTRANSAKSI: number
    ID_PENJUALAN: number | null
    KODE_BARANG: number | null
    JUMLAH: number | null
    HARGA_SATUAN: number | null
    SUB_TOTAL: number | null
    _count: Detail_transaksiCountAggregateOutputType | null
    _avg: Detail_transaksiAvgAggregateOutputType | null
    _sum: Detail_transaksiSumAggregateOutputType | null
    _min: Detail_transaksiMinAggregateOutputType | null
    _max: Detail_transaksiMaxAggregateOutputType | null
  }

  type GetDetail_transaksiGroupByPayload<T extends detail_transaksiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detail_transaksiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detail_transaksiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detail_transaksiGroupByOutputType[P]>
            : GetScalarType<T[P], Detail_transaksiGroupByOutputType[P]>
        }
      >
    >


  export type detail_transaksiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_DETAILTRANSAKSI?: boolean
    ID_PENJUALAN?: boolean
    KODE_BARANG?: boolean
    JUMLAH?: boolean
    HARGA_SATUAN?: boolean
    SUB_TOTAL?: boolean
    barang?: boolean | detail_transaksi$barangArgs<ExtArgs>
    penjualan?: boolean | detail_transaksi$penjualanArgs<ExtArgs>
  }, ExtArgs["result"]["detail_transaksi"]>



  export type detail_transaksiSelectScalar = {
    ID_DETAILTRANSAKSI?: boolean
    ID_PENJUALAN?: boolean
    KODE_BARANG?: boolean
    JUMLAH?: boolean
    HARGA_SATUAN?: boolean
    SUB_TOTAL?: boolean
  }

  export type detail_transaksiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_DETAILTRANSAKSI" | "ID_PENJUALAN" | "KODE_BARANG" | "JUMLAH" | "HARGA_SATUAN" | "SUB_TOTAL", ExtArgs["result"]["detail_transaksi"]>
  export type detail_transaksiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | detail_transaksi$barangArgs<ExtArgs>
    penjualan?: boolean | detail_transaksi$penjualanArgs<ExtArgs>
  }

  export type $detail_transaksiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detail_transaksi"
    objects: {
      barang: Prisma.$barangPayload<ExtArgs> | null
      penjualan: Prisma.$penjualanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_DETAILTRANSAKSI: number
      ID_PENJUALAN: number | null
      KODE_BARANG: number | null
      JUMLAH: number | null
      HARGA_SATUAN: number | null
      SUB_TOTAL: number | null
    }, ExtArgs["result"]["detail_transaksi"]>
    composites: {}
  }

  type detail_transaksiGetPayload<S extends boolean | null | undefined | detail_transaksiDefaultArgs> = $Result.GetResult<Prisma.$detail_transaksiPayload, S>

  type detail_transaksiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detail_transaksiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detail_transaksiCountAggregateInputType | true
    }

  export interface detail_transaksiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detail_transaksi'], meta: { name: 'detail_transaksi' } }
    /**
     * Find zero or one Detail_transaksi that matches the filter.
     * @param {detail_transaksiFindUniqueArgs} args - Arguments to find a Detail_transaksi
     * @example
     * // Get one Detail_transaksi
     * const detail_transaksi = await prisma.detail_transaksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detail_transaksiFindUniqueArgs>(args: SelectSubset<T, detail_transaksiFindUniqueArgs<ExtArgs>>): Prisma__detail_transaksiClient<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detail_transaksi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detail_transaksiFindUniqueOrThrowArgs} args - Arguments to find a Detail_transaksi
     * @example
     * // Get one Detail_transaksi
     * const detail_transaksi = await prisma.detail_transaksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detail_transaksiFindUniqueOrThrowArgs>(args: SelectSubset<T, detail_transaksiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detail_transaksiClient<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detail_transaksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_transaksiFindFirstArgs} args - Arguments to find a Detail_transaksi
     * @example
     * // Get one Detail_transaksi
     * const detail_transaksi = await prisma.detail_transaksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detail_transaksiFindFirstArgs>(args?: SelectSubset<T, detail_transaksiFindFirstArgs<ExtArgs>>): Prisma__detail_transaksiClient<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detail_transaksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_transaksiFindFirstOrThrowArgs} args - Arguments to find a Detail_transaksi
     * @example
     * // Get one Detail_transaksi
     * const detail_transaksi = await prisma.detail_transaksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detail_transaksiFindFirstOrThrowArgs>(args?: SelectSubset<T, detail_transaksiFindFirstOrThrowArgs<ExtArgs>>): Prisma__detail_transaksiClient<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detail_transaksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_transaksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detail_transaksis
     * const detail_transaksis = await prisma.detail_transaksi.findMany()
     * 
     * // Get first 10 Detail_transaksis
     * const detail_transaksis = await prisma.detail_transaksi.findMany({ take: 10 })
     * 
     * // Only select the `ID_DETAILTRANSAKSI`
     * const detail_transaksiWithID_DETAILTRANSAKSIOnly = await prisma.detail_transaksi.findMany({ select: { ID_DETAILTRANSAKSI: true } })
     * 
     */
    findMany<T extends detail_transaksiFindManyArgs>(args?: SelectSubset<T, detail_transaksiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detail_transaksi.
     * @param {detail_transaksiCreateArgs} args - Arguments to create a Detail_transaksi.
     * @example
     * // Create one Detail_transaksi
     * const Detail_transaksi = await prisma.detail_transaksi.create({
     *   data: {
     *     // ... data to create a Detail_transaksi
     *   }
     * })
     * 
     */
    create<T extends detail_transaksiCreateArgs>(args: SelectSubset<T, detail_transaksiCreateArgs<ExtArgs>>): Prisma__detail_transaksiClient<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detail_transaksis.
     * @param {detail_transaksiCreateManyArgs} args - Arguments to create many Detail_transaksis.
     * @example
     * // Create many Detail_transaksis
     * const detail_transaksi = await prisma.detail_transaksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detail_transaksiCreateManyArgs>(args?: SelectSubset<T, detail_transaksiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Detail_transaksi.
     * @param {detail_transaksiDeleteArgs} args - Arguments to delete one Detail_transaksi.
     * @example
     * // Delete one Detail_transaksi
     * const Detail_transaksi = await prisma.detail_transaksi.delete({
     *   where: {
     *     // ... filter to delete one Detail_transaksi
     *   }
     * })
     * 
     */
    delete<T extends detail_transaksiDeleteArgs>(args: SelectSubset<T, detail_transaksiDeleteArgs<ExtArgs>>): Prisma__detail_transaksiClient<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detail_transaksi.
     * @param {detail_transaksiUpdateArgs} args - Arguments to update one Detail_transaksi.
     * @example
     * // Update one Detail_transaksi
     * const detail_transaksi = await prisma.detail_transaksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detail_transaksiUpdateArgs>(args: SelectSubset<T, detail_transaksiUpdateArgs<ExtArgs>>): Prisma__detail_transaksiClient<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detail_transaksis.
     * @param {detail_transaksiDeleteManyArgs} args - Arguments to filter Detail_transaksis to delete.
     * @example
     * // Delete a few Detail_transaksis
     * const { count } = await prisma.detail_transaksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detail_transaksiDeleteManyArgs>(args?: SelectSubset<T, detail_transaksiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detail_transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_transaksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detail_transaksis
     * const detail_transaksi = await prisma.detail_transaksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detail_transaksiUpdateManyArgs>(args: SelectSubset<T, detail_transaksiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Detail_transaksi.
     * @param {detail_transaksiUpsertArgs} args - Arguments to update or create a Detail_transaksi.
     * @example
     * // Update or create a Detail_transaksi
     * const detail_transaksi = await prisma.detail_transaksi.upsert({
     *   create: {
     *     // ... data to create a Detail_transaksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detail_transaksi we want to update
     *   }
     * })
     */
    upsert<T extends detail_transaksiUpsertArgs>(args: SelectSubset<T, detail_transaksiUpsertArgs<ExtArgs>>): Prisma__detail_transaksiClient<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detail_transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_transaksiCountArgs} args - Arguments to filter Detail_transaksis to count.
     * @example
     * // Count the number of Detail_transaksis
     * const count = await prisma.detail_transaksi.count({
     *   where: {
     *     // ... the filter for the Detail_transaksis we want to count
     *   }
     * })
    **/
    count<T extends detail_transaksiCountArgs>(
      args?: Subset<T, detail_transaksiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detail_transaksiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detail_transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detail_transaksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detail_transaksiAggregateArgs>(args: Subset<T, Detail_transaksiAggregateArgs>): Prisma.PrismaPromise<GetDetail_transaksiAggregateType<T>>

    /**
     * Group by Detail_transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_transaksiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends detail_transaksiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detail_transaksiGroupByArgs['orderBy'] }
        : { orderBy?: detail_transaksiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, detail_transaksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetail_transaksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detail_transaksi model
   */
  readonly fields: detail_transaksiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detail_transaksi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detail_transaksiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barang<T extends detail_transaksi$barangArgs<ExtArgs> = {}>(args?: Subset<T, detail_transaksi$barangArgs<ExtArgs>>): Prisma__barangClient<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    penjualan<T extends detail_transaksi$penjualanArgs<ExtArgs> = {}>(args?: Subset<T, detail_transaksi$penjualanArgs<ExtArgs>>): Prisma__penjualanClient<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the detail_transaksi model
   */
  interface detail_transaksiFieldRefs {
    readonly ID_DETAILTRANSAKSI: FieldRef<"detail_transaksi", 'Int'>
    readonly ID_PENJUALAN: FieldRef<"detail_transaksi", 'Int'>
    readonly KODE_BARANG: FieldRef<"detail_transaksi", 'Int'>
    readonly JUMLAH: FieldRef<"detail_transaksi", 'Int'>
    readonly HARGA_SATUAN: FieldRef<"detail_transaksi", 'Int'>
    readonly SUB_TOTAL: FieldRef<"detail_transaksi", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * detail_transaksi findUnique
   */
  export type detail_transaksiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    /**
     * Filter, which detail_transaksi to fetch.
     */
    where: detail_transaksiWhereUniqueInput
  }

  /**
   * detail_transaksi findUniqueOrThrow
   */
  export type detail_transaksiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    /**
     * Filter, which detail_transaksi to fetch.
     */
    where: detail_transaksiWhereUniqueInput
  }

  /**
   * detail_transaksi findFirst
   */
  export type detail_transaksiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    /**
     * Filter, which detail_transaksi to fetch.
     */
    where?: detail_transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_transaksis to fetch.
     */
    orderBy?: detail_transaksiOrderByWithRelationInput | detail_transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detail_transaksis.
     */
    cursor?: detail_transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detail_transaksis.
     */
    distinct?: Detail_transaksiScalarFieldEnum | Detail_transaksiScalarFieldEnum[]
  }

  /**
   * detail_transaksi findFirstOrThrow
   */
  export type detail_transaksiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    /**
     * Filter, which detail_transaksi to fetch.
     */
    where?: detail_transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_transaksis to fetch.
     */
    orderBy?: detail_transaksiOrderByWithRelationInput | detail_transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detail_transaksis.
     */
    cursor?: detail_transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detail_transaksis.
     */
    distinct?: Detail_transaksiScalarFieldEnum | Detail_transaksiScalarFieldEnum[]
  }

  /**
   * detail_transaksi findMany
   */
  export type detail_transaksiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    /**
     * Filter, which detail_transaksis to fetch.
     */
    where?: detail_transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_transaksis to fetch.
     */
    orderBy?: detail_transaksiOrderByWithRelationInput | detail_transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detail_transaksis.
     */
    cursor?: detail_transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_transaksis.
     */
    skip?: number
    distinct?: Detail_transaksiScalarFieldEnum | Detail_transaksiScalarFieldEnum[]
  }

  /**
   * detail_transaksi create
   */
  export type detail_transaksiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    /**
     * The data needed to create a detail_transaksi.
     */
    data: XOR<detail_transaksiCreateInput, detail_transaksiUncheckedCreateInput>
  }

  /**
   * detail_transaksi createMany
   */
  export type detail_transaksiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detail_transaksis.
     */
    data: detail_transaksiCreateManyInput | detail_transaksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detail_transaksi update
   */
  export type detail_transaksiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    /**
     * The data needed to update a detail_transaksi.
     */
    data: XOR<detail_transaksiUpdateInput, detail_transaksiUncheckedUpdateInput>
    /**
     * Choose, which detail_transaksi to update.
     */
    where: detail_transaksiWhereUniqueInput
  }

  /**
   * detail_transaksi updateMany
   */
  export type detail_transaksiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detail_transaksis.
     */
    data: XOR<detail_transaksiUpdateManyMutationInput, detail_transaksiUncheckedUpdateManyInput>
    /**
     * Filter which detail_transaksis to update
     */
    where?: detail_transaksiWhereInput
    /**
     * Limit how many detail_transaksis to update.
     */
    limit?: number
  }

  /**
   * detail_transaksi upsert
   */
  export type detail_transaksiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    /**
     * The filter to search for the detail_transaksi to update in case it exists.
     */
    where: detail_transaksiWhereUniqueInput
    /**
     * In case the detail_transaksi found by the `where` argument doesn't exist, create a new detail_transaksi with this data.
     */
    create: XOR<detail_transaksiCreateInput, detail_transaksiUncheckedCreateInput>
    /**
     * In case the detail_transaksi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detail_transaksiUpdateInput, detail_transaksiUncheckedUpdateInput>
  }

  /**
   * detail_transaksi delete
   */
  export type detail_transaksiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    /**
     * Filter which detail_transaksi to delete.
     */
    where: detail_transaksiWhereUniqueInput
  }

  /**
   * detail_transaksi deleteMany
   */
  export type detail_transaksiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detail_transaksis to delete
     */
    where?: detail_transaksiWhereInput
    /**
     * Limit how many detail_transaksis to delete.
     */
    limit?: number
  }

  /**
   * detail_transaksi.barang
   */
  export type detail_transaksi$barangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    where?: barangWhereInput
  }

  /**
   * detail_transaksi.penjualan
   */
  export type detail_transaksi$penjualanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    where?: penjualanWhereInput
  }

  /**
   * detail_transaksi without action
   */
  export type detail_transaksiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
  }


  /**
   * Model kategori
   */

  export type AggregateKategori = {
    _count: KategoriCountAggregateOutputType | null
    _avg: KategoriAvgAggregateOutputType | null
    _sum: KategoriSumAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  export type KategoriAvgAggregateOutputType = {
    ID_KATEGORI: number | null
  }

  export type KategoriSumAggregateOutputType = {
    ID_KATEGORI: number | null
  }

  export type KategoriMinAggregateOutputType = {
    ID_KATEGORI: number | null
    NAMA_KATEGORI: string | null
  }

  export type KategoriMaxAggregateOutputType = {
    ID_KATEGORI: number | null
    NAMA_KATEGORI: string | null
  }

  export type KategoriCountAggregateOutputType = {
    ID_KATEGORI: number
    NAMA_KATEGORI: number
    _all: number
  }


  export type KategoriAvgAggregateInputType = {
    ID_KATEGORI?: true
  }

  export type KategoriSumAggregateInputType = {
    ID_KATEGORI?: true
  }

  export type KategoriMinAggregateInputType = {
    ID_KATEGORI?: true
    NAMA_KATEGORI?: true
  }

  export type KategoriMaxAggregateInputType = {
    ID_KATEGORI?: true
    NAMA_KATEGORI?: true
  }

  export type KategoriCountAggregateInputType = {
    ID_KATEGORI?: true
    NAMA_KATEGORI?: true
    _all?: true
  }

  export type KategoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kategori to aggregate.
     */
    where?: kategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kategoris to fetch.
     */
    orderBy?: kategoriOrderByWithRelationInput | kategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kategoris
    **/
    _count?: true | KategoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KategoriAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KategoriSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KategoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KategoriMaxAggregateInputType
  }

  export type GetKategoriAggregateType<T extends KategoriAggregateArgs> = {
        [P in keyof T & keyof AggregateKategori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKategori[P]>
      : GetScalarType<T[P], AggregateKategori[P]>
  }




  export type kategoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kategoriWhereInput
    orderBy?: kategoriOrderByWithAggregationInput | kategoriOrderByWithAggregationInput[]
    by: KategoriScalarFieldEnum[] | KategoriScalarFieldEnum
    having?: kategoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KategoriCountAggregateInputType | true
    _avg?: KategoriAvgAggregateInputType
    _sum?: KategoriSumAggregateInputType
    _min?: KategoriMinAggregateInputType
    _max?: KategoriMaxAggregateInputType
  }

  export type KategoriGroupByOutputType = {
    ID_KATEGORI: number
    NAMA_KATEGORI: string | null
    _count: KategoriCountAggregateOutputType | null
    _avg: KategoriAvgAggregateOutputType | null
    _sum: KategoriSumAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  type GetKategoriGroupByPayload<T extends kategoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KategoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KategoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KategoriGroupByOutputType[P]>
            : GetScalarType<T[P], KategoriGroupByOutputType[P]>
        }
      >
    >


  export type kategoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_KATEGORI?: boolean
    NAMA_KATEGORI?: boolean
    barang?: boolean | kategori$barangArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kategori"]>



  export type kategoriSelectScalar = {
    ID_KATEGORI?: boolean
    NAMA_KATEGORI?: boolean
  }

  export type kategoriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_KATEGORI" | "NAMA_KATEGORI", ExtArgs["result"]["kategori"]>
  export type kategoriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | kategori$barangArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $kategoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kategori"
    objects: {
      barang: Prisma.$barangPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_KATEGORI: number
      NAMA_KATEGORI: string | null
    }, ExtArgs["result"]["kategori"]>
    composites: {}
  }

  type kategoriGetPayload<S extends boolean | null | undefined | kategoriDefaultArgs> = $Result.GetResult<Prisma.$kategoriPayload, S>

  type kategoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<kategoriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KategoriCountAggregateInputType | true
    }

  export interface kategoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kategori'], meta: { name: 'kategori' } }
    /**
     * Find zero or one Kategori that matches the filter.
     * @param {kategoriFindUniqueArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends kategoriFindUniqueArgs>(args: SelectSubset<T, kategoriFindUniqueArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kategori that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {kategoriFindUniqueOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends kategoriFindUniqueOrThrowArgs>(args: SelectSubset<T, kategoriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategoriFindFirstArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends kategoriFindFirstArgs>(args?: SelectSubset<T, kategoriFindFirstArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategoriFindFirstOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends kategoriFindFirstOrThrowArgs>(args?: SelectSubset<T, kategoriFindFirstOrThrowArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategoriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kategoris
     * const kategoris = await prisma.kategori.findMany()
     * 
     * // Get first 10 Kategoris
     * const kategoris = await prisma.kategori.findMany({ take: 10 })
     * 
     * // Only select the `ID_KATEGORI`
     * const kategoriWithID_KATEGORIOnly = await prisma.kategori.findMany({ select: { ID_KATEGORI: true } })
     * 
     */
    findMany<T extends kategoriFindManyArgs>(args?: SelectSubset<T, kategoriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kategori.
     * @param {kategoriCreateArgs} args - Arguments to create a Kategori.
     * @example
     * // Create one Kategori
     * const Kategori = await prisma.kategori.create({
     *   data: {
     *     // ... data to create a Kategori
     *   }
     * })
     * 
     */
    create<T extends kategoriCreateArgs>(args: SelectSubset<T, kategoriCreateArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kategoris.
     * @param {kategoriCreateManyArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends kategoriCreateManyArgs>(args?: SelectSubset<T, kategoriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kategori.
     * @param {kategoriDeleteArgs} args - Arguments to delete one Kategori.
     * @example
     * // Delete one Kategori
     * const Kategori = await prisma.kategori.delete({
     *   where: {
     *     // ... filter to delete one Kategori
     *   }
     * })
     * 
     */
    delete<T extends kategoriDeleteArgs>(args: SelectSubset<T, kategoriDeleteArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kategori.
     * @param {kategoriUpdateArgs} args - Arguments to update one Kategori.
     * @example
     * // Update one Kategori
     * const kategori = await prisma.kategori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends kategoriUpdateArgs>(args: SelectSubset<T, kategoriUpdateArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kategoris.
     * @param {kategoriDeleteManyArgs} args - Arguments to filter Kategoris to delete.
     * @example
     * // Delete a few Kategoris
     * const { count } = await prisma.kategori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends kategoriDeleteManyArgs>(args?: SelectSubset<T, kategoriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends kategoriUpdateManyArgs>(args: SelectSubset<T, kategoriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kategori.
     * @param {kategoriUpsertArgs} args - Arguments to update or create a Kategori.
     * @example
     * // Update or create a Kategori
     * const kategori = await prisma.kategori.upsert({
     *   create: {
     *     // ... data to create a Kategori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kategori we want to update
     *   }
     * })
     */
    upsert<T extends kategoriUpsertArgs>(args: SelectSubset<T, kategoriUpsertArgs<ExtArgs>>): Prisma__kategoriClient<$Result.GetResult<Prisma.$kategoriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategoriCountArgs} args - Arguments to filter Kategoris to count.
     * @example
     * // Count the number of Kategoris
     * const count = await prisma.kategori.count({
     *   where: {
     *     // ... the filter for the Kategoris we want to count
     *   }
     * })
    **/
    count<T extends kategoriCountArgs>(
      args?: Subset<T, kategoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KategoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KategoriAggregateArgs>(args: Subset<T, KategoriAggregateArgs>): Prisma.PrismaPromise<GetKategoriAggregateType<T>>

    /**
     * Group by Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kategoriGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends kategoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kategoriGroupByArgs['orderBy'] }
        : { orderBy?: kategoriGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, kategoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKategoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kategori model
   */
  readonly fields: kategoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kategori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kategoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barang<T extends kategori$barangArgs<ExtArgs> = {}>(args?: Subset<T, kategori$barangArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the kategori model
   */
  interface kategoriFieldRefs {
    readonly ID_KATEGORI: FieldRef<"kategori", 'Int'>
    readonly NAMA_KATEGORI: FieldRef<"kategori", 'String'>
  }
    

  // Custom InputTypes
  /**
   * kategori findUnique
   */
  export type kategoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
    /**
     * Filter, which kategori to fetch.
     */
    where: kategoriWhereUniqueInput
  }

  /**
   * kategori findUniqueOrThrow
   */
  export type kategoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
    /**
     * Filter, which kategori to fetch.
     */
    where: kategoriWhereUniqueInput
  }

  /**
   * kategori findFirst
   */
  export type kategoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
    /**
     * Filter, which kategori to fetch.
     */
    where?: kategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kategoris to fetch.
     */
    orderBy?: kategoriOrderByWithRelationInput | kategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kategoris.
     */
    cursor?: kategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * kategori findFirstOrThrow
   */
  export type kategoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
    /**
     * Filter, which kategori to fetch.
     */
    where?: kategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kategoris to fetch.
     */
    orderBy?: kategoriOrderByWithRelationInput | kategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kategoris.
     */
    cursor?: kategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * kategori findMany
   */
  export type kategoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
    /**
     * Filter, which kategoris to fetch.
     */
    where?: kategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kategoris to fetch.
     */
    orderBy?: kategoriOrderByWithRelationInput | kategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kategoris.
     */
    cursor?: kategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kategoris.
     */
    skip?: number
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * kategori create
   */
  export type kategoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
    /**
     * The data needed to create a kategori.
     */
    data: XOR<kategoriCreateInput, kategoriUncheckedCreateInput>
  }

  /**
   * kategori createMany
   */
  export type kategoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kategoris.
     */
    data: kategoriCreateManyInput | kategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kategori update
   */
  export type kategoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
    /**
     * The data needed to update a kategori.
     */
    data: XOR<kategoriUpdateInput, kategoriUncheckedUpdateInput>
    /**
     * Choose, which kategori to update.
     */
    where: kategoriWhereUniqueInput
  }

  /**
   * kategori updateMany
   */
  export type kategoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kategoris.
     */
    data: XOR<kategoriUpdateManyMutationInput, kategoriUncheckedUpdateManyInput>
    /**
     * Filter which kategoris to update
     */
    where?: kategoriWhereInput
    /**
     * Limit how many kategoris to update.
     */
    limit?: number
  }

  /**
   * kategori upsert
   */
  export type kategoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
    /**
     * The filter to search for the kategori to update in case it exists.
     */
    where: kategoriWhereUniqueInput
    /**
     * In case the kategori found by the `where` argument doesn't exist, create a new kategori with this data.
     */
    create: XOR<kategoriCreateInput, kategoriUncheckedCreateInput>
    /**
     * In case the kategori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kategoriUpdateInput, kategoriUncheckedUpdateInput>
  }

  /**
   * kategori delete
   */
  export type kategoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
    /**
     * Filter which kategori to delete.
     */
    where: kategoriWhereUniqueInput
  }

  /**
   * kategori deleteMany
   */
  export type kategoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kategoris to delete
     */
    where?: kategoriWhereInput
    /**
     * Limit how many kategoris to delete.
     */
    limit?: number
  }

  /**
   * kategori.barang
   */
  export type kategori$barangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang
     */
    select?: barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang
     */
    omit?: barangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barangInclude<ExtArgs> | null
    where?: barangWhereInput
    orderBy?: barangOrderByWithRelationInput | barangOrderByWithRelationInput[]
    cursor?: barangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * kategori without action
   */
  export type kategoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kategori
     */
    select?: kategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kategori
     */
    omit?: kategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kategoriInclude<ExtArgs> | null
  }


  /**
   * Model pelanggan
   */

  export type AggregatePelanggan = {
    _count: PelangganCountAggregateOutputType | null
    _avg: PelangganAvgAggregateOutputType | null
    _sum: PelangganSumAggregateOutputType | null
    _min: PelangganMinAggregateOutputType | null
    _max: PelangganMaxAggregateOutputType | null
  }

  export type PelangganAvgAggregateOutputType = {
    ID_PELANGGAN: number | null
  }

  export type PelangganSumAggregateOutputType = {
    ID_PELANGGAN: number | null
  }

  export type PelangganMinAggregateOutputType = {
    ID_PELANGGAN: number | null
    NAMA_PELANGGAN: string | null
    USERNAME_PELANGGAN: string | null
    PASSWORD_PELANGGAN: string | null
    ALAMAT_PELANGGAN: string | null
  }

  export type PelangganMaxAggregateOutputType = {
    ID_PELANGGAN: number | null
    NAMA_PELANGGAN: string | null
    USERNAME_PELANGGAN: string | null
    PASSWORD_PELANGGAN: string | null
    ALAMAT_PELANGGAN: string | null
  }

  export type PelangganCountAggregateOutputType = {
    ID_PELANGGAN: number
    NAMA_PELANGGAN: number
    USERNAME_PELANGGAN: number
    PASSWORD_PELANGGAN: number
    ALAMAT_PELANGGAN: number
    _all: number
  }


  export type PelangganAvgAggregateInputType = {
    ID_PELANGGAN?: true
  }

  export type PelangganSumAggregateInputType = {
    ID_PELANGGAN?: true
  }

  export type PelangganMinAggregateInputType = {
    ID_PELANGGAN?: true
    NAMA_PELANGGAN?: true
    USERNAME_PELANGGAN?: true
    PASSWORD_PELANGGAN?: true
    ALAMAT_PELANGGAN?: true
  }

  export type PelangganMaxAggregateInputType = {
    ID_PELANGGAN?: true
    NAMA_PELANGGAN?: true
    USERNAME_PELANGGAN?: true
    PASSWORD_PELANGGAN?: true
    ALAMAT_PELANGGAN?: true
  }

  export type PelangganCountAggregateInputType = {
    ID_PELANGGAN?: true
    NAMA_PELANGGAN?: true
    USERNAME_PELANGGAN?: true
    PASSWORD_PELANGGAN?: true
    ALAMAT_PELANGGAN?: true
    _all?: true
  }

  export type PelangganAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pelanggan to aggregate.
     */
    where?: pelangganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pelanggans to fetch.
     */
    orderBy?: pelangganOrderByWithRelationInput | pelangganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pelangganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pelanggans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pelanggans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pelanggans
    **/
    _count?: true | PelangganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PelangganAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PelangganSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PelangganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PelangganMaxAggregateInputType
  }

  export type GetPelangganAggregateType<T extends PelangganAggregateArgs> = {
        [P in keyof T & keyof AggregatePelanggan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePelanggan[P]>
      : GetScalarType<T[P], AggregatePelanggan[P]>
  }




  export type pelangganGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pelangganWhereInput
    orderBy?: pelangganOrderByWithAggregationInput | pelangganOrderByWithAggregationInput[]
    by: PelangganScalarFieldEnum[] | PelangganScalarFieldEnum
    having?: pelangganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PelangganCountAggregateInputType | true
    _avg?: PelangganAvgAggregateInputType
    _sum?: PelangganSumAggregateInputType
    _min?: PelangganMinAggregateInputType
    _max?: PelangganMaxAggregateInputType
  }

  export type PelangganGroupByOutputType = {
    ID_PELANGGAN: number
    NAMA_PELANGGAN: string | null
    USERNAME_PELANGGAN: string | null
    PASSWORD_PELANGGAN: string | null
    ALAMAT_PELANGGAN: string | null
    _count: PelangganCountAggregateOutputType | null
    _avg: PelangganAvgAggregateOutputType | null
    _sum: PelangganSumAggregateOutputType | null
    _min: PelangganMinAggregateOutputType | null
    _max: PelangganMaxAggregateOutputType | null
  }

  type GetPelangganGroupByPayload<T extends pelangganGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PelangganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PelangganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PelangganGroupByOutputType[P]>
            : GetScalarType<T[P], PelangganGroupByOutputType[P]>
        }
      >
    >


  export type pelangganSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_PELANGGAN?: boolean
    NAMA_PELANGGAN?: boolean
    USERNAME_PELANGGAN?: boolean
    PASSWORD_PELANGGAN?: boolean
    ALAMAT_PELANGGAN?: boolean
    penjualan?: boolean | pelanggan$penjualanArgs<ExtArgs>
    _count?: boolean | PelangganCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pelanggan"]>



  export type pelangganSelectScalar = {
    ID_PELANGGAN?: boolean
    NAMA_PELANGGAN?: boolean
    USERNAME_PELANGGAN?: boolean
    PASSWORD_PELANGGAN?: boolean
    ALAMAT_PELANGGAN?: boolean
  }

  export type pelangganOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_PELANGGAN" | "NAMA_PELANGGAN" | "USERNAME_PELANGGAN" | "PASSWORD_PELANGGAN" | "ALAMAT_PELANGGAN", ExtArgs["result"]["pelanggan"]>
  export type pelangganInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualan?: boolean | pelanggan$penjualanArgs<ExtArgs>
    _count?: boolean | PelangganCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $pelangganPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pelanggan"
    objects: {
      penjualan: Prisma.$penjualanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_PELANGGAN: number
      NAMA_PELANGGAN: string | null
      USERNAME_PELANGGAN: string | null
      PASSWORD_PELANGGAN: string | null
      ALAMAT_PELANGGAN: string | null
    }, ExtArgs["result"]["pelanggan"]>
    composites: {}
  }

  type pelangganGetPayload<S extends boolean | null | undefined | pelangganDefaultArgs> = $Result.GetResult<Prisma.$pelangganPayload, S>

  type pelangganCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pelangganFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PelangganCountAggregateInputType | true
    }

  export interface pelangganDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pelanggan'], meta: { name: 'pelanggan' } }
    /**
     * Find zero or one Pelanggan that matches the filter.
     * @param {pelangganFindUniqueArgs} args - Arguments to find a Pelanggan
     * @example
     * // Get one Pelanggan
     * const pelanggan = await prisma.pelanggan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pelangganFindUniqueArgs>(args: SelectSubset<T, pelangganFindUniqueArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pelanggan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pelangganFindUniqueOrThrowArgs} args - Arguments to find a Pelanggan
     * @example
     * // Get one Pelanggan
     * const pelanggan = await prisma.pelanggan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pelangganFindUniqueOrThrowArgs>(args: SelectSubset<T, pelangganFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pelanggan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pelangganFindFirstArgs} args - Arguments to find a Pelanggan
     * @example
     * // Get one Pelanggan
     * const pelanggan = await prisma.pelanggan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pelangganFindFirstArgs>(args?: SelectSubset<T, pelangganFindFirstArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pelanggan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pelangganFindFirstOrThrowArgs} args - Arguments to find a Pelanggan
     * @example
     * // Get one Pelanggan
     * const pelanggan = await prisma.pelanggan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pelangganFindFirstOrThrowArgs>(args?: SelectSubset<T, pelangganFindFirstOrThrowArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pelanggans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pelangganFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pelanggans
     * const pelanggans = await prisma.pelanggan.findMany()
     * 
     * // Get first 10 Pelanggans
     * const pelanggans = await prisma.pelanggan.findMany({ take: 10 })
     * 
     * // Only select the `ID_PELANGGAN`
     * const pelangganWithID_PELANGGANOnly = await prisma.pelanggan.findMany({ select: { ID_PELANGGAN: true } })
     * 
     */
    findMany<T extends pelangganFindManyArgs>(args?: SelectSubset<T, pelangganFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pelanggan.
     * @param {pelangganCreateArgs} args - Arguments to create a Pelanggan.
     * @example
     * // Create one Pelanggan
     * const Pelanggan = await prisma.pelanggan.create({
     *   data: {
     *     // ... data to create a Pelanggan
     *   }
     * })
     * 
     */
    create<T extends pelangganCreateArgs>(args: SelectSubset<T, pelangganCreateArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pelanggans.
     * @param {pelangganCreateManyArgs} args - Arguments to create many Pelanggans.
     * @example
     * // Create many Pelanggans
     * const pelanggan = await prisma.pelanggan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pelangganCreateManyArgs>(args?: SelectSubset<T, pelangganCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pelanggan.
     * @param {pelangganDeleteArgs} args - Arguments to delete one Pelanggan.
     * @example
     * // Delete one Pelanggan
     * const Pelanggan = await prisma.pelanggan.delete({
     *   where: {
     *     // ... filter to delete one Pelanggan
     *   }
     * })
     * 
     */
    delete<T extends pelangganDeleteArgs>(args: SelectSubset<T, pelangganDeleteArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pelanggan.
     * @param {pelangganUpdateArgs} args - Arguments to update one Pelanggan.
     * @example
     * // Update one Pelanggan
     * const pelanggan = await prisma.pelanggan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pelangganUpdateArgs>(args: SelectSubset<T, pelangganUpdateArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pelanggans.
     * @param {pelangganDeleteManyArgs} args - Arguments to filter Pelanggans to delete.
     * @example
     * // Delete a few Pelanggans
     * const { count } = await prisma.pelanggan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pelangganDeleteManyArgs>(args?: SelectSubset<T, pelangganDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pelanggans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pelangganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pelanggans
     * const pelanggan = await prisma.pelanggan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pelangganUpdateManyArgs>(args: SelectSubset<T, pelangganUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pelanggan.
     * @param {pelangganUpsertArgs} args - Arguments to update or create a Pelanggan.
     * @example
     * // Update or create a Pelanggan
     * const pelanggan = await prisma.pelanggan.upsert({
     *   create: {
     *     // ... data to create a Pelanggan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pelanggan we want to update
     *   }
     * })
     */
    upsert<T extends pelangganUpsertArgs>(args: SelectSubset<T, pelangganUpsertArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pelanggans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pelangganCountArgs} args - Arguments to filter Pelanggans to count.
     * @example
     * // Count the number of Pelanggans
     * const count = await prisma.pelanggan.count({
     *   where: {
     *     // ... the filter for the Pelanggans we want to count
     *   }
     * })
    **/
    count<T extends pelangganCountArgs>(
      args?: Subset<T, pelangganCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PelangganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pelanggan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PelangganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PelangganAggregateArgs>(args: Subset<T, PelangganAggregateArgs>): Prisma.PrismaPromise<GetPelangganAggregateType<T>>

    /**
     * Group by Pelanggan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pelangganGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pelangganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pelangganGroupByArgs['orderBy'] }
        : { orderBy?: pelangganGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pelangganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPelangganGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pelanggan model
   */
  readonly fields: pelangganFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pelanggan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pelangganClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    penjualan<T extends pelanggan$penjualanArgs<ExtArgs> = {}>(args?: Subset<T, pelanggan$penjualanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pelanggan model
   */
  interface pelangganFieldRefs {
    readonly ID_PELANGGAN: FieldRef<"pelanggan", 'Int'>
    readonly NAMA_PELANGGAN: FieldRef<"pelanggan", 'String'>
    readonly USERNAME_PELANGGAN: FieldRef<"pelanggan", 'String'>
    readonly PASSWORD_PELANGGAN: FieldRef<"pelanggan", 'String'>
    readonly ALAMAT_PELANGGAN: FieldRef<"pelanggan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pelanggan findUnique
   */
  export type pelangganFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
    /**
     * Filter, which pelanggan to fetch.
     */
    where: pelangganWhereUniqueInput
  }

  /**
   * pelanggan findUniqueOrThrow
   */
  export type pelangganFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
    /**
     * Filter, which pelanggan to fetch.
     */
    where: pelangganWhereUniqueInput
  }

  /**
   * pelanggan findFirst
   */
  export type pelangganFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
    /**
     * Filter, which pelanggan to fetch.
     */
    where?: pelangganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pelanggans to fetch.
     */
    orderBy?: pelangganOrderByWithRelationInput | pelangganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pelanggans.
     */
    cursor?: pelangganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pelanggans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pelanggans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pelanggans.
     */
    distinct?: PelangganScalarFieldEnum | PelangganScalarFieldEnum[]
  }

  /**
   * pelanggan findFirstOrThrow
   */
  export type pelangganFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
    /**
     * Filter, which pelanggan to fetch.
     */
    where?: pelangganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pelanggans to fetch.
     */
    orderBy?: pelangganOrderByWithRelationInput | pelangganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pelanggans.
     */
    cursor?: pelangganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pelanggans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pelanggans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pelanggans.
     */
    distinct?: PelangganScalarFieldEnum | PelangganScalarFieldEnum[]
  }

  /**
   * pelanggan findMany
   */
  export type pelangganFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
    /**
     * Filter, which pelanggans to fetch.
     */
    where?: pelangganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pelanggans to fetch.
     */
    orderBy?: pelangganOrderByWithRelationInput | pelangganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pelanggans.
     */
    cursor?: pelangganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pelanggans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pelanggans.
     */
    skip?: number
    distinct?: PelangganScalarFieldEnum | PelangganScalarFieldEnum[]
  }

  /**
   * pelanggan create
   */
  export type pelangganCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
    /**
     * The data needed to create a pelanggan.
     */
    data: XOR<pelangganCreateInput, pelangganUncheckedCreateInput>
  }

  /**
   * pelanggan createMany
   */
  export type pelangganCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pelanggans.
     */
    data: pelangganCreateManyInput | pelangganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pelanggan update
   */
  export type pelangganUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
    /**
     * The data needed to update a pelanggan.
     */
    data: XOR<pelangganUpdateInput, pelangganUncheckedUpdateInput>
    /**
     * Choose, which pelanggan to update.
     */
    where: pelangganWhereUniqueInput
  }

  /**
   * pelanggan updateMany
   */
  export type pelangganUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pelanggans.
     */
    data: XOR<pelangganUpdateManyMutationInput, pelangganUncheckedUpdateManyInput>
    /**
     * Filter which pelanggans to update
     */
    where?: pelangganWhereInput
    /**
     * Limit how many pelanggans to update.
     */
    limit?: number
  }

  /**
   * pelanggan upsert
   */
  export type pelangganUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
    /**
     * The filter to search for the pelanggan to update in case it exists.
     */
    where: pelangganWhereUniqueInput
    /**
     * In case the pelanggan found by the `where` argument doesn't exist, create a new pelanggan with this data.
     */
    create: XOR<pelangganCreateInput, pelangganUncheckedCreateInput>
    /**
     * In case the pelanggan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pelangganUpdateInput, pelangganUncheckedUpdateInput>
  }

  /**
   * pelanggan delete
   */
  export type pelangganDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
    /**
     * Filter which pelanggan to delete.
     */
    where: pelangganWhereUniqueInput
  }

  /**
   * pelanggan deleteMany
   */
  export type pelangganDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pelanggans to delete
     */
    where?: pelangganWhereInput
    /**
     * Limit how many pelanggans to delete.
     */
    limit?: number
  }

  /**
   * pelanggan.penjualan
   */
  export type pelanggan$penjualanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    where?: penjualanWhereInput
    orderBy?: penjualanOrderByWithRelationInput | penjualanOrderByWithRelationInput[]
    cursor?: penjualanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenjualanScalarFieldEnum | PenjualanScalarFieldEnum[]
  }

  /**
   * pelanggan without action
   */
  export type pelangganDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
  }


  /**
   * Model pembayaran
   */

  export type AggregatePembayaran = {
    _count: PembayaranCountAggregateOutputType | null
    _avg: PembayaranAvgAggregateOutputType | null
    _sum: PembayaranSumAggregateOutputType | null
    _min: PembayaranMinAggregateOutputType | null
    _max: PembayaranMaxAggregateOutputType | null
  }

  export type PembayaranAvgAggregateOutputType = {
    ID_PEMBAYARAN: number | null
  }

  export type PembayaranSumAggregateOutputType = {
    ID_PEMBAYARAN: number | null
  }

  export type PembayaranMinAggregateOutputType = {
    ID_PEMBAYARAN: number | null
    NAMA_PEMBAYARAN: $Enums.pembayaran_NAMA_PEMBAYARAN | null
  }

  export type PembayaranMaxAggregateOutputType = {
    ID_PEMBAYARAN: number | null
    NAMA_PEMBAYARAN: $Enums.pembayaran_NAMA_PEMBAYARAN | null
  }

  export type PembayaranCountAggregateOutputType = {
    ID_PEMBAYARAN: number
    NAMA_PEMBAYARAN: number
    _all: number
  }


  export type PembayaranAvgAggregateInputType = {
    ID_PEMBAYARAN?: true
  }

  export type PembayaranSumAggregateInputType = {
    ID_PEMBAYARAN?: true
  }

  export type PembayaranMinAggregateInputType = {
    ID_PEMBAYARAN?: true
    NAMA_PEMBAYARAN?: true
  }

  export type PembayaranMaxAggregateInputType = {
    ID_PEMBAYARAN?: true
    NAMA_PEMBAYARAN?: true
  }

  export type PembayaranCountAggregateInputType = {
    ID_PEMBAYARAN?: true
    NAMA_PEMBAYARAN?: true
    _all?: true
  }

  export type PembayaranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pembayaran to aggregate.
     */
    where?: pembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pembayarans to fetch.
     */
    orderBy?: pembayaranOrderByWithRelationInput | pembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pembayarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pembayarans
    **/
    _count?: true | PembayaranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PembayaranAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PembayaranSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PembayaranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PembayaranMaxAggregateInputType
  }

  export type GetPembayaranAggregateType<T extends PembayaranAggregateArgs> = {
        [P in keyof T & keyof AggregatePembayaran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePembayaran[P]>
      : GetScalarType<T[P], AggregatePembayaran[P]>
  }




  export type pembayaranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pembayaranWhereInput
    orderBy?: pembayaranOrderByWithAggregationInput | pembayaranOrderByWithAggregationInput[]
    by: PembayaranScalarFieldEnum[] | PembayaranScalarFieldEnum
    having?: pembayaranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PembayaranCountAggregateInputType | true
    _avg?: PembayaranAvgAggregateInputType
    _sum?: PembayaranSumAggregateInputType
    _min?: PembayaranMinAggregateInputType
    _max?: PembayaranMaxAggregateInputType
  }

  export type PembayaranGroupByOutputType = {
    ID_PEMBAYARAN: number
    NAMA_PEMBAYARAN: $Enums.pembayaran_NAMA_PEMBAYARAN | null
    _count: PembayaranCountAggregateOutputType | null
    _avg: PembayaranAvgAggregateOutputType | null
    _sum: PembayaranSumAggregateOutputType | null
    _min: PembayaranMinAggregateOutputType | null
    _max: PembayaranMaxAggregateOutputType | null
  }

  type GetPembayaranGroupByPayload<T extends pembayaranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PembayaranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PembayaranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PembayaranGroupByOutputType[P]>
            : GetScalarType<T[P], PembayaranGroupByOutputType[P]>
        }
      >
    >


  export type pembayaranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_PEMBAYARAN?: boolean
    NAMA_PEMBAYARAN?: boolean
    penjualan?: boolean | pembayaran$penjualanArgs<ExtArgs>
    _count?: boolean | PembayaranCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembayaran"]>



  export type pembayaranSelectScalar = {
    ID_PEMBAYARAN?: boolean
    NAMA_PEMBAYARAN?: boolean
  }

  export type pembayaranOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_PEMBAYARAN" | "NAMA_PEMBAYARAN", ExtArgs["result"]["pembayaran"]>
  export type pembayaranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualan?: boolean | pembayaran$penjualanArgs<ExtArgs>
    _count?: boolean | PembayaranCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $pembayaranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pembayaran"
    objects: {
      penjualan: Prisma.$penjualanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_PEMBAYARAN: number
      NAMA_PEMBAYARAN: $Enums.pembayaran_NAMA_PEMBAYARAN | null
    }, ExtArgs["result"]["pembayaran"]>
    composites: {}
  }

  type pembayaranGetPayload<S extends boolean | null | undefined | pembayaranDefaultArgs> = $Result.GetResult<Prisma.$pembayaranPayload, S>

  type pembayaranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pembayaranFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PembayaranCountAggregateInputType | true
    }

  export interface pembayaranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pembayaran'], meta: { name: 'pembayaran' } }
    /**
     * Find zero or one Pembayaran that matches the filter.
     * @param {pembayaranFindUniqueArgs} args - Arguments to find a Pembayaran
     * @example
     * // Get one Pembayaran
     * const pembayaran = await prisma.pembayaran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pembayaranFindUniqueArgs>(args: SelectSubset<T, pembayaranFindUniqueArgs<ExtArgs>>): Prisma__pembayaranClient<$Result.GetResult<Prisma.$pembayaranPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pembayaran that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pembayaranFindUniqueOrThrowArgs} args - Arguments to find a Pembayaran
     * @example
     * // Get one Pembayaran
     * const pembayaran = await prisma.pembayaran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pembayaranFindUniqueOrThrowArgs>(args: SelectSubset<T, pembayaranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pembayaranClient<$Result.GetResult<Prisma.$pembayaranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pembayaran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pembayaranFindFirstArgs} args - Arguments to find a Pembayaran
     * @example
     * // Get one Pembayaran
     * const pembayaran = await prisma.pembayaran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pembayaranFindFirstArgs>(args?: SelectSubset<T, pembayaranFindFirstArgs<ExtArgs>>): Prisma__pembayaranClient<$Result.GetResult<Prisma.$pembayaranPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pembayaran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pembayaranFindFirstOrThrowArgs} args - Arguments to find a Pembayaran
     * @example
     * // Get one Pembayaran
     * const pembayaran = await prisma.pembayaran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pembayaranFindFirstOrThrowArgs>(args?: SelectSubset<T, pembayaranFindFirstOrThrowArgs<ExtArgs>>): Prisma__pembayaranClient<$Result.GetResult<Prisma.$pembayaranPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pembayarans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pembayaranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pembayarans
     * const pembayarans = await prisma.pembayaran.findMany()
     * 
     * // Get first 10 Pembayarans
     * const pembayarans = await prisma.pembayaran.findMany({ take: 10 })
     * 
     * // Only select the `ID_PEMBAYARAN`
     * const pembayaranWithID_PEMBAYARANOnly = await prisma.pembayaran.findMany({ select: { ID_PEMBAYARAN: true } })
     * 
     */
    findMany<T extends pembayaranFindManyArgs>(args?: SelectSubset<T, pembayaranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pembayaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pembayaran.
     * @param {pembayaranCreateArgs} args - Arguments to create a Pembayaran.
     * @example
     * // Create one Pembayaran
     * const Pembayaran = await prisma.pembayaran.create({
     *   data: {
     *     // ... data to create a Pembayaran
     *   }
     * })
     * 
     */
    create<T extends pembayaranCreateArgs>(args: SelectSubset<T, pembayaranCreateArgs<ExtArgs>>): Prisma__pembayaranClient<$Result.GetResult<Prisma.$pembayaranPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pembayarans.
     * @param {pembayaranCreateManyArgs} args - Arguments to create many Pembayarans.
     * @example
     * // Create many Pembayarans
     * const pembayaran = await prisma.pembayaran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pembayaranCreateManyArgs>(args?: SelectSubset<T, pembayaranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pembayaran.
     * @param {pembayaranDeleteArgs} args - Arguments to delete one Pembayaran.
     * @example
     * // Delete one Pembayaran
     * const Pembayaran = await prisma.pembayaran.delete({
     *   where: {
     *     // ... filter to delete one Pembayaran
     *   }
     * })
     * 
     */
    delete<T extends pembayaranDeleteArgs>(args: SelectSubset<T, pembayaranDeleteArgs<ExtArgs>>): Prisma__pembayaranClient<$Result.GetResult<Prisma.$pembayaranPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pembayaran.
     * @param {pembayaranUpdateArgs} args - Arguments to update one Pembayaran.
     * @example
     * // Update one Pembayaran
     * const pembayaran = await prisma.pembayaran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pembayaranUpdateArgs>(args: SelectSubset<T, pembayaranUpdateArgs<ExtArgs>>): Prisma__pembayaranClient<$Result.GetResult<Prisma.$pembayaranPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pembayarans.
     * @param {pembayaranDeleteManyArgs} args - Arguments to filter Pembayarans to delete.
     * @example
     * // Delete a few Pembayarans
     * const { count } = await prisma.pembayaran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pembayaranDeleteManyArgs>(args?: SelectSubset<T, pembayaranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pembayarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pembayaranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pembayarans
     * const pembayaran = await prisma.pembayaran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pembayaranUpdateManyArgs>(args: SelectSubset<T, pembayaranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pembayaran.
     * @param {pembayaranUpsertArgs} args - Arguments to update or create a Pembayaran.
     * @example
     * // Update or create a Pembayaran
     * const pembayaran = await prisma.pembayaran.upsert({
     *   create: {
     *     // ... data to create a Pembayaran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pembayaran we want to update
     *   }
     * })
     */
    upsert<T extends pembayaranUpsertArgs>(args: SelectSubset<T, pembayaranUpsertArgs<ExtArgs>>): Prisma__pembayaranClient<$Result.GetResult<Prisma.$pembayaranPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pembayarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pembayaranCountArgs} args - Arguments to filter Pembayarans to count.
     * @example
     * // Count the number of Pembayarans
     * const count = await prisma.pembayaran.count({
     *   where: {
     *     // ... the filter for the Pembayarans we want to count
     *   }
     * })
    **/
    count<T extends pembayaranCountArgs>(
      args?: Subset<T, pembayaranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PembayaranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pembayaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PembayaranAggregateArgs>(args: Subset<T, PembayaranAggregateArgs>): Prisma.PrismaPromise<GetPembayaranAggregateType<T>>

    /**
     * Group by Pembayaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pembayaranGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pembayaranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pembayaranGroupByArgs['orderBy'] }
        : { orderBy?: pembayaranGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pembayaranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPembayaranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pembayaran model
   */
  readonly fields: pembayaranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pembayaran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pembayaranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    penjualan<T extends pembayaran$penjualanArgs<ExtArgs> = {}>(args?: Subset<T, pembayaran$penjualanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pembayaran model
   */
  interface pembayaranFieldRefs {
    readonly ID_PEMBAYARAN: FieldRef<"pembayaran", 'Int'>
    readonly NAMA_PEMBAYARAN: FieldRef<"pembayaran", 'pembayaran_NAMA_PEMBAYARAN'>
  }
    

  // Custom InputTypes
  /**
   * pembayaran findUnique
   */
  export type pembayaranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembayaran
     */
    select?: pembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembayaran
     */
    omit?: pembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembayaranInclude<ExtArgs> | null
    /**
     * Filter, which pembayaran to fetch.
     */
    where: pembayaranWhereUniqueInput
  }

  /**
   * pembayaran findUniqueOrThrow
   */
  export type pembayaranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembayaran
     */
    select?: pembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembayaran
     */
    omit?: pembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembayaranInclude<ExtArgs> | null
    /**
     * Filter, which pembayaran to fetch.
     */
    where: pembayaranWhereUniqueInput
  }

  /**
   * pembayaran findFirst
   */
  export type pembayaranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembayaran
     */
    select?: pembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembayaran
     */
    omit?: pembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembayaranInclude<ExtArgs> | null
    /**
     * Filter, which pembayaran to fetch.
     */
    where?: pembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pembayarans to fetch.
     */
    orderBy?: pembayaranOrderByWithRelationInput | pembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pembayarans.
     */
    cursor?: pembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pembayarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pembayarans.
     */
    distinct?: PembayaranScalarFieldEnum | PembayaranScalarFieldEnum[]
  }

  /**
   * pembayaran findFirstOrThrow
   */
  export type pembayaranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembayaran
     */
    select?: pembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembayaran
     */
    omit?: pembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembayaranInclude<ExtArgs> | null
    /**
     * Filter, which pembayaran to fetch.
     */
    where?: pembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pembayarans to fetch.
     */
    orderBy?: pembayaranOrderByWithRelationInput | pembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pembayarans.
     */
    cursor?: pembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pembayarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pembayarans.
     */
    distinct?: PembayaranScalarFieldEnum | PembayaranScalarFieldEnum[]
  }

  /**
   * pembayaran findMany
   */
  export type pembayaranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembayaran
     */
    select?: pembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembayaran
     */
    omit?: pembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembayaranInclude<ExtArgs> | null
    /**
     * Filter, which pembayarans to fetch.
     */
    where?: pembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pembayarans to fetch.
     */
    orderBy?: pembayaranOrderByWithRelationInput | pembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pembayarans.
     */
    cursor?: pembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pembayarans.
     */
    skip?: number
    distinct?: PembayaranScalarFieldEnum | PembayaranScalarFieldEnum[]
  }

  /**
   * pembayaran create
   */
  export type pembayaranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembayaran
     */
    select?: pembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembayaran
     */
    omit?: pembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembayaranInclude<ExtArgs> | null
    /**
     * The data needed to create a pembayaran.
     */
    data: XOR<pembayaranCreateInput, pembayaranUncheckedCreateInput>
  }

  /**
   * pembayaran createMany
   */
  export type pembayaranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pembayarans.
     */
    data: pembayaranCreateManyInput | pembayaranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pembayaran update
   */
  export type pembayaranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembayaran
     */
    select?: pembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembayaran
     */
    omit?: pembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembayaranInclude<ExtArgs> | null
    /**
     * The data needed to update a pembayaran.
     */
    data: XOR<pembayaranUpdateInput, pembayaranUncheckedUpdateInput>
    /**
     * Choose, which pembayaran to update.
     */
    where: pembayaranWhereUniqueInput
  }

  /**
   * pembayaran updateMany
   */
  export type pembayaranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pembayarans.
     */
    data: XOR<pembayaranUpdateManyMutationInput, pembayaranUncheckedUpdateManyInput>
    /**
     * Filter which pembayarans to update
     */
    where?: pembayaranWhereInput
    /**
     * Limit how many pembayarans to update.
     */
    limit?: number
  }

  /**
   * pembayaran upsert
   */
  export type pembayaranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembayaran
     */
    select?: pembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembayaran
     */
    omit?: pembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembayaranInclude<ExtArgs> | null
    /**
     * The filter to search for the pembayaran to update in case it exists.
     */
    where: pembayaranWhereUniqueInput
    /**
     * In case the pembayaran found by the `where` argument doesn't exist, create a new pembayaran with this data.
     */
    create: XOR<pembayaranCreateInput, pembayaranUncheckedCreateInput>
    /**
     * In case the pembayaran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pembayaranUpdateInput, pembayaranUncheckedUpdateInput>
  }

  /**
   * pembayaran delete
   */
  export type pembayaranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembayaran
     */
    select?: pembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembayaran
     */
    omit?: pembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembayaranInclude<ExtArgs> | null
    /**
     * Filter which pembayaran to delete.
     */
    where: pembayaranWhereUniqueInput
  }

  /**
   * pembayaran deleteMany
   */
  export type pembayaranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pembayarans to delete
     */
    where?: pembayaranWhereInput
    /**
     * Limit how many pembayarans to delete.
     */
    limit?: number
  }

  /**
   * pembayaran.penjualan
   */
  export type pembayaran$penjualanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    where?: penjualanWhereInput
    orderBy?: penjualanOrderByWithRelationInput | penjualanOrderByWithRelationInput[]
    cursor?: penjualanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenjualanScalarFieldEnum | PenjualanScalarFieldEnum[]
  }

  /**
   * pembayaran without action
   */
  export type pembayaranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembayaran
     */
    select?: pembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembayaran
     */
    omit?: pembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembayaranInclude<ExtArgs> | null
  }


  /**
   * Model penjualan
   */

  export type AggregatePenjualan = {
    _count: PenjualanCountAggregateOutputType | null
    _avg: PenjualanAvgAggregateOutputType | null
    _sum: PenjualanSumAggregateOutputType | null
    _min: PenjualanMinAggregateOutputType | null
    _max: PenjualanMaxAggregateOutputType | null
  }

  export type PenjualanAvgAggregateOutputType = {
    ID_PENJUALAN: number | null
    ID_PELANGGAN: number | null
    ID_PEMBAYARAN: number | null
    ID_USER: number | null
    TOTAL: number | null
  }

  export type PenjualanSumAggregateOutputType = {
    ID_PENJUALAN: number | null
    ID_PELANGGAN: number | null
    ID_PEMBAYARAN: number | null
    ID_USER: number | null
    TOTAL: number | null
  }

  export type PenjualanMinAggregateOutputType = {
    ID_PENJUALAN: number | null
    ID_PELANGGAN: number | null
    ID_PEMBAYARAN: number | null
    ID_USER: number | null
    TANGGAL: Date | null
    TOTAL: number | null
    STATUS_TRANSAKSI: $Enums.penjualan_STATUS_TRANSAKSI | null
  }

  export type PenjualanMaxAggregateOutputType = {
    ID_PENJUALAN: number | null
    ID_PELANGGAN: number | null
    ID_PEMBAYARAN: number | null
    ID_USER: number | null
    TANGGAL: Date | null
    TOTAL: number | null
    STATUS_TRANSAKSI: $Enums.penjualan_STATUS_TRANSAKSI | null
  }

  export type PenjualanCountAggregateOutputType = {
    ID_PENJUALAN: number
    ID_PELANGGAN: number
    ID_PEMBAYARAN: number
    ID_USER: number
    TANGGAL: number
    TOTAL: number
    STATUS_TRANSAKSI: number
    _all: number
  }


  export type PenjualanAvgAggregateInputType = {
    ID_PENJUALAN?: true
    ID_PELANGGAN?: true
    ID_PEMBAYARAN?: true
    ID_USER?: true
    TOTAL?: true
  }

  export type PenjualanSumAggregateInputType = {
    ID_PENJUALAN?: true
    ID_PELANGGAN?: true
    ID_PEMBAYARAN?: true
    ID_USER?: true
    TOTAL?: true
  }

  export type PenjualanMinAggregateInputType = {
    ID_PENJUALAN?: true
    ID_PELANGGAN?: true
    ID_PEMBAYARAN?: true
    ID_USER?: true
    TANGGAL?: true
    TOTAL?: true
    STATUS_TRANSAKSI?: true
  }

  export type PenjualanMaxAggregateInputType = {
    ID_PENJUALAN?: true
    ID_PELANGGAN?: true
    ID_PEMBAYARAN?: true
    ID_USER?: true
    TANGGAL?: true
    TOTAL?: true
    STATUS_TRANSAKSI?: true
  }

  export type PenjualanCountAggregateInputType = {
    ID_PENJUALAN?: true
    ID_PELANGGAN?: true
    ID_PEMBAYARAN?: true
    ID_USER?: true
    TANGGAL?: true
    TOTAL?: true
    STATUS_TRANSAKSI?: true
    _all?: true
  }

  export type PenjualanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which penjualan to aggregate.
     */
    where?: penjualanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penjualans to fetch.
     */
    orderBy?: penjualanOrderByWithRelationInput | penjualanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: penjualanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penjualans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penjualans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned penjualans
    **/
    _count?: true | PenjualanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PenjualanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PenjualanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenjualanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenjualanMaxAggregateInputType
  }

  export type GetPenjualanAggregateType<T extends PenjualanAggregateArgs> = {
        [P in keyof T & keyof AggregatePenjualan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePenjualan[P]>
      : GetScalarType<T[P], AggregatePenjualan[P]>
  }




  export type penjualanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penjualanWhereInput
    orderBy?: penjualanOrderByWithAggregationInput | penjualanOrderByWithAggregationInput[]
    by: PenjualanScalarFieldEnum[] | PenjualanScalarFieldEnum
    having?: penjualanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenjualanCountAggregateInputType | true
    _avg?: PenjualanAvgAggregateInputType
    _sum?: PenjualanSumAggregateInputType
    _min?: PenjualanMinAggregateInputType
    _max?: PenjualanMaxAggregateInputType
  }

  export type PenjualanGroupByOutputType = {
    ID_PENJUALAN: number
    ID_PELANGGAN: number | null
    ID_PEMBAYARAN: number | null
    ID_USER: number | null
    TANGGAL: Date | null
    TOTAL: number | null
    STATUS_TRANSAKSI: $Enums.penjualan_STATUS_TRANSAKSI | null
    _count: PenjualanCountAggregateOutputType | null
    _avg: PenjualanAvgAggregateOutputType | null
    _sum: PenjualanSumAggregateOutputType | null
    _min: PenjualanMinAggregateOutputType | null
    _max: PenjualanMaxAggregateOutputType | null
  }

  type GetPenjualanGroupByPayload<T extends penjualanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenjualanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenjualanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenjualanGroupByOutputType[P]>
            : GetScalarType<T[P], PenjualanGroupByOutputType[P]>
        }
      >
    >


  export type penjualanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_PENJUALAN?: boolean
    ID_PELANGGAN?: boolean
    ID_PEMBAYARAN?: boolean
    ID_USER?: boolean
    TANGGAL?: boolean
    TOTAL?: boolean
    STATUS_TRANSAKSI?: boolean
    detail_transaksi?: boolean | penjualan$detail_transaksiArgs<ExtArgs>
    pelanggan?: boolean | penjualan$pelangganArgs<ExtArgs>
    pembayaran?: boolean | penjualan$pembayaranArgs<ExtArgs>
    user?: boolean | penjualan$userArgs<ExtArgs>
    _count?: boolean | PenjualanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penjualan"]>



  export type penjualanSelectScalar = {
    ID_PENJUALAN?: boolean
    ID_PELANGGAN?: boolean
    ID_PEMBAYARAN?: boolean
    ID_USER?: boolean
    TANGGAL?: boolean
    TOTAL?: boolean
    STATUS_TRANSAKSI?: boolean
  }

  export type penjualanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_PENJUALAN" | "ID_PELANGGAN" | "ID_PEMBAYARAN" | "ID_USER" | "TANGGAL" | "TOTAL" | "STATUS_TRANSAKSI", ExtArgs["result"]["penjualan"]>
  export type penjualanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail_transaksi?: boolean | penjualan$detail_transaksiArgs<ExtArgs>
    pelanggan?: boolean | penjualan$pelangganArgs<ExtArgs>
    pembayaran?: boolean | penjualan$pembayaranArgs<ExtArgs>
    user?: boolean | penjualan$userArgs<ExtArgs>
    _count?: boolean | PenjualanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $penjualanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "penjualan"
    objects: {
      detail_transaksi: Prisma.$detail_transaksiPayload<ExtArgs>[]
      pelanggan: Prisma.$pelangganPayload<ExtArgs> | null
      pembayaran: Prisma.$pembayaranPayload<ExtArgs> | null
      user: Prisma.$userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_PENJUALAN: number
      ID_PELANGGAN: number | null
      ID_PEMBAYARAN: number | null
      ID_USER: number | null
      TANGGAL: Date | null
      TOTAL: number | null
      STATUS_TRANSAKSI: $Enums.penjualan_STATUS_TRANSAKSI | null
    }, ExtArgs["result"]["penjualan"]>
    composites: {}
  }

  type penjualanGetPayload<S extends boolean | null | undefined | penjualanDefaultArgs> = $Result.GetResult<Prisma.$penjualanPayload, S>

  type penjualanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<penjualanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenjualanCountAggregateInputType | true
    }

  export interface penjualanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['penjualan'], meta: { name: 'penjualan' } }
    /**
     * Find zero or one Penjualan that matches the filter.
     * @param {penjualanFindUniqueArgs} args - Arguments to find a Penjualan
     * @example
     * // Get one Penjualan
     * const penjualan = await prisma.penjualan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends penjualanFindUniqueArgs>(args: SelectSubset<T, penjualanFindUniqueArgs<ExtArgs>>): Prisma__penjualanClient<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Penjualan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {penjualanFindUniqueOrThrowArgs} args - Arguments to find a Penjualan
     * @example
     * // Get one Penjualan
     * const penjualan = await prisma.penjualan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends penjualanFindUniqueOrThrowArgs>(args: SelectSubset<T, penjualanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__penjualanClient<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penjualan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanFindFirstArgs} args - Arguments to find a Penjualan
     * @example
     * // Get one Penjualan
     * const penjualan = await prisma.penjualan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends penjualanFindFirstArgs>(args?: SelectSubset<T, penjualanFindFirstArgs<ExtArgs>>): Prisma__penjualanClient<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penjualan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanFindFirstOrThrowArgs} args - Arguments to find a Penjualan
     * @example
     * // Get one Penjualan
     * const penjualan = await prisma.penjualan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends penjualanFindFirstOrThrowArgs>(args?: SelectSubset<T, penjualanFindFirstOrThrowArgs<ExtArgs>>): Prisma__penjualanClient<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Penjualans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penjualans
     * const penjualans = await prisma.penjualan.findMany()
     * 
     * // Get first 10 Penjualans
     * const penjualans = await prisma.penjualan.findMany({ take: 10 })
     * 
     * // Only select the `ID_PENJUALAN`
     * const penjualanWithID_PENJUALANOnly = await prisma.penjualan.findMany({ select: { ID_PENJUALAN: true } })
     * 
     */
    findMany<T extends penjualanFindManyArgs>(args?: SelectSubset<T, penjualanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Penjualan.
     * @param {penjualanCreateArgs} args - Arguments to create a Penjualan.
     * @example
     * // Create one Penjualan
     * const Penjualan = await prisma.penjualan.create({
     *   data: {
     *     // ... data to create a Penjualan
     *   }
     * })
     * 
     */
    create<T extends penjualanCreateArgs>(args: SelectSubset<T, penjualanCreateArgs<ExtArgs>>): Prisma__penjualanClient<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Penjualans.
     * @param {penjualanCreateManyArgs} args - Arguments to create many Penjualans.
     * @example
     * // Create many Penjualans
     * const penjualan = await prisma.penjualan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends penjualanCreateManyArgs>(args?: SelectSubset<T, penjualanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Penjualan.
     * @param {penjualanDeleteArgs} args - Arguments to delete one Penjualan.
     * @example
     * // Delete one Penjualan
     * const Penjualan = await prisma.penjualan.delete({
     *   where: {
     *     // ... filter to delete one Penjualan
     *   }
     * })
     * 
     */
    delete<T extends penjualanDeleteArgs>(args: SelectSubset<T, penjualanDeleteArgs<ExtArgs>>): Prisma__penjualanClient<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Penjualan.
     * @param {penjualanUpdateArgs} args - Arguments to update one Penjualan.
     * @example
     * // Update one Penjualan
     * const penjualan = await prisma.penjualan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends penjualanUpdateArgs>(args: SelectSubset<T, penjualanUpdateArgs<ExtArgs>>): Prisma__penjualanClient<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Penjualans.
     * @param {penjualanDeleteManyArgs} args - Arguments to filter Penjualans to delete.
     * @example
     * // Delete a few Penjualans
     * const { count } = await prisma.penjualan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends penjualanDeleteManyArgs>(args?: SelectSubset<T, penjualanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penjualans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penjualans
     * const penjualan = await prisma.penjualan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends penjualanUpdateManyArgs>(args: SelectSubset<T, penjualanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Penjualan.
     * @param {penjualanUpsertArgs} args - Arguments to update or create a Penjualan.
     * @example
     * // Update or create a Penjualan
     * const penjualan = await prisma.penjualan.upsert({
     *   create: {
     *     // ... data to create a Penjualan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Penjualan we want to update
     *   }
     * })
     */
    upsert<T extends penjualanUpsertArgs>(args: SelectSubset<T, penjualanUpsertArgs<ExtArgs>>): Prisma__penjualanClient<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Penjualans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanCountArgs} args - Arguments to filter Penjualans to count.
     * @example
     * // Count the number of Penjualans
     * const count = await prisma.penjualan.count({
     *   where: {
     *     // ... the filter for the Penjualans we want to count
     *   }
     * })
    **/
    count<T extends penjualanCountArgs>(
      args?: Subset<T, penjualanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenjualanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Penjualan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PenjualanAggregateArgs>(args: Subset<T, PenjualanAggregateArgs>): Prisma.PrismaPromise<GetPenjualanAggregateType<T>>

    /**
     * Group by Penjualan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penjualanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends penjualanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: penjualanGroupByArgs['orderBy'] }
        : { orderBy?: penjualanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, penjualanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenjualanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the penjualan model
   */
  readonly fields: penjualanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for penjualan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__penjualanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detail_transaksi<T extends penjualan$detail_transaksiArgs<ExtArgs> = {}>(args?: Subset<T, penjualan$detail_transaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pelanggan<T extends penjualan$pelangganArgs<ExtArgs> = {}>(args?: Subset<T, penjualan$pelangganArgs<ExtArgs>>): Prisma__pelangganClient<$Result.GetResult<Prisma.$pelangganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pembayaran<T extends penjualan$pembayaranArgs<ExtArgs> = {}>(args?: Subset<T, penjualan$pembayaranArgs<ExtArgs>>): Prisma__pembayaranClient<$Result.GetResult<Prisma.$pembayaranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends penjualan$userArgs<ExtArgs> = {}>(args?: Subset<T, penjualan$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the penjualan model
   */
  interface penjualanFieldRefs {
    readonly ID_PENJUALAN: FieldRef<"penjualan", 'Int'>
    readonly ID_PELANGGAN: FieldRef<"penjualan", 'Int'>
    readonly ID_PEMBAYARAN: FieldRef<"penjualan", 'Int'>
    readonly ID_USER: FieldRef<"penjualan", 'Int'>
    readonly TANGGAL: FieldRef<"penjualan", 'DateTime'>
    readonly TOTAL: FieldRef<"penjualan", 'Int'>
    readonly STATUS_TRANSAKSI: FieldRef<"penjualan", 'penjualan_STATUS_TRANSAKSI'>
  }
    

  // Custom InputTypes
  /**
   * penjualan findUnique
   */
  export type penjualanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    /**
     * Filter, which penjualan to fetch.
     */
    where: penjualanWhereUniqueInput
  }

  /**
   * penjualan findUniqueOrThrow
   */
  export type penjualanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    /**
     * Filter, which penjualan to fetch.
     */
    where: penjualanWhereUniqueInput
  }

  /**
   * penjualan findFirst
   */
  export type penjualanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    /**
     * Filter, which penjualan to fetch.
     */
    where?: penjualanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penjualans to fetch.
     */
    orderBy?: penjualanOrderByWithRelationInput | penjualanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for penjualans.
     */
    cursor?: penjualanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penjualans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penjualans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penjualans.
     */
    distinct?: PenjualanScalarFieldEnum | PenjualanScalarFieldEnum[]
  }

  /**
   * penjualan findFirstOrThrow
   */
  export type penjualanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    /**
     * Filter, which penjualan to fetch.
     */
    where?: penjualanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penjualans to fetch.
     */
    orderBy?: penjualanOrderByWithRelationInput | penjualanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for penjualans.
     */
    cursor?: penjualanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penjualans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penjualans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penjualans.
     */
    distinct?: PenjualanScalarFieldEnum | PenjualanScalarFieldEnum[]
  }

  /**
   * penjualan findMany
   */
  export type penjualanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    /**
     * Filter, which penjualans to fetch.
     */
    where?: penjualanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penjualans to fetch.
     */
    orderBy?: penjualanOrderByWithRelationInput | penjualanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing penjualans.
     */
    cursor?: penjualanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penjualans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penjualans.
     */
    skip?: number
    distinct?: PenjualanScalarFieldEnum | PenjualanScalarFieldEnum[]
  }

  /**
   * penjualan create
   */
  export type penjualanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    /**
     * The data needed to create a penjualan.
     */
    data: XOR<penjualanCreateInput, penjualanUncheckedCreateInput>
  }

  /**
   * penjualan createMany
   */
  export type penjualanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many penjualans.
     */
    data: penjualanCreateManyInput | penjualanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * penjualan update
   */
  export type penjualanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    /**
     * The data needed to update a penjualan.
     */
    data: XOR<penjualanUpdateInput, penjualanUncheckedUpdateInput>
    /**
     * Choose, which penjualan to update.
     */
    where: penjualanWhereUniqueInput
  }

  /**
   * penjualan updateMany
   */
  export type penjualanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update penjualans.
     */
    data: XOR<penjualanUpdateManyMutationInput, penjualanUncheckedUpdateManyInput>
    /**
     * Filter which penjualans to update
     */
    where?: penjualanWhereInput
    /**
     * Limit how many penjualans to update.
     */
    limit?: number
  }

  /**
   * penjualan upsert
   */
  export type penjualanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    /**
     * The filter to search for the penjualan to update in case it exists.
     */
    where: penjualanWhereUniqueInput
    /**
     * In case the penjualan found by the `where` argument doesn't exist, create a new penjualan with this data.
     */
    create: XOR<penjualanCreateInput, penjualanUncheckedCreateInput>
    /**
     * In case the penjualan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<penjualanUpdateInput, penjualanUncheckedUpdateInput>
  }

  /**
   * penjualan delete
   */
  export type penjualanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    /**
     * Filter which penjualan to delete.
     */
    where: penjualanWhereUniqueInput
  }

  /**
   * penjualan deleteMany
   */
  export type penjualanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which penjualans to delete
     */
    where?: penjualanWhereInput
    /**
     * Limit how many penjualans to delete.
     */
    limit?: number
  }

  /**
   * penjualan.detail_transaksi
   */
  export type penjualan$detail_transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    where?: detail_transaksiWhereInput
    orderBy?: detail_transaksiOrderByWithRelationInput | detail_transaksiOrderByWithRelationInput[]
    cursor?: detail_transaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detail_transaksiScalarFieldEnum | Detail_transaksiScalarFieldEnum[]
  }

  /**
   * penjualan.pelanggan
   */
  export type penjualan$pelangganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pelanggan
     */
    select?: pelangganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pelanggan
     */
    omit?: pelangganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pelangganInclude<ExtArgs> | null
    where?: pelangganWhereInput
  }

  /**
   * penjualan.pembayaran
   */
  export type penjualan$pembayaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pembayaran
     */
    select?: pembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pembayaran
     */
    omit?: pembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pembayaranInclude<ExtArgs> | null
    where?: pembayaranWhereInput
  }

  /**
   * penjualan.user
   */
  export type penjualan$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * penjualan without action
   */
  export type penjualanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    ID_USER: number | null
  }

  export type UserSumAggregateOutputType = {
    ID_USER: number | null
  }

  export type UserMinAggregateOutputType = {
    ID_USER: number | null
    NAMA_USER: string | null
    EMAIL_USER: string | null
    USERNAME_USER: string | null
    PASSWORD_USER: string | null
    ROLE: $Enums.user_ROLE | null
    ALAMAT_USER: string | null
  }

  export type UserMaxAggregateOutputType = {
    ID_USER: number | null
    NAMA_USER: string | null
    EMAIL_USER: string | null
    USERNAME_USER: string | null
    PASSWORD_USER: string | null
    ROLE: $Enums.user_ROLE | null
    ALAMAT_USER: string | null
  }

  export type UserCountAggregateOutputType = {
    ID_USER: number
    NAMA_USER: number
    EMAIL_USER: number
    USERNAME_USER: number
    PASSWORD_USER: number
    ROLE: number
    ALAMAT_USER: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    ID_USER?: true
  }

  export type UserSumAggregateInputType = {
    ID_USER?: true
  }

  export type UserMinAggregateInputType = {
    ID_USER?: true
    NAMA_USER?: true
    EMAIL_USER?: true
    USERNAME_USER?: true
    PASSWORD_USER?: true
    ROLE?: true
    ALAMAT_USER?: true
  }

  export type UserMaxAggregateInputType = {
    ID_USER?: true
    NAMA_USER?: true
    EMAIL_USER?: true
    USERNAME_USER?: true
    PASSWORD_USER?: true
    ROLE?: true
    ALAMAT_USER?: true
  }

  export type UserCountAggregateInputType = {
    ID_USER?: true
    NAMA_USER?: true
    EMAIL_USER?: true
    USERNAME_USER?: true
    PASSWORD_USER?: true
    ROLE?: true
    ALAMAT_USER?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    ID_USER: number
    NAMA_USER: string | null
    EMAIL_USER: string | null
    USERNAME_USER: string | null
    PASSWORD_USER: string | null
    ROLE: $Enums.user_ROLE | null
    ALAMAT_USER: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_USER?: boolean
    NAMA_USER?: boolean
    EMAIL_USER?: boolean
    USERNAME_USER?: boolean
    PASSWORD_USER?: boolean
    ROLE?: boolean
    ALAMAT_USER?: boolean
    penjualan?: boolean | user$penjualanArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    ID_USER?: boolean
    NAMA_USER?: boolean
    EMAIL_USER?: boolean
    USERNAME_USER?: boolean
    PASSWORD_USER?: boolean
    ROLE?: boolean
    ALAMAT_USER?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_USER" | "NAMA_USER" | "EMAIL_USER" | "USERNAME_USER" | "PASSWORD_USER" | "ROLE" | "ALAMAT_USER", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjualan?: boolean | user$penjualanArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      penjualan: Prisma.$penjualanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_USER: number
      NAMA_USER: string | null
      EMAIL_USER: string | null
      USERNAME_USER: string | null
      PASSWORD_USER: string | null
      ROLE: $Enums.user_ROLE | null
      ALAMAT_USER: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `ID_USER`
     * const userWithID_USEROnly = await prisma.user.findMany({ select: { ID_USER: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    penjualan<T extends user$penjualanArgs<ExtArgs> = {}>(args?: Subset<T, user$penjualanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penjualanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly ID_USER: FieldRef<"user", 'Int'>
    readonly NAMA_USER: FieldRef<"user", 'String'>
    readonly EMAIL_USER: FieldRef<"user", 'String'>
    readonly USERNAME_USER: FieldRef<"user", 'String'>
    readonly PASSWORD_USER: FieldRef<"user", 'String'>
    readonly ROLE: FieldRef<"user", 'user_ROLE'>
    readonly ALAMAT_USER: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.penjualan
   */
  export type user$penjualanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the penjualan
     */
    select?: penjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the penjualan
     */
    omit?: penjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penjualanInclude<ExtArgs> | null
    where?: penjualanWhereInput
    orderBy?: penjualanOrderByWithRelationInput | penjualanOrderByWithRelationInput[]
    cursor?: penjualanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenjualanScalarFieldEnum | PenjualanScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BarangScalarFieldEnum: {
    KODE_BARANG: 'KODE_BARANG',
    ID_KATEGORI: 'ID_KATEGORI',
    NAMA_BARANG: 'NAMA_BARANG',
    GAMBAR_BARANG: 'GAMBAR_BARANG',
    HARGA_BARANG: 'HARGA_BARANG',
    KETERANGAN_BARANG: 'KETERANGAN_BARANG',
    STOK_BARANG: 'STOK_BARANG',
    EXP_BARANG: 'EXP_BARANG',
    STATUS_KETERSEDIAAN: 'STATUS_KETERSEDIAAN',
    ATTRIBUTE_28: 'ATTRIBUTE_28'
  };

  export type BarangScalarFieldEnum = (typeof BarangScalarFieldEnum)[keyof typeof BarangScalarFieldEnum]


  export const Detail_transaksiScalarFieldEnum: {
    ID_DETAILTRANSAKSI: 'ID_DETAILTRANSAKSI',
    ID_PENJUALAN: 'ID_PENJUALAN',
    KODE_BARANG: 'KODE_BARANG',
    JUMLAH: 'JUMLAH',
    HARGA_SATUAN: 'HARGA_SATUAN',
    SUB_TOTAL: 'SUB_TOTAL'
  };

  export type Detail_transaksiScalarFieldEnum = (typeof Detail_transaksiScalarFieldEnum)[keyof typeof Detail_transaksiScalarFieldEnum]


  export const KategoriScalarFieldEnum: {
    ID_KATEGORI: 'ID_KATEGORI',
    NAMA_KATEGORI: 'NAMA_KATEGORI'
  };

  export type KategoriScalarFieldEnum = (typeof KategoriScalarFieldEnum)[keyof typeof KategoriScalarFieldEnum]


  export const PelangganScalarFieldEnum: {
    ID_PELANGGAN: 'ID_PELANGGAN',
    NAMA_PELANGGAN: 'NAMA_PELANGGAN',
    USERNAME_PELANGGAN: 'USERNAME_PELANGGAN',
    PASSWORD_PELANGGAN: 'PASSWORD_PELANGGAN',
    ALAMAT_PELANGGAN: 'ALAMAT_PELANGGAN'
  };

  export type PelangganScalarFieldEnum = (typeof PelangganScalarFieldEnum)[keyof typeof PelangganScalarFieldEnum]


  export const PembayaranScalarFieldEnum: {
    ID_PEMBAYARAN: 'ID_PEMBAYARAN',
    NAMA_PEMBAYARAN: 'NAMA_PEMBAYARAN'
  };

  export type PembayaranScalarFieldEnum = (typeof PembayaranScalarFieldEnum)[keyof typeof PembayaranScalarFieldEnum]


  export const PenjualanScalarFieldEnum: {
    ID_PENJUALAN: 'ID_PENJUALAN',
    ID_PELANGGAN: 'ID_PELANGGAN',
    ID_PEMBAYARAN: 'ID_PEMBAYARAN',
    ID_USER: 'ID_USER',
    TANGGAL: 'TANGGAL',
    TOTAL: 'TOTAL',
    STATUS_TRANSAKSI: 'STATUS_TRANSAKSI'
  };

  export type PenjualanScalarFieldEnum = (typeof PenjualanScalarFieldEnum)[keyof typeof PenjualanScalarFieldEnum]


  export const UserScalarFieldEnum: {
    ID_USER: 'ID_USER',
    NAMA_USER: 'NAMA_USER',
    EMAIL_USER: 'EMAIL_USER',
    USERNAME_USER: 'USERNAME_USER',
    PASSWORD_USER: 'PASSWORD_USER',
    ROLE: 'ROLE',
    ALAMAT_USER: 'ALAMAT_USER'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const barangOrderByRelevanceFieldEnum: {
    NAMA_BARANG: 'NAMA_BARANG',
    GAMBAR_BARANG: 'GAMBAR_BARANG',
    KETERANGAN_BARANG: 'KETERANGAN_BARANG',
    ATTRIBUTE_28: 'ATTRIBUTE_28'
  };

  export type barangOrderByRelevanceFieldEnum = (typeof barangOrderByRelevanceFieldEnum)[keyof typeof barangOrderByRelevanceFieldEnum]


  export const kategoriOrderByRelevanceFieldEnum: {
    NAMA_KATEGORI: 'NAMA_KATEGORI'
  };

  export type kategoriOrderByRelevanceFieldEnum = (typeof kategoriOrderByRelevanceFieldEnum)[keyof typeof kategoriOrderByRelevanceFieldEnum]


  export const pelangganOrderByRelevanceFieldEnum: {
    NAMA_PELANGGAN: 'NAMA_PELANGGAN',
    USERNAME_PELANGGAN: 'USERNAME_PELANGGAN',
    PASSWORD_PELANGGAN: 'PASSWORD_PELANGGAN',
    ALAMAT_PELANGGAN: 'ALAMAT_PELANGGAN'
  };

  export type pelangganOrderByRelevanceFieldEnum = (typeof pelangganOrderByRelevanceFieldEnum)[keyof typeof pelangganOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    NAMA_USER: 'NAMA_USER',
    EMAIL_USER: 'EMAIL_USER',
    USERNAME_USER: 'USERNAME_USER',
    PASSWORD_USER: 'PASSWORD_USER',
    ALAMAT_USER: 'ALAMAT_USER'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'barang_STATUS_KETERSEDIAAN'
   */
  export type Enumbarang_STATUS_KETERSEDIAANFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'barang_STATUS_KETERSEDIAAN'>
    


  /**
   * Reference to a field of type 'pembayaran_NAMA_PEMBAYARAN'
   */
  export type Enumpembayaran_NAMA_PEMBAYARANFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pembayaran_NAMA_PEMBAYARAN'>
    


  /**
   * Reference to a field of type 'penjualan_STATUS_TRANSAKSI'
   */
  export type Enumpenjualan_STATUS_TRANSAKSIFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'penjualan_STATUS_TRANSAKSI'>
    


  /**
   * Reference to a field of type 'user_ROLE'
   */
  export type Enumuser_ROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_ROLE'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type barangWhereInput = {
    AND?: barangWhereInput | barangWhereInput[]
    OR?: barangWhereInput[]
    NOT?: barangWhereInput | barangWhereInput[]
    KODE_BARANG?: IntFilter<"barang"> | number
    ID_KATEGORI?: IntNullableFilter<"barang"> | number | null
    NAMA_BARANG?: StringNullableFilter<"barang"> | string | null
    GAMBAR_BARANG?: StringNullableFilter<"barang"> | string | null
    HARGA_BARANG?: IntNullableFilter<"barang"> | number | null
    KETERANGAN_BARANG?: StringNullableFilter<"barang"> | string | null
    STOK_BARANG?: IntNullableFilter<"barang"> | number | null
    EXP_BARANG?: DateTimeNullableFilter<"barang"> | Date | string | null
    STATUS_KETERSEDIAAN?: Enumbarang_STATUS_KETERSEDIAANNullableFilter<"barang"> | $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: StringNullableFilter<"barang"> | string | null
    kategori?: XOR<KategoriNullableScalarRelationFilter, kategoriWhereInput> | null
    detail_transaksi?: Detail_transaksiListRelationFilter
  }

  export type barangOrderByWithRelationInput = {
    KODE_BARANG?: SortOrder
    ID_KATEGORI?: SortOrderInput | SortOrder
    NAMA_BARANG?: SortOrderInput | SortOrder
    GAMBAR_BARANG?: SortOrderInput | SortOrder
    HARGA_BARANG?: SortOrderInput | SortOrder
    KETERANGAN_BARANG?: SortOrderInput | SortOrder
    STOK_BARANG?: SortOrderInput | SortOrder
    EXP_BARANG?: SortOrderInput | SortOrder
    STATUS_KETERSEDIAAN?: SortOrderInput | SortOrder
    ATTRIBUTE_28?: SortOrderInput | SortOrder
    kategori?: kategoriOrderByWithRelationInput
    detail_transaksi?: detail_transaksiOrderByRelationAggregateInput
    _relevance?: barangOrderByRelevanceInput
  }

  export type barangWhereUniqueInput = Prisma.AtLeast<{
    KODE_BARANG?: number
    AND?: barangWhereInput | barangWhereInput[]
    OR?: barangWhereInput[]
    NOT?: barangWhereInput | barangWhereInput[]
    ID_KATEGORI?: IntNullableFilter<"barang"> | number | null
    NAMA_BARANG?: StringNullableFilter<"barang"> | string | null
    GAMBAR_BARANG?: StringNullableFilter<"barang"> | string | null
    HARGA_BARANG?: IntNullableFilter<"barang"> | number | null
    KETERANGAN_BARANG?: StringNullableFilter<"barang"> | string | null
    STOK_BARANG?: IntNullableFilter<"barang"> | number | null
    EXP_BARANG?: DateTimeNullableFilter<"barang"> | Date | string | null
    STATUS_KETERSEDIAAN?: Enumbarang_STATUS_KETERSEDIAANNullableFilter<"barang"> | $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: StringNullableFilter<"barang"> | string | null
    kategori?: XOR<KategoriNullableScalarRelationFilter, kategoriWhereInput> | null
    detail_transaksi?: Detail_transaksiListRelationFilter
  }, "KODE_BARANG">

  export type barangOrderByWithAggregationInput = {
    KODE_BARANG?: SortOrder
    ID_KATEGORI?: SortOrderInput | SortOrder
    NAMA_BARANG?: SortOrderInput | SortOrder
    GAMBAR_BARANG?: SortOrderInput | SortOrder
    HARGA_BARANG?: SortOrderInput | SortOrder
    KETERANGAN_BARANG?: SortOrderInput | SortOrder
    STOK_BARANG?: SortOrderInput | SortOrder
    EXP_BARANG?: SortOrderInput | SortOrder
    STATUS_KETERSEDIAAN?: SortOrderInput | SortOrder
    ATTRIBUTE_28?: SortOrderInput | SortOrder
    _count?: barangCountOrderByAggregateInput
    _avg?: barangAvgOrderByAggregateInput
    _max?: barangMaxOrderByAggregateInput
    _min?: barangMinOrderByAggregateInput
    _sum?: barangSumOrderByAggregateInput
  }

  export type barangScalarWhereWithAggregatesInput = {
    AND?: barangScalarWhereWithAggregatesInput | barangScalarWhereWithAggregatesInput[]
    OR?: barangScalarWhereWithAggregatesInput[]
    NOT?: barangScalarWhereWithAggregatesInput | barangScalarWhereWithAggregatesInput[]
    KODE_BARANG?: IntWithAggregatesFilter<"barang"> | number
    ID_KATEGORI?: IntNullableWithAggregatesFilter<"barang"> | number | null
    NAMA_BARANG?: StringNullableWithAggregatesFilter<"barang"> | string | null
    GAMBAR_BARANG?: StringNullableWithAggregatesFilter<"barang"> | string | null
    HARGA_BARANG?: IntNullableWithAggregatesFilter<"barang"> | number | null
    KETERANGAN_BARANG?: StringNullableWithAggregatesFilter<"barang"> | string | null
    STOK_BARANG?: IntNullableWithAggregatesFilter<"barang"> | number | null
    EXP_BARANG?: DateTimeNullableWithAggregatesFilter<"barang"> | Date | string | null
    STATUS_KETERSEDIAAN?: Enumbarang_STATUS_KETERSEDIAANNullableWithAggregatesFilter<"barang"> | $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: StringNullableWithAggregatesFilter<"barang"> | string | null
  }

  export type detail_transaksiWhereInput = {
    AND?: detail_transaksiWhereInput | detail_transaksiWhereInput[]
    OR?: detail_transaksiWhereInput[]
    NOT?: detail_transaksiWhereInput | detail_transaksiWhereInput[]
    ID_DETAILTRANSAKSI?: IntFilter<"detail_transaksi"> | number
    ID_PENJUALAN?: IntNullableFilter<"detail_transaksi"> | number | null
    KODE_BARANG?: IntNullableFilter<"detail_transaksi"> | number | null
    JUMLAH?: IntNullableFilter<"detail_transaksi"> | number | null
    HARGA_SATUAN?: IntNullableFilter<"detail_transaksi"> | number | null
    SUB_TOTAL?: IntNullableFilter<"detail_transaksi"> | number | null
    barang?: XOR<BarangNullableScalarRelationFilter, barangWhereInput> | null
    penjualan?: XOR<PenjualanNullableScalarRelationFilter, penjualanWhereInput> | null
  }

  export type detail_transaksiOrderByWithRelationInput = {
    ID_DETAILTRANSAKSI?: SortOrder
    ID_PENJUALAN?: SortOrderInput | SortOrder
    KODE_BARANG?: SortOrderInput | SortOrder
    JUMLAH?: SortOrderInput | SortOrder
    HARGA_SATUAN?: SortOrderInput | SortOrder
    SUB_TOTAL?: SortOrderInput | SortOrder
    barang?: barangOrderByWithRelationInput
    penjualan?: penjualanOrderByWithRelationInput
  }

  export type detail_transaksiWhereUniqueInput = Prisma.AtLeast<{
    ID_DETAILTRANSAKSI?: number
    AND?: detail_transaksiWhereInput | detail_transaksiWhereInput[]
    OR?: detail_transaksiWhereInput[]
    NOT?: detail_transaksiWhereInput | detail_transaksiWhereInput[]
    ID_PENJUALAN?: IntNullableFilter<"detail_transaksi"> | number | null
    KODE_BARANG?: IntNullableFilter<"detail_transaksi"> | number | null
    JUMLAH?: IntNullableFilter<"detail_transaksi"> | number | null
    HARGA_SATUAN?: IntNullableFilter<"detail_transaksi"> | number | null
    SUB_TOTAL?: IntNullableFilter<"detail_transaksi"> | number | null
    barang?: XOR<BarangNullableScalarRelationFilter, barangWhereInput> | null
    penjualan?: XOR<PenjualanNullableScalarRelationFilter, penjualanWhereInput> | null
  }, "ID_DETAILTRANSAKSI">

  export type detail_transaksiOrderByWithAggregationInput = {
    ID_DETAILTRANSAKSI?: SortOrder
    ID_PENJUALAN?: SortOrderInput | SortOrder
    KODE_BARANG?: SortOrderInput | SortOrder
    JUMLAH?: SortOrderInput | SortOrder
    HARGA_SATUAN?: SortOrderInput | SortOrder
    SUB_TOTAL?: SortOrderInput | SortOrder
    _count?: detail_transaksiCountOrderByAggregateInput
    _avg?: detail_transaksiAvgOrderByAggregateInput
    _max?: detail_transaksiMaxOrderByAggregateInput
    _min?: detail_transaksiMinOrderByAggregateInput
    _sum?: detail_transaksiSumOrderByAggregateInput
  }

  export type detail_transaksiScalarWhereWithAggregatesInput = {
    AND?: detail_transaksiScalarWhereWithAggregatesInput | detail_transaksiScalarWhereWithAggregatesInput[]
    OR?: detail_transaksiScalarWhereWithAggregatesInput[]
    NOT?: detail_transaksiScalarWhereWithAggregatesInput | detail_transaksiScalarWhereWithAggregatesInput[]
    ID_DETAILTRANSAKSI?: IntWithAggregatesFilter<"detail_transaksi"> | number
    ID_PENJUALAN?: IntNullableWithAggregatesFilter<"detail_transaksi"> | number | null
    KODE_BARANG?: IntNullableWithAggregatesFilter<"detail_transaksi"> | number | null
    JUMLAH?: IntNullableWithAggregatesFilter<"detail_transaksi"> | number | null
    HARGA_SATUAN?: IntNullableWithAggregatesFilter<"detail_transaksi"> | number | null
    SUB_TOTAL?: IntNullableWithAggregatesFilter<"detail_transaksi"> | number | null
  }

  export type kategoriWhereInput = {
    AND?: kategoriWhereInput | kategoriWhereInput[]
    OR?: kategoriWhereInput[]
    NOT?: kategoriWhereInput | kategoriWhereInput[]
    ID_KATEGORI?: IntFilter<"kategori"> | number
    NAMA_KATEGORI?: StringNullableFilter<"kategori"> | string | null
    barang?: BarangListRelationFilter
  }

  export type kategoriOrderByWithRelationInput = {
    ID_KATEGORI?: SortOrder
    NAMA_KATEGORI?: SortOrderInput | SortOrder
    barang?: barangOrderByRelationAggregateInput
    _relevance?: kategoriOrderByRelevanceInput
  }

  export type kategoriWhereUniqueInput = Prisma.AtLeast<{
    ID_KATEGORI?: number
    AND?: kategoriWhereInput | kategoriWhereInput[]
    OR?: kategoriWhereInput[]
    NOT?: kategoriWhereInput | kategoriWhereInput[]
    NAMA_KATEGORI?: StringNullableFilter<"kategori"> | string | null
    barang?: BarangListRelationFilter
  }, "ID_KATEGORI">

  export type kategoriOrderByWithAggregationInput = {
    ID_KATEGORI?: SortOrder
    NAMA_KATEGORI?: SortOrderInput | SortOrder
    _count?: kategoriCountOrderByAggregateInput
    _avg?: kategoriAvgOrderByAggregateInput
    _max?: kategoriMaxOrderByAggregateInput
    _min?: kategoriMinOrderByAggregateInput
    _sum?: kategoriSumOrderByAggregateInput
  }

  export type kategoriScalarWhereWithAggregatesInput = {
    AND?: kategoriScalarWhereWithAggregatesInput | kategoriScalarWhereWithAggregatesInput[]
    OR?: kategoriScalarWhereWithAggregatesInput[]
    NOT?: kategoriScalarWhereWithAggregatesInput | kategoriScalarWhereWithAggregatesInput[]
    ID_KATEGORI?: IntWithAggregatesFilter<"kategori"> | number
    NAMA_KATEGORI?: StringNullableWithAggregatesFilter<"kategori"> | string | null
  }

  export type pelangganWhereInput = {
    AND?: pelangganWhereInput | pelangganWhereInput[]
    OR?: pelangganWhereInput[]
    NOT?: pelangganWhereInput | pelangganWhereInput[]
    ID_PELANGGAN?: IntFilter<"pelanggan"> | number
    NAMA_PELANGGAN?: StringNullableFilter<"pelanggan"> | string | null
    USERNAME_PELANGGAN?: StringNullableFilter<"pelanggan"> | string | null
    PASSWORD_PELANGGAN?: StringNullableFilter<"pelanggan"> | string | null
    ALAMAT_PELANGGAN?: StringNullableFilter<"pelanggan"> | string | null
    penjualan?: PenjualanListRelationFilter
  }

  export type pelangganOrderByWithRelationInput = {
    ID_PELANGGAN?: SortOrder
    NAMA_PELANGGAN?: SortOrderInput | SortOrder
    USERNAME_PELANGGAN?: SortOrderInput | SortOrder
    PASSWORD_PELANGGAN?: SortOrderInput | SortOrder
    ALAMAT_PELANGGAN?: SortOrderInput | SortOrder
    penjualan?: penjualanOrderByRelationAggregateInput
    _relevance?: pelangganOrderByRelevanceInput
  }

  export type pelangganWhereUniqueInput = Prisma.AtLeast<{
    ID_PELANGGAN?: number
    AND?: pelangganWhereInput | pelangganWhereInput[]
    OR?: pelangganWhereInput[]
    NOT?: pelangganWhereInput | pelangganWhereInput[]
    NAMA_PELANGGAN?: StringNullableFilter<"pelanggan"> | string | null
    USERNAME_PELANGGAN?: StringNullableFilter<"pelanggan"> | string | null
    PASSWORD_PELANGGAN?: StringNullableFilter<"pelanggan"> | string | null
    ALAMAT_PELANGGAN?: StringNullableFilter<"pelanggan"> | string | null
    penjualan?: PenjualanListRelationFilter
  }, "ID_PELANGGAN">

  export type pelangganOrderByWithAggregationInput = {
    ID_PELANGGAN?: SortOrder
    NAMA_PELANGGAN?: SortOrderInput | SortOrder
    USERNAME_PELANGGAN?: SortOrderInput | SortOrder
    PASSWORD_PELANGGAN?: SortOrderInput | SortOrder
    ALAMAT_PELANGGAN?: SortOrderInput | SortOrder
    _count?: pelangganCountOrderByAggregateInput
    _avg?: pelangganAvgOrderByAggregateInput
    _max?: pelangganMaxOrderByAggregateInput
    _min?: pelangganMinOrderByAggregateInput
    _sum?: pelangganSumOrderByAggregateInput
  }

  export type pelangganScalarWhereWithAggregatesInput = {
    AND?: pelangganScalarWhereWithAggregatesInput | pelangganScalarWhereWithAggregatesInput[]
    OR?: pelangganScalarWhereWithAggregatesInput[]
    NOT?: pelangganScalarWhereWithAggregatesInput | pelangganScalarWhereWithAggregatesInput[]
    ID_PELANGGAN?: IntWithAggregatesFilter<"pelanggan"> | number
    NAMA_PELANGGAN?: StringNullableWithAggregatesFilter<"pelanggan"> | string | null
    USERNAME_PELANGGAN?: StringNullableWithAggregatesFilter<"pelanggan"> | string | null
    PASSWORD_PELANGGAN?: StringNullableWithAggregatesFilter<"pelanggan"> | string | null
    ALAMAT_PELANGGAN?: StringNullableWithAggregatesFilter<"pelanggan"> | string | null
  }

  export type pembayaranWhereInput = {
    AND?: pembayaranWhereInput | pembayaranWhereInput[]
    OR?: pembayaranWhereInput[]
    NOT?: pembayaranWhereInput | pembayaranWhereInput[]
    ID_PEMBAYARAN?: IntFilter<"pembayaran"> | number
    NAMA_PEMBAYARAN?: Enumpembayaran_NAMA_PEMBAYARANNullableFilter<"pembayaran"> | $Enums.pembayaran_NAMA_PEMBAYARAN | null
    penjualan?: PenjualanListRelationFilter
  }

  export type pembayaranOrderByWithRelationInput = {
    ID_PEMBAYARAN?: SortOrder
    NAMA_PEMBAYARAN?: SortOrderInput | SortOrder
    penjualan?: penjualanOrderByRelationAggregateInput
  }

  export type pembayaranWhereUniqueInput = Prisma.AtLeast<{
    ID_PEMBAYARAN?: number
    AND?: pembayaranWhereInput | pembayaranWhereInput[]
    OR?: pembayaranWhereInput[]
    NOT?: pembayaranWhereInput | pembayaranWhereInput[]
    NAMA_PEMBAYARAN?: Enumpembayaran_NAMA_PEMBAYARANNullableFilter<"pembayaran"> | $Enums.pembayaran_NAMA_PEMBAYARAN | null
    penjualan?: PenjualanListRelationFilter
  }, "ID_PEMBAYARAN">

  export type pembayaranOrderByWithAggregationInput = {
    ID_PEMBAYARAN?: SortOrder
    NAMA_PEMBAYARAN?: SortOrderInput | SortOrder
    _count?: pembayaranCountOrderByAggregateInput
    _avg?: pembayaranAvgOrderByAggregateInput
    _max?: pembayaranMaxOrderByAggregateInput
    _min?: pembayaranMinOrderByAggregateInput
    _sum?: pembayaranSumOrderByAggregateInput
  }

  export type pembayaranScalarWhereWithAggregatesInput = {
    AND?: pembayaranScalarWhereWithAggregatesInput | pembayaranScalarWhereWithAggregatesInput[]
    OR?: pembayaranScalarWhereWithAggregatesInput[]
    NOT?: pembayaranScalarWhereWithAggregatesInput | pembayaranScalarWhereWithAggregatesInput[]
    ID_PEMBAYARAN?: IntWithAggregatesFilter<"pembayaran"> | number
    NAMA_PEMBAYARAN?: Enumpembayaran_NAMA_PEMBAYARANNullableWithAggregatesFilter<"pembayaran"> | $Enums.pembayaran_NAMA_PEMBAYARAN | null
  }

  export type penjualanWhereInput = {
    AND?: penjualanWhereInput | penjualanWhereInput[]
    OR?: penjualanWhereInput[]
    NOT?: penjualanWhereInput | penjualanWhereInput[]
    ID_PENJUALAN?: IntFilter<"penjualan"> | number
    ID_PELANGGAN?: IntNullableFilter<"penjualan"> | number | null
    ID_PEMBAYARAN?: IntNullableFilter<"penjualan"> | number | null
    ID_USER?: IntNullableFilter<"penjualan"> | number | null
    TANGGAL?: DateTimeNullableFilter<"penjualan"> | Date | string | null
    TOTAL?: IntNullableFilter<"penjualan"> | number | null
    STATUS_TRANSAKSI?: Enumpenjualan_STATUS_TRANSAKSINullableFilter<"penjualan"> | $Enums.penjualan_STATUS_TRANSAKSI | null
    detail_transaksi?: Detail_transaksiListRelationFilter
    pelanggan?: XOR<PelangganNullableScalarRelationFilter, pelangganWhereInput> | null
    pembayaran?: XOR<PembayaranNullableScalarRelationFilter, pembayaranWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }

  export type penjualanOrderByWithRelationInput = {
    ID_PENJUALAN?: SortOrder
    ID_PELANGGAN?: SortOrderInput | SortOrder
    ID_PEMBAYARAN?: SortOrderInput | SortOrder
    ID_USER?: SortOrderInput | SortOrder
    TANGGAL?: SortOrderInput | SortOrder
    TOTAL?: SortOrderInput | SortOrder
    STATUS_TRANSAKSI?: SortOrderInput | SortOrder
    detail_transaksi?: detail_transaksiOrderByRelationAggregateInput
    pelanggan?: pelangganOrderByWithRelationInput
    pembayaran?: pembayaranOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type penjualanWhereUniqueInput = Prisma.AtLeast<{
    ID_PENJUALAN?: number
    AND?: penjualanWhereInput | penjualanWhereInput[]
    OR?: penjualanWhereInput[]
    NOT?: penjualanWhereInput | penjualanWhereInput[]
    ID_PELANGGAN?: IntNullableFilter<"penjualan"> | number | null
    ID_PEMBAYARAN?: IntNullableFilter<"penjualan"> | number | null
    ID_USER?: IntNullableFilter<"penjualan"> | number | null
    TANGGAL?: DateTimeNullableFilter<"penjualan"> | Date | string | null
    TOTAL?: IntNullableFilter<"penjualan"> | number | null
    STATUS_TRANSAKSI?: Enumpenjualan_STATUS_TRANSAKSINullableFilter<"penjualan"> | $Enums.penjualan_STATUS_TRANSAKSI | null
    detail_transaksi?: Detail_transaksiListRelationFilter
    pelanggan?: XOR<PelangganNullableScalarRelationFilter, pelangganWhereInput> | null
    pembayaran?: XOR<PembayaranNullableScalarRelationFilter, pembayaranWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
  }, "ID_PENJUALAN">

  export type penjualanOrderByWithAggregationInput = {
    ID_PENJUALAN?: SortOrder
    ID_PELANGGAN?: SortOrderInput | SortOrder
    ID_PEMBAYARAN?: SortOrderInput | SortOrder
    ID_USER?: SortOrderInput | SortOrder
    TANGGAL?: SortOrderInput | SortOrder
    TOTAL?: SortOrderInput | SortOrder
    STATUS_TRANSAKSI?: SortOrderInput | SortOrder
    _count?: penjualanCountOrderByAggregateInput
    _avg?: penjualanAvgOrderByAggregateInput
    _max?: penjualanMaxOrderByAggregateInput
    _min?: penjualanMinOrderByAggregateInput
    _sum?: penjualanSumOrderByAggregateInput
  }

  export type penjualanScalarWhereWithAggregatesInput = {
    AND?: penjualanScalarWhereWithAggregatesInput | penjualanScalarWhereWithAggregatesInput[]
    OR?: penjualanScalarWhereWithAggregatesInput[]
    NOT?: penjualanScalarWhereWithAggregatesInput | penjualanScalarWhereWithAggregatesInput[]
    ID_PENJUALAN?: IntWithAggregatesFilter<"penjualan"> | number
    ID_PELANGGAN?: IntNullableWithAggregatesFilter<"penjualan"> | number | null
    ID_PEMBAYARAN?: IntNullableWithAggregatesFilter<"penjualan"> | number | null
    ID_USER?: IntNullableWithAggregatesFilter<"penjualan"> | number | null
    TANGGAL?: DateTimeNullableWithAggregatesFilter<"penjualan"> | Date | string | null
    TOTAL?: IntNullableWithAggregatesFilter<"penjualan"> | number | null
    STATUS_TRANSAKSI?: Enumpenjualan_STATUS_TRANSAKSINullableWithAggregatesFilter<"penjualan"> | $Enums.penjualan_STATUS_TRANSAKSI | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    ID_USER?: IntFilter<"user"> | number
    NAMA_USER?: StringNullableFilter<"user"> | string | null
    EMAIL_USER?: StringNullableFilter<"user"> | string | null
    USERNAME_USER?: StringNullableFilter<"user"> | string | null
    PASSWORD_USER?: StringNullableFilter<"user"> | string | null
    ROLE?: Enumuser_ROLENullableFilter<"user"> | $Enums.user_ROLE | null
    ALAMAT_USER?: StringNullableFilter<"user"> | string | null
    penjualan?: PenjualanListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    ID_USER?: SortOrder
    NAMA_USER?: SortOrderInput | SortOrder
    EMAIL_USER?: SortOrderInput | SortOrder
    USERNAME_USER?: SortOrderInput | SortOrder
    PASSWORD_USER?: SortOrderInput | SortOrder
    ROLE?: SortOrderInput | SortOrder
    ALAMAT_USER?: SortOrderInput | SortOrder
    penjualan?: penjualanOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    ID_USER?: number
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    NAMA_USER?: StringNullableFilter<"user"> | string | null
    EMAIL_USER?: StringNullableFilter<"user"> | string | null
    USERNAME_USER?: StringNullableFilter<"user"> | string | null
    PASSWORD_USER?: StringNullableFilter<"user"> | string | null
    ROLE?: Enumuser_ROLENullableFilter<"user"> | $Enums.user_ROLE | null
    ALAMAT_USER?: StringNullableFilter<"user"> | string | null
    penjualan?: PenjualanListRelationFilter
  }, "ID_USER">

  export type userOrderByWithAggregationInput = {
    ID_USER?: SortOrder
    NAMA_USER?: SortOrderInput | SortOrder
    EMAIL_USER?: SortOrderInput | SortOrder
    USERNAME_USER?: SortOrderInput | SortOrder
    PASSWORD_USER?: SortOrderInput | SortOrder
    ROLE?: SortOrderInput | SortOrder
    ALAMAT_USER?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    ID_USER?: IntWithAggregatesFilter<"user"> | number
    NAMA_USER?: StringNullableWithAggregatesFilter<"user"> | string | null
    EMAIL_USER?: StringNullableWithAggregatesFilter<"user"> | string | null
    USERNAME_USER?: StringNullableWithAggregatesFilter<"user"> | string | null
    PASSWORD_USER?: StringNullableWithAggregatesFilter<"user"> | string | null
    ROLE?: Enumuser_ROLENullableWithAggregatesFilter<"user"> | $Enums.user_ROLE | null
    ALAMAT_USER?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type barangCreateInput = {
    KODE_BARANG: number
    NAMA_BARANG?: string | null
    GAMBAR_BARANG?: string | null
    HARGA_BARANG?: number | null
    KETERANGAN_BARANG?: string | null
    STOK_BARANG?: number | null
    EXP_BARANG?: Date | string | null
    STATUS_KETERSEDIAAN?: $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: string | null
    kategori?: kategoriCreateNestedOneWithoutBarangInput
    detail_transaksi?: detail_transaksiCreateNestedManyWithoutBarangInput
  }

  export type barangUncheckedCreateInput = {
    KODE_BARANG: number
    ID_KATEGORI?: number | null
    NAMA_BARANG?: string | null
    GAMBAR_BARANG?: string | null
    HARGA_BARANG?: number | null
    KETERANGAN_BARANG?: string | null
    STOK_BARANG?: number | null
    EXP_BARANG?: Date | string | null
    STATUS_KETERSEDIAAN?: $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: string | null
    detail_transaksi?: detail_transaksiUncheckedCreateNestedManyWithoutBarangInput
  }

  export type barangUpdateInput = {
    KODE_BARANG?: IntFieldUpdateOperationsInput | number
    NAMA_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    GAMBAR_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    HARGA_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    KETERANGAN_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    STOK_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    EXP_BARANG?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    STATUS_KETERSEDIAAN?: NullableEnumbarang_STATUS_KETERSEDIAANFieldUpdateOperationsInput | $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: kategoriUpdateOneWithoutBarangNestedInput
    detail_transaksi?: detail_transaksiUpdateManyWithoutBarangNestedInput
  }

  export type barangUncheckedUpdateInput = {
    KODE_BARANG?: IntFieldUpdateOperationsInput | number
    ID_KATEGORI?: NullableIntFieldUpdateOperationsInput | number | null
    NAMA_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    GAMBAR_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    HARGA_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    KETERANGAN_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    STOK_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    EXP_BARANG?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    STATUS_KETERSEDIAAN?: NullableEnumbarang_STATUS_KETERSEDIAANFieldUpdateOperationsInput | $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: NullableStringFieldUpdateOperationsInput | string | null
    detail_transaksi?: detail_transaksiUncheckedUpdateManyWithoutBarangNestedInput
  }

  export type barangCreateManyInput = {
    KODE_BARANG: number
    ID_KATEGORI?: number | null
    NAMA_BARANG?: string | null
    GAMBAR_BARANG?: string | null
    HARGA_BARANG?: number | null
    KETERANGAN_BARANG?: string | null
    STOK_BARANG?: number | null
    EXP_BARANG?: Date | string | null
    STATUS_KETERSEDIAAN?: $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: string | null
  }

  export type barangUpdateManyMutationInput = {
    KODE_BARANG?: IntFieldUpdateOperationsInput | number
    NAMA_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    GAMBAR_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    HARGA_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    KETERANGAN_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    STOK_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    EXP_BARANG?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    STATUS_KETERSEDIAAN?: NullableEnumbarang_STATUS_KETERSEDIAANFieldUpdateOperationsInput | $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type barangUncheckedUpdateManyInput = {
    KODE_BARANG?: IntFieldUpdateOperationsInput | number
    ID_KATEGORI?: NullableIntFieldUpdateOperationsInput | number | null
    NAMA_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    GAMBAR_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    HARGA_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    KETERANGAN_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    STOK_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    EXP_BARANG?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    STATUS_KETERSEDIAAN?: NullableEnumbarang_STATUS_KETERSEDIAANFieldUpdateOperationsInput | $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detail_transaksiCreateInput = {
    ID_DETAILTRANSAKSI: number
    JUMLAH?: number | null
    HARGA_SATUAN?: number | null
    SUB_TOTAL?: number | null
    barang?: barangCreateNestedOneWithoutDetail_transaksiInput
    penjualan?: penjualanCreateNestedOneWithoutDetail_transaksiInput
  }

  export type detail_transaksiUncheckedCreateInput = {
    ID_DETAILTRANSAKSI: number
    ID_PENJUALAN?: number | null
    KODE_BARANG?: number | null
    JUMLAH?: number | null
    HARGA_SATUAN?: number | null
    SUB_TOTAL?: number | null
  }

  export type detail_transaksiUpdateInput = {
    ID_DETAILTRANSAKSI?: IntFieldUpdateOperationsInput | number
    JUMLAH?: NullableIntFieldUpdateOperationsInput | number | null
    HARGA_SATUAN?: NullableIntFieldUpdateOperationsInput | number | null
    SUB_TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
    barang?: barangUpdateOneWithoutDetail_transaksiNestedInput
    penjualan?: penjualanUpdateOneWithoutDetail_transaksiNestedInput
  }

  export type detail_transaksiUncheckedUpdateInput = {
    ID_DETAILTRANSAKSI?: IntFieldUpdateOperationsInput | number
    ID_PENJUALAN?: NullableIntFieldUpdateOperationsInput | number | null
    KODE_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    JUMLAH?: NullableIntFieldUpdateOperationsInput | number | null
    HARGA_SATUAN?: NullableIntFieldUpdateOperationsInput | number | null
    SUB_TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type detail_transaksiCreateManyInput = {
    ID_DETAILTRANSAKSI: number
    ID_PENJUALAN?: number | null
    KODE_BARANG?: number | null
    JUMLAH?: number | null
    HARGA_SATUAN?: number | null
    SUB_TOTAL?: number | null
  }

  export type detail_transaksiUpdateManyMutationInput = {
    ID_DETAILTRANSAKSI?: IntFieldUpdateOperationsInput | number
    JUMLAH?: NullableIntFieldUpdateOperationsInput | number | null
    HARGA_SATUAN?: NullableIntFieldUpdateOperationsInput | number | null
    SUB_TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type detail_transaksiUncheckedUpdateManyInput = {
    ID_DETAILTRANSAKSI?: IntFieldUpdateOperationsInput | number
    ID_PENJUALAN?: NullableIntFieldUpdateOperationsInput | number | null
    KODE_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    JUMLAH?: NullableIntFieldUpdateOperationsInput | number | null
    HARGA_SATUAN?: NullableIntFieldUpdateOperationsInput | number | null
    SUB_TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type kategoriCreateInput = {
    ID_KATEGORI: number
    NAMA_KATEGORI?: string | null
    barang?: barangCreateNestedManyWithoutKategoriInput
  }

  export type kategoriUncheckedCreateInput = {
    ID_KATEGORI: number
    NAMA_KATEGORI?: string | null
    barang?: barangUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type kategoriUpdateInput = {
    ID_KATEGORI?: IntFieldUpdateOperationsInput | number
    NAMA_KATEGORI?: NullableStringFieldUpdateOperationsInput | string | null
    barang?: barangUpdateManyWithoutKategoriNestedInput
  }

  export type kategoriUncheckedUpdateInput = {
    ID_KATEGORI?: IntFieldUpdateOperationsInput | number
    NAMA_KATEGORI?: NullableStringFieldUpdateOperationsInput | string | null
    barang?: barangUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type kategoriCreateManyInput = {
    ID_KATEGORI: number
    NAMA_KATEGORI?: string | null
  }

  export type kategoriUpdateManyMutationInput = {
    ID_KATEGORI?: IntFieldUpdateOperationsInput | number
    NAMA_KATEGORI?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type kategoriUncheckedUpdateManyInput = {
    ID_KATEGORI?: IntFieldUpdateOperationsInput | number
    NAMA_KATEGORI?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pelangganCreateInput = {
    ID_PELANGGAN: number
    NAMA_PELANGGAN?: string | null
    USERNAME_PELANGGAN?: string | null
    PASSWORD_PELANGGAN?: string | null
    ALAMAT_PELANGGAN?: string | null
    penjualan?: penjualanCreateNestedManyWithoutPelangganInput
  }

  export type pelangganUncheckedCreateInput = {
    ID_PELANGGAN: number
    NAMA_PELANGGAN?: string | null
    USERNAME_PELANGGAN?: string | null
    PASSWORD_PELANGGAN?: string | null
    ALAMAT_PELANGGAN?: string | null
    penjualan?: penjualanUncheckedCreateNestedManyWithoutPelangganInput
  }

  export type pelangganUpdateInput = {
    ID_PELANGGAN?: IntFieldUpdateOperationsInput | number
    NAMA_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
    USERNAME_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
    PASSWORD_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
    ALAMAT_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
    penjualan?: penjualanUpdateManyWithoutPelangganNestedInput
  }

  export type pelangganUncheckedUpdateInput = {
    ID_PELANGGAN?: IntFieldUpdateOperationsInput | number
    NAMA_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
    USERNAME_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
    PASSWORD_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
    ALAMAT_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
    penjualan?: penjualanUncheckedUpdateManyWithoutPelangganNestedInput
  }

  export type pelangganCreateManyInput = {
    ID_PELANGGAN: number
    NAMA_PELANGGAN?: string | null
    USERNAME_PELANGGAN?: string | null
    PASSWORD_PELANGGAN?: string | null
    ALAMAT_PELANGGAN?: string | null
  }

  export type pelangganUpdateManyMutationInput = {
    ID_PELANGGAN?: IntFieldUpdateOperationsInput | number
    NAMA_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
    USERNAME_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
    PASSWORD_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
    ALAMAT_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pelangganUncheckedUpdateManyInput = {
    ID_PELANGGAN?: IntFieldUpdateOperationsInput | number
    NAMA_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
    USERNAME_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
    PASSWORD_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
    ALAMAT_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pembayaranCreateInput = {
    ID_PEMBAYARAN: number
    NAMA_PEMBAYARAN?: $Enums.pembayaran_NAMA_PEMBAYARAN | null
    penjualan?: penjualanCreateNestedManyWithoutPembayaranInput
  }

  export type pembayaranUncheckedCreateInput = {
    ID_PEMBAYARAN: number
    NAMA_PEMBAYARAN?: $Enums.pembayaran_NAMA_PEMBAYARAN | null
    penjualan?: penjualanUncheckedCreateNestedManyWithoutPembayaranInput
  }

  export type pembayaranUpdateInput = {
    ID_PEMBAYARAN?: IntFieldUpdateOperationsInput | number
    NAMA_PEMBAYARAN?: NullableEnumpembayaran_NAMA_PEMBAYARANFieldUpdateOperationsInput | $Enums.pembayaran_NAMA_PEMBAYARAN | null
    penjualan?: penjualanUpdateManyWithoutPembayaranNestedInput
  }

  export type pembayaranUncheckedUpdateInput = {
    ID_PEMBAYARAN?: IntFieldUpdateOperationsInput | number
    NAMA_PEMBAYARAN?: NullableEnumpembayaran_NAMA_PEMBAYARANFieldUpdateOperationsInput | $Enums.pembayaran_NAMA_PEMBAYARAN | null
    penjualan?: penjualanUncheckedUpdateManyWithoutPembayaranNestedInput
  }

  export type pembayaranCreateManyInput = {
    ID_PEMBAYARAN: number
    NAMA_PEMBAYARAN?: $Enums.pembayaran_NAMA_PEMBAYARAN | null
  }

  export type pembayaranUpdateManyMutationInput = {
    ID_PEMBAYARAN?: IntFieldUpdateOperationsInput | number
    NAMA_PEMBAYARAN?: NullableEnumpembayaran_NAMA_PEMBAYARANFieldUpdateOperationsInput | $Enums.pembayaran_NAMA_PEMBAYARAN | null
  }

  export type pembayaranUncheckedUpdateManyInput = {
    ID_PEMBAYARAN?: IntFieldUpdateOperationsInput | number
    NAMA_PEMBAYARAN?: NullableEnumpembayaran_NAMA_PEMBAYARANFieldUpdateOperationsInput | $Enums.pembayaran_NAMA_PEMBAYARAN | null
  }

  export type penjualanCreateInput = {
    ID_PENJUALAN: number
    TANGGAL?: Date | string | null
    TOTAL?: number | null
    STATUS_TRANSAKSI?: $Enums.penjualan_STATUS_TRANSAKSI | null
    detail_transaksi?: detail_transaksiCreateNestedManyWithoutPenjualanInput
    pelanggan?: pelangganCreateNestedOneWithoutPenjualanInput
    pembayaran?: pembayaranCreateNestedOneWithoutPenjualanInput
    user?: userCreateNestedOneWithoutPenjualanInput
  }

  export type penjualanUncheckedCreateInput = {
    ID_PENJUALAN: number
    ID_PELANGGAN?: number | null
    ID_PEMBAYARAN?: number | null
    ID_USER?: number | null
    TANGGAL?: Date | string | null
    TOTAL?: number | null
    STATUS_TRANSAKSI?: $Enums.penjualan_STATUS_TRANSAKSI | null
    detail_transaksi?: detail_transaksiUncheckedCreateNestedManyWithoutPenjualanInput
  }

  export type penjualanUpdateInput = {
    ID_PENJUALAN?: IntFieldUpdateOperationsInput | number
    TANGGAL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
    STATUS_TRANSAKSI?: NullableEnumpenjualan_STATUS_TRANSAKSIFieldUpdateOperationsInput | $Enums.penjualan_STATUS_TRANSAKSI | null
    detail_transaksi?: detail_transaksiUpdateManyWithoutPenjualanNestedInput
    pelanggan?: pelangganUpdateOneWithoutPenjualanNestedInput
    pembayaran?: pembayaranUpdateOneWithoutPenjualanNestedInput
    user?: userUpdateOneWithoutPenjualanNestedInput
  }

  export type penjualanUncheckedUpdateInput = {
    ID_PENJUALAN?: IntFieldUpdateOperationsInput | number
    ID_PELANGGAN?: NullableIntFieldUpdateOperationsInput | number | null
    ID_PEMBAYARAN?: NullableIntFieldUpdateOperationsInput | number | null
    ID_USER?: NullableIntFieldUpdateOperationsInput | number | null
    TANGGAL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
    STATUS_TRANSAKSI?: NullableEnumpenjualan_STATUS_TRANSAKSIFieldUpdateOperationsInput | $Enums.penjualan_STATUS_TRANSAKSI | null
    detail_transaksi?: detail_transaksiUncheckedUpdateManyWithoutPenjualanNestedInput
  }

  export type penjualanCreateManyInput = {
    ID_PENJUALAN: number
    ID_PELANGGAN?: number | null
    ID_PEMBAYARAN?: number | null
    ID_USER?: number | null
    TANGGAL?: Date | string | null
    TOTAL?: number | null
    STATUS_TRANSAKSI?: $Enums.penjualan_STATUS_TRANSAKSI | null
  }

  export type penjualanUpdateManyMutationInput = {
    ID_PENJUALAN?: IntFieldUpdateOperationsInput | number
    TANGGAL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
    STATUS_TRANSAKSI?: NullableEnumpenjualan_STATUS_TRANSAKSIFieldUpdateOperationsInput | $Enums.penjualan_STATUS_TRANSAKSI | null
  }

  export type penjualanUncheckedUpdateManyInput = {
    ID_PENJUALAN?: IntFieldUpdateOperationsInput | number
    ID_PELANGGAN?: NullableIntFieldUpdateOperationsInput | number | null
    ID_PEMBAYARAN?: NullableIntFieldUpdateOperationsInput | number | null
    ID_USER?: NullableIntFieldUpdateOperationsInput | number | null
    TANGGAL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
    STATUS_TRANSAKSI?: NullableEnumpenjualan_STATUS_TRANSAKSIFieldUpdateOperationsInput | $Enums.penjualan_STATUS_TRANSAKSI | null
  }

  export type userCreateInput = {
    ID_USER: number
    NAMA_USER?: string | null
    EMAIL_USER?: string | null
    USERNAME_USER?: string | null
    PASSWORD_USER?: string | null
    ROLE?: $Enums.user_ROLE | null
    ALAMAT_USER?: string | null
    penjualan?: penjualanCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    ID_USER: number
    NAMA_USER?: string | null
    EMAIL_USER?: string | null
    USERNAME_USER?: string | null
    PASSWORD_USER?: string | null
    ROLE?: $Enums.user_ROLE | null
    ALAMAT_USER?: string | null
    penjualan?: penjualanUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    ID_USER?: IntFieldUpdateOperationsInput | number
    NAMA_USER?: NullableStringFieldUpdateOperationsInput | string | null
    EMAIL_USER?: NullableStringFieldUpdateOperationsInput | string | null
    USERNAME_USER?: NullableStringFieldUpdateOperationsInput | string | null
    PASSWORD_USER?: NullableStringFieldUpdateOperationsInput | string | null
    ROLE?: NullableEnumuser_ROLEFieldUpdateOperationsInput | $Enums.user_ROLE | null
    ALAMAT_USER?: NullableStringFieldUpdateOperationsInput | string | null
    penjualan?: penjualanUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    ID_USER?: IntFieldUpdateOperationsInput | number
    NAMA_USER?: NullableStringFieldUpdateOperationsInput | string | null
    EMAIL_USER?: NullableStringFieldUpdateOperationsInput | string | null
    USERNAME_USER?: NullableStringFieldUpdateOperationsInput | string | null
    PASSWORD_USER?: NullableStringFieldUpdateOperationsInput | string | null
    ROLE?: NullableEnumuser_ROLEFieldUpdateOperationsInput | $Enums.user_ROLE | null
    ALAMAT_USER?: NullableStringFieldUpdateOperationsInput | string | null
    penjualan?: penjualanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    ID_USER: number
    NAMA_USER?: string | null
    EMAIL_USER?: string | null
    USERNAME_USER?: string | null
    PASSWORD_USER?: string | null
    ROLE?: $Enums.user_ROLE | null
    ALAMAT_USER?: string | null
  }

  export type userUpdateManyMutationInput = {
    ID_USER?: IntFieldUpdateOperationsInput | number
    NAMA_USER?: NullableStringFieldUpdateOperationsInput | string | null
    EMAIL_USER?: NullableStringFieldUpdateOperationsInput | string | null
    USERNAME_USER?: NullableStringFieldUpdateOperationsInput | string | null
    PASSWORD_USER?: NullableStringFieldUpdateOperationsInput | string | null
    ROLE?: NullableEnumuser_ROLEFieldUpdateOperationsInput | $Enums.user_ROLE | null
    ALAMAT_USER?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    ID_USER?: IntFieldUpdateOperationsInput | number
    NAMA_USER?: NullableStringFieldUpdateOperationsInput | string | null
    EMAIL_USER?: NullableStringFieldUpdateOperationsInput | string | null
    USERNAME_USER?: NullableStringFieldUpdateOperationsInput | string | null
    PASSWORD_USER?: NullableStringFieldUpdateOperationsInput | string | null
    ROLE?: NullableEnumuser_ROLEFieldUpdateOperationsInput | $Enums.user_ROLE | null
    ALAMAT_USER?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Enumbarang_STATUS_KETERSEDIAANNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.barang_STATUS_KETERSEDIAAN | Enumbarang_STATUS_KETERSEDIAANFieldRefInput<$PrismaModel> | null
    in?: $Enums.barang_STATUS_KETERSEDIAAN[] | null
    notIn?: $Enums.barang_STATUS_KETERSEDIAAN[] | null
    not?: NestedEnumbarang_STATUS_KETERSEDIAANNullableFilter<$PrismaModel> | $Enums.barang_STATUS_KETERSEDIAAN | null
  }

  export type KategoriNullableScalarRelationFilter = {
    is?: kategoriWhereInput | null
    isNot?: kategoriWhereInput | null
  }

  export type Detail_transaksiListRelationFilter = {
    every?: detail_transaksiWhereInput
    some?: detail_transaksiWhereInput
    none?: detail_transaksiWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type detail_transaksiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type barangOrderByRelevanceInput = {
    fields: barangOrderByRelevanceFieldEnum | barangOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type barangCountOrderByAggregateInput = {
    KODE_BARANG?: SortOrder
    ID_KATEGORI?: SortOrder
    NAMA_BARANG?: SortOrder
    GAMBAR_BARANG?: SortOrder
    HARGA_BARANG?: SortOrder
    KETERANGAN_BARANG?: SortOrder
    STOK_BARANG?: SortOrder
    EXP_BARANG?: SortOrder
    STATUS_KETERSEDIAAN?: SortOrder
    ATTRIBUTE_28?: SortOrder
  }

  export type barangAvgOrderByAggregateInput = {
    KODE_BARANG?: SortOrder
    ID_KATEGORI?: SortOrder
    HARGA_BARANG?: SortOrder
    STOK_BARANG?: SortOrder
  }

  export type barangMaxOrderByAggregateInput = {
    KODE_BARANG?: SortOrder
    ID_KATEGORI?: SortOrder
    NAMA_BARANG?: SortOrder
    GAMBAR_BARANG?: SortOrder
    HARGA_BARANG?: SortOrder
    KETERANGAN_BARANG?: SortOrder
    STOK_BARANG?: SortOrder
    EXP_BARANG?: SortOrder
    STATUS_KETERSEDIAAN?: SortOrder
    ATTRIBUTE_28?: SortOrder
  }

  export type barangMinOrderByAggregateInput = {
    KODE_BARANG?: SortOrder
    ID_KATEGORI?: SortOrder
    NAMA_BARANG?: SortOrder
    GAMBAR_BARANG?: SortOrder
    HARGA_BARANG?: SortOrder
    KETERANGAN_BARANG?: SortOrder
    STOK_BARANG?: SortOrder
    EXP_BARANG?: SortOrder
    STATUS_KETERSEDIAAN?: SortOrder
    ATTRIBUTE_28?: SortOrder
  }

  export type barangSumOrderByAggregateInput = {
    KODE_BARANG?: SortOrder
    ID_KATEGORI?: SortOrder
    HARGA_BARANG?: SortOrder
    STOK_BARANG?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumbarang_STATUS_KETERSEDIAANNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.barang_STATUS_KETERSEDIAAN | Enumbarang_STATUS_KETERSEDIAANFieldRefInput<$PrismaModel> | null
    in?: $Enums.barang_STATUS_KETERSEDIAAN[] | null
    notIn?: $Enums.barang_STATUS_KETERSEDIAAN[] | null
    not?: NestedEnumbarang_STATUS_KETERSEDIAANNullableWithAggregatesFilter<$PrismaModel> | $Enums.barang_STATUS_KETERSEDIAAN | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumbarang_STATUS_KETERSEDIAANNullableFilter<$PrismaModel>
    _max?: NestedEnumbarang_STATUS_KETERSEDIAANNullableFilter<$PrismaModel>
  }

  export type BarangNullableScalarRelationFilter = {
    is?: barangWhereInput | null
    isNot?: barangWhereInput | null
  }

  export type PenjualanNullableScalarRelationFilter = {
    is?: penjualanWhereInput | null
    isNot?: penjualanWhereInput | null
  }

  export type detail_transaksiCountOrderByAggregateInput = {
    ID_DETAILTRANSAKSI?: SortOrder
    ID_PENJUALAN?: SortOrder
    KODE_BARANG?: SortOrder
    JUMLAH?: SortOrder
    HARGA_SATUAN?: SortOrder
    SUB_TOTAL?: SortOrder
  }

  export type detail_transaksiAvgOrderByAggregateInput = {
    ID_DETAILTRANSAKSI?: SortOrder
    ID_PENJUALAN?: SortOrder
    KODE_BARANG?: SortOrder
    JUMLAH?: SortOrder
    HARGA_SATUAN?: SortOrder
    SUB_TOTAL?: SortOrder
  }

  export type detail_transaksiMaxOrderByAggregateInput = {
    ID_DETAILTRANSAKSI?: SortOrder
    ID_PENJUALAN?: SortOrder
    KODE_BARANG?: SortOrder
    JUMLAH?: SortOrder
    HARGA_SATUAN?: SortOrder
    SUB_TOTAL?: SortOrder
  }

  export type detail_transaksiMinOrderByAggregateInput = {
    ID_DETAILTRANSAKSI?: SortOrder
    ID_PENJUALAN?: SortOrder
    KODE_BARANG?: SortOrder
    JUMLAH?: SortOrder
    HARGA_SATUAN?: SortOrder
    SUB_TOTAL?: SortOrder
  }

  export type detail_transaksiSumOrderByAggregateInput = {
    ID_DETAILTRANSAKSI?: SortOrder
    ID_PENJUALAN?: SortOrder
    KODE_BARANG?: SortOrder
    JUMLAH?: SortOrder
    HARGA_SATUAN?: SortOrder
    SUB_TOTAL?: SortOrder
  }

  export type BarangListRelationFilter = {
    every?: barangWhereInput
    some?: barangWhereInput
    none?: barangWhereInput
  }

  export type barangOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type kategoriOrderByRelevanceInput = {
    fields: kategoriOrderByRelevanceFieldEnum | kategoriOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type kategoriCountOrderByAggregateInput = {
    ID_KATEGORI?: SortOrder
    NAMA_KATEGORI?: SortOrder
  }

  export type kategoriAvgOrderByAggregateInput = {
    ID_KATEGORI?: SortOrder
  }

  export type kategoriMaxOrderByAggregateInput = {
    ID_KATEGORI?: SortOrder
    NAMA_KATEGORI?: SortOrder
  }

  export type kategoriMinOrderByAggregateInput = {
    ID_KATEGORI?: SortOrder
    NAMA_KATEGORI?: SortOrder
  }

  export type kategoriSumOrderByAggregateInput = {
    ID_KATEGORI?: SortOrder
  }

  export type PenjualanListRelationFilter = {
    every?: penjualanWhereInput
    some?: penjualanWhereInput
    none?: penjualanWhereInput
  }

  export type penjualanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pelangganOrderByRelevanceInput = {
    fields: pelangganOrderByRelevanceFieldEnum | pelangganOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type pelangganCountOrderByAggregateInput = {
    ID_PELANGGAN?: SortOrder
    NAMA_PELANGGAN?: SortOrder
    USERNAME_PELANGGAN?: SortOrder
    PASSWORD_PELANGGAN?: SortOrder
    ALAMAT_PELANGGAN?: SortOrder
  }

  export type pelangganAvgOrderByAggregateInput = {
    ID_PELANGGAN?: SortOrder
  }

  export type pelangganMaxOrderByAggregateInput = {
    ID_PELANGGAN?: SortOrder
    NAMA_PELANGGAN?: SortOrder
    USERNAME_PELANGGAN?: SortOrder
    PASSWORD_PELANGGAN?: SortOrder
    ALAMAT_PELANGGAN?: SortOrder
  }

  export type pelangganMinOrderByAggregateInput = {
    ID_PELANGGAN?: SortOrder
    NAMA_PELANGGAN?: SortOrder
    USERNAME_PELANGGAN?: SortOrder
    PASSWORD_PELANGGAN?: SortOrder
    ALAMAT_PELANGGAN?: SortOrder
  }

  export type pelangganSumOrderByAggregateInput = {
    ID_PELANGGAN?: SortOrder
  }

  export type Enumpembayaran_NAMA_PEMBAYARANNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.pembayaran_NAMA_PEMBAYARAN | Enumpembayaran_NAMA_PEMBAYARANFieldRefInput<$PrismaModel> | null
    in?: $Enums.pembayaran_NAMA_PEMBAYARAN[] | null
    notIn?: $Enums.pembayaran_NAMA_PEMBAYARAN[] | null
    not?: NestedEnumpembayaran_NAMA_PEMBAYARANNullableFilter<$PrismaModel> | $Enums.pembayaran_NAMA_PEMBAYARAN | null
  }

  export type pembayaranCountOrderByAggregateInput = {
    ID_PEMBAYARAN?: SortOrder
    NAMA_PEMBAYARAN?: SortOrder
  }

  export type pembayaranAvgOrderByAggregateInput = {
    ID_PEMBAYARAN?: SortOrder
  }

  export type pembayaranMaxOrderByAggregateInput = {
    ID_PEMBAYARAN?: SortOrder
    NAMA_PEMBAYARAN?: SortOrder
  }

  export type pembayaranMinOrderByAggregateInput = {
    ID_PEMBAYARAN?: SortOrder
    NAMA_PEMBAYARAN?: SortOrder
  }

  export type pembayaranSumOrderByAggregateInput = {
    ID_PEMBAYARAN?: SortOrder
  }

  export type Enumpembayaran_NAMA_PEMBAYARANNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pembayaran_NAMA_PEMBAYARAN | Enumpembayaran_NAMA_PEMBAYARANFieldRefInput<$PrismaModel> | null
    in?: $Enums.pembayaran_NAMA_PEMBAYARAN[] | null
    notIn?: $Enums.pembayaran_NAMA_PEMBAYARAN[] | null
    not?: NestedEnumpembayaran_NAMA_PEMBAYARANNullableWithAggregatesFilter<$PrismaModel> | $Enums.pembayaran_NAMA_PEMBAYARAN | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpembayaran_NAMA_PEMBAYARANNullableFilter<$PrismaModel>
    _max?: NestedEnumpembayaran_NAMA_PEMBAYARANNullableFilter<$PrismaModel>
  }

  export type Enumpenjualan_STATUS_TRANSAKSINullableFilter<$PrismaModel = never> = {
    equals?: $Enums.penjualan_STATUS_TRANSAKSI | Enumpenjualan_STATUS_TRANSAKSIFieldRefInput<$PrismaModel> | null
    in?: $Enums.penjualan_STATUS_TRANSAKSI[] | null
    notIn?: $Enums.penjualan_STATUS_TRANSAKSI[] | null
    not?: NestedEnumpenjualan_STATUS_TRANSAKSINullableFilter<$PrismaModel> | $Enums.penjualan_STATUS_TRANSAKSI | null
  }

  export type PelangganNullableScalarRelationFilter = {
    is?: pelangganWhereInput | null
    isNot?: pelangganWhereInput | null
  }

  export type PembayaranNullableScalarRelationFilter = {
    is?: pembayaranWhereInput | null
    isNot?: pembayaranWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type penjualanCountOrderByAggregateInput = {
    ID_PENJUALAN?: SortOrder
    ID_PELANGGAN?: SortOrder
    ID_PEMBAYARAN?: SortOrder
    ID_USER?: SortOrder
    TANGGAL?: SortOrder
    TOTAL?: SortOrder
    STATUS_TRANSAKSI?: SortOrder
  }

  export type penjualanAvgOrderByAggregateInput = {
    ID_PENJUALAN?: SortOrder
    ID_PELANGGAN?: SortOrder
    ID_PEMBAYARAN?: SortOrder
    ID_USER?: SortOrder
    TOTAL?: SortOrder
  }

  export type penjualanMaxOrderByAggregateInput = {
    ID_PENJUALAN?: SortOrder
    ID_PELANGGAN?: SortOrder
    ID_PEMBAYARAN?: SortOrder
    ID_USER?: SortOrder
    TANGGAL?: SortOrder
    TOTAL?: SortOrder
    STATUS_TRANSAKSI?: SortOrder
  }

  export type penjualanMinOrderByAggregateInput = {
    ID_PENJUALAN?: SortOrder
    ID_PELANGGAN?: SortOrder
    ID_PEMBAYARAN?: SortOrder
    ID_USER?: SortOrder
    TANGGAL?: SortOrder
    TOTAL?: SortOrder
    STATUS_TRANSAKSI?: SortOrder
  }

  export type penjualanSumOrderByAggregateInput = {
    ID_PENJUALAN?: SortOrder
    ID_PELANGGAN?: SortOrder
    ID_PEMBAYARAN?: SortOrder
    ID_USER?: SortOrder
    TOTAL?: SortOrder
  }

  export type Enumpenjualan_STATUS_TRANSAKSINullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.penjualan_STATUS_TRANSAKSI | Enumpenjualan_STATUS_TRANSAKSIFieldRefInput<$PrismaModel> | null
    in?: $Enums.penjualan_STATUS_TRANSAKSI[] | null
    notIn?: $Enums.penjualan_STATUS_TRANSAKSI[] | null
    not?: NestedEnumpenjualan_STATUS_TRANSAKSINullableWithAggregatesFilter<$PrismaModel> | $Enums.penjualan_STATUS_TRANSAKSI | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpenjualan_STATUS_TRANSAKSINullableFilter<$PrismaModel>
    _max?: NestedEnumpenjualan_STATUS_TRANSAKSINullableFilter<$PrismaModel>
  }

  export type Enumuser_ROLENullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_ROLE | Enumuser_ROLEFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_ROLE[] | null
    notIn?: $Enums.user_ROLE[] | null
    not?: NestedEnumuser_ROLENullableFilter<$PrismaModel> | $Enums.user_ROLE | null
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    ID_USER?: SortOrder
    NAMA_USER?: SortOrder
    EMAIL_USER?: SortOrder
    USERNAME_USER?: SortOrder
    PASSWORD_USER?: SortOrder
    ROLE?: SortOrder
    ALAMAT_USER?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    ID_USER?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    ID_USER?: SortOrder
    NAMA_USER?: SortOrder
    EMAIL_USER?: SortOrder
    USERNAME_USER?: SortOrder
    PASSWORD_USER?: SortOrder
    ROLE?: SortOrder
    ALAMAT_USER?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    ID_USER?: SortOrder
    NAMA_USER?: SortOrder
    EMAIL_USER?: SortOrder
    USERNAME_USER?: SortOrder
    PASSWORD_USER?: SortOrder
    ROLE?: SortOrder
    ALAMAT_USER?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    ID_USER?: SortOrder
  }

  export type Enumuser_ROLENullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_ROLE | Enumuser_ROLEFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_ROLE[] | null
    notIn?: $Enums.user_ROLE[] | null
    not?: NestedEnumuser_ROLENullableWithAggregatesFilter<$PrismaModel> | $Enums.user_ROLE | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_ROLENullableFilter<$PrismaModel>
    _max?: NestedEnumuser_ROLENullableFilter<$PrismaModel>
  }

  export type kategoriCreateNestedOneWithoutBarangInput = {
    create?: XOR<kategoriCreateWithoutBarangInput, kategoriUncheckedCreateWithoutBarangInput>
    connectOrCreate?: kategoriCreateOrConnectWithoutBarangInput
    connect?: kategoriWhereUniqueInput
  }

  export type detail_transaksiCreateNestedManyWithoutBarangInput = {
    create?: XOR<detail_transaksiCreateWithoutBarangInput, detail_transaksiUncheckedCreateWithoutBarangInput> | detail_transaksiCreateWithoutBarangInput[] | detail_transaksiUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: detail_transaksiCreateOrConnectWithoutBarangInput | detail_transaksiCreateOrConnectWithoutBarangInput[]
    createMany?: detail_transaksiCreateManyBarangInputEnvelope
    connect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
  }

  export type detail_transaksiUncheckedCreateNestedManyWithoutBarangInput = {
    create?: XOR<detail_transaksiCreateWithoutBarangInput, detail_transaksiUncheckedCreateWithoutBarangInput> | detail_transaksiCreateWithoutBarangInput[] | detail_transaksiUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: detail_transaksiCreateOrConnectWithoutBarangInput | detail_transaksiCreateOrConnectWithoutBarangInput[]
    createMany?: detail_transaksiCreateManyBarangInputEnvelope
    connect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumbarang_STATUS_KETERSEDIAANFieldUpdateOperationsInput = {
    set?: $Enums.barang_STATUS_KETERSEDIAAN | null
  }

  export type kategoriUpdateOneWithoutBarangNestedInput = {
    create?: XOR<kategoriCreateWithoutBarangInput, kategoriUncheckedCreateWithoutBarangInput>
    connectOrCreate?: kategoriCreateOrConnectWithoutBarangInput
    upsert?: kategoriUpsertWithoutBarangInput
    disconnect?: kategoriWhereInput | boolean
    delete?: kategoriWhereInput | boolean
    connect?: kategoriWhereUniqueInput
    update?: XOR<XOR<kategoriUpdateToOneWithWhereWithoutBarangInput, kategoriUpdateWithoutBarangInput>, kategoriUncheckedUpdateWithoutBarangInput>
  }

  export type detail_transaksiUpdateManyWithoutBarangNestedInput = {
    create?: XOR<detail_transaksiCreateWithoutBarangInput, detail_transaksiUncheckedCreateWithoutBarangInput> | detail_transaksiCreateWithoutBarangInput[] | detail_transaksiUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: detail_transaksiCreateOrConnectWithoutBarangInput | detail_transaksiCreateOrConnectWithoutBarangInput[]
    upsert?: detail_transaksiUpsertWithWhereUniqueWithoutBarangInput | detail_transaksiUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: detail_transaksiCreateManyBarangInputEnvelope
    set?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    disconnect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    delete?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    connect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    update?: detail_transaksiUpdateWithWhereUniqueWithoutBarangInput | detail_transaksiUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: detail_transaksiUpdateManyWithWhereWithoutBarangInput | detail_transaksiUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: detail_transaksiScalarWhereInput | detail_transaksiScalarWhereInput[]
  }

  export type detail_transaksiUncheckedUpdateManyWithoutBarangNestedInput = {
    create?: XOR<detail_transaksiCreateWithoutBarangInput, detail_transaksiUncheckedCreateWithoutBarangInput> | detail_transaksiCreateWithoutBarangInput[] | detail_transaksiUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: detail_transaksiCreateOrConnectWithoutBarangInput | detail_transaksiCreateOrConnectWithoutBarangInput[]
    upsert?: detail_transaksiUpsertWithWhereUniqueWithoutBarangInput | detail_transaksiUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: detail_transaksiCreateManyBarangInputEnvelope
    set?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    disconnect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    delete?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    connect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    update?: detail_transaksiUpdateWithWhereUniqueWithoutBarangInput | detail_transaksiUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: detail_transaksiUpdateManyWithWhereWithoutBarangInput | detail_transaksiUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: detail_transaksiScalarWhereInput | detail_transaksiScalarWhereInput[]
  }

  export type barangCreateNestedOneWithoutDetail_transaksiInput = {
    create?: XOR<barangCreateWithoutDetail_transaksiInput, barangUncheckedCreateWithoutDetail_transaksiInput>
    connectOrCreate?: barangCreateOrConnectWithoutDetail_transaksiInput
    connect?: barangWhereUniqueInput
  }

  export type penjualanCreateNestedOneWithoutDetail_transaksiInput = {
    create?: XOR<penjualanCreateWithoutDetail_transaksiInput, penjualanUncheckedCreateWithoutDetail_transaksiInput>
    connectOrCreate?: penjualanCreateOrConnectWithoutDetail_transaksiInput
    connect?: penjualanWhereUniqueInput
  }

  export type barangUpdateOneWithoutDetail_transaksiNestedInput = {
    create?: XOR<barangCreateWithoutDetail_transaksiInput, barangUncheckedCreateWithoutDetail_transaksiInput>
    connectOrCreate?: barangCreateOrConnectWithoutDetail_transaksiInput
    upsert?: barangUpsertWithoutDetail_transaksiInput
    disconnect?: barangWhereInput | boolean
    delete?: barangWhereInput | boolean
    connect?: barangWhereUniqueInput
    update?: XOR<XOR<barangUpdateToOneWithWhereWithoutDetail_transaksiInput, barangUpdateWithoutDetail_transaksiInput>, barangUncheckedUpdateWithoutDetail_transaksiInput>
  }

  export type penjualanUpdateOneWithoutDetail_transaksiNestedInput = {
    create?: XOR<penjualanCreateWithoutDetail_transaksiInput, penjualanUncheckedCreateWithoutDetail_transaksiInput>
    connectOrCreate?: penjualanCreateOrConnectWithoutDetail_transaksiInput
    upsert?: penjualanUpsertWithoutDetail_transaksiInput
    disconnect?: penjualanWhereInput | boolean
    delete?: penjualanWhereInput | boolean
    connect?: penjualanWhereUniqueInput
    update?: XOR<XOR<penjualanUpdateToOneWithWhereWithoutDetail_transaksiInput, penjualanUpdateWithoutDetail_transaksiInput>, penjualanUncheckedUpdateWithoutDetail_transaksiInput>
  }

  export type barangCreateNestedManyWithoutKategoriInput = {
    create?: XOR<barangCreateWithoutKategoriInput, barangUncheckedCreateWithoutKategoriInput> | barangCreateWithoutKategoriInput[] | barangUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: barangCreateOrConnectWithoutKategoriInput | barangCreateOrConnectWithoutKategoriInput[]
    createMany?: barangCreateManyKategoriInputEnvelope
    connect?: barangWhereUniqueInput | barangWhereUniqueInput[]
  }

  export type barangUncheckedCreateNestedManyWithoutKategoriInput = {
    create?: XOR<barangCreateWithoutKategoriInput, barangUncheckedCreateWithoutKategoriInput> | barangCreateWithoutKategoriInput[] | barangUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: barangCreateOrConnectWithoutKategoriInput | barangCreateOrConnectWithoutKategoriInput[]
    createMany?: barangCreateManyKategoriInputEnvelope
    connect?: barangWhereUniqueInput | barangWhereUniqueInput[]
  }

  export type barangUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<barangCreateWithoutKategoriInput, barangUncheckedCreateWithoutKategoriInput> | barangCreateWithoutKategoriInput[] | barangUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: barangCreateOrConnectWithoutKategoriInput | barangCreateOrConnectWithoutKategoriInput[]
    upsert?: barangUpsertWithWhereUniqueWithoutKategoriInput | barangUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: barangCreateManyKategoriInputEnvelope
    set?: barangWhereUniqueInput | barangWhereUniqueInput[]
    disconnect?: barangWhereUniqueInput | barangWhereUniqueInput[]
    delete?: barangWhereUniqueInput | barangWhereUniqueInput[]
    connect?: barangWhereUniqueInput | barangWhereUniqueInput[]
    update?: barangUpdateWithWhereUniqueWithoutKategoriInput | barangUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: barangUpdateManyWithWhereWithoutKategoriInput | barangUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: barangScalarWhereInput | barangScalarWhereInput[]
  }

  export type barangUncheckedUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<barangCreateWithoutKategoriInput, barangUncheckedCreateWithoutKategoriInput> | barangCreateWithoutKategoriInput[] | barangUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: barangCreateOrConnectWithoutKategoriInput | barangCreateOrConnectWithoutKategoriInput[]
    upsert?: barangUpsertWithWhereUniqueWithoutKategoriInput | barangUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: barangCreateManyKategoriInputEnvelope
    set?: barangWhereUniqueInput | barangWhereUniqueInput[]
    disconnect?: barangWhereUniqueInput | barangWhereUniqueInput[]
    delete?: barangWhereUniqueInput | barangWhereUniqueInput[]
    connect?: barangWhereUniqueInput | barangWhereUniqueInput[]
    update?: barangUpdateWithWhereUniqueWithoutKategoriInput | barangUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: barangUpdateManyWithWhereWithoutKategoriInput | barangUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: barangScalarWhereInput | barangScalarWhereInput[]
  }

  export type penjualanCreateNestedManyWithoutPelangganInput = {
    create?: XOR<penjualanCreateWithoutPelangganInput, penjualanUncheckedCreateWithoutPelangganInput> | penjualanCreateWithoutPelangganInput[] | penjualanUncheckedCreateWithoutPelangganInput[]
    connectOrCreate?: penjualanCreateOrConnectWithoutPelangganInput | penjualanCreateOrConnectWithoutPelangganInput[]
    createMany?: penjualanCreateManyPelangganInputEnvelope
    connect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
  }

  export type penjualanUncheckedCreateNestedManyWithoutPelangganInput = {
    create?: XOR<penjualanCreateWithoutPelangganInput, penjualanUncheckedCreateWithoutPelangganInput> | penjualanCreateWithoutPelangganInput[] | penjualanUncheckedCreateWithoutPelangganInput[]
    connectOrCreate?: penjualanCreateOrConnectWithoutPelangganInput | penjualanCreateOrConnectWithoutPelangganInput[]
    createMany?: penjualanCreateManyPelangganInputEnvelope
    connect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
  }

  export type penjualanUpdateManyWithoutPelangganNestedInput = {
    create?: XOR<penjualanCreateWithoutPelangganInput, penjualanUncheckedCreateWithoutPelangganInput> | penjualanCreateWithoutPelangganInput[] | penjualanUncheckedCreateWithoutPelangganInput[]
    connectOrCreate?: penjualanCreateOrConnectWithoutPelangganInput | penjualanCreateOrConnectWithoutPelangganInput[]
    upsert?: penjualanUpsertWithWhereUniqueWithoutPelangganInput | penjualanUpsertWithWhereUniqueWithoutPelangganInput[]
    createMany?: penjualanCreateManyPelangganInputEnvelope
    set?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    disconnect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    delete?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    connect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    update?: penjualanUpdateWithWhereUniqueWithoutPelangganInput | penjualanUpdateWithWhereUniqueWithoutPelangganInput[]
    updateMany?: penjualanUpdateManyWithWhereWithoutPelangganInput | penjualanUpdateManyWithWhereWithoutPelangganInput[]
    deleteMany?: penjualanScalarWhereInput | penjualanScalarWhereInput[]
  }

  export type penjualanUncheckedUpdateManyWithoutPelangganNestedInput = {
    create?: XOR<penjualanCreateWithoutPelangganInput, penjualanUncheckedCreateWithoutPelangganInput> | penjualanCreateWithoutPelangganInput[] | penjualanUncheckedCreateWithoutPelangganInput[]
    connectOrCreate?: penjualanCreateOrConnectWithoutPelangganInput | penjualanCreateOrConnectWithoutPelangganInput[]
    upsert?: penjualanUpsertWithWhereUniqueWithoutPelangganInput | penjualanUpsertWithWhereUniqueWithoutPelangganInput[]
    createMany?: penjualanCreateManyPelangganInputEnvelope
    set?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    disconnect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    delete?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    connect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    update?: penjualanUpdateWithWhereUniqueWithoutPelangganInput | penjualanUpdateWithWhereUniqueWithoutPelangganInput[]
    updateMany?: penjualanUpdateManyWithWhereWithoutPelangganInput | penjualanUpdateManyWithWhereWithoutPelangganInput[]
    deleteMany?: penjualanScalarWhereInput | penjualanScalarWhereInput[]
  }

  export type penjualanCreateNestedManyWithoutPembayaranInput = {
    create?: XOR<penjualanCreateWithoutPembayaranInput, penjualanUncheckedCreateWithoutPembayaranInput> | penjualanCreateWithoutPembayaranInput[] | penjualanUncheckedCreateWithoutPembayaranInput[]
    connectOrCreate?: penjualanCreateOrConnectWithoutPembayaranInput | penjualanCreateOrConnectWithoutPembayaranInput[]
    createMany?: penjualanCreateManyPembayaranInputEnvelope
    connect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
  }

  export type penjualanUncheckedCreateNestedManyWithoutPembayaranInput = {
    create?: XOR<penjualanCreateWithoutPembayaranInput, penjualanUncheckedCreateWithoutPembayaranInput> | penjualanCreateWithoutPembayaranInput[] | penjualanUncheckedCreateWithoutPembayaranInput[]
    connectOrCreate?: penjualanCreateOrConnectWithoutPembayaranInput | penjualanCreateOrConnectWithoutPembayaranInput[]
    createMany?: penjualanCreateManyPembayaranInputEnvelope
    connect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
  }

  export type NullableEnumpembayaran_NAMA_PEMBAYARANFieldUpdateOperationsInput = {
    set?: $Enums.pembayaran_NAMA_PEMBAYARAN | null
  }

  export type penjualanUpdateManyWithoutPembayaranNestedInput = {
    create?: XOR<penjualanCreateWithoutPembayaranInput, penjualanUncheckedCreateWithoutPembayaranInput> | penjualanCreateWithoutPembayaranInput[] | penjualanUncheckedCreateWithoutPembayaranInput[]
    connectOrCreate?: penjualanCreateOrConnectWithoutPembayaranInput | penjualanCreateOrConnectWithoutPembayaranInput[]
    upsert?: penjualanUpsertWithWhereUniqueWithoutPembayaranInput | penjualanUpsertWithWhereUniqueWithoutPembayaranInput[]
    createMany?: penjualanCreateManyPembayaranInputEnvelope
    set?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    disconnect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    delete?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    connect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    update?: penjualanUpdateWithWhereUniqueWithoutPembayaranInput | penjualanUpdateWithWhereUniqueWithoutPembayaranInput[]
    updateMany?: penjualanUpdateManyWithWhereWithoutPembayaranInput | penjualanUpdateManyWithWhereWithoutPembayaranInput[]
    deleteMany?: penjualanScalarWhereInput | penjualanScalarWhereInput[]
  }

  export type penjualanUncheckedUpdateManyWithoutPembayaranNestedInput = {
    create?: XOR<penjualanCreateWithoutPembayaranInput, penjualanUncheckedCreateWithoutPembayaranInput> | penjualanCreateWithoutPembayaranInput[] | penjualanUncheckedCreateWithoutPembayaranInput[]
    connectOrCreate?: penjualanCreateOrConnectWithoutPembayaranInput | penjualanCreateOrConnectWithoutPembayaranInput[]
    upsert?: penjualanUpsertWithWhereUniqueWithoutPembayaranInput | penjualanUpsertWithWhereUniqueWithoutPembayaranInput[]
    createMany?: penjualanCreateManyPembayaranInputEnvelope
    set?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    disconnect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    delete?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    connect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    update?: penjualanUpdateWithWhereUniqueWithoutPembayaranInput | penjualanUpdateWithWhereUniqueWithoutPembayaranInput[]
    updateMany?: penjualanUpdateManyWithWhereWithoutPembayaranInput | penjualanUpdateManyWithWhereWithoutPembayaranInput[]
    deleteMany?: penjualanScalarWhereInput | penjualanScalarWhereInput[]
  }

  export type detail_transaksiCreateNestedManyWithoutPenjualanInput = {
    create?: XOR<detail_transaksiCreateWithoutPenjualanInput, detail_transaksiUncheckedCreateWithoutPenjualanInput> | detail_transaksiCreateWithoutPenjualanInput[] | detail_transaksiUncheckedCreateWithoutPenjualanInput[]
    connectOrCreate?: detail_transaksiCreateOrConnectWithoutPenjualanInput | detail_transaksiCreateOrConnectWithoutPenjualanInput[]
    createMany?: detail_transaksiCreateManyPenjualanInputEnvelope
    connect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
  }

  export type pelangganCreateNestedOneWithoutPenjualanInput = {
    create?: XOR<pelangganCreateWithoutPenjualanInput, pelangganUncheckedCreateWithoutPenjualanInput>
    connectOrCreate?: pelangganCreateOrConnectWithoutPenjualanInput
    connect?: pelangganWhereUniqueInput
  }

  export type pembayaranCreateNestedOneWithoutPenjualanInput = {
    create?: XOR<pembayaranCreateWithoutPenjualanInput, pembayaranUncheckedCreateWithoutPenjualanInput>
    connectOrCreate?: pembayaranCreateOrConnectWithoutPenjualanInput
    connect?: pembayaranWhereUniqueInput
  }

  export type userCreateNestedOneWithoutPenjualanInput = {
    create?: XOR<userCreateWithoutPenjualanInput, userUncheckedCreateWithoutPenjualanInput>
    connectOrCreate?: userCreateOrConnectWithoutPenjualanInput
    connect?: userWhereUniqueInput
  }

  export type detail_transaksiUncheckedCreateNestedManyWithoutPenjualanInput = {
    create?: XOR<detail_transaksiCreateWithoutPenjualanInput, detail_transaksiUncheckedCreateWithoutPenjualanInput> | detail_transaksiCreateWithoutPenjualanInput[] | detail_transaksiUncheckedCreateWithoutPenjualanInput[]
    connectOrCreate?: detail_transaksiCreateOrConnectWithoutPenjualanInput | detail_transaksiCreateOrConnectWithoutPenjualanInput[]
    createMany?: detail_transaksiCreateManyPenjualanInputEnvelope
    connect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
  }

  export type NullableEnumpenjualan_STATUS_TRANSAKSIFieldUpdateOperationsInput = {
    set?: $Enums.penjualan_STATUS_TRANSAKSI | null
  }

  export type detail_transaksiUpdateManyWithoutPenjualanNestedInput = {
    create?: XOR<detail_transaksiCreateWithoutPenjualanInput, detail_transaksiUncheckedCreateWithoutPenjualanInput> | detail_transaksiCreateWithoutPenjualanInput[] | detail_transaksiUncheckedCreateWithoutPenjualanInput[]
    connectOrCreate?: detail_transaksiCreateOrConnectWithoutPenjualanInput | detail_transaksiCreateOrConnectWithoutPenjualanInput[]
    upsert?: detail_transaksiUpsertWithWhereUniqueWithoutPenjualanInput | detail_transaksiUpsertWithWhereUniqueWithoutPenjualanInput[]
    createMany?: detail_transaksiCreateManyPenjualanInputEnvelope
    set?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    disconnect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    delete?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    connect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    update?: detail_transaksiUpdateWithWhereUniqueWithoutPenjualanInput | detail_transaksiUpdateWithWhereUniqueWithoutPenjualanInput[]
    updateMany?: detail_transaksiUpdateManyWithWhereWithoutPenjualanInput | detail_transaksiUpdateManyWithWhereWithoutPenjualanInput[]
    deleteMany?: detail_transaksiScalarWhereInput | detail_transaksiScalarWhereInput[]
  }

  export type pelangganUpdateOneWithoutPenjualanNestedInput = {
    create?: XOR<pelangganCreateWithoutPenjualanInput, pelangganUncheckedCreateWithoutPenjualanInput>
    connectOrCreate?: pelangganCreateOrConnectWithoutPenjualanInput
    upsert?: pelangganUpsertWithoutPenjualanInput
    disconnect?: pelangganWhereInput | boolean
    delete?: pelangganWhereInput | boolean
    connect?: pelangganWhereUniqueInput
    update?: XOR<XOR<pelangganUpdateToOneWithWhereWithoutPenjualanInput, pelangganUpdateWithoutPenjualanInput>, pelangganUncheckedUpdateWithoutPenjualanInput>
  }

  export type pembayaranUpdateOneWithoutPenjualanNestedInput = {
    create?: XOR<pembayaranCreateWithoutPenjualanInput, pembayaranUncheckedCreateWithoutPenjualanInput>
    connectOrCreate?: pembayaranCreateOrConnectWithoutPenjualanInput
    upsert?: pembayaranUpsertWithoutPenjualanInput
    disconnect?: pembayaranWhereInput | boolean
    delete?: pembayaranWhereInput | boolean
    connect?: pembayaranWhereUniqueInput
    update?: XOR<XOR<pembayaranUpdateToOneWithWhereWithoutPenjualanInput, pembayaranUpdateWithoutPenjualanInput>, pembayaranUncheckedUpdateWithoutPenjualanInput>
  }

  export type userUpdateOneWithoutPenjualanNestedInput = {
    create?: XOR<userCreateWithoutPenjualanInput, userUncheckedCreateWithoutPenjualanInput>
    connectOrCreate?: userCreateOrConnectWithoutPenjualanInput
    upsert?: userUpsertWithoutPenjualanInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPenjualanInput, userUpdateWithoutPenjualanInput>, userUncheckedUpdateWithoutPenjualanInput>
  }

  export type detail_transaksiUncheckedUpdateManyWithoutPenjualanNestedInput = {
    create?: XOR<detail_transaksiCreateWithoutPenjualanInput, detail_transaksiUncheckedCreateWithoutPenjualanInput> | detail_transaksiCreateWithoutPenjualanInput[] | detail_transaksiUncheckedCreateWithoutPenjualanInput[]
    connectOrCreate?: detail_transaksiCreateOrConnectWithoutPenjualanInput | detail_transaksiCreateOrConnectWithoutPenjualanInput[]
    upsert?: detail_transaksiUpsertWithWhereUniqueWithoutPenjualanInput | detail_transaksiUpsertWithWhereUniqueWithoutPenjualanInput[]
    createMany?: detail_transaksiCreateManyPenjualanInputEnvelope
    set?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    disconnect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    delete?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    connect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    update?: detail_transaksiUpdateWithWhereUniqueWithoutPenjualanInput | detail_transaksiUpdateWithWhereUniqueWithoutPenjualanInput[]
    updateMany?: detail_transaksiUpdateManyWithWhereWithoutPenjualanInput | detail_transaksiUpdateManyWithWhereWithoutPenjualanInput[]
    deleteMany?: detail_transaksiScalarWhereInput | detail_transaksiScalarWhereInput[]
  }

  export type penjualanCreateNestedManyWithoutUserInput = {
    create?: XOR<penjualanCreateWithoutUserInput, penjualanUncheckedCreateWithoutUserInput> | penjualanCreateWithoutUserInput[] | penjualanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: penjualanCreateOrConnectWithoutUserInput | penjualanCreateOrConnectWithoutUserInput[]
    createMany?: penjualanCreateManyUserInputEnvelope
    connect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
  }

  export type penjualanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<penjualanCreateWithoutUserInput, penjualanUncheckedCreateWithoutUserInput> | penjualanCreateWithoutUserInput[] | penjualanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: penjualanCreateOrConnectWithoutUserInput | penjualanCreateOrConnectWithoutUserInput[]
    createMany?: penjualanCreateManyUserInputEnvelope
    connect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
  }

  export type NullableEnumuser_ROLEFieldUpdateOperationsInput = {
    set?: $Enums.user_ROLE | null
  }

  export type penjualanUpdateManyWithoutUserNestedInput = {
    create?: XOR<penjualanCreateWithoutUserInput, penjualanUncheckedCreateWithoutUserInput> | penjualanCreateWithoutUserInput[] | penjualanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: penjualanCreateOrConnectWithoutUserInput | penjualanCreateOrConnectWithoutUserInput[]
    upsert?: penjualanUpsertWithWhereUniqueWithoutUserInput | penjualanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: penjualanCreateManyUserInputEnvelope
    set?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    disconnect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    delete?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    connect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    update?: penjualanUpdateWithWhereUniqueWithoutUserInput | penjualanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: penjualanUpdateManyWithWhereWithoutUserInput | penjualanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: penjualanScalarWhereInput | penjualanScalarWhereInput[]
  }

  export type penjualanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<penjualanCreateWithoutUserInput, penjualanUncheckedCreateWithoutUserInput> | penjualanCreateWithoutUserInput[] | penjualanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: penjualanCreateOrConnectWithoutUserInput | penjualanCreateOrConnectWithoutUserInput[]
    upsert?: penjualanUpsertWithWhereUniqueWithoutUserInput | penjualanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: penjualanCreateManyUserInputEnvelope
    set?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    disconnect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    delete?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    connect?: penjualanWhereUniqueInput | penjualanWhereUniqueInput[]
    update?: penjualanUpdateWithWhereUniqueWithoutUserInput | penjualanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: penjualanUpdateManyWithWhereWithoutUserInput | penjualanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: penjualanScalarWhereInput | penjualanScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumbarang_STATUS_KETERSEDIAANNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.barang_STATUS_KETERSEDIAAN | Enumbarang_STATUS_KETERSEDIAANFieldRefInput<$PrismaModel> | null
    in?: $Enums.barang_STATUS_KETERSEDIAAN[] | null
    notIn?: $Enums.barang_STATUS_KETERSEDIAAN[] | null
    not?: NestedEnumbarang_STATUS_KETERSEDIAANNullableFilter<$PrismaModel> | $Enums.barang_STATUS_KETERSEDIAAN | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumbarang_STATUS_KETERSEDIAANNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.barang_STATUS_KETERSEDIAAN | Enumbarang_STATUS_KETERSEDIAANFieldRefInput<$PrismaModel> | null
    in?: $Enums.barang_STATUS_KETERSEDIAAN[] | null
    notIn?: $Enums.barang_STATUS_KETERSEDIAAN[] | null
    not?: NestedEnumbarang_STATUS_KETERSEDIAANNullableWithAggregatesFilter<$PrismaModel> | $Enums.barang_STATUS_KETERSEDIAAN | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumbarang_STATUS_KETERSEDIAANNullableFilter<$PrismaModel>
    _max?: NestedEnumbarang_STATUS_KETERSEDIAANNullableFilter<$PrismaModel>
  }

  export type NestedEnumpembayaran_NAMA_PEMBAYARANNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.pembayaran_NAMA_PEMBAYARAN | Enumpembayaran_NAMA_PEMBAYARANFieldRefInput<$PrismaModel> | null
    in?: $Enums.pembayaran_NAMA_PEMBAYARAN[] | null
    notIn?: $Enums.pembayaran_NAMA_PEMBAYARAN[] | null
    not?: NestedEnumpembayaran_NAMA_PEMBAYARANNullableFilter<$PrismaModel> | $Enums.pembayaran_NAMA_PEMBAYARAN | null
  }

  export type NestedEnumpembayaran_NAMA_PEMBAYARANNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pembayaran_NAMA_PEMBAYARAN | Enumpembayaran_NAMA_PEMBAYARANFieldRefInput<$PrismaModel> | null
    in?: $Enums.pembayaran_NAMA_PEMBAYARAN[] | null
    notIn?: $Enums.pembayaran_NAMA_PEMBAYARAN[] | null
    not?: NestedEnumpembayaran_NAMA_PEMBAYARANNullableWithAggregatesFilter<$PrismaModel> | $Enums.pembayaran_NAMA_PEMBAYARAN | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpembayaran_NAMA_PEMBAYARANNullableFilter<$PrismaModel>
    _max?: NestedEnumpembayaran_NAMA_PEMBAYARANNullableFilter<$PrismaModel>
  }

  export type NestedEnumpenjualan_STATUS_TRANSAKSINullableFilter<$PrismaModel = never> = {
    equals?: $Enums.penjualan_STATUS_TRANSAKSI | Enumpenjualan_STATUS_TRANSAKSIFieldRefInput<$PrismaModel> | null
    in?: $Enums.penjualan_STATUS_TRANSAKSI[] | null
    notIn?: $Enums.penjualan_STATUS_TRANSAKSI[] | null
    not?: NestedEnumpenjualan_STATUS_TRANSAKSINullableFilter<$PrismaModel> | $Enums.penjualan_STATUS_TRANSAKSI | null
  }

  export type NestedEnumpenjualan_STATUS_TRANSAKSINullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.penjualan_STATUS_TRANSAKSI | Enumpenjualan_STATUS_TRANSAKSIFieldRefInput<$PrismaModel> | null
    in?: $Enums.penjualan_STATUS_TRANSAKSI[] | null
    notIn?: $Enums.penjualan_STATUS_TRANSAKSI[] | null
    not?: NestedEnumpenjualan_STATUS_TRANSAKSINullableWithAggregatesFilter<$PrismaModel> | $Enums.penjualan_STATUS_TRANSAKSI | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpenjualan_STATUS_TRANSAKSINullableFilter<$PrismaModel>
    _max?: NestedEnumpenjualan_STATUS_TRANSAKSINullableFilter<$PrismaModel>
  }

  export type NestedEnumuser_ROLENullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_ROLE | Enumuser_ROLEFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_ROLE[] | null
    notIn?: $Enums.user_ROLE[] | null
    not?: NestedEnumuser_ROLENullableFilter<$PrismaModel> | $Enums.user_ROLE | null
  }

  export type NestedEnumuser_ROLENullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_ROLE | Enumuser_ROLEFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_ROLE[] | null
    notIn?: $Enums.user_ROLE[] | null
    not?: NestedEnumuser_ROLENullableWithAggregatesFilter<$PrismaModel> | $Enums.user_ROLE | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_ROLENullableFilter<$PrismaModel>
    _max?: NestedEnumuser_ROLENullableFilter<$PrismaModel>
  }

  export type kategoriCreateWithoutBarangInput = {
    ID_KATEGORI: number
    NAMA_KATEGORI?: string | null
  }

  export type kategoriUncheckedCreateWithoutBarangInput = {
    ID_KATEGORI: number
    NAMA_KATEGORI?: string | null
  }

  export type kategoriCreateOrConnectWithoutBarangInput = {
    where: kategoriWhereUniqueInput
    create: XOR<kategoriCreateWithoutBarangInput, kategoriUncheckedCreateWithoutBarangInput>
  }

  export type detail_transaksiCreateWithoutBarangInput = {
    ID_DETAILTRANSAKSI: number
    JUMLAH?: number | null
    HARGA_SATUAN?: number | null
    SUB_TOTAL?: number | null
    penjualan?: penjualanCreateNestedOneWithoutDetail_transaksiInput
  }

  export type detail_transaksiUncheckedCreateWithoutBarangInput = {
    ID_DETAILTRANSAKSI: number
    ID_PENJUALAN?: number | null
    JUMLAH?: number | null
    HARGA_SATUAN?: number | null
    SUB_TOTAL?: number | null
  }

  export type detail_transaksiCreateOrConnectWithoutBarangInput = {
    where: detail_transaksiWhereUniqueInput
    create: XOR<detail_transaksiCreateWithoutBarangInput, detail_transaksiUncheckedCreateWithoutBarangInput>
  }

  export type detail_transaksiCreateManyBarangInputEnvelope = {
    data: detail_transaksiCreateManyBarangInput | detail_transaksiCreateManyBarangInput[]
    skipDuplicates?: boolean
  }

  export type kategoriUpsertWithoutBarangInput = {
    update: XOR<kategoriUpdateWithoutBarangInput, kategoriUncheckedUpdateWithoutBarangInput>
    create: XOR<kategoriCreateWithoutBarangInput, kategoriUncheckedCreateWithoutBarangInput>
    where?: kategoriWhereInput
  }

  export type kategoriUpdateToOneWithWhereWithoutBarangInput = {
    where?: kategoriWhereInput
    data: XOR<kategoriUpdateWithoutBarangInput, kategoriUncheckedUpdateWithoutBarangInput>
  }

  export type kategoriUpdateWithoutBarangInput = {
    ID_KATEGORI?: IntFieldUpdateOperationsInput | number
    NAMA_KATEGORI?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type kategoriUncheckedUpdateWithoutBarangInput = {
    ID_KATEGORI?: IntFieldUpdateOperationsInput | number
    NAMA_KATEGORI?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detail_transaksiUpsertWithWhereUniqueWithoutBarangInput = {
    where: detail_transaksiWhereUniqueInput
    update: XOR<detail_transaksiUpdateWithoutBarangInput, detail_transaksiUncheckedUpdateWithoutBarangInput>
    create: XOR<detail_transaksiCreateWithoutBarangInput, detail_transaksiUncheckedCreateWithoutBarangInput>
  }

  export type detail_transaksiUpdateWithWhereUniqueWithoutBarangInput = {
    where: detail_transaksiWhereUniqueInput
    data: XOR<detail_transaksiUpdateWithoutBarangInput, detail_transaksiUncheckedUpdateWithoutBarangInput>
  }

  export type detail_transaksiUpdateManyWithWhereWithoutBarangInput = {
    where: detail_transaksiScalarWhereInput
    data: XOR<detail_transaksiUpdateManyMutationInput, detail_transaksiUncheckedUpdateManyWithoutBarangInput>
  }

  export type detail_transaksiScalarWhereInput = {
    AND?: detail_transaksiScalarWhereInput | detail_transaksiScalarWhereInput[]
    OR?: detail_transaksiScalarWhereInput[]
    NOT?: detail_transaksiScalarWhereInput | detail_transaksiScalarWhereInput[]
    ID_DETAILTRANSAKSI?: IntFilter<"detail_transaksi"> | number
    ID_PENJUALAN?: IntNullableFilter<"detail_transaksi"> | number | null
    KODE_BARANG?: IntNullableFilter<"detail_transaksi"> | number | null
    JUMLAH?: IntNullableFilter<"detail_transaksi"> | number | null
    HARGA_SATUAN?: IntNullableFilter<"detail_transaksi"> | number | null
    SUB_TOTAL?: IntNullableFilter<"detail_transaksi"> | number | null
  }

  export type barangCreateWithoutDetail_transaksiInput = {
    KODE_BARANG: number
    NAMA_BARANG?: string | null
    GAMBAR_BARANG?: string | null
    HARGA_BARANG?: number | null
    KETERANGAN_BARANG?: string | null
    STOK_BARANG?: number | null
    EXP_BARANG?: Date | string | null
    STATUS_KETERSEDIAAN?: $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: string | null
    kategori?: kategoriCreateNestedOneWithoutBarangInput
  }

  export type barangUncheckedCreateWithoutDetail_transaksiInput = {
    KODE_BARANG: number
    ID_KATEGORI?: number | null
    NAMA_BARANG?: string | null
    GAMBAR_BARANG?: string | null
    HARGA_BARANG?: number | null
    KETERANGAN_BARANG?: string | null
    STOK_BARANG?: number | null
    EXP_BARANG?: Date | string | null
    STATUS_KETERSEDIAAN?: $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: string | null
  }

  export type barangCreateOrConnectWithoutDetail_transaksiInput = {
    where: barangWhereUniqueInput
    create: XOR<barangCreateWithoutDetail_transaksiInput, barangUncheckedCreateWithoutDetail_transaksiInput>
  }

  export type penjualanCreateWithoutDetail_transaksiInput = {
    ID_PENJUALAN: number
    TANGGAL?: Date | string | null
    TOTAL?: number | null
    STATUS_TRANSAKSI?: $Enums.penjualan_STATUS_TRANSAKSI | null
    pelanggan?: pelangganCreateNestedOneWithoutPenjualanInput
    pembayaran?: pembayaranCreateNestedOneWithoutPenjualanInput
    user?: userCreateNestedOneWithoutPenjualanInput
  }

  export type penjualanUncheckedCreateWithoutDetail_transaksiInput = {
    ID_PENJUALAN: number
    ID_PELANGGAN?: number | null
    ID_PEMBAYARAN?: number | null
    ID_USER?: number | null
    TANGGAL?: Date | string | null
    TOTAL?: number | null
    STATUS_TRANSAKSI?: $Enums.penjualan_STATUS_TRANSAKSI | null
  }

  export type penjualanCreateOrConnectWithoutDetail_transaksiInput = {
    where: penjualanWhereUniqueInput
    create: XOR<penjualanCreateWithoutDetail_transaksiInput, penjualanUncheckedCreateWithoutDetail_transaksiInput>
  }

  export type barangUpsertWithoutDetail_transaksiInput = {
    update: XOR<barangUpdateWithoutDetail_transaksiInput, barangUncheckedUpdateWithoutDetail_transaksiInput>
    create: XOR<barangCreateWithoutDetail_transaksiInput, barangUncheckedCreateWithoutDetail_transaksiInput>
    where?: barangWhereInput
  }

  export type barangUpdateToOneWithWhereWithoutDetail_transaksiInput = {
    where?: barangWhereInput
    data: XOR<barangUpdateWithoutDetail_transaksiInput, barangUncheckedUpdateWithoutDetail_transaksiInput>
  }

  export type barangUpdateWithoutDetail_transaksiInput = {
    KODE_BARANG?: IntFieldUpdateOperationsInput | number
    NAMA_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    GAMBAR_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    HARGA_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    KETERANGAN_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    STOK_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    EXP_BARANG?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    STATUS_KETERSEDIAAN?: NullableEnumbarang_STATUS_KETERSEDIAANFieldUpdateOperationsInput | $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: NullableStringFieldUpdateOperationsInput | string | null
    kategori?: kategoriUpdateOneWithoutBarangNestedInput
  }

  export type barangUncheckedUpdateWithoutDetail_transaksiInput = {
    KODE_BARANG?: IntFieldUpdateOperationsInput | number
    ID_KATEGORI?: NullableIntFieldUpdateOperationsInput | number | null
    NAMA_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    GAMBAR_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    HARGA_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    KETERANGAN_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    STOK_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    EXP_BARANG?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    STATUS_KETERSEDIAAN?: NullableEnumbarang_STATUS_KETERSEDIAANFieldUpdateOperationsInput | $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type penjualanUpsertWithoutDetail_transaksiInput = {
    update: XOR<penjualanUpdateWithoutDetail_transaksiInput, penjualanUncheckedUpdateWithoutDetail_transaksiInput>
    create: XOR<penjualanCreateWithoutDetail_transaksiInput, penjualanUncheckedCreateWithoutDetail_transaksiInput>
    where?: penjualanWhereInput
  }

  export type penjualanUpdateToOneWithWhereWithoutDetail_transaksiInput = {
    where?: penjualanWhereInput
    data: XOR<penjualanUpdateWithoutDetail_transaksiInput, penjualanUncheckedUpdateWithoutDetail_transaksiInput>
  }

  export type penjualanUpdateWithoutDetail_transaksiInput = {
    ID_PENJUALAN?: IntFieldUpdateOperationsInput | number
    TANGGAL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
    STATUS_TRANSAKSI?: NullableEnumpenjualan_STATUS_TRANSAKSIFieldUpdateOperationsInput | $Enums.penjualan_STATUS_TRANSAKSI | null
    pelanggan?: pelangganUpdateOneWithoutPenjualanNestedInput
    pembayaran?: pembayaranUpdateOneWithoutPenjualanNestedInput
    user?: userUpdateOneWithoutPenjualanNestedInput
  }

  export type penjualanUncheckedUpdateWithoutDetail_transaksiInput = {
    ID_PENJUALAN?: IntFieldUpdateOperationsInput | number
    ID_PELANGGAN?: NullableIntFieldUpdateOperationsInput | number | null
    ID_PEMBAYARAN?: NullableIntFieldUpdateOperationsInput | number | null
    ID_USER?: NullableIntFieldUpdateOperationsInput | number | null
    TANGGAL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
    STATUS_TRANSAKSI?: NullableEnumpenjualan_STATUS_TRANSAKSIFieldUpdateOperationsInput | $Enums.penjualan_STATUS_TRANSAKSI | null
  }

  export type barangCreateWithoutKategoriInput = {
    KODE_BARANG: number
    NAMA_BARANG?: string | null
    GAMBAR_BARANG?: string | null
    HARGA_BARANG?: number | null
    KETERANGAN_BARANG?: string | null
    STOK_BARANG?: number | null
    EXP_BARANG?: Date | string | null
    STATUS_KETERSEDIAAN?: $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: string | null
    detail_transaksi?: detail_transaksiCreateNestedManyWithoutBarangInput
  }

  export type barangUncheckedCreateWithoutKategoriInput = {
    KODE_BARANG: number
    NAMA_BARANG?: string | null
    GAMBAR_BARANG?: string | null
    HARGA_BARANG?: number | null
    KETERANGAN_BARANG?: string | null
    STOK_BARANG?: number | null
    EXP_BARANG?: Date | string | null
    STATUS_KETERSEDIAAN?: $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: string | null
    detail_transaksi?: detail_transaksiUncheckedCreateNestedManyWithoutBarangInput
  }

  export type barangCreateOrConnectWithoutKategoriInput = {
    where: barangWhereUniqueInput
    create: XOR<barangCreateWithoutKategoriInput, barangUncheckedCreateWithoutKategoriInput>
  }

  export type barangCreateManyKategoriInputEnvelope = {
    data: barangCreateManyKategoriInput | barangCreateManyKategoriInput[]
    skipDuplicates?: boolean
  }

  export type barangUpsertWithWhereUniqueWithoutKategoriInput = {
    where: barangWhereUniqueInput
    update: XOR<barangUpdateWithoutKategoriInput, barangUncheckedUpdateWithoutKategoriInput>
    create: XOR<barangCreateWithoutKategoriInput, barangUncheckedCreateWithoutKategoriInput>
  }

  export type barangUpdateWithWhereUniqueWithoutKategoriInput = {
    where: barangWhereUniqueInput
    data: XOR<barangUpdateWithoutKategoriInput, barangUncheckedUpdateWithoutKategoriInput>
  }

  export type barangUpdateManyWithWhereWithoutKategoriInput = {
    where: barangScalarWhereInput
    data: XOR<barangUpdateManyMutationInput, barangUncheckedUpdateManyWithoutKategoriInput>
  }

  export type barangScalarWhereInput = {
    AND?: barangScalarWhereInput | barangScalarWhereInput[]
    OR?: barangScalarWhereInput[]
    NOT?: barangScalarWhereInput | barangScalarWhereInput[]
    KODE_BARANG?: IntFilter<"barang"> | number
    ID_KATEGORI?: IntNullableFilter<"barang"> | number | null
    NAMA_BARANG?: StringNullableFilter<"barang"> | string | null
    GAMBAR_BARANG?: StringNullableFilter<"barang"> | string | null
    HARGA_BARANG?: IntNullableFilter<"barang"> | number | null
    KETERANGAN_BARANG?: StringNullableFilter<"barang"> | string | null
    STOK_BARANG?: IntNullableFilter<"barang"> | number | null
    EXP_BARANG?: DateTimeNullableFilter<"barang"> | Date | string | null
    STATUS_KETERSEDIAAN?: Enumbarang_STATUS_KETERSEDIAANNullableFilter<"barang"> | $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: StringNullableFilter<"barang"> | string | null
  }

  export type penjualanCreateWithoutPelangganInput = {
    ID_PENJUALAN: number
    TANGGAL?: Date | string | null
    TOTAL?: number | null
    STATUS_TRANSAKSI?: $Enums.penjualan_STATUS_TRANSAKSI | null
    detail_transaksi?: detail_transaksiCreateNestedManyWithoutPenjualanInput
    pembayaran?: pembayaranCreateNestedOneWithoutPenjualanInput
    user?: userCreateNestedOneWithoutPenjualanInput
  }

  export type penjualanUncheckedCreateWithoutPelangganInput = {
    ID_PENJUALAN: number
    ID_PEMBAYARAN?: number | null
    ID_USER?: number | null
    TANGGAL?: Date | string | null
    TOTAL?: number | null
    STATUS_TRANSAKSI?: $Enums.penjualan_STATUS_TRANSAKSI | null
    detail_transaksi?: detail_transaksiUncheckedCreateNestedManyWithoutPenjualanInput
  }

  export type penjualanCreateOrConnectWithoutPelangganInput = {
    where: penjualanWhereUniqueInput
    create: XOR<penjualanCreateWithoutPelangganInput, penjualanUncheckedCreateWithoutPelangganInput>
  }

  export type penjualanCreateManyPelangganInputEnvelope = {
    data: penjualanCreateManyPelangganInput | penjualanCreateManyPelangganInput[]
    skipDuplicates?: boolean
  }

  export type penjualanUpsertWithWhereUniqueWithoutPelangganInput = {
    where: penjualanWhereUniqueInput
    update: XOR<penjualanUpdateWithoutPelangganInput, penjualanUncheckedUpdateWithoutPelangganInput>
    create: XOR<penjualanCreateWithoutPelangganInput, penjualanUncheckedCreateWithoutPelangganInput>
  }

  export type penjualanUpdateWithWhereUniqueWithoutPelangganInput = {
    where: penjualanWhereUniqueInput
    data: XOR<penjualanUpdateWithoutPelangganInput, penjualanUncheckedUpdateWithoutPelangganInput>
  }

  export type penjualanUpdateManyWithWhereWithoutPelangganInput = {
    where: penjualanScalarWhereInput
    data: XOR<penjualanUpdateManyMutationInput, penjualanUncheckedUpdateManyWithoutPelangganInput>
  }

  export type penjualanScalarWhereInput = {
    AND?: penjualanScalarWhereInput | penjualanScalarWhereInput[]
    OR?: penjualanScalarWhereInput[]
    NOT?: penjualanScalarWhereInput | penjualanScalarWhereInput[]
    ID_PENJUALAN?: IntFilter<"penjualan"> | number
    ID_PELANGGAN?: IntNullableFilter<"penjualan"> | number | null
    ID_PEMBAYARAN?: IntNullableFilter<"penjualan"> | number | null
    ID_USER?: IntNullableFilter<"penjualan"> | number | null
    TANGGAL?: DateTimeNullableFilter<"penjualan"> | Date | string | null
    TOTAL?: IntNullableFilter<"penjualan"> | number | null
    STATUS_TRANSAKSI?: Enumpenjualan_STATUS_TRANSAKSINullableFilter<"penjualan"> | $Enums.penjualan_STATUS_TRANSAKSI | null
  }

  export type penjualanCreateWithoutPembayaranInput = {
    ID_PENJUALAN: number
    TANGGAL?: Date | string | null
    TOTAL?: number | null
    STATUS_TRANSAKSI?: $Enums.penjualan_STATUS_TRANSAKSI | null
    detail_transaksi?: detail_transaksiCreateNestedManyWithoutPenjualanInput
    pelanggan?: pelangganCreateNestedOneWithoutPenjualanInput
    user?: userCreateNestedOneWithoutPenjualanInput
  }

  export type penjualanUncheckedCreateWithoutPembayaranInput = {
    ID_PENJUALAN: number
    ID_PELANGGAN?: number | null
    ID_USER?: number | null
    TANGGAL?: Date | string | null
    TOTAL?: number | null
    STATUS_TRANSAKSI?: $Enums.penjualan_STATUS_TRANSAKSI | null
    detail_transaksi?: detail_transaksiUncheckedCreateNestedManyWithoutPenjualanInput
  }

  export type penjualanCreateOrConnectWithoutPembayaranInput = {
    where: penjualanWhereUniqueInput
    create: XOR<penjualanCreateWithoutPembayaranInput, penjualanUncheckedCreateWithoutPembayaranInput>
  }

  export type penjualanCreateManyPembayaranInputEnvelope = {
    data: penjualanCreateManyPembayaranInput | penjualanCreateManyPembayaranInput[]
    skipDuplicates?: boolean
  }

  export type penjualanUpsertWithWhereUniqueWithoutPembayaranInput = {
    where: penjualanWhereUniqueInput
    update: XOR<penjualanUpdateWithoutPembayaranInput, penjualanUncheckedUpdateWithoutPembayaranInput>
    create: XOR<penjualanCreateWithoutPembayaranInput, penjualanUncheckedCreateWithoutPembayaranInput>
  }

  export type penjualanUpdateWithWhereUniqueWithoutPembayaranInput = {
    where: penjualanWhereUniqueInput
    data: XOR<penjualanUpdateWithoutPembayaranInput, penjualanUncheckedUpdateWithoutPembayaranInput>
  }

  export type penjualanUpdateManyWithWhereWithoutPembayaranInput = {
    where: penjualanScalarWhereInput
    data: XOR<penjualanUpdateManyMutationInput, penjualanUncheckedUpdateManyWithoutPembayaranInput>
  }

  export type detail_transaksiCreateWithoutPenjualanInput = {
    ID_DETAILTRANSAKSI: number
    JUMLAH?: number | null
    HARGA_SATUAN?: number | null
    SUB_TOTAL?: number | null
    barang?: barangCreateNestedOneWithoutDetail_transaksiInput
  }

  export type detail_transaksiUncheckedCreateWithoutPenjualanInput = {
    ID_DETAILTRANSAKSI: number
    KODE_BARANG?: number | null
    JUMLAH?: number | null
    HARGA_SATUAN?: number | null
    SUB_TOTAL?: number | null
  }

  export type detail_transaksiCreateOrConnectWithoutPenjualanInput = {
    where: detail_transaksiWhereUniqueInput
    create: XOR<detail_transaksiCreateWithoutPenjualanInput, detail_transaksiUncheckedCreateWithoutPenjualanInput>
  }

  export type detail_transaksiCreateManyPenjualanInputEnvelope = {
    data: detail_transaksiCreateManyPenjualanInput | detail_transaksiCreateManyPenjualanInput[]
    skipDuplicates?: boolean
  }

  export type pelangganCreateWithoutPenjualanInput = {
    ID_PELANGGAN: number
    NAMA_PELANGGAN?: string | null
    USERNAME_PELANGGAN?: string | null
    PASSWORD_PELANGGAN?: string | null
    ALAMAT_PELANGGAN?: string | null
  }

  export type pelangganUncheckedCreateWithoutPenjualanInput = {
    ID_PELANGGAN: number
    NAMA_PELANGGAN?: string | null
    USERNAME_PELANGGAN?: string | null
    PASSWORD_PELANGGAN?: string | null
    ALAMAT_PELANGGAN?: string | null
  }

  export type pelangganCreateOrConnectWithoutPenjualanInput = {
    where: pelangganWhereUniqueInput
    create: XOR<pelangganCreateWithoutPenjualanInput, pelangganUncheckedCreateWithoutPenjualanInput>
  }

  export type pembayaranCreateWithoutPenjualanInput = {
    ID_PEMBAYARAN: number
    NAMA_PEMBAYARAN?: $Enums.pembayaran_NAMA_PEMBAYARAN | null
  }

  export type pembayaranUncheckedCreateWithoutPenjualanInput = {
    ID_PEMBAYARAN: number
    NAMA_PEMBAYARAN?: $Enums.pembayaran_NAMA_PEMBAYARAN | null
  }

  export type pembayaranCreateOrConnectWithoutPenjualanInput = {
    where: pembayaranWhereUniqueInput
    create: XOR<pembayaranCreateWithoutPenjualanInput, pembayaranUncheckedCreateWithoutPenjualanInput>
  }

  export type userCreateWithoutPenjualanInput = {
    ID_USER: number
    NAMA_USER?: string | null
    EMAIL_USER?: string | null
    USERNAME_USER?: string | null
    PASSWORD_USER?: string | null
    ROLE?: $Enums.user_ROLE | null
    ALAMAT_USER?: string | null
  }

  export type userUncheckedCreateWithoutPenjualanInput = {
    ID_USER: number
    NAMA_USER?: string | null
    EMAIL_USER?: string | null
    USERNAME_USER?: string | null
    PASSWORD_USER?: string | null
    ROLE?: $Enums.user_ROLE | null
    ALAMAT_USER?: string | null
  }

  export type userCreateOrConnectWithoutPenjualanInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPenjualanInput, userUncheckedCreateWithoutPenjualanInput>
  }

  export type detail_transaksiUpsertWithWhereUniqueWithoutPenjualanInput = {
    where: detail_transaksiWhereUniqueInput
    update: XOR<detail_transaksiUpdateWithoutPenjualanInput, detail_transaksiUncheckedUpdateWithoutPenjualanInput>
    create: XOR<detail_transaksiCreateWithoutPenjualanInput, detail_transaksiUncheckedCreateWithoutPenjualanInput>
  }

  export type detail_transaksiUpdateWithWhereUniqueWithoutPenjualanInput = {
    where: detail_transaksiWhereUniqueInput
    data: XOR<detail_transaksiUpdateWithoutPenjualanInput, detail_transaksiUncheckedUpdateWithoutPenjualanInput>
  }

  export type detail_transaksiUpdateManyWithWhereWithoutPenjualanInput = {
    where: detail_transaksiScalarWhereInput
    data: XOR<detail_transaksiUpdateManyMutationInput, detail_transaksiUncheckedUpdateManyWithoutPenjualanInput>
  }

  export type pelangganUpsertWithoutPenjualanInput = {
    update: XOR<pelangganUpdateWithoutPenjualanInput, pelangganUncheckedUpdateWithoutPenjualanInput>
    create: XOR<pelangganCreateWithoutPenjualanInput, pelangganUncheckedCreateWithoutPenjualanInput>
    where?: pelangganWhereInput
  }

  export type pelangganUpdateToOneWithWhereWithoutPenjualanInput = {
    where?: pelangganWhereInput
    data: XOR<pelangganUpdateWithoutPenjualanInput, pelangganUncheckedUpdateWithoutPenjualanInput>
  }

  export type pelangganUpdateWithoutPenjualanInput = {
    ID_PELANGGAN?: IntFieldUpdateOperationsInput | number
    NAMA_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
    USERNAME_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
    PASSWORD_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
    ALAMAT_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pelangganUncheckedUpdateWithoutPenjualanInput = {
    ID_PELANGGAN?: IntFieldUpdateOperationsInput | number
    NAMA_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
    USERNAME_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
    PASSWORD_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
    ALAMAT_PELANGGAN?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pembayaranUpsertWithoutPenjualanInput = {
    update: XOR<pembayaranUpdateWithoutPenjualanInput, pembayaranUncheckedUpdateWithoutPenjualanInput>
    create: XOR<pembayaranCreateWithoutPenjualanInput, pembayaranUncheckedCreateWithoutPenjualanInput>
    where?: pembayaranWhereInput
  }

  export type pembayaranUpdateToOneWithWhereWithoutPenjualanInput = {
    where?: pembayaranWhereInput
    data: XOR<pembayaranUpdateWithoutPenjualanInput, pembayaranUncheckedUpdateWithoutPenjualanInput>
  }

  export type pembayaranUpdateWithoutPenjualanInput = {
    ID_PEMBAYARAN?: IntFieldUpdateOperationsInput | number
    NAMA_PEMBAYARAN?: NullableEnumpembayaran_NAMA_PEMBAYARANFieldUpdateOperationsInput | $Enums.pembayaran_NAMA_PEMBAYARAN | null
  }

  export type pembayaranUncheckedUpdateWithoutPenjualanInput = {
    ID_PEMBAYARAN?: IntFieldUpdateOperationsInput | number
    NAMA_PEMBAYARAN?: NullableEnumpembayaran_NAMA_PEMBAYARANFieldUpdateOperationsInput | $Enums.pembayaran_NAMA_PEMBAYARAN | null
  }

  export type userUpsertWithoutPenjualanInput = {
    update: XOR<userUpdateWithoutPenjualanInput, userUncheckedUpdateWithoutPenjualanInput>
    create: XOR<userCreateWithoutPenjualanInput, userUncheckedCreateWithoutPenjualanInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPenjualanInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPenjualanInput, userUncheckedUpdateWithoutPenjualanInput>
  }

  export type userUpdateWithoutPenjualanInput = {
    ID_USER?: IntFieldUpdateOperationsInput | number
    NAMA_USER?: NullableStringFieldUpdateOperationsInput | string | null
    EMAIL_USER?: NullableStringFieldUpdateOperationsInput | string | null
    USERNAME_USER?: NullableStringFieldUpdateOperationsInput | string | null
    PASSWORD_USER?: NullableStringFieldUpdateOperationsInput | string | null
    ROLE?: NullableEnumuser_ROLEFieldUpdateOperationsInput | $Enums.user_ROLE | null
    ALAMAT_USER?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateWithoutPenjualanInput = {
    ID_USER?: IntFieldUpdateOperationsInput | number
    NAMA_USER?: NullableStringFieldUpdateOperationsInput | string | null
    EMAIL_USER?: NullableStringFieldUpdateOperationsInput | string | null
    USERNAME_USER?: NullableStringFieldUpdateOperationsInput | string | null
    PASSWORD_USER?: NullableStringFieldUpdateOperationsInput | string | null
    ROLE?: NullableEnumuser_ROLEFieldUpdateOperationsInput | $Enums.user_ROLE | null
    ALAMAT_USER?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type penjualanCreateWithoutUserInput = {
    ID_PENJUALAN: number
    TANGGAL?: Date | string | null
    TOTAL?: number | null
    STATUS_TRANSAKSI?: $Enums.penjualan_STATUS_TRANSAKSI | null
    detail_transaksi?: detail_transaksiCreateNestedManyWithoutPenjualanInput
    pelanggan?: pelangganCreateNestedOneWithoutPenjualanInput
    pembayaran?: pembayaranCreateNestedOneWithoutPenjualanInput
  }

  export type penjualanUncheckedCreateWithoutUserInput = {
    ID_PENJUALAN: number
    ID_PELANGGAN?: number | null
    ID_PEMBAYARAN?: number | null
    TANGGAL?: Date | string | null
    TOTAL?: number | null
    STATUS_TRANSAKSI?: $Enums.penjualan_STATUS_TRANSAKSI | null
    detail_transaksi?: detail_transaksiUncheckedCreateNestedManyWithoutPenjualanInput
  }

  export type penjualanCreateOrConnectWithoutUserInput = {
    where: penjualanWhereUniqueInput
    create: XOR<penjualanCreateWithoutUserInput, penjualanUncheckedCreateWithoutUserInput>
  }

  export type penjualanCreateManyUserInputEnvelope = {
    data: penjualanCreateManyUserInput | penjualanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type penjualanUpsertWithWhereUniqueWithoutUserInput = {
    where: penjualanWhereUniqueInput
    update: XOR<penjualanUpdateWithoutUserInput, penjualanUncheckedUpdateWithoutUserInput>
    create: XOR<penjualanCreateWithoutUserInput, penjualanUncheckedCreateWithoutUserInput>
  }

  export type penjualanUpdateWithWhereUniqueWithoutUserInput = {
    where: penjualanWhereUniqueInput
    data: XOR<penjualanUpdateWithoutUserInput, penjualanUncheckedUpdateWithoutUserInput>
  }

  export type penjualanUpdateManyWithWhereWithoutUserInput = {
    where: penjualanScalarWhereInput
    data: XOR<penjualanUpdateManyMutationInput, penjualanUncheckedUpdateManyWithoutUserInput>
  }

  export type detail_transaksiCreateManyBarangInput = {
    ID_DETAILTRANSAKSI: number
    ID_PENJUALAN?: number | null
    JUMLAH?: number | null
    HARGA_SATUAN?: number | null
    SUB_TOTAL?: number | null
  }

  export type detail_transaksiUpdateWithoutBarangInput = {
    ID_DETAILTRANSAKSI?: IntFieldUpdateOperationsInput | number
    JUMLAH?: NullableIntFieldUpdateOperationsInput | number | null
    HARGA_SATUAN?: NullableIntFieldUpdateOperationsInput | number | null
    SUB_TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
    penjualan?: penjualanUpdateOneWithoutDetail_transaksiNestedInput
  }

  export type detail_transaksiUncheckedUpdateWithoutBarangInput = {
    ID_DETAILTRANSAKSI?: IntFieldUpdateOperationsInput | number
    ID_PENJUALAN?: NullableIntFieldUpdateOperationsInput | number | null
    JUMLAH?: NullableIntFieldUpdateOperationsInput | number | null
    HARGA_SATUAN?: NullableIntFieldUpdateOperationsInput | number | null
    SUB_TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type detail_transaksiUncheckedUpdateManyWithoutBarangInput = {
    ID_DETAILTRANSAKSI?: IntFieldUpdateOperationsInput | number
    ID_PENJUALAN?: NullableIntFieldUpdateOperationsInput | number | null
    JUMLAH?: NullableIntFieldUpdateOperationsInput | number | null
    HARGA_SATUAN?: NullableIntFieldUpdateOperationsInput | number | null
    SUB_TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type barangCreateManyKategoriInput = {
    KODE_BARANG: number
    NAMA_BARANG?: string | null
    GAMBAR_BARANG?: string | null
    HARGA_BARANG?: number | null
    KETERANGAN_BARANG?: string | null
    STOK_BARANG?: number | null
    EXP_BARANG?: Date | string | null
    STATUS_KETERSEDIAAN?: $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: string | null
  }

  export type barangUpdateWithoutKategoriInput = {
    KODE_BARANG?: IntFieldUpdateOperationsInput | number
    NAMA_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    GAMBAR_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    HARGA_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    KETERANGAN_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    STOK_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    EXP_BARANG?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    STATUS_KETERSEDIAAN?: NullableEnumbarang_STATUS_KETERSEDIAANFieldUpdateOperationsInput | $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: NullableStringFieldUpdateOperationsInput | string | null
    detail_transaksi?: detail_transaksiUpdateManyWithoutBarangNestedInput
  }

  export type barangUncheckedUpdateWithoutKategoriInput = {
    KODE_BARANG?: IntFieldUpdateOperationsInput | number
    NAMA_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    GAMBAR_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    HARGA_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    KETERANGAN_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    STOK_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    EXP_BARANG?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    STATUS_KETERSEDIAAN?: NullableEnumbarang_STATUS_KETERSEDIAANFieldUpdateOperationsInput | $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: NullableStringFieldUpdateOperationsInput | string | null
    detail_transaksi?: detail_transaksiUncheckedUpdateManyWithoutBarangNestedInput
  }

  export type barangUncheckedUpdateManyWithoutKategoriInput = {
    KODE_BARANG?: IntFieldUpdateOperationsInput | number
    NAMA_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    GAMBAR_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    HARGA_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    KETERANGAN_BARANG?: NullableStringFieldUpdateOperationsInput | string | null
    STOK_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    EXP_BARANG?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    STATUS_KETERSEDIAAN?: NullableEnumbarang_STATUS_KETERSEDIAANFieldUpdateOperationsInput | $Enums.barang_STATUS_KETERSEDIAAN | null
    ATTRIBUTE_28?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type penjualanCreateManyPelangganInput = {
    ID_PENJUALAN: number
    ID_PEMBAYARAN?: number | null
    ID_USER?: number | null
    TANGGAL?: Date | string | null
    TOTAL?: number | null
    STATUS_TRANSAKSI?: $Enums.penjualan_STATUS_TRANSAKSI | null
  }

  export type penjualanUpdateWithoutPelangganInput = {
    ID_PENJUALAN?: IntFieldUpdateOperationsInput | number
    TANGGAL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
    STATUS_TRANSAKSI?: NullableEnumpenjualan_STATUS_TRANSAKSIFieldUpdateOperationsInput | $Enums.penjualan_STATUS_TRANSAKSI | null
    detail_transaksi?: detail_transaksiUpdateManyWithoutPenjualanNestedInput
    pembayaran?: pembayaranUpdateOneWithoutPenjualanNestedInput
    user?: userUpdateOneWithoutPenjualanNestedInput
  }

  export type penjualanUncheckedUpdateWithoutPelangganInput = {
    ID_PENJUALAN?: IntFieldUpdateOperationsInput | number
    ID_PEMBAYARAN?: NullableIntFieldUpdateOperationsInput | number | null
    ID_USER?: NullableIntFieldUpdateOperationsInput | number | null
    TANGGAL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
    STATUS_TRANSAKSI?: NullableEnumpenjualan_STATUS_TRANSAKSIFieldUpdateOperationsInput | $Enums.penjualan_STATUS_TRANSAKSI | null
    detail_transaksi?: detail_transaksiUncheckedUpdateManyWithoutPenjualanNestedInput
  }

  export type penjualanUncheckedUpdateManyWithoutPelangganInput = {
    ID_PENJUALAN?: IntFieldUpdateOperationsInput | number
    ID_PEMBAYARAN?: NullableIntFieldUpdateOperationsInput | number | null
    ID_USER?: NullableIntFieldUpdateOperationsInput | number | null
    TANGGAL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
    STATUS_TRANSAKSI?: NullableEnumpenjualan_STATUS_TRANSAKSIFieldUpdateOperationsInput | $Enums.penjualan_STATUS_TRANSAKSI | null
  }

  export type penjualanCreateManyPembayaranInput = {
    ID_PENJUALAN: number
    ID_PELANGGAN?: number | null
    ID_USER?: number | null
    TANGGAL?: Date | string | null
    TOTAL?: number | null
    STATUS_TRANSAKSI?: $Enums.penjualan_STATUS_TRANSAKSI | null
  }

  export type penjualanUpdateWithoutPembayaranInput = {
    ID_PENJUALAN?: IntFieldUpdateOperationsInput | number
    TANGGAL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
    STATUS_TRANSAKSI?: NullableEnumpenjualan_STATUS_TRANSAKSIFieldUpdateOperationsInput | $Enums.penjualan_STATUS_TRANSAKSI | null
    detail_transaksi?: detail_transaksiUpdateManyWithoutPenjualanNestedInput
    pelanggan?: pelangganUpdateOneWithoutPenjualanNestedInput
    user?: userUpdateOneWithoutPenjualanNestedInput
  }

  export type penjualanUncheckedUpdateWithoutPembayaranInput = {
    ID_PENJUALAN?: IntFieldUpdateOperationsInput | number
    ID_PELANGGAN?: NullableIntFieldUpdateOperationsInput | number | null
    ID_USER?: NullableIntFieldUpdateOperationsInput | number | null
    TANGGAL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
    STATUS_TRANSAKSI?: NullableEnumpenjualan_STATUS_TRANSAKSIFieldUpdateOperationsInput | $Enums.penjualan_STATUS_TRANSAKSI | null
    detail_transaksi?: detail_transaksiUncheckedUpdateManyWithoutPenjualanNestedInput
  }

  export type penjualanUncheckedUpdateManyWithoutPembayaranInput = {
    ID_PENJUALAN?: IntFieldUpdateOperationsInput | number
    ID_PELANGGAN?: NullableIntFieldUpdateOperationsInput | number | null
    ID_USER?: NullableIntFieldUpdateOperationsInput | number | null
    TANGGAL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
    STATUS_TRANSAKSI?: NullableEnumpenjualan_STATUS_TRANSAKSIFieldUpdateOperationsInput | $Enums.penjualan_STATUS_TRANSAKSI | null
  }

  export type detail_transaksiCreateManyPenjualanInput = {
    ID_DETAILTRANSAKSI: number
    KODE_BARANG?: number | null
    JUMLAH?: number | null
    HARGA_SATUAN?: number | null
    SUB_TOTAL?: number | null
  }

  export type detail_transaksiUpdateWithoutPenjualanInput = {
    ID_DETAILTRANSAKSI?: IntFieldUpdateOperationsInput | number
    JUMLAH?: NullableIntFieldUpdateOperationsInput | number | null
    HARGA_SATUAN?: NullableIntFieldUpdateOperationsInput | number | null
    SUB_TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
    barang?: barangUpdateOneWithoutDetail_transaksiNestedInput
  }

  export type detail_transaksiUncheckedUpdateWithoutPenjualanInput = {
    ID_DETAILTRANSAKSI?: IntFieldUpdateOperationsInput | number
    KODE_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    JUMLAH?: NullableIntFieldUpdateOperationsInput | number | null
    HARGA_SATUAN?: NullableIntFieldUpdateOperationsInput | number | null
    SUB_TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type detail_transaksiUncheckedUpdateManyWithoutPenjualanInput = {
    ID_DETAILTRANSAKSI?: IntFieldUpdateOperationsInput | number
    KODE_BARANG?: NullableIntFieldUpdateOperationsInput | number | null
    JUMLAH?: NullableIntFieldUpdateOperationsInput | number | null
    HARGA_SATUAN?: NullableIntFieldUpdateOperationsInput | number | null
    SUB_TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type penjualanCreateManyUserInput = {
    ID_PENJUALAN: number
    ID_PELANGGAN?: number | null
    ID_PEMBAYARAN?: number | null
    TANGGAL?: Date | string | null
    TOTAL?: number | null
    STATUS_TRANSAKSI?: $Enums.penjualan_STATUS_TRANSAKSI | null
  }

  export type penjualanUpdateWithoutUserInput = {
    ID_PENJUALAN?: IntFieldUpdateOperationsInput | number
    TANGGAL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
    STATUS_TRANSAKSI?: NullableEnumpenjualan_STATUS_TRANSAKSIFieldUpdateOperationsInput | $Enums.penjualan_STATUS_TRANSAKSI | null
    detail_transaksi?: detail_transaksiUpdateManyWithoutPenjualanNestedInput
    pelanggan?: pelangganUpdateOneWithoutPenjualanNestedInput
    pembayaran?: pembayaranUpdateOneWithoutPenjualanNestedInput
  }

  export type penjualanUncheckedUpdateWithoutUserInput = {
    ID_PENJUALAN?: IntFieldUpdateOperationsInput | number
    ID_PELANGGAN?: NullableIntFieldUpdateOperationsInput | number | null
    ID_PEMBAYARAN?: NullableIntFieldUpdateOperationsInput | number | null
    TANGGAL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
    STATUS_TRANSAKSI?: NullableEnumpenjualan_STATUS_TRANSAKSIFieldUpdateOperationsInput | $Enums.penjualan_STATUS_TRANSAKSI | null
    detail_transaksi?: detail_transaksiUncheckedUpdateManyWithoutPenjualanNestedInput
  }

  export type penjualanUncheckedUpdateManyWithoutUserInput = {
    ID_PENJUALAN?: IntFieldUpdateOperationsInput | number
    ID_PELANGGAN?: NullableIntFieldUpdateOperationsInput | number | null
    ID_PEMBAYARAN?: NullableIntFieldUpdateOperationsInput | number | null
    TANGGAL?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TOTAL?: NullableIntFieldUpdateOperationsInput | number | null
    STATUS_TRANSAKSI?: NullableEnumpenjualan_STATUS_TRANSAKSIFieldUpdateOperationsInput | $Enums.penjualan_STATUS_TRANSAKSI | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}