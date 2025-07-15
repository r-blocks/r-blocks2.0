/**
 * Categorical variables for dropdown menus
 * @type {Array<Array<string>>}
 */
export const categorical_vars = [
  ['substance', 'substance'],
  ['anysub', 'anysub'],
  ['sex', 'sex'],
  ['homeless', 'homeless'],
  ['link', 'link'],
  ['racegrp', 'racegrp'],
  ['satreat', 'satreat'],
  ['treat', 'treat'],
];

/**
 * Alternative orderings of categorical variables
 */
export const categorical_vars_alt = [
  ['sex', 'sex'],
  ...categorical_vars.filter(([key]) => key !== 'sex'),
];

export const categorical_vars_alt_anysubfirst = [
  ['anysub', 'anysub'],
  ...categorical_vars.filter(([key]) => key !== 'anysub'),
];

export const categorical_vars_alt_homelessfirst = [
  ['homeless', 'homeless'],
  ...categorical_vars.filter(([key]) => key !== 'homeless'),
];

/**
 * Quantitative variables for dropdown menus
 * @type {Array<Array<string>>}
 */
export const quantitative_vars = [
  // Health metrics
  ['cesd', 'cesd'],
  ['mcs', 'mcs'],
  ['pcs', 'pcs'],
  ['pcs_fr', 'pcs_fr'],

  // Demographics
  ['age', 'age'],

  // Risk factors
  ['sexrisk', 'sexrisk'],
  ['drugrisk', 'drugrisk'],

  // Usage metrics
  ['daysanysub', 'daysanysub'],
  ['dayslink', 'dayslink'],
  ['hospitalizations', 'hospitalizations'],

  // Other metrics
  ['d1', 'd1'],
  ['e2b', 'e2b'],
  ['i1', 'i1'],
  ['i2', 'i2'],
  ['indtotal', 'indtotal'],
];

export const quantitative_vars_alt = [
  ['mcs', 'mcs'],
  ...quantitative_vars.filter(([key]) => key !== 'mcs'),
];
