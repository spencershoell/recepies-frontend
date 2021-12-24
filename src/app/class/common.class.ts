export class Common {
    public static isNull(value: any): boolean {
        if (value !== undefined && value !== null) {
            if (Array.isArray(value)) {
                if (value.length < 1) {
                    return true;
                }
            }
            if (value === "") {
                return true;
            }
            return false;
        }
        return true;
    }

    public static isNotNull(value: any): boolean {
        return !Common.isNull(value);
    }

    public static isArray(value: any): boolean {
        return Array.isArray(value);
    }

    public static phoneMaskRules = { "X": /[02-9]/ };

    public static find(value: any, array: Array<any>, property: string): any {
        let result = null;
        if (this.isNotNull(value) && this.isNotNull(array)) {
            array.some((element) => {
                if (Common.isNotNull(property)) {
                    if (value === element[property]) {
                        result = element;
                    }
                } else {
                    if (value === element) {
                        result = element;
                    }
                }
            });
        }
        return result;
    }

    public static getMinutesInMilliseconds(minutes: number): number {
        return minutes * 60 * 1000;
    }

    public static getHoursInMilliseconds(hours: number): number {
        return this.getMinutesInMilliseconds(hours * 60);
    }

    public static getNowInMilliseconds(): number {
        return new Date().getTime();
    }

    public static async asyncForEach(array: Array<any>, callback: Function) {
        for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array);
        }
    }

    public static findAllIndexes(array: Array<any>, search: any): Array<number> {
        let indexes: Array<number> = [];
        if (Common.isArray(array)) {
            for (let i = 0; i < array.length; i++) {
                let e = array[i];
                if (e === search) {
                    indexes.push(i);
                }
            }
        }
        return indexes;
    }

    public static async sleep(ms: number): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, ms);
        });
    }
}