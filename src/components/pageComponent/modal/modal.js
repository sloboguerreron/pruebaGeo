import './modal.scss'
import 'jquery-ui-dist/jquery-ui.css';
import 'jquery-ui-dist/jquery-ui.theme.css';

import $ from "jquery";
import 'jquery-ui-dist/jquery-ui';

// move modal
$('.modal-dialog').draggable({
    handle:".modal-header"
});



$('.modal-content').resizable({
  minWidth: 400,
  minHeight: 175,
  handles: 'se'
})
