(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{490:function(t,s,e){"use strict";e.r(s);var n=e(20),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"_1-接入u盘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-接入u盘"}},[t._v("#")]),t._v(" 1. 接入U盘")]),t._v(" "),e("p",[t._v("确认挂载")]),t._v(" "),e("p",[e("code",[t._v("df -h")])]),t._v(" "),e("p",[t._v("创建使用的目录")]),t._v(" "),e("p",[e("code",[t._v("mkdir /mnt/sda1/openwrt")])]),t._v(" "),e("h3",{attrs:{id:"_2-修改-etc-opkg-conf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改-etc-opkg-conf"}},[t._v("#")]),t._v(" 2. 修改/etc/opkg.conf")]),t._v(" "),e("p",[e("code",[t._v("vim /etc/opkg.conf")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("dest root /\ndest usb /mnt/sda1/openwrt        #添加的内容，指定路径\ndest ram /tmp\nlists_dir ext /var/opkg-lists\noption overlay_root /overlay\noption check_signature\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("h3",{attrs:{id:"_3-修改-etc-profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改-etc-profile"}},[t._v("#")]),t._v(" 3. 修改/etc/profile")]),t._v(" "),e("p",[e("code",[t._v("vim /etc/profile")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('#红色的是添加的内容\nexport LD_LIBRARY_PATH="/mnt/sda1/openwrt/usr/lib:/mnt/sda1/openwrt/lib"                          #指定库文件\nexport PATH="/usr/sbin:/usr/bin:/sbin:/bin:/mnt/sda1/openwrt/usr/bin:/mnt/sda1/openwrt/usr/sbin"  #可执行文件\nexport HOME=$(grep -e "^${USER:-root}:" /etc/passwd | cut -d ":" -f 6)\nexport HOME=${HOME:-/root}                                    \nexport PS1=\'\\u@\\h:\\w\\$ \'\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("h3",{attrs:{id:"_4-使配置生效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-使配置生效"}},[t._v("#")]),t._v(" 4. 使配置生效")]),t._v(" "),e("p",[e("code",[t._v("source /etc/profile")]),t._v("     #立即生效\n或者\n"),e("code",[t._v("reboot")]),t._v("                  #重启生效")]),t._v(" "),e("p",[t._v("（实测需要重启）")]),t._v(" "),e("p",[t._v(":::原文链接\n"),e("a",{attrs:{href:"https://blog.csdn.net/chouzhi7161/article/details/100749684",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/chouzhi7161/article/details/100749684"),e("OutboundLink")],1),t._v("\n:::")])])}),[],!1,null,null,null);s.default=r.exports}}]);