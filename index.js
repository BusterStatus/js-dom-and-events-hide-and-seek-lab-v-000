function getFirstSelector(string) {
    return document.querySelector(string);
}

function nestedTarget() {
    return document.querySelector('#nested .target');
}

function deepestChild() {
    return document.querySelector( '#grand-node div div div div' );
}

function increaseRankBy(n) {
    const rankedLists = document.querySelectorAll( '.ranked-list' )

    for ( let i = 0, l = rankedLists.length; i < l; i++ ) {
      rankedLists[i].innerHTML = (i + 1).toString();
    }
}