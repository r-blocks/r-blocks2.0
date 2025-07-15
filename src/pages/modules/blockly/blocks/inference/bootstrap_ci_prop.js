import Blockly from 'blockly';
import { categorical_vars, categorical_vars_alt } from '../../constants';

// HELPrct-specific bootstrap CI block
Blockly.Blocks['bootstrap_ci_prop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');

    // Store the variable field for later reference
    var varField = new Blockly.FieldDropdown(categorical_vars, (newVar) => {
      // This function will be called when the variable changes
      if (this.workspace) {
        // Update success field based on selected variable
        if (newVar === 'substance') {
          this.getInput('PROP_INPUT').removeField('SUCCESS');
          this.getInput('PROP_INPUT').appendField(
            new Blockly.FieldDropdown([
              ['"alcohol"', '"alcohol"'],
              ['"cocaine"', '"cocaine"'],
              ['"heroin"', '"heroin"'],
            ]),
            'SUCCESS'
          );
          this.getInput('PROP_INPUT').appendField(')');
        } else if (newVar === 'anysub') {
          this.getInput('PROP_INPUT').removeField('SUCCESS');
          this.getInput('PROP_INPUT').appendField(
            new Blockly.FieldDropdown([
              ['"yes"', '"yes"'],
              ['"no"', '"no"'],
            ]),
            'SUCCESS'
          );
          // Set default for anysub
          this.setFieldValue('"yes"', 'SUCCESS');
          this.getInput('PROP_INPUT').appendField(')');
        } else if (newVar === 'sex') {
          this.getInput('PROP_INPUT').removeField('SUCCESS');
          this.getInput('PROP_INPUT').appendField(
            new Blockly.FieldDropdown([
              ['"male"', '"male"'],
              ['"female"', '"female"'],
            ]),
            'SUCCESS'
          );
          // Set default for sex
          this.setFieldValue('"male"', 'SUCCESS');
          this.getInput('PROP_INPUT').appendField(')');
        } else if (newVar === 'homeless') {
          this.getInput('PROP_INPUT').removeField('SUCCESS');
          this.getInput('PROP_INPUT').appendField(
            new Blockly.FieldDropdown([
              ['"homeless"', '"homeless"'],
              ['"housed"', '"housed"'],
            ]),
            'SUCCESS'
          );
          // Set default for homeless
          this.setFieldValue('"homeless"', 'SUCCESS');
          this.getInput('PROP_INPUT').appendField(')');
        } else if (newVar === 'link') {
          this.getInput('PROP_INPUT').removeField('SUCCESS');
          this.getInput('PROP_INPUT').appendField(
            new Blockly.FieldDropdown([
              ['"yes"', '"yes"'],
              ['"no"', '"no"'],
            ]),
            'SUCCESS'
          );
          // Set default for link
          this.setFieldValue('"yes"', 'SUCCESS');
          this.getInput('PROP_INPUT').appendField(')');
        } else if (newVar === 'racegrp') {
          this.getInput('PROP_INPUT').removeField('SUCCESS');
          this.getInput('PROP_INPUT').appendField(
            new Blockly.FieldDropdown([
              ['"black"', '"black"'],
              ['"hispanic"', '"hispanic"'],
              ['"white"', '"white"'],
              ['"other"', '"other"'],
            ]),
            'SUCCESS'
          );
          // Set default for racegrp
          this.setFieldValue('"black"', 'SUCCESS');
          this.getInput('PROP_INPUT').appendField(')');
        } else if (newVar === 'satreat') {
          this.getInput('PROP_INPUT').removeField('SUCCESS');
          this.getInput('PROP_INPUT').appendField(
            new Blockly.FieldDropdown([
              ['"yes"', '"yes"'],
              ['"no"', '"no"'],
            ]),
            'SUCCESS'
          );
          // Set default for satreat
          this.setFieldValue('"yes"', 'SUCCESS');
          this.getInput('PROP_INPUT').appendField(')');
        } else if (newVar === 'treat') {
          this.getInput('PROP_INPUT').removeField('SUCCESS');
          this.getInput('PROP_INPUT').appendField(
            new Blockly.FieldDropdown([
              ['"yes"', '"yes"'],
              ['"no"', '"no"'],
            ]),
            'SUCCESS'
          );
          // Set default for treat
          this.setFieldValue('"yes"', 'SUCCESS');
          this.getInput('PROP_INPUT').appendField(')');
        } else {
          this.getInput('PROP_INPUT').removeField('SUCCESS');
          this.getInput('PROP_INPUT').appendField(
            new Blockly.FieldDropdown([
              ['"yes"', '"yes"'],
              ['"no"', '"no"'],
            ]),
            'SUCCESS'
          );
          this.getInput('PROP_INPUT').appendField(')');
        }
      }
      return newVar;
    });

    this.appendDummyInput('PROP_INPUT')
      .appendField('boot <- do(')
      .appendField(new Blockly.FieldNumber(5000, 10, 10000), 'ITERATIONS')
      .appendField(') * prop(~')
      .appendField(varField, 'VAR')
      .appendField(', data = resample(HELPrct), success = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['"alcohol"', '"alcohol"'],
          ['"cocaine"', '"cocaine"'],
          ['"heroin"', '"heroin"'],
        ]),
        'SUCCESS'
      );
    this.appendDummyInput()
      .appendField('confint(boot, level = ')
      .appendField(new Blockly.FieldNumber(0.95, 0, 1, 0.01), 'CONF_LEVEL')
      .appendField(', method = "quantile")');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('230'); // Using the purple color as requested
    this.setTooltip('Bootstrap confidence interval for one proportion using HELPrct data');
    this.setHelpUrl('https://www.rdocumentation.org/packages/mosaic/topics/resample');

    // Explicitly ensure the SUCCESS field is "alcohol" initially since substance is the default
    this.setFieldValue('"alcohol"', 'SUCCESS');
  },
};

