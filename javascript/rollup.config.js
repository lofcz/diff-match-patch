import { terser } from "rollup-plugin-terser";

export default {
	input: 'index.js',
	output: {
        name: "dmp",
		file: 'dist/dmp.js',
		format: 'umd',
        plugins: [ 
            terser()
        ]
	}
};