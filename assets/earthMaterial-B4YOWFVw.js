import{S as v,c as u}from"./three-DRWTIYid.js";function n({dayMap:o,nightMap:a,cloudMap:r,sunDirection:i,atmosphere:e="#5b8cff",cloudStrength:l=1}){return new v({uniforms:{uDay:{value:o},uNight:{value:a},uCloud:{value:r},uSun:{value:i.clone().normalize()},uAtmo:{value:new u(e)},uClouds:{value:l}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vWorldNormal;
      varying vec3 vViewNormal;
      varying vec3 vViewDir;
      void main() {
        vUv = uv;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        vViewNormal = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vViewDir = -mv.xyz;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform sampler2D uDay;
      uniform sampler2D uNight;
      uniform sampler2D uCloud;
      uniform vec3 uSun;
      uniform vec3 uAtmo;
      uniform float uClouds;
      varying vec2 vUv;
      varying vec3 vWorldNormal;
      varying vec3 vViewNormal;
      varying vec3 vViewDir;
      void main() {
        float sun = dot(normalize(vWorldNormal), normalize(uSun));
        float dayMix = smoothstep(-0.12, 0.28, sun);

        vec3 day = texture2D(uDay, vUv).rgb;
        vec3 night = texture2D(uNight, vUv).rgb;
        float cloud = texture2D(uCloud, vUv).a * uClouds;

        vec3 col = mix(night * 1.55, day, dayMix);
        // clouds are bright in daylight, opaque darkness at night
        col = mix(col, vec3(1.0), cloud * dayMix * 0.92);
        col = mix(col, night * 0.12, cloud * (1.0 - dayMix));

        float rim = pow(1.0 - max(dot(normalize(vViewDir), normalize(vViewNormal)), 0.0), 3.0);
        col += uAtmo * rim * (0.22 + 0.78 * dayMix);

        gl_FragColor = vec4(col, 1.0);
      }
    `})}export{n as c};
