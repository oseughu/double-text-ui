
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into public-facing code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const API_URL: string;
	export const LC_FIG_SET_PARENT: string;
	export const FIG_PID: string;
	export const rvm_use_flag: string;
	export const rvm_bin_path: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const rvm_quiet_flag: string;
	export const GEM_HOME: string;
	export const NVM_CD_FLAGS: string;
	export const rvm_gemstone_url: string;
	export const TERM: string;
	export const SHELL: string;
	export const FIGTERM_SESSION_ID: string;
	export const npm_config_metrics_registry: string;
	export const rvm_docs_type: string;
	export const IRBRC: string;
	export const TMPDIR: string;
	export const npm_config_global_prefix: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const TERM_PROGRAM_VERSION: string;
	export const COLOR: string;
	export const rvm_hook: string;
	export const MY_RUBY_HOME: string;
	export const TERM_SESSION_ID: string;
	export const npm_config_noproxy: string;
	export const npm_config_local_prefix: string;
	export const ZSH: string;
	export const POWERLINE_COMMAND: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const rvm_gemstone_package_file: string;
	export const COMMAND_MODE: string;
	export const npm_config_globalconfig: string;
	export const rvm_path: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const rvm_proxy: string;
	export const rvm_ruby_file: string;
	export const PAGER: string;
	export const LSCOLORS: string;
	export const rvm_silent_flag: string;
	export const rvm_prefix: string;
	export const rvm_ruby_make: string;
	export const PATH: string;
	export const FIG_HOSTNAME: string;
	export const npm_package_json: string;
	export const _: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const __CFBundleIdentifier: string;
	export const npm_command: string;
	export const TTY: string;
	export const PWD: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const npm_package_name: string;
	export const rvm_sdk: string;
	export const ITERM_PROFILE: string;
	export const XPC_FLAGS: string;
	export const npm_config_node_gyp: string;
	export const npm_package_version: string;
	export const XPC_SERVICE_NAME: string;
	export const rvm_version: string;
	export const rvm_script_name: string;
	export const rvm_pretty_print_flag: string;
	export const FIG_PARENT: string;
	export const SHLVL: string;
	export const HOME: string;
	export const COLORFGBG: string;
	export const rvm_ruby_mode: string;
	export const LC_TERMINAL_VERSION: string;
	export const FIG_SET_PARENT: string;
	export const ITERM_SESSION_ID: string;
	export const npm_config_cache: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const npm_lifecycle_script: string;
	export const rvm_alias_expanded: string;
	export const GEM_PATH: string;
	export const LC_CTYPE: string;
	export const npm_config_user_agent: string;
	export const rvm_nightly_flag: string;
	export const rvm_ruby_make_install: string;
	export const rvm_niceness: string;
	export const LC_TERMINAL: string;
	export const rvm_ruby_bits: string;
	export const rvm_bin_flag: string;
	export const POSH_THEME: string;
	export const rvm_only_path_flag: string;
	export const RUBY_VERSION: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const FIG_TERM: string;
	export const COLORTERM: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into public-facing code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		API_URL: string;
		LC_FIG_SET_PARENT: string;
		FIG_PID: string;
		rvm_use_flag: string;
		rvm_bin_path: string;
		TERM_PROGRAM: string;
		NODE: string;
		INIT_CWD: string;
		rvm_quiet_flag: string;
		GEM_HOME: string;
		NVM_CD_FLAGS: string;
		rvm_gemstone_url: string;
		TERM: string;
		SHELL: string;
		FIGTERM_SESSION_ID: string;
		npm_config_metrics_registry: string;
		rvm_docs_type: string;
		IRBRC: string;
		TMPDIR: string;
		npm_config_global_prefix: string;
		CONDA_PROMPT_MODIFIER: string;
		TERM_PROGRAM_VERSION: string;
		COLOR: string;
		rvm_hook: string;
		MY_RUBY_HOME: string;
		TERM_SESSION_ID: string;
		npm_config_noproxy: string;
		npm_config_local_prefix: string;
		ZSH: string;
		POWERLINE_COMMAND: string;
		NVM_DIR: string;
		USER: string;
		rvm_gemstone_package_file: string;
		COMMAND_MODE: string;
		npm_config_globalconfig: string;
		rvm_path: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		rvm_proxy: string;
		rvm_ruby_file: string;
		PAGER: string;
		LSCOLORS: string;
		rvm_silent_flag: string;
		rvm_prefix: string;
		rvm_ruby_make: string;
		PATH: string;
		FIG_HOSTNAME: string;
		npm_package_json: string;
		_: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		__CFBundleIdentifier: string;
		npm_command: string;
		TTY: string;
		PWD: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		npm_package_name: string;
		rvm_sdk: string;
		ITERM_PROFILE: string;
		XPC_FLAGS: string;
		npm_config_node_gyp: string;
		npm_package_version: string;
		XPC_SERVICE_NAME: string;
		rvm_version: string;
		rvm_script_name: string;
		rvm_pretty_print_flag: string;
		FIG_PARENT: string;
		SHLVL: string;
		HOME: string;
		COLORFGBG: string;
		rvm_ruby_mode: string;
		LC_TERMINAL_VERSION: string;
		FIG_SET_PARENT: string;
		ITERM_SESSION_ID: string;
		npm_config_cache: string;
		LESS: string;
		LOGNAME: string;
		npm_lifecycle_script: string;
		rvm_alias_expanded: string;
		GEM_PATH: string;
		LC_CTYPE: string;
		npm_config_user_agent: string;
		rvm_nightly_flag: string;
		rvm_ruby_make_install: string;
		rvm_niceness: string;
		LC_TERMINAL: string;
		rvm_ruby_bits: string;
		rvm_bin_flag: string;
		POSH_THEME: string;
		rvm_only_path_flag: string;
		RUBY_VERSION: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		FIG_TERM: string;
		COLORTERM: string;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: string]: string | undefined;
	}
}
