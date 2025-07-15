import Blockly from 'blockly';

/**
 * Names block definition with dropdown menu
 */
Blockly.Blocks['names'] = {
  init: function () {
    this.appendDummyInput('names')
      .appendField('names(')
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
    this.setTooltip('This is used to print the names');
    this.setHelpUrl('https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library');
  },
};

/**
 * Generator for names block
 */
Blockly.JavaScript['names'] = function (block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'names(' + dropdown_data_name + ')\n';
  return code;
};

/**
 * Generic names block definition with text input
 */
Blockly.Blocks['Gnames'] = {
  init: function () {
    this.appendDummyInput('names')
      .appendField('names(')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('This is used to print the names');
    this.setHelpUrl('https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library');
  },
};

/**
 * Generator for generic names block
 */
Blockly.JavaScript['Gnames'] = function (block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'names(' + dropdown_data_name + ')\n';
  return code;
};

export default {};
