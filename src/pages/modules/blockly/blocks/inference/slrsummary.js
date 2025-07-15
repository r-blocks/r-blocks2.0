import Blockly from 'blockly';
import { quantitative_vars, quantitative_vars_alt } from '../../constants';

Blockly.Blocks['slrsummary'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('summary(lm(')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'quantitative_variable_1')
      .appendField('~')
      .appendField(new Blockly.FieldDropdown(quantitative_vars_alt), 'quantitative_variable_2')
      .appendField(', data = HELPrct))');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#039be5');
    this.setTooltip('Simple linear regression using HELPrct dataset');
    this.setHelpUrl('https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/lm');
  },
};

Blockly.JavaScript['slrsummary'] = function (block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_quantitative_var2_name = block.getFieldValue('quantitative_variable_2');
  var code =
    'summary(lm(' +
    dropdown_quantitative_var1_name +
    '~' +
    dropdown_quantitative_var2_name +
    ', data = HELPrct))\n';
  return code;
};

export default {};
