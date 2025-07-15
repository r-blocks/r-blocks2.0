import Blockly from 'blockly';
import { categorical_vars } from '../../constants';

// Regular pie chart block
Blockly.Blocks['pie'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('pie(table(')
      .appendField(new Blockly.FieldDropdown(categorical_vars), 'categorical_variable')
      .appendField(', data =')
      .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), 'data')
      .appendField('))');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('pie chart for one categorical variable');
    this.setHelpUrl('https://www.rdocumentation.org/packages/graphics/versions/3.6.2/topics/pie');
  },
};

Blockly.JavaScript['pie'] = function (block) {
  var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'pie(table(' + dropdown_data_name + '$' + dropdown_categorical_var_name + '))\n';
  return code;
};

// Generic pie chart block
Blockly.Blocks['Gpie'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('pie(table(')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable')
      .appendField(', data =')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField('))');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('pie chart for one categorical variable');
    this.setHelpUrl('https://www.rdocumentation.org/packages/graphics/versions/3.6.2/topics/pie');
  },
};

Blockly.JavaScript['Gpie'] = Blockly.JavaScript['pie'];

export default {};
