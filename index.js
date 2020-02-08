/* eslint-disable sonarjs/no-duplicate-string */
module.exports = {
    plugins: [
        "stylelint-declaration-use-variable",
        "stylelint-no-unsupported-browser-features",
        "stylelint-a11y",
        "stylelint-selector-bem-pattern"
    ],
    rules: {
        //
        // Possible Errors
        //

        "color-no-invalid-hex": true,
        "font-family-no-duplicate-names": true,
        "font-family-no-missing-generic-family-keyword": true,
        "function-calc-no-invalid": true,
        "function-calc-no-unspaced-operator": true,
        "function-linear-gradient-no-nonstandard-direction": true,
        "string-no-newline": true,
        "unit-no-unknown": true,
        "property-no-unknown": true,
        "keyframe-declaration-no-important": true,
        "declaration-block-no-duplicate-properties": [ true, { ignore: [ "consecutive-duplicates-with-different-values" ]}],
        "declaration-block-no-shorthand-property-overrides": true,
        "block-no-empty": true,
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-element-no-unknown": true,
        "selector-type-no-unknown": true,
        "media-feature-name-no-unknown": true,
        "at-rule-no-unknown": true,
        "comment-no-empty": true,
        "no-descending-specificity": true,
        "no-duplicate-at-import-rules": true,
        "no-duplicate-selectors": true,
        "no-empty-source": true,
        "no-extra-semicolons": true,
        "no-invalid-double-slash-comments": true,

        //
        // Limit language features
        //

        "shorthand-property-no-redundant-values": true,
        "value-no-vendor-prefix": true,
        "property-no-vendor-prefix": true,
        "declaration-block-no-redundant-longhand-properties": true,
        "declaration-no-important": true,
        "declaration-block-single-line-max-declarations": 1,
        "selector-class-pattern": [ "^[a-z]+([A-Z][a-z0-9]*?)*", { resolveNestedSelectors: true }],
        "selector-max-id": 0,
        "selector-max-empty-lines": 0,
        "selector-max-universal": 0,
        "selector-max-type": 0,
        "selector-no-qualifying-type": true,
        "selector-no-vendor-prefix": true,
        "media-feature-name-no-vendor-prefix": true,
        "at-rule-no-vendor-prefix": true,
        "no-unknown-animations": true,

        //
        // Stylistic issues
        //

        "color-hex-case": "lower",
        "color-hex-length": "long",
        "font-family-name-quotes": "always-where-recommended",
        "font-weight-notation": "numeric",
        "function-comma-newline-after": "always-multi-line",
        "function-comma-newline-before": "never-multi-line",
        "function-comma-space-after": "always-single-line",
        "function-comma-space-before": "never-single-line",
        "function-max-empty-lines": 0,
        "function-name-case": "lower",
        "function-parentheses-newline-inside": "always-multi-line",
        "function-parentheses-space-inside": "never",
        "function-url-quotes": "always",
        "function-whitespace-after": "always",
        "number-leading-zero": "always",
        "number-no-trailing-zeros": true,
        "string-quotes": "double",
        "unit-case": "lower",
        "length-zero-no-unit": true,
        "value-keyword-case": "lower",
        "value-list-comma-newline-after": "always-multi-line",
        "value-list-comma-newline-before": "never-multi-line",
        "value-list-comma-space-after": "always-single-line",
        "value-list-comma-space-before": "never-single-line",
        "value-list-max-empty-lines": 0,
        "property-case": "lower",
        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-colon-newline-after": "always-multi-line",
        "declaration-colon-space-after": "always-single-line",
        "declaration-colon-space-before": "never",
        "declaration-block-semicolon-newline-after": "always",
        "declaration-block-semicolon-space-after": "always-single-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-trailing-semicolon": "always",
        "block-closing-brace-empty-line-before": "never",
        "block-closing-brace-newline-after": "always",
        "block-closing-brace-newline-before": "always",
        "block-closing-brace-space-after": "always-single-line",
        "block-closing-brace-space-before": "always-single-line",
        "block-opening-brace-newline-after": "always",
        "block-opening-brace-space-after": "always-single-line",
        "block-opening-brace-space-before": "always",
        "selector-attribute-brackets-space-inside": "always",
        "selector-attribute-operator-space-after": "always",
        "selector-attribute-operator-space-before": "always",
        "selector-attribute-quotes": "always",
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-descendant-combinator-no-non-space": true,
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-class-parentheses-space-inside": "always",
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-colon-notation": "double",
        "selector-type-case": "lower",
        "selector-list-comma-newline-after": "always",
        "selector-list-comma-newline-before": "never-multi-line",
        "selector-list-comma-space-after": "always-single-line",
        "selector-list-comma-space-before": "never",
        "rule-empty-line-before": [
            "always", {
                except: [ "first-nested" ],
                ignore: [ "after-comment" ]
            }
        ],
        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-name-case": "lower",
        "media-feature-parentheses-space-inside": "always",
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",
        "media-query-list-comma-newline-after": "always-multi-line",
        "media-query-list-comma-newline-before": "never-multi-line",
        "media-query-list-comma-space-after": "always-single-line",
        "media-query-list-comma-space-before": "never",
        "at-rule-empty-line-before": [
            "always", {
                except: [ "after-same-name" ],
                ignore: [ "after-comment" ]
            }
        ],
        "at-rule-name-case": "lower",
        "at-rule-name-space-after": "always",
        "at-rule-semicolon-newline-after": "always",
        "at-rule-semicolon-space-before": "never",
        "comment-whitespace-inside": "always",
        "indentation": 4,
        "linebreaks": "unix",
        "max-empty-lines": 1,
        "max-line-length": 100,
        "no-eol-whitespace": true,
        "no-missing-end-of-source-newline": true,
        "no-empty-first-line": true,
        "unicode-bom": "never",

        //
        // https://github.com/YozhikM/stylelint-a11y
        //

        "a11y/no-outline-none": true,
        "a11y/no-obsolete-attribute": true,
        "a11y/no-obsolete-element": true,
        "a11y/selector-pseudo-class-focus": true,
        "a11y/no-text-align-justify": true,
        "a11y/media-prefers-reduced-motion": [ true, { severity: "warning" }],
        "a11y/content-property-no-static-value": true,

        //
        // https://github.com/ismay/stylelint-no-unsupported-browser-features
        //

        "plugin/no-unsupported-browser-features": [
            true,
            {
                ignore: [
                    // [...] not supporting the avoid-column, column, and avoid (in the column
                    // context) values for the properties break-before, break-after,
                    // and break-inside.
                    "multicolumn",
                    // Not supported in older Edge (use chrome Edge)
                    "intrinsic-width",
                    // Not supported in older Edge
                    "css-resize",
                    // Just a decoration
                    "css-filters",
                    "css-appearance"
                ]
            }
        ],

        //
        // Enforces using variables for colors
        // https://github.com/sh-waqar/stylelint-declaration-use-variable
        //

        "sh-waqar/declaration-use-variable": [[ "/color/", { ignoreValues: [ "transparent", "inherit", "white", "black" ]}]],

        //
        // SUIT CSS relies on structured class names and meaningful hyphens
        // https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md
        // https://github.com/simonsmith/stylelint-selector-bem-pattern
        //

        "plugin/selector-bem-pattern": { preset: "suit" }
    }
};
