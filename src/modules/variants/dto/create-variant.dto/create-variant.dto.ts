export class CreateVariantDto {

    readonly variantName: string;

    readonly values: Array<{ value: string; shortName: string }>;

}
