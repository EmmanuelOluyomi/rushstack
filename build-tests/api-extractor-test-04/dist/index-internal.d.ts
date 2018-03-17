/**
 * api-extractor-test-04
 * 
 * Test scenarios for trimming alpha/beta/internal definitions from the generated *.d.ts files.
 * 
 * @packagedocumentation
 */


/**
 * This is an alpha class.
 * @alpha
 */
export declare class AlphaClass {
    /**
     * This is a comment
     */
    undecoratedMember(): void;
    /**
     * This is an internal member
     * @internal
     */
    _internalMember(): void;
}

/**
 * This is a beta class
 * @beta
 */
export declare class BetaClass implements BetaInterface {
    /**
     * This is a comment
     */
    undecoratedMember(): void;
    /**
     * This is an alpha comment
     * @alpha
     */
    alphaMember(): void;
    /**
     * This is an internal member
     * @internal
     */
    _internalMember(): void;
}

/**
 * This is a beta interface
 * @beta
 */
export declare interface BetaInterface {
    /**
     * This is a comment
     */
    undecoratedMember(): void;
    /**
     * This is an alpha comment
     * @alpha
     */
    alphaMember(): void;
    /**
     * This is an internal member
     * @internal
     */
    _internalMember(): void;
}

/**
 * This is a const enum marked as \@beta
 * @beta
 */
export declare const enum ConstEnum {
    /**
     * This member inherits its \@beta status from the parent
     */
    BetaMember2 = "BetaMember2",
    /**
     * This member is marked as \@alpha
     * @alpha
     */
    AlphaMember = "AlphaMember",
    /**
     * This member is marked as \@internal
     * @internal
     */
    _InternalMember = "_InternalMember",
}

/**
 * This is a "beta" namespace.
 * @beta
 */
export declare namespace EntangledNamespace {
    /**
     * This is a nested namespace.
     * The "beta" release tag is inherited from the parent.
     */
    export declare namespace N2 {
        /**
         * This class is in a nested namespace.
         * @alpha
         */
        export declare class ClassX {
            /**
             * The "alpha" release tag is inherited from the parent.
             */
            static a: string;
        }
    }
    /**
     * This is a nested namespace.
     * The "beta" release tag is inherited from the parent.
     */
    export declare namespace N3 {
        /**
         * This class is in a nested namespace.
         * @internal
         */
        export declare class _ClassY {
            /**
             * This definition refers to a "alpha" namespaced class.
             */
            b: EntangledNamespace.N2.ClassX;
            /**
             * This definition refers to the type of a "alpha" namespaced member.
             */
            c(): typeof N2.ClassX.a;
        }
    }
}

/**
 * This is an exported type alias.
 */
export declare type ExportedAlias = AlphaClass;

/**
 * This is an internal class
 * @internal
 */
export declare class InternalClass {
    /**
     * This is a comment
     */
    undecoratedMember(): void;
}

/**
 * This is a public class
 * @public
 */
export declare class PublicClass {
    /**
     * This is a beta field
     * @beta
     */
    betaField: string;
    /**
     * This is a comment
     */
    undecoratedMember(): void;
    /**
     * This is a beta comment
     * @beta
     */
    betaMember(): void;
    /**
     * This is an alpha comment
     * @alpha
     */
    alphaMember(): void;
    /**
     * This is an internal member
     * @internal
     */
    _internalMember(): void;
}

/**
 * This is a regular enum marked as \@beta
 * @beta
 */
export declare enum RegularEnum {
    /**
     * This member inherits its \@beta status from the parent
     */
    BetaMember = 100,
    /**
     * This member is marked as \@alpha
     * @alpha
     */
    AlphaMember = 101,
    /**
     * This member is marked as \@internal
     * @internal
     */
    _InternalMember = 102,
}

declare const variableDeclaration: string;
