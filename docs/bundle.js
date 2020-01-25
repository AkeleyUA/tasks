!function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./tableComponent/app.comp.logics.js\nfunction ComponentTable(id) {\r\n  const container = document.querySelector(id);\r\n  const addCol = document.createElement('button');\r\n  const addRow = document.createElement('button');\r\n  const delCol = document.createElement('button');\r\n  const delRow = document.createElement('button');\r\n\r\n  const addContainer = document.createElement('div');\r\n  const deleteContainer = document.createElement('div');\r\n  const boxesContainer = document.createElement('div');\r\n  const containerTable = document.createElement('div');\r\n\r\n  addContainer.classList.add('add-btns-container');\r\n  deleteContainer.classList.add('delete-btns-container');\r\n  boxesContainer.classList.add('boxes-container');\r\n  containerTable.classList.add('container');\r\n\r\n  addCol.classList.add('add-col', 'add');\r\n  addRow.classList.add('add-row', 'add');\r\n  delCol.classList.add('del-col', 'delete');\r\n  delRow.classList.add('del-row', 'delete');\r\n\r\n  addCol.innerText = '+';\r\n  addRow.innerText = '+';\r\n  delCol.innerText = '-';\r\n  delRow.innerText = '-';\r\n\r\n  addContainer.append(addCol);\r\n  addContainer.append(addRow);\r\n  deleteContainer.append(delCol);\r\n  deleteContainer.append(delRow);\r\n\r\n  containerTable.append(addContainer);\r\n  containerTable.append(deleteContainer);\r\n  containerTable.append(boxesContainer);\r\n\r\n  container.append(containerTable);\r\n\r\n  let colsCounter = 5;\r\n  let rowsCounter = 5;\r\n  let currentCol = 0;\r\n  let currentRow = 0;\r\n\r\n  const boxFullSize = 52\r\n\r\n  const hideButton = (btn) => {\r\n    btn.style.display = 'none';\r\n  };\r\n  const showButton = (btn) => {\r\n    btn.style.display = 'block';\r\n  };\r\n\r\n  const createCol = (row, n) => {\r\n    for (let i = 0; i < n; i++) {\r\n      let col = document.createElement('div');\r\n      col.classList.add('col');\r\n      row.append(col);\r\n    }\r\n  };\r\n\r\n  const createRow = (container, n) => {\r\n    for (let i = 0; i < n; i++) {\r\n      let row = document.createElement('div');\r\n      row.classList.add('row');\r\n      createCol(row, colsCounter);\r\n      container.append(row);\r\n    }\r\n  };\r\n\r\n  const rowsDataIndex = () => {\r\n    let rows = boxesContainer.querySelectorAll('.row');\r\n    rows.forEach((row, index) => {\r\n      row.dataset.rowIndex = index;\r\n      let cols = row.querySelectorAll('.col');\r\n        cols.forEach((col, index) => col.dataset.colIndex = index)\r\n    })\r\n  }\r\n\r\n  createRow(boxesContainer, rowsCounter);\r\n  rowsDataIndex();\r\n\r\n  addRow.addEventListener('click', () => {\r\n    rowsCounter++;\r\n    createRow(boxesContainer, rowsCounter - boxesContainer.children.length);  \r\n    rowsDataIndex();\r\n  });\r\n\r\n  addCol.addEventListener('click', () => {\r\n    colsCounter++;\r\n    let rows = boxesContainer.querySelectorAll('.row');\r\n    rows.forEach(row => {\r\n      createCol(row, colsCounter - row.children.length);\r\n    });\r\n    rowsDataIndex();\r\n  });\r\n\r\n\r\n  delRow.addEventListener('click', () => {\r\n    let rows = container.querySelectorAll('.row');\r\n    let rowsLength = rows.length - 1;\r\n\r\n    rows[currentRow].remove();\r\n\r\n    (rowsLength < 2 ? hideButton(delRow) : showButton(delRow));\r\n    (rowsLength === currentRow ? \r\n      delRow.style.transform = `translateY(${rowsLength * boxFullSize - boxFullSize}px)` : \r\n      delRow.style.transform = `translateY(${+currentRow * boxFullSize}px)`);\r\n    (rowsCounter -1 > currentRow ? currentRow : currentRow--);\r\n    rowsCounter--;\r\n    rowsDataIndex();\r\n  });\r\n\r\n  delCol.addEventListener('click', () => {\r\n    let rows = container.querySelectorAll('.row');\r\n    let colLength = rows[0].children.length - 1;\r\n\r\n    rows.forEach((row) => {\r\n      let cols = row.querySelectorAll('.col');\r\n      row.removeChild(cols[currentCol]);\r\n    });\r\n\r\n    (colLength < 1 ? hideButton(delCol) : showButton(delCol));\r\n    (colLength === currentCol ? \r\n      delCol.style.transform = `translateX(${colLength * boxFullSize - boxFullSize}px)` : \r\n      delCol.style.transform = `translateX(${currentCol * boxFullSize}px)`);\r\n    (colsCounter -1 > currentCol ? currentCol : currentCol--);\r\n    colsCounter--;\r\n    rowsDataIndex();\r\n  });\r\n\r\n  container.addEventListener('mouseover', (event) => {\r\n    showButton(delCol);\r\n    showButton(delRow);\r\n    let rows = container.querySelectorAll('.row');\r\n    (rows[0].children.length < 2 ? hideButton(delCol) : showButton(delCol));\r\n    (rows.length < 2 ? hideButton(delRow) : showButton(delRow));\r\n\r\n    if (event.target.classList.contains('col')) {\r\n      currentCol = +event.target.dataset.colIndex;\r\n      currentRow = +event.target.parentNode.dataset.rowIndex;\r\n    }\r\n\r\n    delRow.style.transform = `translateY(${currentRow * boxFullSize}px)`;\r\n    delCol.style.transform = `translateX(${currentCol * boxFullSize}px)`;\r\n  });\r\n\r\n  container.addEventListener('mouseout', () => {\r\n    hideButton(delCol);\r\n    hideButton(delRow);\r\n  });\r\n\r\n\r\n  const containerMover = () => {\r\n    let move = false;\r\n    let left = 0;\r\n    let top = 0;\r\n    \r\n\r\n    container.addEventListener('mousedown', (event) => {\r\n      if (!event.target.classList.contains('add') && !event.target.classList.contains('delete')) {\r\n        move = true;\r\n        hideButton(delCol);\r\n        hideButton(delRow);\r\n        hideButton(addCol);\r\n        hideButton(addRow);\r\n        left = container.getBoundingClientRect().left - event.target.getBoundingClientRect().left - event.target.getBoundingClientRect().width / 2;\r\n        top = container.getBoundingClientRect().top - event.target.getBoundingClientRect().top - event.target.getBoundingClientRect().height / 2;\r\n      }\r\n    });\r\n\r\n    container.addEventListener('mouseup', () => {\r\n      move = false;\r\n      showButton(addCol);\r\n      showButton(addRow);\r\n\r\n      (colsCounter > 1 ? showButton(delCol) : false );\r\n      (rowsCounter > 1 ? showButton(delRow) : false );\r\n\r\n    });\r\n\r\n    window.addEventListener('mousemove', event => {\r\n      let mousePosition = {\r\n        x:event.clientX,\r\n        y:event.clientY\r\n      }\r\n\r\n      if(move) {\r\n        container.style.left = `${mousePosition.x + left}px`; \r\n        container.style.top = `${mousePosition.y + top}px`;\r\n      }\r\n    });\r\n\r\n  };\r\n\r\n\r\n  containerMover();\r\n}\n// CONCATENATED MODULE: ./index.js\n\r\n\r\nconst Table = new ComponentTable(\"#root\");\r\n// const Table2 = new ComponentTable(\"#root\");\r\n\n\n//# sourceURL=webpack:///./index.js_+_1_modules?")}]);