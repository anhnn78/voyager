// Theme
import 'tinymce/themes/modern/theme';

  // Plugins
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/code';
import 'tinymce/plugins/table';
import 'tinymce/plugins/textcolor';
import 'tinymce/plugins/lists';

$(document).ready(function(){

  $.ajaxSetup({
      headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
  });

  tinymce.init({
    menubar: false,
    selector:'textarea.richTextBox',
    skin_url: $('meta[name="assets-path"]').attr('content')+'?path=js/skins/voyager',
    min_height: 600,
    resize: 'vertical',
    plugins: 'link, image, code, table, textcolor, lists',
    extended_valid_elements : 'input[id|name|value|type|class|style|required|placeholder|autocomplete|onclick]',
    file_browser_callback: function(field_name, url, type, win) {
            if(type =='image'){
              $('#upload_file').trigger('click');
            }
        },
    toolbar: 'styleselect bold italic underline | forecolor backcolor | alignleft aligncenter alignright | bullist numlist outdent indent | link image table | code',
    convert_urls: false,
    image_caption: true,
    image_title: true,
    init_instance_callback: function (editor) {
        if (typeof tinymce_init_callback !== "undefined") {
            tinymce_init_callback(editor);
        }
    },
    setup: function (editor) {
        if (typeof tinymce_setup_callback !== "undefined") {
            tinymce_setup_callback(editor);
        }
    }
  });

    tinymce.init({
        selector:'textarea.richTextBox',
        plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
        imagetools_cors_hosts: ['picsum.photos'],
        menubar: 'file edit view insert format tools table help',
        toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
        toolbar_sticky: true,
        resize: 'vertical',
        autosave_ask_before_unload: true,
        autosave_interval: "30s",
        autosave_prefix: "{path}{query}-{id}-",
        autosave_restore_when_empty: false,
        autosave_retention: "2m",
        extended_valid_elements : 'input[id|name|value|type|class|style|required|placeholder|autocomplete|onclick]',
        image_advtab: true,
        content_css: [
            '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
            '//www.tiny.cloud/css/codepen.min.css'
        ],
        link_list: [
            { title: 'My page 1', value: 'http://www.tinymce.com' },
            { title: 'My page 2', value: 'http://www.moxiecode.com' }
        ],
        image_list: [
            { title: 'My page 1', value: 'http://www.tinymce.com' },
            { title: 'My page 2', value: 'http://www.moxiecode.com' }
        ],
        image_class_list: [
            { title: 'None', value: '' },
            { title: 'Some class', value: 'class-name' }
        ],
        importcss_append: true,
        height: 400,
        file_browser_callback: function(field_name, url, type, win) {
            if(type =='image'){
                $('#upload_file').trigger('click');
            }
        },
        init_instance_callback: function (editor) {
            if (typeof tinymce_init_callback !== "undefined") {
                tinymce_init_callback(editor);
            }
        },
        setup: function (editor) {
            if (typeof tinymce_setup_callback !== "undefined") {
                tinymce_setup_callback(editor);
            }
        },
        min_height: 600,
        convert_urls: false,
        image_caption: true,
        image_title: true,
        quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
        noneditable_noneditable_class: "mceNonEditable",
        toolbar_drawer: 'sliding',
        contextmenu: "link image imagetools table",
    });

});
