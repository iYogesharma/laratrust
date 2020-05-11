(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{223:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("If you want to use the teams feature that allows you to attach roles and permissions to an user depending on a team, you must change the "),s("code",[t._v("use_teams")]),t._v(" key value to "),s("code",[t._v("true")]),t._v(" in your "),s("code",[t._v("config/laratrust.php")]),t._v(" file. Then follow the "),s("docs-link",{attrs:{to:"/configuration/teams.html"}},[t._v("teams configuration")]),t._v(" guide.")],1),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("Inside the "),s("code",[t._v("role_user")]),t._v(" and "),s("code",[t._v("permission_user")]),t._v(" tables the "),s("code",[t._v("user_type")]),t._v(" column will be set with the user's fully qualified class name, as the "),s("a",{attrs:{href:"https://laravel.com/docs/eloquent-relationships#polymorphic-relations",target:"_blank",rel:"noopener noreferrer"}},[t._v("polymorphic"),s("OutboundLink")],1),t._v(" relations describe it in Laravel docs.")]),t._v(" "),t._m(10)]),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("If you want to let laratrust to setup by itself, just run the following command")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("And then do not forget to run")]),t._v(" "),t._m(16),t._m(17)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"after-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#after-installation"}},[this._v("#")]),this._v(" After Installation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files"}},[this._v("#")]),this._v(" Configuration Files")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In your "),e("code",[this._v("config/laratrust.php")]),this._v(" file you will find all the package configurations that you can customize.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"teams-feature"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#teams-feature"}},[this._v("#")]),this._v(" Teams Feature")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"multiple-user-models"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multiple-user-models"}},[this._v("#")]),this._v(" Multiple User Models")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("In the "),s("code",[t._v("config/laratrust.php")]),t._v(" file you will find an "),s("code",[t._v("user_models")]),t._v(" array, it contains the information about the multiple user models and the name of the relationships inside the "),s("code",[t._v("Role")]),t._v(" and "),s("code",[t._v("Permission")]),t._v(" models. For example:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'user_models'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'users'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'App\\User'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("The value of the "),s("code",[t._v("key")]),t._v(" in the "),s("code",[t._v("key => value")]),t._v(" pair defines the name of the relationship inside the "),s("code",[t._v("Role")]),t._v(" and "),s("code",[t._v("Permission")]),t._v(" models.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("It means that there is only one user model using Laratrust, and the relationship with the "),e("code",[this._v("Role")]),this._v(" and "),e("code",[this._v("Permission")]),this._v(" models is going to be called like this:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$role")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("users")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$role")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("users")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you want to use the MorphMap feature just change the "),e("code",[this._v("use_morph_map")]),this._v(" value to "),e("code",[this._v("true")]),this._v(" in Laratrust's configuration file.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"automatic-setup-recommended"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#automatic-setup-recommended"}},[this._v("#")]),this._v(" Automatic setup (Recommended)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("php artisan laratrust:setup\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("If Laravel does not recognize this command, the Laratrust service provider hasn't been registered. Check "),s("code",[t._v("providers")]),t._v(" array in "),s("code",[t._v("config/app.php")]),t._v(" and try clearing your configuration cache")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("php artisan config:clear\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This command will generate the migrations, create the "),e("code",[this._v("Role")]),this._v(" and "),e("code",[this._v("Permission")]),this._v(" models (if you are using the teams feature it will also create a "),e("code",[this._v("Team")]),this._v(" model) and will add the trait to the configured user models.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),e("p",[this._v("The user trait will be added to the models configured in the "),e("code",[this._v("config/laratrust.php")]),this._v(" file.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("composer dump-autoload\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("IMPORTANT")]),this._v(" "),e("p",[e("strong",[this._v("If you did the steps above you are done with the configuration, if not, please read and follow the whole configuration process")])])])}],!1,null,null,null);e.default=r.exports}}]);