import Blockly from 'blockly';

/**
 * Block definition for glimpse function with dropdown menu
 */
Blockly.Blocks['glimpse'] = {
  init: function () {
    this.appendDummyInput('glimpse')
      .appendField('glimpse(')
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
    this.setTooltip('This is used to take a glimpse of library');
    this.setHelpUrl('https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library');
  },
};

/**
 * Generator for glimpse block
 */
Blockly.JavaScript['glimpse'] = function (block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'glimpse(' + dropdown_data_name + ')\n';
  return code;
};

/**
 * Block definition for generic glimpse function with text input
 */
Blockly.Blocks['Gglimpse'] = {
  init: function () {
    this.appendDummyInput('glimpse')
      .appendField('glimpse(')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('This is used to take a glimpse of library');
    this.setHelpUrl('https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library');
  },
};

/**
 * Generator for generic glimpse block
 */
Blockly.JavaScript['Gglimpse'] = function (block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'glimpse(' + dropdown_data_name + ')\n';
  return code;
};

export default {};
