
var splitPath = function(path) {
    var result = path.replace(/\\/g, "/").match(/(.*\/)?(\..*?|.*?)(\.[^.]*?)?(#.*$|\?.*$|$)/);
    return {
        dirname: result[1] || "",
        filename: result[2] || "",
        extension: result[3] || "",
        params: result[4] || ""
    };
};


d = window.document


var getCurrentPageName = function() {

    if (location.pathname == '/') return 'about'

    page_name = splitPath(d.URL).filename

    if (page_name == 'index') return 'about'

    if (!['projects', 'index'].includes(page_name)) return 'blog'

	return page_name

}


window.onload = function() {
    current_page_name = getCurrentPageName()
    nav = d.getElementById('nav')
    Array.prototype.forEach.call(nav.children, function(child, index){
        if (current_page_name == child.text.toLowerCase()) {   
            child.className = child.className.concat(' current-page')
        }
    })
    title_element = d.getElementById('title')
    if (current_page_name == 'blog') {
        d.title = d.title.concat(' | Blog')
        title_element.text = title_element.text.concat("\'s Blog")
    } else if (current_page_name == 'projects') {
        d.title = d.title.concat(' | Projects')
        title_element.text = title_element.text.concat("\'s Projects")
    }
}
