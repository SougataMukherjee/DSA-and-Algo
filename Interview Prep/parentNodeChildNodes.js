{
  /* <div id="topDiv">
  <span>Valid Span 1</span>
  <p><span>Nested Span (Invalid)</span></p>
  <span>Valid Span 2</span>
</div>
<span>Orphan Span (No Parent Div)</span> */
}

function checkAndCollectSpans(containerId = "topDiv") {
  const allSpans = document.getElementsByTagName("span");
  const targetDiv = document.getElementById(containerId);
  const validSpans = [];
  const orphanSpans = [];

  Array.from(allSpans).forEach((span) => {
    const parent = span.parentNode;
    const hasChildren = span.childNodes.length > 0;
    if (parent === targetDiv && !hasChildren) {
      validSpans.push(span);
    } else if (!parent || parent !== targetDiv) {
      orphanSpans.push(span);
    }
  });
  return { validSpans, orphanSpans };
}
