import{S as a,A as i,h as t,c as n}from"./three-DRWTIYid.js";const m=`
  varying vec3 vNormal;
  varying vec3 vPos;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vPos = mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`,v=`
  uniform vec3 uColor;
  uniform float uPower;
  uniform float uStrength;
  varying vec3 vNormal;
  varying vec3 vPos;
  void main() {
    float rim = 1.0 - abs(dot(normalize(vNormal), normalize(-vPos)));
    rim = pow(max(rim, 0.0), uPower) * uStrength;
    gl_FragColor = vec4(uColor, rim);
  }
`;function s(r="#7ea8ff",e=3.2,o=1.15){return new a({vertexShader:m,fragmentShader:v,uniforms:{uColor:{value:new n(r)},uPower:{value:e},uStrength:{value:o}},transparent:!0,side:t,depthWrite:!1,blending:i})}export{s as c};
