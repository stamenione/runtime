import { type } from "@js-soft/ts-serval";
import { AbstractString, AbstractStringJSON, IAbstractString } from "../AbstractString";

export interface CredentialJSON extends AbstractStringJSON {
    "@type": "Credential";
}

export interface ICredential extends IAbstractString {}

@type("Credential")
export class Credential extends AbstractString implements ICredential {
    public static from(value: ICredential | Omit<CredentialJSON, "@type"> | string): Credential {
        return this.fromAny(value);
    }

    public override toJSON(verbose?: boolean | undefined, serializeAsString?: boolean | undefined): CredentialJSON {
        return super.toJSON(verbose, serializeAsString) as CredentialJSON;
    }
}
