import { Injectable } from "@angular/core";
import Guid from "devextreme/core/guid";
import { FilterDescriptor, GroupDescriptor, LoadOptions } from "devextreme/data";
import CustomStore, { GroupItem } from "devextreme/data/custom_store";
import { Dexie } from "dexie";
import { IIdentifiable } from "src/app/models/interfaces";
import { DexieService } from ".";


@Injectable()
export class BaseStoreService<TItem extends IIdentifiable<TKey>, TKey = any> {

    store: CustomStore

    constructor(private db: DexieService, private table: Dexie.Table<TItem, TKey>) {
        this.store = new CustomStore({
            key: 'id',
            byKey: async (key: TKey): Promise<TItem> => {
                return await this.byKey(key);
            },
            insert: async (values: TItem): Promise<TItem> => {
                return await this.insert(values);
            },
            load: async (options: LoadOptions<TItem>)
                : Promise<
                    Array<TItem>
                    | Array<GroupItem>
                    | Array<GroupItem>
                    | {
                        data: Array<TItem> | Array<GroupItem>
                        totalCount?: number;
                        summary?: Array<any>;
                        groupCount?: number;
                    }
                > => {
                return await this.load(options);
            },
            remove: async (key: TKey): Promise<void> => {
                return await this.remove(key);
            },
            totalCount: async (loadOptions: {
                filter?: FilterDescriptor | Array<FilterDescriptor>;
                group?: GroupDescriptor<TItem> | Array<GroupDescriptor<TItem>>
            }): Promise<number> => {
                return await this.totalCount(loadOptions);
            },
            update: async (key: TKey, values: TItem): Promise<TItem> => {
                return await this.update(key, values);
            }
        });
    }

    async byKey(key: TKey): Promise<TItem> {
        return (await this.table.get(key))!;

    }

    async insert(values: TItem): Promise<TItem> {
        return await this.db.transaction('rw', [this.table.name], async (): Promise<TItem> => {
            try {
                await this.table.add(values, values.id);
                return await this.byKey(values.id);
            } catch (ex) {
                console.error(ex);
                throw ex;
            }
        });
    }

    async load(options: LoadOptions<TItem>)
        : Promise<
            Array<TItem>
            | Array<GroupItem>
            | Array<GroupItem>
            | {
                data: Array<TItem> | Array<GroupItem>
                totalCount?: number;
                summary?: Array<any>;
                groupCount?: number;
            }
        > {
        return await this.table
            .toArray();
    }

    async remove(key: TKey): Promise<void> {
        return await this.db.transaction('rw', [this.table.name], async (): Promise<void> => {
            try {
                await this.table.delete(key);
            } catch (ex) {
                console.error(ex);
                throw ex;
            }
        });
    }

    async totalCount(loadOptions: {
        filter?: FilterDescriptor | Array<FilterDescriptor>;
        group?: GroupDescriptor<TItem> | Array<GroupDescriptor<TItem>>
    }): Promise<number> {
        return await this.table.count();
    }


    async update(key: TKey, values: TItem): Promise<TItem> {
        return await this.db.transaction('rw', [this.table.name], async (): Promise<TItem> => {
            try {
                await this.table.update(key, values);
                return await this.byKey(key);
            } catch (ex) {
                console.error(ex);
                throw ex;
            }
        });
    }
}