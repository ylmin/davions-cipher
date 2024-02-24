export interface EncryptionParams {
    key: string;
    iv: string;
}
export declare class AesEncryption {
    private key;
    private iv;
    constructor(opt?: Partial<EncryptionParams>);
    get getOptions(): {
        mode: any;
        padding: any;
        iv: any;
    };
    encryptByAES(cipherText: string): any;
    decryptByAES(cipherText: string): any;
}
export declare function encryptByBase64(cipherText: string): any;
export declare function decodeByBase64(cipherText: string): any;
export declare function encryptByMd5(password: string): any;