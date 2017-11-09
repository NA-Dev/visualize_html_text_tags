//Author: Nikki Aaron
//Created: 11/7/17
//For "Text Styles" webpage


//HTML code to be inserted in multiple HTML files
var text = "<h1>Heading 1</h1>\
        <h2>Heading 2</h2>\
        <h3>Heading 3</h3>\
        <h4>Heading 4</h4>\
        <h5>Heading 5</h5>\
        <h6>Heading 6</h6>\
        <hr>\
        <p id=\"p1\">\
            This is a paragraph. It has automatic margin at the top. Pariatur laborum occaecat eu ut incididunt dolore reprehenderit exercitation adipisicing magna ut fugiat ut commodo qui.\
        </p>\
        <p id=\"p2\">\
            This is another paragraph. It has top margin too. Sit cupidatat aliquip commodo sed occaecat minim consectetur fugiat elit excepteur amet minim do ut adipisicing.</p>\
        <hr>\
        <pre>\
This <br>\
    is <br>\
        a<br>\
            preformatted<br>\
                section.<br>\
        </pre>\
        <hr>\
        <address>\
            Written by <a href=\"mailto:webmaster@example.com\">Nikki Aaron</a><br>\
            3000 Nottareal Place<br>\
            Jamestown, VA 22222\
        </address>\
        <hr>\
        <p id=\"presentation\">\
            Text can be styled for presentation as...\
            <br>\
            <br>\
            <b>bold</b>, <i>italics</i>, <u>underline</u>, <s>incorrect</s>, <ins>inserted</ins>, <del>deleted</del>, <tt>teletype</tt>, <sup>superscript</sup>, <sub>subscript</sub>, <strike>strikethrough</strike>, <big>big</big>, or <small>small</small>.\
        </p>\
        <hr>\
        <p id=\"semantics\">\
            Phrases can be tagged semantically, sometimes that adds style...\
            <br>\
            <br>\
             <strong>strong</strong>, <em>emphasized</em>, <dfn>definition</dfn>, <cite>citation</cite>, <var>variable</var>, <q>quote</q>, <code>code</code>, <kbd>keyboard input</kbd>, <samp>sample</samp>, \
            <br>\
            sometimes that does not add style...\
            <br>\
            <br>\
            <abbr>abbr.</abbr>, <acronym>acronym</acronym>\
        </p>\
        <hr>\
        <p id=\"ul\"><ul>You Can Make Lists\
            <li>Of</li>\
            <li>Unordered</li>\
            <li>Things</li>\
        </ul></p>\
        <hr>\
        <p id=\"ol\"><ol>You Can Make Lists\
            <li>Of</li>\
            <li>Ordered</li>\
            <li>Things</li>\
        </ol></p>\
        <hr>\
        <p id=\"dl\"><dl>You Can Make Lists Of\
            <dt>Things</dt>\
            <dd>-with descriptions</dd>\
            <dt>And other things</dt>\
            <dd>-with other descriptions</dd>\
        </dl></p>\
    </div>\
</div>";

document.getElementById('text').innerHTML=text;
