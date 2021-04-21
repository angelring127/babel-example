module.exports = function myplugin() {
	return {
    visitor: {
      Identifier(path) {
        // 바벨이 만든 AST 노드를 출력한다.
        const name = path.node.name;
        
        // 이름의 문자열을 역순으로 설정 홍길동 => 동길홍
        path.node.name = name
        	.split("")
        	.reverse()
        	.join("");
      },
    },
  };
}
