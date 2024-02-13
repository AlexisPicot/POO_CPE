export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","model.docx","TD1.docx","TD1.md"]),
	mimeTypes: {".png":"image/png",".md":"text/markdown"},
	_: {
		client: {"start":"_app/immutable/entry/start.BYlgS3wO.js","app":"_app/immutable/entry/app.tN902Man.js","imports":["_app/immutable/entry/start.BYlgS3wO.js","_app/immutable/chunks/entry.A3ArmYFl.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.tN902Man.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DJnF2lBK.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
