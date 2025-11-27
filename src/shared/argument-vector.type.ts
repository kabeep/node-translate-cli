export interface ArgumentVector {
    _: string[];
    from: string;
    to: string;
    engine: 'google' | 'microsoft';
    timeout: number;
    stdinTimeout: number;
    retry: number;
    showPhonetics: boolean;
    showSource: boolean;
    showDetail: boolean;
    showLanguages: boolean;
    $0: string;
}
