import Blockly from 'blockly';

/**
 * Head function block definition with dropdown
 */
Blockly.Blocks['head'] = {
  init: function () {
    this.appendDummyInput('head')
      .appendField('head(')
      .appendField(
        new Blockly.FieldDropdown([
          ['HELPrct', 'HELPrct'],
          ['mosaicData', 'mosaicData'],
          ['Stat2Data', 'Stat2Data'],
        ]),
        'data'
      )
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('This is used to see the header of a data');
    this.setHelpUrl('https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library');
  },
};

/**
 * Generator for head block
 */
Blockly.JavaScript['head'] = function (block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'head(' + dropdown_data_name + ')\n';
  return code;
};

/**
 * Generic head function block definition with text input
 */
Blockly.Blocks['Ghead'] = {
  init: function () {
    this.appendDummyInput('head')
      .appendField('head(')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('This is used to see the header of a data');
    this.setHelpUrl('https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library');
  },
};

/**
 * Generator for generic head block
 */
Blockly.JavaScript['Ghead'] = function (block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'head(' + dropdown_data_name + ')\n';
  return code;
};

export default {};
