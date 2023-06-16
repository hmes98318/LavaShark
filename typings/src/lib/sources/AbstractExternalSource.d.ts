import { SearchResult } from '../../@types';
import { LavaShark } from '../LavaShark';
export declare abstract class AbstractExternalSource {
    protected readonly lavashark: LavaShark;
    constructor(lavashark: LavaShark);
    abstract loadItem(query: string): Promise<SearchResult | null>;
}
