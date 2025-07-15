import Blockly from 'blockly';

/**
 * Ggeom_text block definition with text inputs
 */
Blockly.Blocks['Ggeom_text'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_text(mapping = aes(x =')
      .appendField(new Blockly.FieldTextInput(''), 'x_axis')
      .appendField(', y =')
      .appendField(new Blockly.FieldTextInput(''), 'y_axis')
      .appendField(', label =')
      .appendField(new Blockly.FieldTextInput(''), 'label')
      .appendField('), nudge_x =')
      .appendField(new Blockly.FieldTextInput('0.2'), 'nudge_x')
      .appendField(', nudge_y =')
      .appendField(new Blockly.FieldTextInput('0.2'), 'nudge_y')
      .appendField(', data = HELPrct)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Adds text labels to a plot using ggplot2 with custom inputs');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_text.html');
  },
};

/**
 * Generator for Ggeom_text block
 */
Blockly.JavaScript['Ggeom_text'] = function (block) {
  var x_axis = block.getFieldValue('x_axis');
  var y_axis = block.getFieldValue('y_axis');
  var label = block.getFieldValue('label');
  var nudge_x = block.getFieldValue('nudge_x');
  var nudge_y = block.getFieldValue('nudge_y');

  var code =
    'geom_text(mapping = aes(x = ' +
    x_axis +
    ', y = ' +
    y_axis +
    ', label = ' +
    label +
    '), nudge_x = ' +
    nudge_x +
    ', nudge_y = ' +
    nudge_y +
    ', data = HELPrct)\n';

  return code;
};

export default {};
