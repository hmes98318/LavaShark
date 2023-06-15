import { SearchResult } from '../../@types';
import { LavaShark } from '../LavaShark';


export abstract class AbstractExternalSource {
    protected readonly lavashark: LavaShark;

    constructor(lavashark: LavaShark) {
        this.lavashark = lavashark;
    }

    abstract loadItem(query: string): Promise<SearchResult | null>;
}