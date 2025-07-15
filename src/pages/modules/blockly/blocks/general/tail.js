import Blockly from 'blockly';

/**
 * Tail block definition with dropdown menu
 */
Blockly.Blocks['tail'] = {
  init: function () {
    this.appendDummyInput('tail')
      .appendField('tail(')
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
    this.setTooltip('This is used to see the tail of the library');
    this.setHelpUrl('https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library');
  },
};

/**
 * Generator for tail block
 */
Blockly.JavaScript['tail'] = function (block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'tail(' + dropdown_data_name + ')\n';
  return code;
};

/**
 * Generic tail block definition with text input
 */
Blockly.Blocks['Gtail'] = {
  init: function () {
    this.appendDummyInput('tail')
      .appendField('tail(')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('This is used to see the tail of the library');
    this.setHelpUrl('https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library');
  },
};

/**
 * Generator for generic tail block
 */
Blockly.JavaScript['Gtail'] = function (block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'tail(' + dropdown_data_name + ')\n';
  return code;
};

export default {};
