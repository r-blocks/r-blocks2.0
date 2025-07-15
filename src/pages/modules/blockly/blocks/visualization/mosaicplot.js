import Blockly from 'blockly';
import { categorical_vars, categorical_vars_alt } from '../../constants';

// Regular mosaicplot block
Blockly.Blocks['mosaicplot'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('mosaicplot(')
      .appendField(new Blockly.FieldDropdown(categorical_vars_alt), 'categorical_variable_1')
      .appendField('~')
      .appendField(new Blockly.FieldDropdown(categorical_vars), 'categorical_variable_2')
      .appendField(', color = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['TRUE', 'TRUE'],
          ['FALSE', 'FALSE'],
        ]),
        'boolean'
      )
      .appendField(', data =')
      .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('mosaic plot for 2 categorical variables');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/graphics/versions/3.6.2/topics/mosaicplot'
    );
  },
};

Blockly.JavaScript['mosaicplot'] = function (block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
  var dropdown_boolean = block.getFieldValue('boolean');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'mosaicplot(' +
    dropdown_data_name +
    '$' +
    dropdown_categorical_var1_name +
    ' ~ ' +
    dropdown_data_name +
    '$' +
    dropdown_categorical_var2_name +
    ', color = ' +
    dropdown_boolean +
    ', data = ' +
    dropdown_data_name +
    ')\n';
  return code;
};

// Generic mosaicplot block
Blockly.Blocks['Gmosaicplot'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('mosaicplot(')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable_1')
      .appendField('~')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable_2')
      .appendField(', color = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['TRUE', 'TRUE'],
          ['FALSE', 'FALSE'],
        ]),
        'boolean'
      )
      .appendField(', data =')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('mosaic plot for 2 categorical variables');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/graphics/versions/3.6.2/topics/mosaicplot'
    );
  },
};

Blockly.JavaScript['Gmosaicplot'] = Blockly.JavaScript['mosaicplot'];

export default {};
