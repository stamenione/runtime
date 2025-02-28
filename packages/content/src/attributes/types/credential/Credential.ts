import { serialize, validate } from "@js-soft/ts-serval";
import { AbstractStringJSON, IAbstractString } from "../AbstractString";
import { AbstractXML } from "../strings/AbstractXML";

export interface CredentialJSON extends AbstractStringJSON {
    "@type": "Credential";
    schemaURL?: string;
}
export interface ICredential extends IAbstractString {
    schemaURL?: string;
}
export declare class Credential extends AbstractXML implements ICredential {
    @serialize()
    @validate({
        nullable: true,
        min: 3,
        max: 1024,
        regExp: new RegExp(".*")
    })
    public schemaURL?: string;

    public static from(value: Credential | Omit<Credential, "@type"> | string): Credential {
        return this.fromAny(value);
    }

    public override toJSON(verbose?: boolean | undefined, serializeAsString?: boolean | undefined): Credential {
        return super.toJSON(verbose, serializeAsString) as Credential;
    }
}
