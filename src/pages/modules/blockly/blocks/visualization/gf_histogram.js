import Blockly from 'blockly';
import { quantitative_vars, categorical_vars } from '../../constants';

/**
 * Basic histogram block
 */
Blockly.Blocks['gf_histogram'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('gf_histogram(~')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'quantitative_variable')
      .appendField(', data = ')
      .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), 'data')
      .appendField(', bins = ')
      .appendField(
        new Blockly.FieldDropdown([
          ['5', '5'],
          ['10', '10'],
          ['15', '15'],
          ['20', '20'],
        ]),
        'bins'
      )
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('histogram for one quantitative variable');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_histogram'
    );
  },
};

/**
 * Generator for basic histogram
 */
Blockly.JavaScript['gf_histogram'] = function (block) {
  var quantitative_var = block.getFieldValue('quantitative_variable');
  var data = block.getFieldValue('data');
  var bins = block.getFieldValue('bins');
  return `gf_histogram(~${quantitative_var}, data = ${data}, bins = ${bins})\n`;
};

/**
 * Grouped histogram block
 */
Blockly.Blocks['gf_histogram_substance'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('gf_histogram(~')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'quantitative_variable')
      .appendField('|')
      .appendField(new Blockly.FieldDropdown(categorical_vars), 'categorical_variable')
      .appendField(', bins =')
      .appendField(
        new Blockly.FieldDropdown([
          ['5', '5'],
          ['10', '10'],
          ['15', '15'],
          ['20', '20'],
        ]),
        'bins'
      )
      .appendField(', data =')
      .appendField(new Blockly.FieldDropdown([['HELPrct', 'HELPrct']]), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('histogram by groups');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_histogram'
    );
  },
};

/**
 * Generator for grouped histogram
 */
Blockly.JavaScript['gf_histogram_substance'] = function (block) {
  var quantitative_var = block.getFieldValue('quantitative_variable');
  var categorical_var = block.getFieldValue('categorical_variable');
  var bins = block.getFieldValue('bins');
  var data = block.getFieldValue('data');
  return `gf_histogram(~${quantitative_var}|${categorical_var}, bins = ${bins}, data = ${data})\n`;
};

export default {};