// Generic bootstrap CI block
Blockly.Blocks['Gbootstrap_ci_prop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set.seed(')
      .appendField(new Blockly.FieldNumber(123, 1, 99999), 'SEED')
      .appendField(')');
    this.appendDummyInput()
      .appendField('boot <- do(')
      .appendField(new Blockly.FieldNumber(5000, 10, 10000), 'ITERATIONS')
      .appendField(') * prop(~')
      .appendField(new Blockly.FieldTextInput(''), 'VAR')
      .appendField(', data = resample(')
      .appendField(new Blockly.FieldTextInput(''), 'DATASET')
      .appendField('), success = ')
      .appendField(new Blockly.FieldTextInput(''), 'SUCCESS')
      .appendField(')');
    this.appendDummyInput()
      .appendField('confint(boot, level = ')
      .appendField(new Blockly.FieldNumber(0.95, 0, 1, 0.01), 'CONF_LEVEL')
      .appendField(', method = "quantile")');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('230'); // Using the purple color as requested
    this.setTooltip('Bootstrap confidence interval for one proportion using selected dataset');
    this.setHelpUrl('https://www.rdocumentation.org/packages/mosaic/topics/resample');
  },
};

// Separate generator functions for each block
Blockly.JavaScript['bootstrap_ci_prop'] = function (block) {
  const seed = block.getFieldValue('SEED');
  const variable = block.getFieldValue('VAR');
  const success = block.getFieldValue('SUCCESS');
  const iterations = block.getFieldValue('ITERATIONS');
  const confLevel = block.getFieldValue('CONF_LEVEL');

  let code = ``;
  code += `set.seed(${seed})\n`;
  code += `boot <- do(${iterations}) * prop(~${variable}, data = resample(HELPrct), success = ${success})\n`;
  code += `confint(boot, level = ${confLevel}, method = "quantile")\n`;

  return code;
};

Blockly.JavaScript['Gbootstrap_ci_prop'] = function (block) {
  const seed = block.getFieldValue('SEED');
  const variable = block.getFieldValue('VAR');
  const dataset = block.getFieldValue('DATASET');
  const success = block.getFieldValue('SUCCESS');
  const iterations = block.getFieldValue('ITERATIONS');
  const confLevel = block.getFieldValue('CONF_LEVEL');

  let code = ``;
  code += `set.seed(${seed})\n`;
  code += `boot <- do(${iterations}) * prop(~${variable}, data = resample(${dataset}), success = ${success})\n`;
  code += `confint(boot, level = ${confLevel}, method = "quantile")\n`;

  return code;
};

console.log('Bootstrap CI Prop block registered:', !!Blockly.JavaScript['bootstrap_ci_prop']);

export default {};
