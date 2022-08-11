export type PlainObject<T = unknown> = {
  [k in string]: T;
};

export function isObject(variable: unknown): variable is PlainObject {
  return (
    typeof variable === "object" &&
    variable !== null &&
    variable.constructor === Object &&
    Object.prototype.toString.call(variable) === "[object Object]"
  );
}

export function isArray(variable: unknown): variable is unknown[] {
  return Array.isArray(variable);
}

export function isArrayOrObject(
  variable: unknown
): variable is unknown[] | PlainObject {
  return isObject(variable) || isArray(variable);
}
export function isEqual(a: PlainObject, b: PlainObject): boolean {
  for (const key in a) {
    let result;
    if (isObject(a[key]) && isObject(b[key])) {
      result = isEqual(
        a[key] as PlainObject<unknown>,
        b[key] as PlainObject<unknown>
      );
    } else {
      result = a[key] === b[key];
    }
    if (!result) {
      return false;
    }
  }
  return true;
}
