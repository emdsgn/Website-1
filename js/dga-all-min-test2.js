(function (bb, L) {
	var av = bb.document,
		bu = bb.navigator,
		bl = bb.location;
	var b = (function () {
		var bF = function (b0, b1) {
			return new bF.fn.init(b0, b1, bD)
		}, bU = bb.jQuery,
			bH = bb.$,
			bD, bY = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
			bM = /\S/,
			bI = /^\s+/,
			bE = /\s+$/,
			bA = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
			bN = /^[\],:{}\s]*$/,
			bW = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
			bP = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
			bJ = /(?:^|:|,)(?:\s*\[)+/g,
			by = /(webkit)[ \/]([\w.]+)/,
			bR = /(opera)(?:.*version)?[ \/]([\w.]+)/,
			bQ = /(msie) ([\w.]+)/,
			bS = /(mozilla)(?:.*? rv:([\w.]+))?/,
			bB = /-([a-z]|[0-9])/ig,
			bZ = /^-ms-/,
			bT = function (b0, b1) {
				return (b1 + "").toUpperCase()
			}, bX = bu.userAgent,
			bV, bC, e, bL = Object.prototype.toString,
			bG = Object.prototype.hasOwnProperty,
			bz = Array.prototype.push,
			bK = Array.prototype.slice,
			bO = String.prototype.trim,
			bv = Array.prototype.indexOf,
			bx = {};
		bF.fn = bF.prototype = {
			constructor: bF,
			init: function (b0, b4, b3) {
				var b2, b5, b1, b6;
				if (!b0) {
					return this
				}
				if (b0.nodeType) {
					this.context = this[0] = b0;
					this.length = 1;
					return this
				}
				if (b0 === "body" && !b4 && av.body) {
					this.context = av;
					this[0] = av.body;
					this.selector = b0;
					this.length = 1;
					return this
				}
				if (typeof b0 === "string") {
					if (b0.charAt(0) === "<" && b0.charAt(b0.length - 1) === ">" && b0.length >= 3) {
						b2 = [null, b0, null]
					} else {
						b2 = bY.exec(b0)
					} if (b2 && (b2[1] || !b4)) {
						if (b2[1]) {
							b4 = b4 instanceof bF ? b4[0] : b4;
							b6 = (b4 ? b4.ownerDocument || b4 : av);
							b1 = bA.exec(b0);
							if (b1) {
								if (bF.isPlainObject(b4)) {
									b0 = [av.createElement(b1[1])];
									bF.fn.attr.call(b0, b4, true)
								} else {
									b0 = [b6.createElement(b1[1])]
								}
							} else {
								b1 = bF.buildFragment([b2[1]], [b6]);
								b0 = (b1.cacheable ? bF.clone(b1.fragment) : b1.fragment).childNodes
							}
							return bF.merge(this, b0)
						} else {
							b5 = av.getElementById(b2[2]);
							if (b5 && b5.parentNode) {
								if (b5.id !== b2[2]) {
									return b3.find(b0)
								}
								this.length = 1;
								this[0] = b5
							}
							this.context = av;
							this.selector = b0;
							return this
						}
					} else {
						if (!b4 || b4.jquery) {
							return (b4 || b3).find(b0)
						} else {
							return this.constructor(b4).find(b0)
						}
					}
				} else {
					if (bF.isFunction(b0)) {
						return b3.ready(b0)
					}
				} if (b0.selector !== L) {
					this.selector = b0.selector;
					this.context = b0.context
				}
				return bF.makeArray(b0, this)
			},
			selector: "",
			jquery: "1.7.1",
			length: 0,
			size: function () {
				return this.length
			},
			toArray: function () {
				return bK.call(this, 0)
			},
			get: function (b0) {
				return b0 == null ? this.toArray() : (b0 < 0 ? this[this.length + b0] : this[b0])
			},
			pushStack: function (b1, b3, b0) {
				var b2 = this.constructor();
				if (bF.isArray(b1)) {
					bz.apply(b2, b1)
				} else {
					bF.merge(b2, b1)
				}
				b2.prevObject = this;
				b2.context = this.context;
				if (b3 === "find") {
					b2.selector = this.selector + (this.selector ? " " : "") + b0
				} else {
					if (b3) {
						b2.selector = this.selector + "." + b3 + "(" + b0 + ")"
					}
				}
				return b2
			},
			each: function (b1, b0) {
				return bF.each(this, b1, b0)
			},
			ready: function (b0) {
				bF.bindReady();
				bC.add(b0);
				return this
			},
			eq: function (b0) {
				b0 = +b0;
				return b0 === -1 ? this.slice(b0) : this.slice(b0, b0 + 1)
			},
			first: function () {
				return this.eq(0)
			},
			last: function () {
				return this.eq(-1)
			},
			slice: function () {
				return this.pushStack(bK.apply(this, arguments), "slice", bK.call(arguments).join(","))
			},
			map: function (b0) {
				return this.pushStack(bF.map(this, function (b2, b1) {
					return b0.call(b2, b1, b2)
				}))
			},
			end: function () {
				return this.prevObject || this.constructor(null)
			},
			push: bz,
			sort: [].sort,
			splice: [].splice
		};
		bF.fn.init.prototype = bF.fn;
		bF.extend = bF.fn.extend = function () {
			var b9, b2, b0, b1, b6, b7, b5 = arguments[0] || {}, b4 = 1,
				b3 = arguments.length,
				b8 = false;
			if (typeof b5 === "boolean") {
				b8 = b5;
				b5 = arguments[1] || {};
				b4 = 2
			}
			if (typeof b5 !== "object" && !bF.isFunction(b5)) {
				b5 = {}
			}
			if (b3 === b4) {
				b5 = this;
				--b4
			}
			for (; b4 < b3; b4++) {
				if ((b9 = arguments[b4]) != null) {
					for (b2 in b9) {
						b0 = b5[b2];
						b1 = b9[b2];
						if (b5 === b1) {
							continue
						}
						if (b8 && b1 && (bF.isPlainObject(b1) || (b6 = bF.isArray(b1)))) {
							if (b6) {
								b6 = false;
								b7 = b0 && bF.isArray(b0) ? b0 : []
							} else {
								b7 = b0 && bF.isPlainObject(b0) ? b0 : {}
							}
							b5[b2] = bF.extend(b8, b7, b1)
						} else {
							if (b1 !== L) {
								b5[b2] = b1
							}
						}
					}
				}
			}
			return b5
		};
		bF.extend({
			noConflict: function (b0) {
				if (bb.$ === bF) {
					bb.$ = bH
				}
				if (b0 && bb.jQuery === bF) {
					bb.jQuery = bU
				}
				return bF
			},
			isReady: false,
			readyWait: 1,
			holdReady: function (b0) {
				if (b0) {
					bF.readyWait++
				} else {
					bF.ready(true)
				}
			},
			ready: function (b0) {
				if ((b0 === true && !--bF.readyWait) || (b0 !== true && !bF.isReady)) {
					if (!av.body) {
						return setTimeout(bF.ready, 1)
					}
					bF.isReady = true;
					if (b0 !== true && --bF.readyWait > 0) {
						return
					}
					bC.fireWith(av, [bF]);
					if (bF.fn.trigger) {
						bF(av).trigger("ready").off("ready")
					}
				}
			},
			bindReady: function () {
				if (bC) {
					return
				}
				bC = bF.Callbacks("once memory");
				if (av.readyState === "complete") {
					return setTimeout(bF.ready, 1)
				}
				if (av.addEventListener) {
					av.addEventListener("DOMContentLoaded", e, false);
					bb.addEventListener("load", bF.ready, false)
				} else {
					if (av.attachEvent) {
						av.attachEvent("onreadystatechange", e);
						bb.attachEvent("onload", bF.ready);
						var b0 = false;
						try {
							b0 = bb.frameElement == null
						} catch (b1) {}
						if (av.documentElement.doScroll && b0) {
							bw()
						}
					}
				}
			},
			isFunction: function (b0) {
				return bF.type(b0) === "function"
			},
			isArray: Array.isArray || function (b0) {
				return bF.type(b0) === "array"
			},
			isWindow: function (b0) {
				return b0 && typeof b0 === "object" && "setInterval" in b0
			},
			isNumeric: function (b0) {
				return !isNaN(parseFloat(b0)) && isFinite(b0)
			},
			type: function (b0) {
				return b0 == null ? String(b0) : bx[bL.call(b0)] || "object"
			},
			isPlainObject: function (b2) {
				if (!b2 || bF.type(b2) !== "object" || b2.nodeType || bF.isWindow(b2)) {
					return false
				}
				try {
					if (b2.constructor && !bG.call(b2, "constructor") && !bG.call(b2.constructor.prototype, "isPrototypeOf")) {
						return false
					}
				} catch (b1) {
					return false
				}
				var b0;
				for (b0 in b2) {}
				return b0 === L || bG.call(b2, b0)
			},
			isEmptyObject: function (b1) {
				for (var b0 in b1) {
					return false
				}
				return true
			},
			error: function (b0) {
				throw new Error(b0)
			},
			parseJSON: function (b0) {
				if (typeof b0 !== "string" || !b0) {
					return null
				}
				b0 = bF.trim(b0);
				if (bb.JSON && bb.JSON.parse) {
					return bb.JSON.parse(b0)
				}
				if (bN.test(b0.replace(bW, "@").replace(bP, "]").replace(bJ, ""))) {
					return (new Function("return " + b0))()
				}
				bF.error("Invalid JSON: " + b0)
			},
			parseXML: function (b2) {
				var b0, b1;
				try {
					if (bb.DOMParser) {
						b1 = new DOMParser();
						b0 = b1.parseFromString(b2, "text/xml")
					} else {
						b0 = new ActiveXObject("Microsoft.XMLDOM");
						b0.async = "false";
						b0.loadXML(b2)
					}
				} catch (b3) {
					b0 = L
				}
				if (!b0 || !b0.documentElement || b0.getElementsByTagName("parsererror").length) {
					bF.error("Invalid XML: " + b2)
				}
				return b0
			},
			noop: function () {},
			globalEval: function (b0) {
				if (b0 && bM.test(b0)) {
					(bb.execScript || function (b1) {
						bb["eval"].call(bb, b1)
					})(b0)
				}
			},
			camelCase: function (b0) {
				return b0.replace(bZ, "ms-").replace(bB, bT)
			},
			nodeName: function (b1, b0) {
				return b1.nodeName && b1.nodeName.toUpperCase() === b0.toUpperCase()
			},
			each: function (b3, b6, b2) {
				var b1, b4 = 0,
					b5 = b3.length,
					b0 = b5 === L || bF.isFunction(b3);
				if (b2) {
					if (b0) {
						for (b1 in b3) {
							if (b6.apply(b3[b1], b2) === false) {
								break
							}
						}
					} else {
						for (; b4 < b5;) {
							if (b6.apply(b3[b4++], b2) === false) {
								break
							}
						}
					}
				} else {
					if (b0) {
						for (b1 in b3) {
							if (b6.call(b3[b1], b1, b3[b1]) === false) {
								break
							}
						}
					} else {
						for (; b4 < b5;) {
							if (b6.call(b3[b4], b4, b3[b4++]) === false) {
								break
							}
						}
					}
				}
				return b3
			},
			trim: bO ? function (b0) {
				return b0 == null ? "" : bO.call(b0)
			} : function (b0) {
				return b0 == null ? "" : b0.toString().replace(bI, "").replace(bE, "")
			},
			makeArray: function (b3, b1) {
				var b0 = b1 || [];
				if (b3 != null) {
					var b2 = bF.type(b3);
					if (b3.length == null || b2 === "string" || b2 === "function" || b2 === "regexp" || bF.isWindow(b3)) {
						bz.call(b0, b3)
					} else {
						bF.merge(b0, b3)
					}
				}
				return b0
			},
			inArray: function (b2, b3, b1) {
				var b0;
				if (b3) {
					if (bv) {
						return bv.call(b3, b2, b1)
					}
					b0 = b3.length;
					b1 = b1 ? b1 < 0 ? Math.max(0, b0 + b1) : b1 : 0;
					for (; b1 < b0; b1++) {
						if (b1 in b3 && b3[b1] === b2) {
							return b1
						}
					}
				}
				return -1
			},
			merge: function (b4, b2) {
				var b3 = b4.length,
					b1 = 0;
				if (typeof b2.length === "number") {
					for (var b0 = b2.length; b1 < b0; b1++) {
						b4[b3++] = b2[b1]
					}
				} else {
					while (b2[b1] !== L) {
						b4[b3++] = b2[b1++]
					}
				}
				b4.length = b3;
				return b4
			},
			grep: function (b1, b6, b0) {
				var b2 = [],
					b5;
				b0 = !! b0;
				for (var b3 = 0, b4 = b1.length; b3 < b4; b3++) {
					b5 = !! b6(b1[b3], b3);
					if (b0 !== b5) {
						b2.push(b1[b3])
					}
				}
				return b2
			},
			map: function (b0, b7, b8) {
				var b5, b6, b4 = [],
					b2 = 0,
					b1 = b0.length,
					b3 = b0 instanceof bF || b1 !== L && typeof b1 === "number" && ((b1 > 0 && b0[0] && b0[b1 - 1]) || b1 === 0 || bF.isArray(b0));
				if (b3) {
					for (; b2 < b1; b2++) {
						b5 = b7(b0[b2], b2, b8);
						if (b5 != null) {
							b4[b4.length] = b5
						}
					}
				} else {
					for (b6 in b0) {
						b5 = b7(b0[b6], b6, b8);
						if (b5 != null) {
							b4[b4.length] = b5
						}
					}
				}
				return b4.concat.apply([], b4)
			},
			guid: 1,
			proxy: function (b4, b3) {
				if (typeof b3 === "string") {
					var b2 = b4[b3];
					b3 = b4;
					b4 = b2
				}
				if (!bF.isFunction(b4)) {
					return L
				}
				var b0 = bK.call(arguments, 2),
					b1 = function () {
						return b4.apply(b3, b0.concat(bK.call(arguments)))
					};
				b1.guid = b4.guid = b4.guid || b1.guid || bF.guid++;
				return b1
			},
			access: function (b0, b8, b6, b2, b5, b7) {
				var b1 = b0.length;
				if (typeof b8 === "object") {
					for (var b3 in b8) {
						bF.access(b0, b3, b8[b3], b2, b5, b6)
					}
					return b0
				}
				if (b6 !== L) {
					b2 = !b7 && b2 && bF.isFunction(b6);
					for (var b4 = 0; b4 < b1; b4++) {
						b5(b0[b4], b8, b2 ? b6.call(b0[b4], b4, b5(b0[b4], b8)) : b6, b7)
					}
					return b0
				}
				return b1 ? b5(b0[0], b8) : L
			},
			now: function () {
				return (new Date()).getTime()
			},
			uaMatch: function (b1) {
				b1 = b1.toLowerCase();
				var b0 = by.exec(b1) || bR.exec(b1) || bQ.exec(b1) || b1.indexOf("compatible") < 0 && bS.exec(b1) || [];
				return {
					browser: b0[1] || "",
					version: b0[2] || "0"
				}
			},
			sub: function () {
				function b0(b3, b4) {
					return new b0.fn.init(b3, b4)
				}
				bF.extend(true, b0, this);
				b0.superclass = this;
				b0.fn = b0.prototype = this();
				b0.fn.constructor = b0;
				b0.sub = this.sub;
				b0.fn.init = function b2(b3, b4) {
					if (b4 && b4 instanceof bF && !(b4 instanceof b0)) {
						b4 = b0(b4)
					}
					return bF.fn.init.call(this, b3, b4, b1)
				};
				b0.fn.init.prototype = b0.fn;
				var b1 = b0(av);
				return b0
			},
			browser: {}
		});
		bF.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (b1, b0) {
			bx["[object " + b0 + "]"] = b0.toLowerCase()
		});
		bV = bF.uaMatch(bX);
		if (bV.browser) {
			bF.browser[bV.browser] = true;
			bF.browser.version = bV.version
		}
		if (bF.browser.webkit) {
			bF.browser.safari = true
		}
		if (bM.test("\xA0")) {
			bI = /^[\s\xA0]+/;
			bE = /[\s\xA0]+$/
		}
		bD = bF(av);
		if (av.addEventListener) {
			e = function () {
				av.removeEventListener("DOMContentLoaded", e, false);
				bF.ready()
			}
		} else {
			if (av.attachEvent) {
				e = function () {
					if (av.readyState === "complete") {
						av.detachEvent("onreadystatechange", e);
						bF.ready()
					}
				}
			}
		}
		function bw() {
			if (bF.isReady) {
				return
			}
			try {
				av.documentElement.doScroll("left")
			} catch (b0) {
				setTimeout(bw, 1);
				return
			}
			bF.ready()
		}
		return bF
	})();
	var a2 = {};

	function X(e) {
		var bv = a2[e] = {}, bw, bx;
		e = e.split(/\s+/);
		for (bw = 0, bx = e.length; bw < bx; bw++) {
			bv[e[bw]] = true
		}
		return bv
	}
	b.Callbacks = function (bw) {
		bw = bw ? (a2[bw] || X(bw)) : {};
		var bB = [],
			bC = [],
			bx, by, bv, bz, bA, bE = function (bF) {
				var bG, bJ, bI, bH, bK;
				for (bG = 0, bJ = bF.length; bG < bJ; bG++) {
					bI = bF[bG];
					bH = b.type(bI);
					if (bH === "array") {
						bE(bI)
					} else {
						if (bH === "function") {
							if (!bw.unique || !bD.has(bI)) {
								bB.push(bI)
							}
						}
					}
				}
			}, e = function (bG, bF) {
				bF = bF || [];
				bx = !bw.memory || [bG, bF];
				by = true;
				bA = bv || 0;
				bv = 0;
				bz = bB.length;
				for (; bB && bA < bz; bA++) {
					if (bB[bA].apply(bG, bF) === false && bw.stopOnFalse) {
						bx = true;
						break
					}
				}
				by = false;
				if (bB) {
					if (!bw.once) {
						if (bC && bC.length) {
							bx = bC.shift();
							bD.fireWith(bx[0], bx[1])
						}
					} else {
						if (bx === true) {
							bD.disable()
						} else {
							bB = []
						}
					}
				}
			}, bD = {
				add: function () {
					if (bB) {
						var bF = bB.length;
						bE(arguments);
						if (by) {
							bz = bB.length
						} else {
							if (bx && bx !== true) {
								bv = bF;
								e(bx[0], bx[1])
							}
						}
					}
					return this
				},
				remove: function () {
					if (bB) {
						var bF = arguments,
							bH = 0,
							bI = bF.length;
						for (; bH < bI; bH++) {
							for (var bG = 0; bG < bB.length; bG++) {
								if (bF[bH] === bB[bG]) {
									if (by) {
										if (bG <= bz) {
											bz--;
											if (bG <= bA) {
												bA--
											}
										}
									}
									bB.splice(bG--, 1);
									if (bw.unique) {
										break
									}
								}
							}
						}
					}
					return this
				},
				has: function (bG) {
					if (bB) {
						var bF = 0,
							bH = bB.length;
						for (; bF < bH; bF++) {
							if (bG === bB[bF]) {
								return true
							}
						}
					}
					return false
				},
				empty: function () {
					bB = [];
					return this
				},
				disable: function () {
					bB = bC = bx = L;
					return this
				},
				disabled: function () {
					return !bB
				},
				lock: function () {
					bC = L;
					if (!bx || bx === true) {
						bD.disable()
					}
					return this
				},
				locked: function () {
					return !bC
				},
				fireWith: function (bG, bF) {
					if (bC) {
						if (by) {
							if (!bw.once) {
								bC.push([bG, bF])
							}
						} else {
							if (!(bw.once && bx)) {
								e(bG, bF)
							}
						}
					}
					return this
				},
				fire: function () {
					bD.fireWith(this, arguments);
					return this
				},
				fired: function () {
					return !!bx
				}
			};
		return bD
	};
	var aJ = [].slice;
	b.extend({
		Deferred: function (by) {
			var bx = b.Callbacks("once memory"),
				bw = b.Callbacks("once memory"),
				bv = b.Callbacks("memory"),
				e = "pending",
				bA = {
					resolve: bx,
					reject: bw,
					notify: bv
				}, bC = {
					done: bx.add,
					fail: bw.add,
					progress: bv.add,
					state: function () {
						return e
					},
					isResolved: bx.fired,
					isRejected: bw.fired,
					then: function (bE, bD, bF) {
						bB.done(bE).fail(bD).progress(bF);
						return this
					},
					always: function () {
						bB.done.apply(bB, arguments).fail.apply(bB, arguments);
						return this
					},
					pipe: function (bF, bE, bD) {
						return b.Deferred(function (bG) {
							b.each({
								done: [bF, "resolve"],
								fail: [bE, "reject"],
								progress: [bD, "notify"]
							}, function (bI, bL) {
								var bH = bL[0],
									bK = bL[1],
									bJ;
								if (b.isFunction(bH)) {
									bB[bI](function () {
										bJ = bH.apply(this, arguments);
										if (bJ && b.isFunction(bJ.promise)) {
											bJ.promise().then(bG.resolve, bG.reject, bG.notify)
										} else {
											bG[bK + "With"](this === bB ? bG : this, [bJ])
										}
									})
								} else {
									bB[bI](bG[bK])
								}
							})
						}).promise()
					},
					promise: function (bE) {
						if (bE == null) {
							bE = bC
						} else {
							for (var bD in bC) {
								bE[bD] = bC[bD]
							}
						}
						return bE
					}
				}, bB = bC.promise({}),
				bz;
			for (bz in bA) {
				bB[bz] = bA[bz].fire;
				bB[bz + "With"] = bA[bz].fireWith
			}
			bB.done(function () {
				e = "resolved"
			}, bw.disable, bv.lock).fail(function () {
				e = "rejected"
			}, bx.disable, bv.lock);
			if (by) {
				by.call(bB, bB)
			}
			return bB
		},
		when: function (bA) {
			var bx = aJ.call(arguments, 0),
				bv = 0,
				e = bx.length,
				bB = new Array(e),
				bw = e,
				by = e,
				bC = e <= 1 && bA && b.isFunction(bA.promise) ? bA : b.Deferred(),
				bE = bC.promise();

			function bD(bF) {
				return function (bG) {
					bx[bF] = arguments.length > 1 ? aJ.call(arguments, 0) : bG;
					if (!(--bw)) {
						bC.resolveWith(bC, bx)
					}
				}
			}
			function bz(bF) {
				return function (bG) {
					bB[bF] = arguments.length > 1 ? aJ.call(arguments, 0) : bG;
					bC.notifyWith(bE, bB)
				}
			}
			if (e > 1) {
				for (; bv < e; bv++) {
					if (bx[bv] && bx[bv].promise && b.isFunction(bx[bv].promise)) {
						bx[bv].promise().then(bD(bv), bC.reject, bz(bv))
					} else {
						--bw
					}
				}
				if (!bw) {
					bC.resolveWith(bC, bx)
				}
			} else {
				if (bC !== bA) {
					bC.resolveWith(bC, e ? [bA] : [])
				}
			}
			return bE
		}
	});
	b.support = (function () {
		var bJ, bI, bF, bG, bx, bE, bA, bD, bz, bK, bB, by, bw, bv = av.createElement("div"),
			bH = av.documentElement;
		bv.setAttribute("className", "t");
		bv.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
		bI = bv.getElementsByTagName("*");
		bF = bv.getElementsByTagName("a")[0];
		if (!bI || !bI.length || !bF) {
			return {}
		}
		bG = av.createElement("select");
		bx = bG.appendChild(av.createElement("option"));
		bE = bv.getElementsByTagName("input")[0];
		bJ = {
			leadingWhitespace: (bv.firstChild.nodeType === 3),
			tbody: !bv.getElementsByTagName("tbody").length,
			htmlSerialize: !! bv.getElementsByTagName("link").length,
			style: /top/.test(bF.getAttribute("style")),
			hrefNormalized: (bF.getAttribute("href") === "/a"),
			opacity: /^0.55/.test(bF.style.opacity),
			cssFloat: !! bF.style.cssFloat,
			checkOn: (bE.value === "on"),
			optSelected: bx.selected,
			getSetAttribute: bv.className !== "t",
			enctype: !! av.createElement("form").enctype,
			html5Clone: av.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
			submitBubbles: true,
			changeBubbles: true,
			focusinBubbles: false,
			deleteExpando: true,
			noCloneEvent: true,
			inlineBlockNeedsLayout: false,
			shrinkWrapBlocks: false,
			reliableMarginRight: true
		};
		bE.checked = true;
		bJ.noCloneChecked = bE.cloneNode(true).checked;
		bG.disabled = true;
		bJ.optDisabled = !bx.disabled;
		try {
			delete bv.test
		} catch (bC) {
			bJ.deleteExpando = false
		}
		if (!bv.addEventListener && bv.attachEvent && bv.fireEvent) {
			bv.attachEvent("onclick", function () {
				bJ.noCloneEvent = false
			});
			bv.cloneNode(true).fireEvent("onclick")
		}
		bE = av.createElement("input");
		bE.value = "t";
		bE.setAttribute("type", "radio");
		bJ.radioValue = bE.value === "t";
		bE.setAttribute("checked", "checked");
		bv.appendChild(bE);
		bD = av.createDocumentFragment();
		bD.appendChild(bv.lastChild);
		bJ.checkClone = bD.cloneNode(true).cloneNode(true).lastChild.checked;
		bJ.appendChecked = bE.checked;
		bD.removeChild(bE);
		bD.appendChild(bv);
		bv.innerHTML = "";
		if (bb.getComputedStyle) {
			bA = av.createElement("div");
			bA.style.width = "0";
			bA.style.marginRight = "0";
			bv.style.width = "2px";
			bv.appendChild(bA);
			bJ.reliableMarginRight = (parseInt((bb.getComputedStyle(bA, null) || {
				marginRight: 0
			}).marginRight, 10) || 0) === 0
		}
		if (bv.attachEvent) {
			for (by in {
				submit: 1,
				change: 1,
				focusin: 1
			}) {
				bB = "on" + by;
				bw = (bB in bv);
				if (!bw) {
					bv.setAttribute(bB, "return;");
					bw = (typeof bv[bB] === "function")
				}
				bJ[by + "Bubbles"] = bw
			}
		}
		bD.removeChild(bv);
		bD = bG = bx = bA = bv = bE = null;
		b(function () {
			var bM, bU, bV, bT, bN, bO, bL, bS, bR, e, bP, bQ = av.getElementsByTagName("body")[0];
			if (!bQ) {
				return
			}
			bL = 1;
			bS = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;";
			bR = "visibility:hidden;border:0;";
			e = "style='" + bS + "border:5px solid #000;padding:0;'";
			bP = "<div " + e + "><div></div></div><table " + e + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
			bM = av.createElement("div");
			bM.style.cssText = bR + "width:0;height:0;position:static;top:0;margin-top:" + bL + "px";
			bQ.insertBefore(bM, bQ.firstChild);
			bv = av.createElement("div");
			bM.appendChild(bv);
			bv.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
			bz = bv.getElementsByTagName("td");
			bw = (bz[0].offsetHeight === 0);
			bz[0].style.display = "";
			bz[1].style.display = "none";
			bJ.reliableHiddenOffsets = bw && (bz[0].offsetHeight === 0);
			bv.innerHTML = "";
			bv.style.width = bv.style.paddingLeft = "1px";
			b.boxModel = bJ.boxModel = bv.offsetWidth === 2;
			if (typeof bv.style.zoom !== "undefined") {
				bv.style.display = "inline";
				bv.style.zoom = 1;
				bJ.inlineBlockNeedsLayout = (bv.offsetWidth === 2);
				bv.style.display = "";
				bv.innerHTML = "<div style='width:4px;'></div>";
				bJ.shrinkWrapBlocks = (bv.offsetWidth !== 2)
			}
			bv.style.cssText = bS + bR;
			bv.innerHTML = bP;
			bU = bv.firstChild;
			bV = bU.firstChild;
			bN = bU.nextSibling.firstChild.firstChild;
			bO = {
				doesNotAddBorder: (bV.offsetTop !== 5),
				doesAddBorderForTableAndCells: (bN.offsetTop === 5)
			};
			bV.style.position = "fixed";
			bV.style.top = "20px";
			bO.fixedPosition = (bV.offsetTop === 20 || bV.offsetTop === 15);
			bV.style.position = bV.style.top = "";
			bU.style.overflow = "hidden";
			bU.style.position = "relative";
			bO.subtractsBorderForOverflowNotVisible = (bV.offsetTop === -5);
			bO.doesNotIncludeMarginInBodyOffset = (bQ.offsetTop !== bL);
			bQ.removeChild(bM);
			bv = bM = null;
			b.extend(bJ, bO)
		});
		return bJ
	})();
	var aS = /^(?:\{.*\}|\[.*\])$/,
		aA = /([A-Z])/g;
	b.extend({
		cache: {},
		uuid: 0,
		expando: "jQuery" + (b.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: true,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: true
		},
		hasData: function (e) {
			e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando];
			return !!e && !S(e)
		},
		data: function (bx, bv, bz, by) {
			if (!b.acceptData(bx)) {
				return
			}
			var bG, bA, bD, bE = b.expando,
				bC = typeof bv === "string",
				bF = bx.nodeType,
				e = bF ? b.cache : bx,
				bw = bF ? bx[bE] : bx[bE] && bE,
				bB = bv === "events";
			if ((!bw || !e[bw] || (!bB && !by && !e[bw].data)) && bC && bz === L) {
				return
			}
			if (!bw) {
				if (bF) {
					bx[bE] = bw = ++b.uuid
				} else {
					bw = bE
				}
			}
			if (!e[bw]) {
				e[bw] = {};
				if (!bF) {
					e[bw].toJSON = b.noop
				}
			}
			if (typeof bv === "object" || typeof bv === "function") {
				if (by) {
					e[bw] = b.extend(e[bw], bv)
				} else {
					e[bw].data = b.extend(e[bw].data, bv)
				}
			}
			bG = bA = e[bw];
			if (!by) {
				if (!bA.data) {
					bA.data = {}
				}
				bA = bA.data
			}
			if (bz !== L) {
				bA[b.camelCase(bv)] = bz
			}
			if (bB && !bA[bv]) {
				return bG.events
			}
			if (bC) {
				bD = bA[bv];
				if (bD == null) {
					bD = bA[b.camelCase(bv)]
				}
			} else {
				bD = bA
			}
			return bD
		},
		removeData: function (bx, bv, by) {
			if (!b.acceptData(bx)) {
				return
			}
			var bB, bA, bz, bC = b.expando,
				bD = bx.nodeType,
				e = bD ? b.cache : bx,
				bw = bD ? bx[bC] : bC;
			if (!e[bw]) {
				return
			}
			if (bv) {
				bB = by ? e[bw] : e[bw].data;
				if (bB) {
					if (!b.isArray(bv)) {
						if (bv in bB) {
							bv = [bv]
						} else {
							bv = b.camelCase(bv);
							if (bv in bB) {
								bv = [bv]
							} else {
								bv = bv.split(" ")
							}
						}
					}
					for (bA = 0, bz = bv.length; bA < bz; bA++) {
						delete bB[bv[bA]]
					}
					if (!(by ? S : b.isEmptyObject)(bB)) {
						return
					}
				}
			}
			if (!by) {
				delete e[bw].data;
				if (!S(e[bw])) {
					return
				}
			}
			if (b.support.deleteExpando || !e.setInterval) {
				delete e[bw]
			} else {
				e[bw] = null
			} if (bD) {
				if (b.support.deleteExpando) {
					delete bx[bC]
				} else {
					if (bx.removeAttribute) {
						bx.removeAttribute(bC)
					} else {
						bx[bC] = null
					}
				}
			}
		},
		_data: function (bv, e, bw) {
			return b.data(bv, e, bw, true)
		},
		acceptData: function (bv) {
			if (bv.nodeName) {
				var e = b.noData[bv.nodeName.toLowerCase()];
				if (e) {
					return !(e === true || bv.getAttribute("classid") !== e)
				}
			}
			return true
		}
	});
	b.fn.extend({
		data: function (by, bA) {
			var bB, e, bw, bz = null;
			if (typeof by === "undefined") {
				if (this.length) {
					bz = b.data(this[0]);
					if (this[0].nodeType === 1 && !b._data(this[0], "parsedAttrs")) {
						e = this[0].attributes;
						for (var bx = 0, bv = e.length; bx < bv; bx++) {
							bw = e[bx].name;
							if (bw.indexOf("data-") === 0) {
								bw = b.camelCase(bw.substring(5));
								a5(this[0], bw, bz[bw])
							}
						}
						b._data(this[0], "parsedAttrs", true)
					}
				}
				return bz
			} else {
				if (typeof by === "object") {
					return this.each(function () {
						b.data(this, by)
					})
				}
			}
			bB = by.split(".");
			bB[1] = bB[1] ? "." + bB[1] : "";
			if (bA === L) {
				bz = this.triggerHandler("getData" + bB[1] + "!", [bB[0]]);
				if (bz === L && this.length) {
					bz = b.data(this[0], by);
					bz = a5(this[0], by, bz)
				}
				return bz === L && bB[1] ? this.data(bB[0]) : bz
			} else {
				return this.each(function () {
					var bC = b(this),
						bD = [bB[0], bA];
					bC.triggerHandler("setData" + bB[1] + "!", bD);
					b.data(this, by, bA);
					bC.triggerHandler("changeData" + bB[1] + "!", bD)
				})
			}
		},
		removeData: function (e) {
			return this.each(function () {
				b.removeData(this, e)
			})
		}
	});

	function a5(bx, bw, by) {
		if (by === L && bx.nodeType === 1) {
			var bv = "data-" + bw.replace(aA, "-$1").toLowerCase();
			by = bx.getAttribute(bv);
			if (typeof by === "string") {
				try {
					by = by === "true" ? true : by === "false" ? false : by === "null" ? null : b.isNumeric(by) ? parseFloat(by) : aS.test(by) ? b.parseJSON(by) : by
				} catch (bz) {}
				b.data(bx, bw, by)
			} else {
				by = L
			}
		}
		return by
	}
	function S(bv) {
		for (var e in bv) {
			if (e === "data" && b.isEmptyObject(bv[e])) {
				continue
			}
			if (e !== "toJSON") {
				return false
			}
		}
		return true
	}
	function bi(by, bx, bA) {
		var bw = bx + "defer",
			bv = bx + "queue",
			e = bx + "mark",
			bz = b._data(by, bw);
		if (bz && (bA === "queue" || !b._data(by, bv)) && (bA === "mark" || !b._data(by, e))) {
			setTimeout(function () {
				if (!b._data(by, bv) && !b._data(by, e)) {
					b.removeData(by, bw, true);
					bz.fire()
				}
			}, 0)
		}
	}
	b.extend({
		_mark: function (bv, e) {
			if (bv) {
				e = (e || "fx") + "mark";
				b._data(bv, e, (b._data(bv, e) || 0) + 1)
			}
		},
		_unmark: function (by, bx, bv) {
			if (by !== true) {
				bv = bx;
				bx = by;
				by = false
			}
			if (bx) {
				bv = bv || "fx";
				var e = bv + "mark",
					bw = by ? 0 : ((b._data(bx, e) || 1) - 1);
				if (bw) {
					b._data(bx, e, bw)
				} else {
					b.removeData(bx, e, true);
					bi(bx, bv, "mark")
				}
			}
		},
		queue: function (bv, e, bx) {
			var bw;
			if (bv) {
				e = (e || "fx") + "queue";
				bw = b._data(bv, e);
				if (bx) {
					if (!bw || b.isArray(bx)) {
						bw = b._data(bv, e, b.makeArray(bx))
					} else {
						bw.push(bx)
					}
				}
				return bw || []
			}
		},
		dequeue: function (by, bx) {
			bx = bx || "fx";
			var bv = b.queue(by, bx),
				bw = bv.shift(),
				e = {};
			if (bw === "inprogress") {
				bw = bv.shift()
			}
			if (bw) {
				if (bx === "fx") {
					bv.unshift("inprogress")
				}
				b._data(by, bx + ".run", e);
				bw.call(by, function () {
					b.dequeue(by, bx)
				}, e)
			}
			if (!bv.length) {
				b.removeData(by, bx + "queue " + bx + ".run", true);
				bi(by, bx, "queue")
			}
		}
	});
	b.fn.extend({
		queue: function (e, bv) {
			if (typeof e !== "string") {
				bv = e;
				e = "fx"
			}
			if (bv === L) {
				return b.queue(this[0], e)
			}
			return this.each(function () {
				var bw = b.queue(this, e, bv);
				if (e === "fx" && bw[0] !== "inprogress") {
					b.dequeue(this, e)
				}
			})
		},
		dequeue: function (e) {
			return this.each(function () {
				b.dequeue(this, e)
			})
		},
		delay: function (bv, e) {
			bv = b.fx ? b.fx.speeds[bv] || bv : bv;
			e = e || "fx";
			return this.queue(e, function (bx, bw) {
				var by = setTimeout(bx, bv);
				bw.stop = function () {
					clearTimeout(by)
				}
			})
		},
		clearQueue: function (e) {
			return this.queue(e || "fx", [])
		},
		promise: function (bD, bw) {
			if (typeof bD !== "string") {
				bw = bD;
				bD = L
			}
			bD = bD || "fx";
			var e = b.Deferred(),
				bv = this,
				by = bv.length,
				bB = 1,
				bz = bD + "defer",
				bA = bD + "queue",
				bC = bD + "mark",
				bx;

			function bE() {
				if (!(--bB)) {
					e.resolveWith(bv, [bv])
				}
			}
			while (by--) {
				if ((bx = b.data(bv[by], bz, L, true) || (b.data(bv[by], bA, L, true) || b.data(bv[by], bC, L, true)) && b.data(bv[by], bz, b.Callbacks("once memory"), true))) {
					bB++;
					bx.add(bE)
				}
			}
			bE();
			return e.promise()
		}
	});
	var aP = /[\n\t\r]/g,
		af = /\s+/,
		aU = /\r/g,
		g = /^(?:button|input)$/i,
		D = /^(?:button|input|object|select|textarea)$/i,
		l = /^a(?:rea)?$/i,
		ao = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		F = b.support.getSetAttribute,
		be, aY, aF;
	b.fn.extend({
		attr: function (e, bv) {
			return b.access(this, e, bv, true, b.attr)
		},
		removeAttr: function (e) {
			return this.each(function () {
				b.removeAttr(this, e)
			})
		},
		prop: function (e, bv) {
			return b.access(this, e, bv, true, b.prop)
		},
		removeProp: function (e) {
			e = b.propFix[e] || e;
			return this.each(function () {
				try {
					this[e] = L;
					delete this[e]
				} catch (bv) {}
			})
		},
		addClass: function (by) {
			var bA, bw, bv, bx, bz, bB, e;
			if (b.isFunction(by)) {
				return this.each(function (bC) {
					b(this).addClass(by.call(this, bC, this.className))
				})
			}
			if (by && typeof by === "string") {
				bA = by.split(af);
				for (bw = 0, bv = this.length; bw < bv; bw++) {
					bx = this[bw];
					if (bx.nodeType === 1) {
						if (!bx.className && bA.length === 1) {
							bx.className = by
						} else {
							bz = " " + bx.className + " ";
							for (bB = 0, e = bA.length; bB < e; bB++) {
								if (!~bz.indexOf(" " + bA[bB] + " ")) {
									bz += bA[bB] + " "
								}
							}
							bx.className = b.trim(bz)
						}
					}
				}
			}
			return this
		},
		removeClass: function (bz) {
			var bA, bw, bv, by, bx, bB, e;
			if (b.isFunction(bz)) {
				return this.each(function (bC) {
					b(this).removeClass(bz.call(this, bC, this.className))
				})
			}
			if ((bz && typeof bz === "string") || bz === L) {
				bA = (bz || "").split(af);
				for (bw = 0, bv = this.length; bw < bv; bw++) {
					by = this[bw];
					if (by.nodeType === 1 && by.className) {
						if (bz) {
							bx = (" " + by.className + " ").replace(aP, " ");
							for (bB = 0, e = bA.length; bB < e; bB++) {
								bx = bx.replace(" " + bA[bB] + " ", " ")
							}
							by.className = b.trim(bx)
						} else {
							by.className = ""
						}
					}
				}
			}
			return this
		},
		toggleClass: function (bx, bv) {
			var bw = typeof bx,
				e = typeof bv === "boolean";
			if (b.isFunction(bx)) {
				return this.each(function (by) {
					b(this).toggleClass(bx.call(this, by, this.className, bv), bv)
				})
			}
			return this.each(function () {
				if (bw === "string") {
					var bA, bz = 0,
						by = b(this),
						bB = bv,
						bC = bx.split(af);
					while ((bA = bC[bz++])) {
						bB = e ? bB : !by.hasClass(bA);
						by[bB ? "addClass" : "removeClass"](bA)
					}
				} else {
					if (bw === "undefined" || bw === "boolean") {
						if (this.className) {
							b._data(this, "__className__", this.className)
						}
						this.className = this.className || bx === false ? "" : b._data(this, "__className__") || ""
					}
				}
			})
		},
		hasClass: function (e) {
			var bx = " " + e + " ",
				bw = 0,
				bv = this.length;
			for (; bw < bv; bw++) {
				if (this[bw].nodeType === 1 && (" " + this[bw].className + " ").replace(aP, " ").indexOf(bx) > -1) {
					return true
				}
			}
			return false
		},
		val: function (bx) {
			var e, bv, by, bw = this[0];
			if (!arguments.length) {
				if (bw) {
					e = b.valHooks[bw.nodeName.toLowerCase()] || b.valHooks[bw.type];
					if (e && "get" in e && (bv = e.get(bw, "value")) !== L) {
						return bv
					}
					bv = bw.value;
					return typeof bv === "string" ? bv.replace(aU, "") : bv == null ? "" : bv
				}
				return
			}
			by = b.isFunction(bx);
			return this.each(function (bA) {
				var bz = b(this),
					bB;
				if (this.nodeType !== 1) {
					return
				}
				if (by) {
					bB = bx.call(this, bA, bz.val())
				} else {
					bB = bx
				} if (bB == null) {
					bB = ""
				} else {
					if (typeof bB === "number") {
						bB += ""
					} else {
						if (b.isArray(bB)) {
							bB = b.map(bB, function (bC) {
								return bC == null ? "" : bC + ""
							})
						}
					}
				}
				e = b.valHooks[this.nodeName.toLowerCase()] || b.valHooks[this.type];
				if (!e || !("set" in e) || e.set(this, bB, "value") === L) {
					this.value = bB
				}
			})
		}
	});
	b.extend({
		valHooks: {
			option: {
				get: function (e) {
					var bv = e.attributes.value;
					return !bv || bv.specified ? e.value : e.text
				}
			},
			select: {
				get: function (e) {
					var bA, bv, bz, bx, by = e.selectedIndex,
						bB = [],
						bC = e.options,
						bw = e.type === "select-one";
					if (by < 0) {
						return null
					}
					bv = bw ? by : 0;
					bz = bw ? by + 1 : bC.length;
					for (; bv < bz; bv++) {
						bx = bC[bv];
						if (bx.selected && (b.support.optDisabled ? !bx.disabled : bx.getAttribute("disabled") === null) && (!bx.parentNode.disabled || !b.nodeName(bx.parentNode, "optgroup"))) {
							bA = b(bx).val();
							if (bw) {
								return bA
							}
							bB.push(bA)
						}
					}
					if (bw && !bB.length && bC.length) {
						return b(bC[by]).val()
					}
					return bB
				},
				set: function (bv, bw) {
					var e = b.makeArray(bw);
					b(bv).find("option").each(function () {
						this.selected = b.inArray(b(this).val(), e) >= 0
					});
					if (!e.length) {
						bv.selectedIndex = -1
					}
					return e
				}
			}
		},
		attrFn: {
			val: true,
			css: true,
			html: true,
			text: true,
			data: true,
			width: true,
			height: true,
			offset: true
		},
		attr: function (bA, bx, bB, bz) {
			var bw, e, by, bv = bA.nodeType;
			if (!bA || bv === 3 || bv === 8 || bv === 2) {
				return
			}
			if (bz && bx in b.attrFn) {
				return b(bA)[bx](bB)
			}
			if (typeof bA.getAttribute === "undefined") {
				return b.prop(bA, bx, bB)
			}
			by = bv !== 1 || !b.isXMLDoc(bA);
			if (by) {
				bx = bx.toLowerCase();
				e = b.attrHooks[bx] || (ao.test(bx) ? aY : be)
			}
			if (bB !== L) {
				if (bB === null) {
					b.removeAttr(bA, bx);
					return
				} else {
					if (e && "set" in e && by && (bw = e.set(bA, bB, bx)) !== L) {
						return bw
					} else {
						bA.setAttribute(bx, "" + bB);
						return bB
					}
				}
			} else {
				if (e && "get" in e && by && (bw = e.get(bA, bx)) !== null) {
					return bw
				} else {
					bw = bA.getAttribute(bx);
					return bw === null ? L : bw
				}
			}
		},
		removeAttr: function (bx, bz) {
			var by, bA, bv, e, bw = 0;
			if (bz && bx.nodeType === 1) {
				bA = bz.toLowerCase().split(af);
				e = bA.length;
				for (; bw < e; bw++) {
					bv = bA[bw];
					if (bv) {
						by = b.propFix[bv] || bv;
						b.attr(bx, bv, "");
						bx.removeAttribute(F ? bv : by);
						if (ao.test(bv) && by in bx) {
							bx[by] = false
						}
					}
				}
			}
		},
		attrHooks: {
			type: {
				set: function (e, bv) {
					if (g.test(e.nodeName) && e.parentNode) {
						b.error("type property can't be changed")
					} else {
						if (!b.support.radioValue && bv === "radio" && b.nodeName(e, "input")) {
							var bw = e.value;
							e.setAttribute("type", bv);
							if (bw) {
								e.value = bw
							}
							return bv
						}
					}
				}
			},
			value: {
				get: function (bv, e) {
					if (be && b.nodeName(bv, "button")) {
						return be.get(bv, e)
					}
					return e in bv ? bv.value : null
				},
				set: function (bv, bw, e) {
					if (be && b.nodeName(bv, "button")) {
						return be.set(bv, bw, e)
					}
					bv.value = bw
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function (bz, bx, bA) {
			var bw, e, by, bv = bz.nodeType;
			if (!bz || bv === 3 || bv === 8 || bv === 2) {
				return
			}
			by = bv !== 1 || !b.isXMLDoc(bz);
			if (by) {
				bx = b.propFix[bx] || bx;
				e = b.propHooks[bx]
			}
			if (bA !== L) {
				if (e && "set" in e && (bw = e.set(bz, bA, bx)) !== L) {
					return bw
				} else {
					return (bz[bx] = bA)
				}
			} else {
				if (e && "get" in e && (bw = e.get(bz, bx)) !== null) {
					return bw
				} else {
					return bz[bx]
				}
			}
		},
		propHooks: {
			tabIndex: {
				get: function (bv) {
					var e = bv.getAttributeNode("tabindex");
					return e && e.specified ? parseInt(e.value, 10) : D.test(bv.nodeName) || l.test(bv.nodeName) && bv.href ? 0 : L
				}
			}
		}
	});
	b.attrHooks.tabindex = b.propHooks.tabIndex;
	aY = {
		get: function (bv, e) {
			var bx, bw = b.prop(bv, e);
			return bw === true || typeof bw !== "boolean" && (bx = bv.getAttributeNode(e)) && bx.nodeValue !== false ? e.toLowerCase() : L
		},
		set: function (bv, bx, e) {
			var bw;
			if (bx === false) {
				b.removeAttr(bv, e)
			} else {
				bw = b.propFix[e] || e;
				if (bw in bv) {
					bv[bw] = true
				}
				bv.setAttribute(e, e.toLowerCase())
			}
			return e
		}
	};
	if (!F) {
		aF = {
			name: true,
			id: true
		};
		be = b.valHooks.button = {
			get: function (bw, bv) {
				var e;
				e = bw.getAttributeNode(bv);
				return e && (aF[bv] ? e.nodeValue !== "" : e.specified) ? e.nodeValue : L
			},
			set: function (bw, bx, bv) {
				var e = bw.getAttributeNode(bv);
				if (!e) {
					e = av.createAttribute(bv);
					bw.setAttributeNode(e)
				}
				return (e.nodeValue = bx + "")
			}
		};
		b.attrHooks.tabindex.set = be.set;
		b.each(["width", "height"], function (bv, e) {
			b.attrHooks[e] = b.extend(b.attrHooks[e], {
				set: function (bw, bx) {
					if (bx === "") {
						bw.setAttribute(e, "auto");
						return bx
					}
				}
			})
		});
		b.attrHooks.contenteditable = {
			get: be.get,
			set: function (bv, bw, e) {
				if (bw === "") {
					bw = "false"
				}
				be.set(bv, bw, e)
			}
		}
	}
	if (!b.support.hrefNormalized) {
		b.each(["href", "src", "width", "height"], function (bv, e) {
			b.attrHooks[e] = b.extend(b.attrHooks[e], {
				get: function (bx) {
					var bw = bx.getAttribute(e, 2);
					return bw === null ? L : bw
				}
			})
		})
	}
	if (!b.support.style) {
		b.attrHooks.style = {
			get: function (e) {
				return e.style.cssText.toLowerCase() || L
			},
			set: function (e, bv) {
				return (e.style.cssText = "" + bv)
			}
		}
	}
	if (!b.support.optSelected) {
		b.propHooks.selected = b.extend(b.propHooks.selected, {
			get: function (bv) {
				var e = bv.parentNode;
				if (e) {
					e.selectedIndex;
					if (e.parentNode) {
						e.parentNode.selectedIndex
					}
				}
				return null
			}
		})
	}
	if (!b.support.enctype) {
		b.propFix.enctype = "encoding"
	}
	if (!b.support.checkOn) {
		b.each(["radio", "checkbox"], function () {
			b.valHooks[this] = {
				get: function (e) {
					return e.getAttribute("value") === null ? "on" : e.value
				}
			}
		})
	}
	b.each(["radio", "checkbox"], function () {
		b.valHooks[this] = b.extend(b.valHooks[this], {
			set: function (e, bv) {
				if (b.isArray(bv)) {
					return (e.checked = b.inArray(b(e).val(), bv) >= 0)
				}
			}
		})
	});
	var bd = /^(?:textarea|input|select)$/i,
		n = /^([^\.]*)?(?:\.(.+))?$/,
		J = /\bhover(\.\S+)?\b/,
		aO = /^key/,
		bf = /^(?:mouse|contextmenu)|click/,
		T = /^(?:focusinfocus|focusoutblur)$/,
		U = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
		Y = function (e) {
			var bv = U.exec(e);
			if (bv) {
				bv[1] = (bv[1] || "").toLowerCase();
				bv[3] = bv[3] && new RegExp("(?:^|\\s)" + bv[3] + "(?:\\s|$)")
			}
			return bv
		}, j = function (bw, e) {
			var bv = bw.attributes || {};
			return ((!e[1] || bw.nodeName.toLowerCase() === e[1]) && (!e[2] || (bv.id || {}).value === e[2]) && (!e[3] || e[3].test((bv["class"] || {}).value)))
		}, bt = function (e) {
			return b.event.special.hover ? e : e.replace(J, "mouseenter$1 mouseleave$1")
		};
	b.event = {
		add: function (bx, bC, bJ, bA, by) {
			var bD, bB, bK, bI, bH, bF, e, bG, bv, bz, bw, bE;
			if (bx.nodeType === 3 || bx.nodeType === 8 || !bC || !bJ || !(bD = b._data(bx))) {
				return
			}
			if (bJ.handler) {
				bv = bJ;
				bJ = bv.handler
			}
			if (!bJ.guid) {
				bJ.guid = b.guid++
			}
			bK = bD.events;
			if (!bK) {
				bD.events = bK = {}
			}
			bB = bD.handle;
			if (!bB) {
				bD.handle = bB = function (bL) {
					return typeof b !== "undefined" && (!bL || b.event.triggered !== bL.type) ? b.event.dispatch.apply(bB.elem, arguments) : L
				};
				bB.elem = bx
			}
			bC = b.trim(bt(bC)).split(" ");
			for (bI = 0; bI < bC.length; bI++) {
				bH = n.exec(bC[bI]) || [];
				bF = bH[1];
				e = (bH[2] || "").split(".").sort();
				bE = b.event.special[bF] || {};
				bF = (by ? bE.delegateType : bE.bindType) || bF;
				bE = b.event.special[bF] || {};
				bG = b.extend({
					type: bF,
					origType: bH[1],
					data: bA,
					handler: bJ,
					guid: bJ.guid,
					selector: by,
					quick: Y(by),
					namespace: e.join(".")
				}, bv);
				bw = bK[bF];
				if (!bw) {
					bw = bK[bF] = [];
					bw.delegateCount = 0;
					if (!bE.setup || bE.setup.call(bx, bA, e, bB) === false) {
						if (bx.addEventListener) {
							bx.addEventListener(bF, bB, false)
						} else {
							if (bx.attachEvent) {
								bx.attachEvent("on" + bF, bB)
							}
						}
					}
				}
				if (bE.add) {
					bE.add.call(bx, bG);
					if (!bG.handler.guid) {
						bG.handler.guid = bJ.guid
					}
				}
				if (by) {
					bw.splice(bw.delegateCount++, 0, bG)
				} else {
					bw.push(bG)
				}
				b.event.global[bF] = true
			}
			bx = null
		},
		global: {},
		remove: function (bJ, bE, bv, bH, bB) {
			var bI = b.hasData(bJ) && b._data(bJ),
				bF, bx, bz, bL, bC, bA, bG, bw, by, bK, bD, e;
			if (!bI || !(bw = bI.events)) {
				return
			}
			bE = b.trim(bt(bE || "")).split(" ");
			for (bF = 0; bF < bE.length; bF++) {
				bx = n.exec(bE[bF]) || [];
				bz = bL = bx[1];
				bC = bx[2];
				if (!bz) {
					for (bz in bw) {
						b.event.remove(bJ, bz + bE[bF], bv, bH, true)
					}
					continue
				}
				by = b.event.special[bz] || {};
				bz = (bH ? by.delegateType : by.bindType) || bz;
				bD = bw[bz] || [];
				bA = bD.length;
				bC = bC ? new RegExp("(^|\\.)" + bC.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
				for (bG = 0; bG < bD.length; bG++) {
					e = bD[bG];
					if ((bB || bL === e.origType) && (!bv || bv.guid === e.guid) && (!bC || bC.test(e.namespace)) && (!bH || bH === e.selector || bH === "**" && e.selector)) {
						bD.splice(bG--, 1);
						if (e.selector) {
							bD.delegateCount--
						}
						if (by.remove) {
							by.remove.call(bJ, e)
						}
					}
				}
				if (bD.length === 0 && bA !== bD.length) {
					if (!by.teardown || by.teardown.call(bJ, bC) === false) {
						b.removeEvent(bJ, bz, bI.handle)
					}
					delete bw[bz]
				}
			}
			if (b.isEmptyObject(bw)) {
				bK = bI.handle;
				if (bK) {
					bK.elem = null
				}
				b.removeData(bJ, ["events", "handle"], true)
			}
		},
		customEvent: {
			getData: true,
			setData: true,
			changeData: true
		},
		trigger: function (bv, bD, bA, bJ) {
			if (bA && (bA.nodeType === 3 || bA.nodeType === 8)) {
				return
			}
			var bG = bv.type || bv,
				bx = [],
				e, bw, bC, bH, bz, by, bF, bE, bB, bI;
			if (T.test(bG + b.event.triggered)) {
				return
			}
			if (bG.indexOf("!") >= 0) {
				bG = bG.slice(0, -1);
				bw = true
			}
			if (bG.indexOf(".") >= 0) {
				bx = bG.split(".");
				bG = bx.shift();
				bx.sort()
			}
			if ((!bA || b.event.customEvent[bG]) && !b.event.global[bG]) {
				return
			}
			bv = typeof bv === "object" ? bv[b.expando] ? bv : new b.Event(bG, bv) : new b.Event(bG);
			bv.type = bG;
			bv.isTrigger = true;
			bv.exclusive = bw;
			bv.namespace = bx.join(".");
			bv.namespace_re = bv.namespace ? new RegExp("(^|\\.)" + bx.join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
			by = bG.indexOf(":") < 0 ? "on" + bG : "";
			if (!bA) {
				e = b.cache;
				for (bC in e) {
					if (e[bC].events && e[bC].events[bG]) {
						b.event.trigger(bv, bD, e[bC].handle.elem, true)
					}
				}
				return
			}
			bv.result = L;
			if (!bv.target) {
				bv.target = bA
			}
			bD = bD != null ? b.makeArray(bD) : [];
			bD.unshift(bv);
			bF = b.event.special[bG] || {};
			if (bF.trigger && bF.trigger.apply(bA, bD) === false) {
				return
			}
			bB = [
				[bA, bF.bindType || bG]
			];
			if (!bJ && !bF.noBubble && !b.isWindow(bA)) {
				bI = bF.delegateType || bG;
				bH = T.test(bI + bG) ? bA : bA.parentNode;
				bz = null;
				for (; bH; bH = bH.parentNode) {
					bB.push([bH, bI]);
					bz = bH
				}
				if (bz && bz === bA.ownerDocument) {
					bB.push([bz.defaultView || bz.parentWindow || bb, bI])
				}
			}
			for (bC = 0; bC < bB.length && !bv.isPropagationStopped(); bC++) {
				bH = bB[bC][0];
				bv.type = bB[bC][1];
				bE = (b._data(bH, "events") || {})[bv.type] && b._data(bH, "handle");
				if (bE) {
					bE.apply(bH, bD)
				}
				bE = by && bH[by];
				if (bE && b.acceptData(bH) && bE.apply(bH, bD) === false) {
					bv.preventDefault()
				}
			}
			bv.type = bG;
			if (!bJ && !bv.isDefaultPrevented()) {
				if ((!bF._default || bF._default.apply(bA.ownerDocument, bD) === false) && !(bG === "click" && b.nodeName(bA, "a")) && b.acceptData(bA)) {
					if (by && bA[bG] && ((bG !== "focus" && bG !== "blur") || bv.target.offsetWidth !== 0) && !b.isWindow(bA)) {
						bz = bA[by];
						if (bz) {
							bA[by] = null
						}
						b.event.triggered = bG;
						bA[bG]();
						b.event.triggered = L;
						if (bz) {
							bA[by] = bz
						}
					}
				}
			}
			return bv.result
		},
		dispatch: function (e) {
			e = b.event.fix(e || bb.event);
			var bz = ((b._data(this, "events") || {})[e.type] || []),
				bA = bz.delegateCount,
				bG = [].slice.call(arguments, 0),
				by = !e.exclusive && !e.namespace,
				bH = [],
				bC, bB, bK, bx, bF, bE, bv, bD, bI, bw, bJ;
			bG[0] = e;
			e.delegateTarget = this;
			if (bA && !e.target.disabled && !(e.button && e.type === "click")) {
				bx = b(this);
				bx.context = this.ownerDocument || this;
				for (bK = e.target; bK != this; bK = bK.parentNode || this) {
					bE = {};
					bD = [];
					bx[0] = bK;
					for (bC = 0; bC < bA; bC++) {
						bI = bz[bC];
						bw = bI.selector;
						if (bE[bw] === L) {
							bE[bw] = (bI.quick ? j(bK, bI.quick) : bx.is(bw))
						}
						if (bE[bw]) {
							bD.push(bI)
						}
					}
					if (bD.length) {
						bH.push({
							elem: bK,
							matches: bD
						})
					}
				}
			}
			if (bz.length > bA) {
				bH.push({
					elem: this,
					matches: bz.slice(bA)
				})
			}
			for (bC = 0; bC < bH.length && !e.isPropagationStopped(); bC++) {
				bv = bH[bC];
				e.currentTarget = bv.elem;
				for (bB = 0; bB < bv.matches.length && !e.isImmediatePropagationStopped(); bB++) {
					bI = bv.matches[bB];
					if (by || (!e.namespace && !bI.namespace) || e.namespace_re && e.namespace_re.test(bI.namespace)) {
						e.data = bI.data;
						e.handleObj = bI;
						bF = ((b.event.special[bI.origType] || {}).handle || bI.handler).apply(bv.elem, bG);
						if (bF !== L) {
							e.result = bF;
							if (bF === false) {
								e.preventDefault();
								e.stopPropagation()
							}
						}
					}

				}
			}
			return e.result
		},
		props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (bv, e) {
				if (bv.which == null) {
					bv.which = e.charCode != null ? e.charCode : e.keyCode
				}
				return bv
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (bx, bw) {
				var by, bz, e, bv = bw.button,
					bA = bw.fromElement;
				if (bx.pageX == null && bw.clientX != null) {
					by = bx.target.ownerDocument || av;
					bz = by.documentElement;
					e = by.body;
					bx.pageX = bw.clientX + (bz && bz.scrollLeft || e && e.scrollLeft || 0) - (bz && bz.clientLeft || e && e.clientLeft || 0);
					bx.pageY = bw.clientY + (bz && bz.scrollTop || e && e.scrollTop || 0) - (bz && bz.clientTop || e && e.clientTop || 0)
				}
				if (!bx.relatedTarget && bA) {
					bx.relatedTarget = bA === bx.target ? bw.toElement : bA
				}
				if (!bx.which && bv !== L) {
					bx.which = (bv & 1 ? 1 : (bv & 2 ? 3 : (bv & 4 ? 2 : 0)))
				}
				return bx
			}
		},
		fix: function (bw) {
			if (bw[b.expando]) {
				return bw
			}
			var bv, bz, e = bw,
				bx = b.event.fixHooks[bw.type] || {}, by = bx.props ? this.props.concat(bx.props) : this.props;
			bw = b.Event(e);
			for (bv = by.length; bv;) {
				bz = by[--bv];
				bw[bz] = e[bz]
			}
			if (!bw.target) {
				bw.target = e.srcElement || av
			}
			if (bw.target.nodeType === 3) {
				bw.target = bw.target.parentNode
			}
			if (bw.metaKey === L) {
				bw.metaKey = bw.ctrlKey
			}
			return bx.filter ? bx.filter(bw, e) : bw
		},
		special: {
			ready: {
				setup: b.bindReady
			},
			load: {
				noBubble: true
			},
			focus: {
				delegateType: "focusin"
			},
			blur: {
				delegateType: "focusout"
			},
			beforeunload: {
				setup: function (bw, bv, e) {
					if (b.isWindow(this)) {
						this.onbeforeunload = e
					}
				},
				teardown: function (bv, e) {
					if (this.onbeforeunload === e) {
						this.onbeforeunload = null
					}
				}
			}
		},
		simulate: function (bw, by, bx, bv) {
			var bz = b.extend(new b.Event(), bx, {
				type: bw,
				isSimulated: true,
				originalEvent: {}
			});
			if (bv) {
				b.event.trigger(bz, null, by)
			} else {
				b.event.dispatch.call(by, bz)
			} if (bz.isDefaultPrevented()) {
				bx.preventDefault()
			}
		}
	};
	b.event.handle = b.event.dispatch;
	b.removeEvent = av.removeEventListener ? function (bv, e, bw) {
		if (bv.removeEventListener) {
			bv.removeEventListener(e, bw, false)
		}
	} : function (bv, e, bw) {
		if (bv.detachEvent) {
			bv.detachEvent("on" + e, bw)
		}
	};
	b.Event = function (bv, e) {
		if (!(this instanceof b.Event)) {
			return new b.Event(bv, e)
		}
		if (bv && bv.type) {
			this.originalEvent = bv;
			this.type = bv.type;
			this.isDefaultPrevented = (bv.defaultPrevented || bv.returnValue === false || bv.getPreventDefault && bv.getPreventDefault()) ? i : bk
		} else {
			this.type = bv
		} if (e) {
			b.extend(this, e)
		}
		this.timeStamp = bv && bv.timeStamp || b.now();
		this[b.expando] = true
	};

	function bk() {
		return false
	}
	function i() {
		return true
	}
	b.Event.prototype = {
		preventDefault: function () {
			this.isDefaultPrevented = i;
			var bv = this.originalEvent;
			if (!bv) {
				return
			}
			if (bv.preventDefault) {
				bv.preventDefault()
			} else {
				bv.returnValue = false
			}
		},
		stopPropagation: function () {
			this.isPropagationStopped = i;
			var bv = this.originalEvent;
			if (!bv) {
				return
			}
			if (bv.stopPropagation) {
				bv.stopPropagation()
			}
			bv.cancelBubble = true
		},
		stopImmediatePropagation: function () {
			this.isImmediatePropagationStopped = i;
			this.stopPropagation()
		},
		isDefaultPrevented: bk,
		isPropagationStopped: bk,
		isImmediatePropagationStopped: bk
	};
	b.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function (bv, e) {
		b.event.special[bv] = {
			delegateType: e,
			bindType: e,
			handle: function (bz) {
				var bB = this,
					bA = bz.relatedTarget,
					by = bz.handleObj,
					bw = by.selector,
					bx;
				if (!bA || (bA !== bB && !b.contains(bB, bA))) {
					bz.type = by.origType;
					bx = by.handler.apply(this, arguments);
					bz.type = e
				}
				return bx
			}
		}
	});
	if (!b.support.submitBubbles) {
		b.event.special.submit = {
			setup: function () {
				if (b.nodeName(this, "form")) {
					return false
				}
				b.event.add(this, "click._submit keypress._submit", function (bx) {
					var bw = bx.target,
						bv = b.nodeName(bw, "input") || b.nodeName(bw, "button") ? bw.form : L;
					if (bv && !bv._submit_attached) {
						b.event.add(bv, "submit._submit", function (e) {
							if (this.parentNode && !e.isTrigger) {
								b.event.simulate("submit", this.parentNode, e, true)
							}
						});
						bv._submit_attached = true
					}
				})
			},
			teardown: function () {
				if (b.nodeName(this, "form")) {
					return false
				}
				b.event.remove(this, "._submit")
			}
		}
	}
	if (!b.support.changeBubbles) {
		b.event.special.change = {
			setup: function () {
				if (bd.test(this.nodeName)) {
					if (this.type === "checkbox" || this.type === "radio") {
						b.event.add(this, "propertychange._change", function (e) {
							if (e.originalEvent.propertyName === "checked") {
								this._just_changed = true
							}
						});
						b.event.add(this, "click._change", function (e) {
							if (this._just_changed && !e.isTrigger) {
								this._just_changed = false;
								b.event.simulate("change", this, e, true)
							}
						})
					}
					return false
				}
				b.event.add(this, "beforeactivate._change", function (bw) {
					var bv = bw.target;
					if (bd.test(bv.nodeName) && !bv._change_attached) {
						b.event.add(bv, "change._change", function (e) {
							if (this.parentNode && !e.isSimulated && !e.isTrigger) {
								b.event.simulate("change", this.parentNode, e, true)
							}
						});
						bv._change_attached = true
					}
				})
			},
			handle: function (bv) {
				var e = bv.target;
				if (this !== e || bv.isSimulated || bv.isTrigger || (e.type !== "radio" && e.type !== "checkbox")) {
					return bv.handleObj.handler.apply(this, arguments)
				}
			},
			teardown: function () {
				b.event.remove(this, "._change");
				return bd.test(this.nodeName)
			}
		}
	}
	if (!b.support.focusinBubbles) {
		b.each({
			focus: "focusin",
			blur: "focusout"
		}, function (bx, e) {
			var bv = 0,
				bw = function (by) {
					b.event.simulate(e, by.target, b.event.fix(by), true)
				};
			b.event.special[e] = {
				setup: function () {
					if (bv++ === 0) {
						av.addEventListener(bx, bw, true)
					}
				},
				teardown: function () {
					if (--bv === 0) {
						av.removeEventListener(bx, bw, true)
					}
				}
			}
		})
	}
	b.fn.extend({
		on: function (bw, e, bz, by, bv) {
			var bA, bx;
			if (typeof bw === "object") {
				if (typeof e !== "string") {
					bz = e;
					e = L
				}
				for (bx in bw) {
					this.on(bx, e, bz, bw[bx], bv)
				}
				return this
			}
			if (bz == null && by == null) {
				by = e;
				bz = e = L
			} else {
				if (by == null) {
					if (typeof e === "string") {
						by = bz;
						bz = L
					} else {
						by = bz;
						bz = e;
						e = L
					}
				}
			} if (by === false) {
				by = bk
			} else {
				if (!by) {
					return this
				}
			} if (bv === 1) {
				bA = by;
				by = function (bB) {
					b().off(bB);
					return bA.apply(this, arguments)
				};
				by.guid = bA.guid || (bA.guid = b.guid++)
			}
			return this.each(function () {
				b.event.add(this, bw, by, bz, e)
			})
		},
		one: function (bv, e, bx, bw) {
			return this.on.call(this, bv, e, bx, bw, 1)
		},
		off: function (bw, e, by) {
			if (bw && bw.preventDefault && bw.handleObj) {
				var bv = bw.handleObj;
				b(bw.delegateTarget).off(bv.namespace ? bv.type + "." + bv.namespace : bv.type, bv.selector, bv.handler);
				return this
			}
			if (typeof bw === "object") {
				for (var bx in bw) {
					this.off(bx, e, bw[bx])
				}
				return this
			}
			if (e === false || typeof e === "function") {
				by = e;
				e = L
			}
			if (by === false) {
				by = bk
			}
			return this.each(function () {
				b.event.remove(this, bw, by, e)
			})
		},
		bind: function (e, bw, bv) {
			return this.on(e, null, bw, bv)
		},
		unbind: function (e, bv) {
			return this.off(e, null, bv)
		},
		live: function (e, bw, bv) {
			b(this.context).on(e, this.selector, bw, bv);
			return this
		},
		die: function (e, bv) {
			b(this.context).off(e, this.selector || "**", bv);
			return this
		},
		delegate: function (e, bv, bx, bw) {
			return this.on(bv, e, bx, bw)
		},
		undelegate: function (e, bv, bw) {
			return arguments.length == 1 ? this.off(e, "**") : this.off(bv, e, bw)
		},
		trigger: function (e, bv) {
			return this.each(function () {
				b.event.trigger(e, bv, this)
			})
		},
		triggerHandler: function (e, bv) {
			if (this[0]) {
				return b.event.trigger(e, bv, this[0], true)
			}
		},
		toggle: function (bx) {
			var bv = arguments,
				e = bx.guid || b.guid++,
				bw = 0,
				by = function (bz) {
					var bA = (b._data(this, "lastToggle" + bx.guid) || 0) % bw;
					b._data(this, "lastToggle" + bx.guid, bA + 1);
					bz.preventDefault();
					return bv[bA].apply(this, arguments) || false
				};
			by.guid = e;
			while (bw < bv.length) {
				bv[bw++].guid = e
			}
			return this.click(by)
		},
		hover: function (e, bv) {
			return this.mouseenter(e).mouseleave(bv || e)
		}
	});
	b.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function (bv, e) {
		b.fn[e] = function (bx, bw) {
			if (bw == null) {
				bw = bx;
				bx = null
			}
			return arguments.length > 0 ? this.on(e, null, bx, bw) : this.trigger(e)
		};
		if (b.attrFn) {
			b.attrFn[e] = true
		}
		if (aO.test(e)) {
			b.event.fixHooks[e] = b.event.keyHooks
		}
		if (bf.test(e)) {
			b.event.fixHooks[e] = b.event.mouseHooks
		}
	});
	/*!
	 * Sizzle CSS Selector Engine
	 *  Copyright 2012, The Dojo Foundation
	 *  Released under the MIT, BSD, and GPL Licenses.
	 *  More information: http://sizzlejs.com/
	 */ (function () {
		var bH = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
			bC = "sizcache" + (Math.random() + "").replace(".", ""),
			bI = 0,
			bL = Object.prototype.toString,
			bB = false,
			bA = true,
			bK = /\\/g,
			bO = /\r\n/g,
			bQ = /\W/;
		[0, 0].sort(function () {
			bA = false;
			return 0
		});
		var by = function (bV, e, bY, bZ) {
			bY = bY || [];
			e = e || av;
			var b1 = e;
			if (e.nodeType !== 1 && e.nodeType !== 9) {
				return []
			}
			if (!bV || typeof bV !== "string") {
				return bY
			}
			var bS, b3, b6, bR, b2, b5, b4, bX, bU = true,
				bT = by.isXML(e),
				bW = [],
				b0 = bV;
			do {
				bH.exec("");
				bS = bH.exec(b0);
				if (bS) {
					b0 = bS[3];
					bW.push(bS[1]);
					if (bS[2]) {
						bR = bS[3];
						break
					}
				}
			} while (bS);
			if (bW.length > 1 && bD.exec(bV)) {
				if (bW.length === 2 && bE.relative[bW[0]]) {
					b3 = bM(bW[0] + bW[1], e, bZ)
				} else {
					b3 = bE.relative[bW[0]] ? [e] : by(bW.shift(), e);
					while (bW.length) {
						bV = bW.shift();
						if (bE.relative[bV]) {
							bV += bW.shift()
						}
						b3 = bM(bV, b3, bZ)
					}
				}
			} else {
				if (!bZ && bW.length > 1 && e.nodeType === 9 && !bT && bE.match.ID.test(bW[0]) && !bE.match.ID.test(bW[bW.length - 1])) {
					b2 = by.find(bW.shift(), e, bT);
					e = b2.expr ? by.filter(b2.expr, b2.set)[0] : b2.set[0]
				}
				if (e) {
					b2 = bZ ? {
						expr: bW.pop(),
						set: bF(bZ)
					} : by.find(bW.pop(), bW.length === 1 && (bW[0] === "~" || bW[0] === "+") && e.parentNode ? e.parentNode : e, bT);
					b3 = b2.expr ? by.filter(b2.expr, b2.set) : b2.set;
					if (bW.length > 0) {
						b6 = bF(b3)
					} else {
						bU = false
					}
					while (bW.length) {
						b5 = bW.pop();
						b4 = b5;
						if (!bE.relative[b5]) {
							b5 = ""
						} else {
							b4 = bW.pop()
						} if (b4 == null) {
							b4 = e
						}
						bE.relative[b5](b6, b4, bT)
					}
				} else {
					b6 = bW = []
				}
			} if (!b6) {
				b6 = b3
			}
			if (!b6) {
				by.error(b5 || bV)
			}
			if (bL.call(b6) === "[object Array]") {
				if (!bU) {
					bY.push.apply(bY, b6)
				} else {
					if (e && e.nodeType === 1) {
						for (bX = 0; b6[bX] != null; bX++) {
							if (b6[bX] && (b6[bX] === true || b6[bX].nodeType === 1 && by.contains(e, b6[bX]))) {
								bY.push(b3[bX])
							}
						}
					} else {
						for (bX = 0; b6[bX] != null; bX++) {
							if (b6[bX] && b6[bX].nodeType === 1) {
								bY.push(b3[bX])
							}
						}
					}
				}
			} else {
				bF(b6, bY)
			} if (bR) {
				by(bR, b1, bY, bZ);
				by.uniqueSort(bY)
			}
			return bY
		};
		by.uniqueSort = function (bR) {
			if (bJ) {
				bB = bA;
				bR.sort(bJ);
				if (bB) {
					for (var e = 1; e < bR.length; e++) {
						if (bR[e] === bR[e - 1]) {
							bR.splice(e--, 1)
						}
					}
				}
			}
			return bR
		};
		by.matches = function (e, bR) {
			return by(e, null, null, bR)
		};
		by.matchesSelector = function (e, bR) {
			return by(bR, null, null, [e]).length > 0
		};
		by.find = function (bX, e, bY) {
			var bW, bS, bU, bT, bV, bR;
			if (!bX) {
				return []
			}
			for (bS = 0, bU = bE.order.length; bS < bU; bS++) {
				bV = bE.order[bS];
				if ((bT = bE.leftMatch[bV].exec(bX))) {
					bR = bT[1];
					bT.splice(1, 1);
					if (bR.substr(bR.length - 1) !== "\\") {
						bT[1] = (bT[1] || "").replace(bK, "");
						bW = bE.find[bV](bT, e, bY);
						if (bW != null) {
							bX = bX.replace(bE.match[bV], "");
							break
						}
					}
				}
			}
			if (!bW) {
				bW = typeof e.getElementsByTagName !== "undefined" ? e.getElementsByTagName("*") : []
			}
			return {
				set: bW,
				expr: bX
			}
		};
		by.filter = function (b1, b0, b4, bU) {
			var bW, e, bZ, b6, b3, bR, bT, bV, b2, bS = b1,
				b5 = [],
				bY = b0,
				bX = b0 && b0[0] && by.isXML(b0[0]);
			while (b1 && b0.length) {
				for (bZ in bE.filter) {
					if ((bW = bE.leftMatch[bZ].exec(b1)) != null && bW[2]) {
						bR = bE.filter[bZ];
						bT = bW[1];
						e = false;
						bW.splice(1, 1);
						if (bT.substr(bT.length - 1) === "\\") {
							continue
						}
						if (bY === b5) {
							b5 = []
						}
						if (bE.preFilter[bZ]) {
							bW = bE.preFilter[bZ](bW, bY, b4, b5, bU, bX);
							if (!bW) {
								e = b6 = true
							} else {
								if (bW === true) {
									continue
								}
							}
						}
						if (bW) {
							for (bV = 0;
							(b3 = bY[bV]) != null; bV++) {
								if (b3) {
									b6 = bR(b3, bW, bV, bY);
									b2 = bU ^ b6;
									if (b4 && b6 != null) {
										if (b2) {
											e = true
										} else {
											bY[bV] = false
										}
									} else {
										if (b2) {
											b5.push(b3);
											e = true
										}
									}
								}
							}
						}
						if (b6 !== L) {
							if (!b4) {
								bY = b5
							}
							b1 = b1.replace(bE.match[bZ], "");
							if (!e) {
								return []
							}
							break
						}
					}
				}
				if (b1 === bS) {
					if (e == null) {
						by.error(b1)
					} else {
						break
					}
				}
				bS = b1
			}
			return bY
		};
		by.error = function (e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		};
		var bw = by.getText = function (bU) {
			var bS, bT, e = bU.nodeType,
				bR = "";
			if (e) {
				if (e === 1 || e === 9) {
					if (typeof bU.textContent === "string") {
						return bU.textContent
					} else {
						if (typeof bU.innerText === "string") {
							return bU.innerText.replace(bO, "")
						} else {
							for (bU = bU.firstChild; bU; bU = bU.nextSibling) {
								bR += bw(bU)
							}
						}
					}
				} else {
					if (e === 3 || e === 4) {
						return bU.nodeValue
					}
				}
			} else {
				for (bS = 0;
				(bT = bU[bS]); bS++) {
					if (bT.nodeType !== 8) {
						bR += bw(bT)
					}
				}
			}
			return bR
		};
		var bE = by.selectors = {
			order: ["ID", "NAME", "TAG"],
			match: {
				ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
				CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
				NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
				ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
				TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
				CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
				POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
				PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
			},
			leftMatch: {},
			attrMap: {
				"class": "className",
				"for": "htmlFor"
			},
			attrHandle: {
				href: function (e) {
					return e.getAttribute("href")
				},
				type: function (e) {
					return e.getAttribute("type")
				}
			},
			relative: {
				"+": function (bW, bR) {
					var bT = typeof bR === "string",
						bV = bT && !bQ.test(bR),
						bX = bT && !bV;
					if (bV) {
						bR = bR.toLowerCase()
					}
					for (var bS = 0, e = bW.length, bU; bS < e; bS++) {
						if ((bU = bW[bS])) {
							while ((bU = bU.previousSibling) && bU.nodeType !== 1) {}
							bW[bS] = bX || bU && bU.nodeName.toLowerCase() === bR ? bU || false : bU === bR
						}
					}
					if (bX) {
						by.filter(bR, bW, true)
					}
				},
				">": function (bW, bR) {
					var bV, bU = typeof bR === "string",
						bS = 0,
						e = bW.length;
					if (bU && !bQ.test(bR)) {
						bR = bR.toLowerCase();
						for (; bS < e; bS++) {
							bV = bW[bS];
							if (bV) {
								var bT = bV.parentNode;
								bW[bS] = bT.nodeName.toLowerCase() === bR ? bT : false
							}
						}
					} else {
						for (; bS < e; bS++) {
							bV = bW[bS];
							if (bV) {
								bW[bS] = bU ? bV.parentNode : bV.parentNode === bR
							}
						}
						if (bU) {
							by.filter(bR, bW, true)
						}
					}
				},
				"": function (bT, bR, bV) {
					var bU, bS = bI++,
						e = bN;
					if (typeof bR === "string" && !bQ.test(bR)) {
						bR = bR.toLowerCase();
						bU = bR;
						e = bv
					}
					e("parentNode", bR, bS, bT, bU, bV)
				},
				"~": function (bT, bR, bV) {
					var bU, bS = bI++,
						e = bN;
					if (typeof bR === "string" && !bQ.test(bR)) {
						bR = bR.toLowerCase();
						bU = bR;
						e = bv
					}
					e("previousSibling", bR, bS, bT, bU, bV)
				}
			},
			find: {
				ID: function (bR, bS, bT) {
					if (typeof bS.getElementById !== "undefined" && !bT) {
						var e = bS.getElementById(bR[1]);
						return e && e.parentNode ? [e] : []
					}
				},
				NAME: function (bS, bV) {
					if (typeof bV.getElementsByName !== "undefined") {
						var bR = [],
							bU = bV.getElementsByName(bS[1]);
						for (var bT = 0, e = bU.length; bT < e; bT++) {
							if (bU[bT].getAttribute("name") === bS[1]) {
								bR.push(bU[bT])
							}
						}
						return bR.length === 0 ? null : bR
					}
				},
				TAG: function (e, bR) {
					if (typeof bR.getElementsByTagName !== "undefined") {
						return bR.getElementsByTagName(e[1])
					}
				}
			},
			preFilter: {
				CLASS: function (bT, bR, bS, e, bW, bX) {
					bT = " " + bT[1].replace(bK, "") + " ";
					if (bX) {
						return bT
					}
					for (var bU = 0, bV;
					(bV = bR[bU]) != null; bU++) {
						if (bV) {
							if (bW ^ (bV.className && (" " + bV.className + " ").replace(/[\t\n\r]/g, " ").indexOf(bT) >= 0)) {
								if (!bS) {
									e.push(bV)
								}
							} else {
								if (bS) {
									bR[bU] = false
								}
							}
						}
					}
					return false
				},
				ID: function (e) {
					return e[1].replace(bK, "")
				},
				TAG: function (bR, e) {
					return bR[1].replace(bK, "").toLowerCase()
				},
				CHILD: function (e) {
					if (e[1] === "nth") {
						if (!e[2]) {
							by.error(e[0])
						}
						e[2] = e[2].replace(/^\+|\s*/g, "");
						var bR = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
						e[2] = (bR[1] + (bR[2] || 1)) - 0;
						e[3] = bR[3] - 0
					} else {
						if (e[2]) {
							by.error(e[0])
						}
					}
					e[0] = bI++;
					return e
				},
				ATTR: function (bU, bR, bS, e, bV, bW) {
					var bT = bU[1] = bU[1].replace(bK, "");
					if (!bW && bE.attrMap[bT]) {
						bU[1] = bE.attrMap[bT]
					}
					bU[4] = (bU[4] || bU[5] || "").replace(bK, "");
					if (bU[2] === "~=") {
						bU[4] = " " + bU[4] + " "
					}
					return bU
				},
				PSEUDO: function (bU, bR, bS, e, bV) {
					if (bU[1] === "not") {
						if ((bH.exec(bU[3]) || "").length > 1 || /^\w/.test(bU[3])) {
							bU[3] = by(bU[3], null, null, bR)
						} else {
							var bT = by.filter(bU[3], bR, bS, true ^ bV);
							if (!bS) {
								e.push.apply(e, bT)
							}
							return false
						}
					} else {
						if (bE.match.POS.test(bU[0]) || bE.match.CHILD.test(bU[0])) {
							return true
						}
					}
					return bU
				},
				POS: function (e) {
					e.unshift(true);
					return e
				}
			},
			filters: {
				enabled: function (e) {
					return e.disabled === false && e.type !== "hidden"
				},
				disabled: function (e) {
					return e.disabled === true
				},
				checked: function (e) {
					return e.checked === true
				},
				selected: function (e) {
					if (e.parentNode) {
						e.parentNode.selectedIndex
					}
					return e.selected === true
				},
				parent: function (e) {
					return !!e.firstChild
				},
				empty: function (e) {
					return !e.firstChild
				},
				has: function (bS, bR, e) {
					return !!by(e[3], bS).length
				},
				header: function (e) {
					return (/h\d/i).test(e.nodeName)
				},
				text: function (bS) {
					var e = bS.getAttribute("type"),
						bR = bS.type;
					return bS.nodeName.toLowerCase() === "input" && "text" === bR && (e === bR || e === null)
				},
				radio: function (e) {
					return e.nodeName.toLowerCase() === "input" && "radio" === e.type
				},
				checkbox: function (e) {
					return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
				},
				file: function (e) {
					return e.nodeName.toLowerCase() === "input" && "file" === e.type
				},
				password: function (e) {
					return e.nodeName.toLowerCase() === "input" && "password" === e.type
				},
				submit: function (bR) {
					var e = bR.nodeName.toLowerCase();
					return (e === "input" || e === "button") && "submit" === bR.type
				},
				image: function (e) {
					return e.nodeName.toLowerCase() === "input" && "image" === e.type
				},
				reset: function (bR) {
					var e = bR.nodeName.toLowerCase();
					return (e === "input" || e === "button") && "reset" === bR.type
				},
				button: function (bR) {
					var e = bR.nodeName.toLowerCase();
					return e === "input" && "button" === bR.type || e === "button"
				},
				input: function (e) {
					return (/input|select|textarea|button/i).test(e.nodeName)
				},
				focus: function (e) {
					return e === e.ownerDocument.activeElement
				}
			},
			setFilters: {
				first: function (bR, e) {
					return e === 0
				},
				last: function (bS, bR, e, bT) {
					return bR === bT.length - 1
				},
				even: function (bR, e) {
					return e % 2 === 0
				},
				odd: function (bR, e) {
					return e % 2 === 1
				},
				lt: function (bS, bR, e) {
					return bR < e[3] - 0
				},
				gt: function (bS, bR, e) {
					return bR > e[3] - 0
				},
				nth: function (bS, bR, e) {
					return e[3] - 0 === bR
				},
				eq: function (bS, bR, e) {
					return e[3] - 0 === bR
				}
			},
			filter: {
				PSEUDO: function (bS, bX, bW, bY) {
					var e = bX[1],
						bR = bE.filters[e];
					if (bR) {
						return bR(bS, bW, bX, bY)
					} else {
						if (e === "contains") {
							return (bS.textContent || bS.innerText || bw([bS]) || "").indexOf(bX[3]) >= 0
						} else {
							if (e === "not") {
								var bT = bX[3];
								for (var bV = 0, bU = bT.length; bV < bU; bV++) {
									if (bT[bV] === bS) {
										return false
									}
								}
								return true
							} else {
								by.error(e)
							}
						}
					}
				},
				CHILD: function (bS, bU) {
					var bT, b0, bW, bZ, e, bV, bY, bX = bU[1],
						bR = bS;
					switch (bX) {
						case "only":
						case "first":
							while ((bR = bR.previousSibling)) {
								if (bR.nodeType === 1) {
									return false
								}
							}
							if (bX === "first") {
								return true
							}
							bR = bS;
						case "last":
							while ((bR = bR.nextSibling)) {
								if (bR.nodeType === 1) {
									return false
								}
							}
							return true;
						case "nth":
							bT = bU[2];
							b0 = bU[3];
							if (bT === 1 && b0 === 0) {
								return true
							}
							bW = bU[0];
							bZ = bS.parentNode;
							if (bZ && (bZ[bC] !== bW || !bS.nodeIndex)) {
								bV = 0;
								for (bR = bZ.firstChild; bR; bR = bR.nextSibling) {
									if (bR.nodeType === 1) {
										bR.nodeIndex = ++bV
									}
								}
								bZ[bC] = bW
							}
							bY = bS.nodeIndex - b0;
							if (bT === 0) {
								return bY === 0
							} else {
								return (bY % bT === 0 && bY / bT >= 0)
							}
					}
				},
				ID: function (bR, e) {
					return bR.nodeType === 1 && bR.getAttribute("id") === e
				},
				TAG: function (bR, e) {
					return (e === "*" && bR.nodeType === 1) || !! bR.nodeName && bR.nodeName.toLowerCase() === e
				},
				CLASS: function (bR, e) {
					return (" " + (bR.className || bR.getAttribute("class")) + " ").indexOf(e) > -1
				},
				ATTR: function (bV, bT) {
					var bS = bT[1],
						e = by.attr ? by.attr(bV, bS) : bE.attrHandle[bS] ? bE.attrHandle[bS](bV) : bV[bS] != null ? bV[bS] : bV.getAttribute(bS),
						bW = e + "",
						bU = bT[2],
						bR = bT[4];
					return e == null ? bU === "!=" : !bU && by.attr ? e != null : bU === "=" ? bW === bR : bU === "*=" ? bW.indexOf(bR) >= 0 : bU === "~=" ? (" " + bW + " ").indexOf(bR) >= 0 : !bR ? bW && e !== false : bU === "!=" ? bW !== bR : bU === "^=" ? bW.indexOf(bR) === 0 : bU === "$=" ? bW.substr(bW.length - bR.length) === bR : bU === "|=" ? bW === bR || bW.substr(0, bR.length + 1) === bR + "-" : false
				},
				POS: function (bU, bR, bS, bV) {
					var e = bR[2],
						bT = bE.setFilters[e];
					if (bT) {
						return bT(bU, bS, bR, bV)
					}
				}
			}
		};
		var bD = bE.match.POS,
			bx = function (bR, e) {
				return "\\" + (e - 0 + 1)
			};
		for (var bz in bE.match) {
			bE.match[bz] = new RegExp(bE.match[bz].source + (/(?![^\[]*\])(?![^\(]*\))/.source));
			bE.leftMatch[bz] = new RegExp(/(^(?:.|\r|\n)*?)/.source + bE.match[bz].source.replace(/\\(\d+)/g, bx))
		}
		var bF = function (bR, e) {
			bR = Array.prototype.slice.call(bR, 0);
			if (e) {
				e.push.apply(e, bR);
				return e
			}
			return bR
		};
		try {
			Array.prototype.slice.call(av.documentElement.childNodes, 0)[0].nodeType
		} catch (bP) {
			bF = function (bU, bT) {
				var bS = 0,
					bR = bT || [];
				if (bL.call(bU) === "[object Array]") {
					Array.prototype.push.apply(bR, bU)
				} else {
					if (typeof bU.length === "number") {
						for (var e = bU.length; bS < e; bS++) {
							bR.push(bU[bS])
						}
					} else {
						for (; bU[bS]; bS++) {
							bR.push(bU[bS])
						}
					}
				}
				return bR
			}
		}
		var bJ, bG;
		if (av.documentElement.compareDocumentPosition) {
			bJ = function (bR, e) {
				if (bR === e) {
					bB = true;
					return 0
				}
				if (!bR.compareDocumentPosition || !e.compareDocumentPosition) {
					return bR.compareDocumentPosition ? -1 : 1
				}
				return bR.compareDocumentPosition(e) & 4 ? -1 : 1
			}
		} else {
			bJ = function (bY, bX) {
				if (bY === bX) {
					bB = true;
					return 0
				} else {
					if (bY.sourceIndex && bX.sourceIndex) {
						return bY.sourceIndex - bX.sourceIndex
					}
				}
				var bV, bR, bS = [],
					e = [],
					bU = bY.parentNode,
					bW = bX.parentNode,
					bZ = bU;
				if (bU === bW) {
					return bG(bY, bX)
				} else {
					if (!bU) {
						return -1
					} else {
						if (!bW) {
							return 1
						}
					}
				}
				while (bZ) {
					bS.unshift(bZ);
					bZ = bZ.parentNode
				}
				bZ = bW;
				while (bZ) {
					e.unshift(bZ);
					bZ = bZ.parentNode
				}
				bV = bS.length;
				bR = e.length;
				for (var bT = 0; bT < bV && bT < bR; bT++) {
					if (bS[bT] !== e[bT]) {
						return bG(bS[bT], e[bT])
					}
				}
				return bT === bV ? bG(bY, e[bT], -1) : bG(bS[bT], bX, 1)
			};
			bG = function (bR, e, bS) {
				if (bR === e) {
					return bS;
					var bT = bR.nextSibling
				}
				while (bT) {
					if (bT === e) {
						return -1
					}
					bT = bT.nextSibling
				}
				return 1
			}
		}(function () {
			var bR = av.createElement("div"),
				bS = "script" + (new Date()).getTime(),
				e = av.documentElement;
			bR.innerHTML = "<a name='" + bS + "'/>";
			e.insertBefore(bR, e.firstChild);
			if (av.getElementById(bS)) {
				bE.find.ID = function (bU, bV, bW) {
					if (typeof bV.getElementById !== "undefined" && !bW) {
						var bT = bV.getElementById(bU[1]);
						return bT ? bT.id === bU[1] || typeof bT.getAttributeNode !== "undefined" && bT.getAttributeNode("id").nodeValue === bU[1] ? [bT] : L : []
					}
				};
				bE.filter.ID = function (bV, bT) {
					var bU = typeof bV.getAttributeNode !== "undefined" && bV.getAttributeNode("id");
					return bV.nodeType === 1 && bU && bU.nodeValue === bT
				}
			}
			e.removeChild(bR);
			e = bR = null
		})();
		(function () {
			var e = av.createElement("div");
			e.appendChild(av.createComment(""));
			if (e.getElementsByTagName("*").length > 0) {
				bE.find.TAG = function (bR, bV) {
					var bU = bV.getElementsByTagName(bR[1]);
					if (bR[1] === "*") {
						var bT = [];
						for (var bS = 0; bU[bS]; bS++) {
							if (bU[bS].nodeType === 1) {
								bT.push(bU[bS])
							}
						}
						bU = bT
					}
					return bU
				}
			}
			e.innerHTML = "<a href='#'></a>";
			if (e.firstChild && typeof e.firstChild.getAttribute !== "undefined" && e.firstChild.getAttribute("href") !== "#") {
				bE.attrHandle.href = function (bR) {
					return bR.getAttribute("href", 2)
				}
			}
			e = null
		})(); if (av.querySelectorAll) {
			(function () {
				var e = by,
					bT = av.createElement("div"),
					bS = "__sizzle__";
				bT.innerHTML = "<p class='TEST'></p>";
				if (bT.querySelectorAll && bT.querySelectorAll(".TEST").length === 0) {
					return
				}
				by = function (b4, bV, bZ, b3) {
					bV = bV || av;
					if (!b3 && !by.isXML(bV)) {
						var b2 = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b4);
						if (b2 && (bV.nodeType === 1 || bV.nodeType === 9)) {
							if (b2[1]) {
								return bF(bV.getElementsByTagName(b4), bZ)
							} else {
								if (b2[2] && bE.find.CLASS && bV.getElementsByClassName) {
									return bF(bV.getElementsByClassName(b2[2]), bZ)
								}
							}
						}
						if (bV.nodeType === 9) {
							if (b4 === "body" && bV.body) {
								return bF([bV.body], bZ)
							} else {
								if (b2 && b2[3]) {
									var bY = bV.getElementById(b2[3]);
									if (bY && bY.parentNode) {
										if (bY.id === b2[3]) {
											return bF([bY], bZ)
										}
									} else {
										return bF([], bZ)
									}
								}
							}
							try {
								return bF(bV.querySelectorAll(b4), bZ)
							} catch (b0) {}
						} else {
							if (bV.nodeType === 1 && bV.nodeName.toLowerCase() !== "object") {
								var bW = bV,
									bX = bV.getAttribute("id"),
									bU = bX || bS,
									b6 = bV.parentNode,
									b5 = /^\s*[+~]/.test(b4);
								if (!bX) {
									bV.setAttribute("id", bU)
								} else {
									bU = bU.replace(/'/g, "\\$&")
								} if (b5 && b6) {
									bV = bV.parentNode
								}
								try {
									if (!b5 || b6) {
										return bF(bV.querySelectorAll("[id='" + bU + "'] " + b4), bZ)
									}
								} catch (b1) {} finally {
									if (!bX) {
										bW.removeAttribute("id")
									}
								}
							}
						}
					}
					return e(b4, bV, bZ, b3)
				};
				for (var bR in e) {
					by[bR] = e[bR]
				}
				bT = null
			})()
		}(function () {
			var e = av.documentElement,
				bS = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
			if (bS) {
				var bU = !bS.call(av.createElement("div"), "div"),
					bR = false;
				try {
					bS.call(av.documentElement, "[test!='']:sizzle")
				} catch (bT) {
					bR = true
				}
				by.matchesSelector = function (bW, bY) {
					bY = bY.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
					if (!by.isXML(bW)) {
						try {
							if (bR || !bE.match.PSEUDO.test(bY) && !/!=/.test(bY)) {
								var bV = bS.call(bW, bY);
								if (bV || !bU || bW.document && bW.document.nodeType !== 11) {
									return bV
								}
							}
						} catch (bX) {}
					}
					return by(bY, null, null, [bW]).length > 0
				}
			}
		})();
		(function () {
			var e = av.createElement("div");
			e.innerHTML = "<div class='test e'></div><div class='test'></div>";
			if (!e.getElementsByClassName || e.getElementsByClassName("e").length === 0) {
				return
			}
			e.lastChild.className = "e";
			if (e.getElementsByClassName("e").length === 1) {
				return
			}
			bE.order.splice(1, 0, "CLASS");
			bE.find.CLASS = function (bR, bS, bT) {
				if (typeof bS.getElementsByClassName !== "undefined" && !bT) {
					return bS.getElementsByClassName(bR[1])
				}
			};
			e = null
		})();

		function bv(bR, bW, bV, bZ, bX, bY) {
			for (var bT = 0, bS = bZ.length; bT < bS; bT++) {
				var e = bZ[bT];
				if (e) {
					var bU = false;
					e = e[bR];
					while (e) {
						if (e[bC] === bV) {
							bU = bZ[e.sizset];
							break
						}
						if (e.nodeType === 1 && !bY) {
							e[bC] = bV;
							e.sizset = bT
						}
						if (e.nodeName.toLowerCase() === bW) {
							bU = e;
							break
						}
						e = e[bR]
					}
					bZ[bT] = bU
				}
			}
		}
		function bN(bR, bW, bV, bZ, bX, bY) {
			for (var bT = 0, bS = bZ.length; bT < bS; bT++) {
				var e = bZ[bT];
				if (e) {
					var bU = false;
					e = e[bR];
					while (e) {
						if (e[bC] === bV) {
							bU = bZ[e.sizset];
							break
						}
						if (e.nodeType === 1) {
							if (!bY) {
								e[bC] = bV;
								e.sizset = bT
							}
							if (typeof bW !== "string") {
								if (e === bW) {
									bU = true;
									break
								}
							} else {
								if (by.filter(bW, [e]).length > 0) {
									bU = e;
									break
								}
							}
						}
						e = e[bR]
					}
					bZ[bT] = bU
				}
			}
		}
		if (av.documentElement.contains) {
			by.contains = function (bR, e) {
				return bR !== e && (bR.contains ? bR.contains(e) : true)
			}
		} else {
			if (av.documentElement.compareDocumentPosition) {
				by.contains = function (bR, e) {
					return !!(bR.compareDocumentPosition(e) & 16)
				}
			} else {
				by.contains = function () {
					return false
				}
			}
		}
		by.isXML = function (e) {
			var bR = (e ? e.ownerDocument || e : 0).documentElement;
			return bR ? bR.nodeName !== "HTML" : false
		};
		var bM = function (bS, e, bW) {
			var bV, bX = [],
				bU = "",
				bY = e.nodeType ? [e] : e;
			while ((bV = bE.match.PSEUDO.exec(bS))) {
				bU += bV[0];
				bS = bS.replace(bE.match.PSEUDO, "")
			}
			bS = bE.relative[bS] ? bS + "*" : bS;
			for (var bT = 0, bR = bY.length; bT < bR; bT++) {
				by(bS, bY[bT], bX, bW)
			}
			return by.filter(bU, bX)
		};
		by.attr = b.attr;
		by.selectors.attrMap = {};
		b.find = by;
		b.expr = by.selectors;
		b.expr[":"] = b.expr.filters;
		b.unique = by.uniqueSort;
		b.text = by.getText;
		b.isXMLDoc = by.isXML;
		b.contains = by.contains
	})();
	var ab = /Until$/,
		aq = /^(?:parents|prevUntil|prevAll)/,
		a9 = /,/,
		bp = /^.[^:#\[\.,]*$/,
		P = Array.prototype.slice,
		H = b.expr.match.POS,
		ay = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	b.fn.extend({
		find: function (e) {
			var bw = this,
				by, bv;
			if (typeof e !== "string") {
				return b(e).filter(function () {
					for (by = 0, bv = bw.length; by < bv; by++) {
						if (b.contains(bw[by], this)) {
							return true
						}
					}
				})
			}
			var bx = this.pushStack("", "find", e),
				bA, bB, bz;
			for (by = 0, bv = this.length; by < bv; by++) {
				bA = bx.length;
				b.find(e, this[by], bx);
				if (by > 0) {
					for (bB = bA; bB < bx.length; bB++) {
						for (bz = 0; bz < bA; bz++) {
							if (bx[bz] === bx[bB]) {
								bx.splice(bB--, 1);
								break
							}
						}
					}
				}
			}
			return bx
		},
		has: function (bv) {
			var e = b(bv);
			return this.filter(function () {
				for (var bx = 0, bw = e.length; bx < bw; bx++) {
					if (b.contains(this, e[bx])) {
						return true
					}
				}
			})
		},
		not: function (e) {
			return this.pushStack(aG(this, e, false), "not", e)
		},
		filter: function (e) {
			return this.pushStack(aG(this, e, true), "filter", e)
		},
		is: function (e) {
			return !!e && (typeof e === "string" ? H.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
		},
		closest: function (by, bx) {
			var bv = [],
				bw, e, bz = this[0];
			if (b.isArray(by)) {
				var bB = 1;
				while (bz && bz.ownerDocument && bz !== bx) {
					for (bw = 0; bw < by.length; bw++) {
						if (b(bz).is(by[bw])) {
							bv.push({
								selector: by[bw],
								elem: bz,
								level: bB
							})
						}
					}
					bz = bz.parentNode;
					bB++
				}
				return bv
			}
			var bA = H.test(by) || typeof by !== "string" ? b(by, bx || this.context) : 0;
			for (bw = 0, e = this.length; bw < e; bw++) {
				bz = this[bw];
				while (bz) {
					if (bA ? bA.index(bz) > -1 : b.find.matchesSelector(bz, by)) {
						bv.push(bz);
						break
					} else {
						bz = bz.parentNode;
						if (!bz || !bz.ownerDocument || bz === bx || bz.nodeType === 11) {
							break
						}
					}
				}
			}
			bv = bv.length > 1 ? b.unique(bv) : bv;
			return this.pushStack(bv, "closest", by)
		},
		index: function (e) {
			if (!e) {
				return (this[0] && this[0].parentNode) ? this.prevAll().length : -1
			}
			if (typeof e === "string") {
				return b.inArray(this[0], b(e))
			}
			return b.inArray(e.jquery ? e[0] : e, this)
		},
		add: function (e, bv) {
			var bx = typeof e === "string" ? b(e, bv) : b.makeArray(e && e.nodeType ? [e] : e),
				bw = b.merge(this.get(), bx);
			return this.pushStack(C(bx[0]) || C(bw[0]) ? bw : b.unique(bw))
		},
		andSelf: function () {
			return this.add(this.prevObject)
		}
	});

	function C(e) {
		return !e || !e.parentNode || e.parentNode.nodeType === 11
	}
	b.each({
		parent: function (bv) {
			var e = bv.parentNode;
			return e && e.nodeType !== 11 ? e : null
		},
		parents: function (e) {
			return b.dir(e, "parentNode")
		},
		parentsUntil: function (bv, e, bw) {
			return b.dir(bv, "parentNode", bw)
		},
		next: function (e) {
			return b.nth(e, 2, "nextSibling")
		},
		prev: function (e) {
			return b.nth(e, 2, "previousSibling")
		},
		nextAll: function (e) {
			return b.dir(e, "nextSibling")
		},
		prevAll: function (e) {
			return b.dir(e, "previousSibling")
		},
		nextUntil: function (bv, e, bw) {
			return b.dir(bv, "nextSibling", bw)
		},
		prevUntil: function (bv, e, bw) {
			return b.dir(bv, "previousSibling", bw)
		},
		siblings: function (e) {
			return b.sibling(e.parentNode.firstChild, e)
		},
		children: function (e) {
			return b.sibling(e.firstChild)
		},
		contents: function (e) {
			return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.makeArray(e.childNodes)
		}
	}, function (e, bv) {
		b.fn[e] = function (by, bw) {
			var bx = b.map(this, bv, by);
			if (!ab.test(e)) {
				bw = by
			}
			if (bw && typeof bw === "string") {
				bx = b.filter(bw, bx)
			}
			bx = this.length > 1 && !ay[e] ? b.unique(bx) : bx;
			if ((this.length > 1 || a9.test(bw)) && aq.test(e)) {
				bx = bx.reverse()
			}
			return this.pushStack(bx, e, P.call(arguments).join(","))
		}
	});
	b.extend({
		filter: function (bw, e, bv) {
			if (bv) {
				bw = ":not(" + bw + ")"
			}
			return e.length === 1 ? b.find.matchesSelector(e[0], bw) ? [e[0]] : [] : b.find.matches(bw, e)
		},
		dir: function (bw, bv, by) {
			var e = [],
				bx = bw[bv];
			while (bx && bx.nodeType !== 9 && (by === L || bx.nodeType !== 1 || !b(bx).is(by))) {
				if (bx.nodeType === 1) {
					e.push(bx)
				}
				bx = bx[bv]
			}
			return e
		},
		nth: function (by, e, bw, bx) {
			e = e || 1;
			var bv = 0;
			for (; by; by = by[bw]) {
				if (by.nodeType === 1 && ++bv === e) {
					break
				}
			}
			return by
		},
		sibling: function (bw, bv) {
			var e = [];
			for (; bw; bw = bw.nextSibling) {
				if (bw.nodeType === 1 && bw !== bv) {
					e.push(bw)
				}
			}
			return e
		}
	});

	function aG(bx, bw, e) {
		bw = bw || 0;
		if (b.isFunction(bw)) {
			return b.grep(bx, function (bz, by) {
				var bA = !! bw.call(bz, by, bz);
				return bA === e
			})
		} else {
			if (bw.nodeType) {
				return b.grep(bx, function (bz, by) {
					return (bz === bw) === e
				})
			} else {
				if (typeof bw === "string") {
					var bv = b.grep(bx, function (by) {
						return by.nodeType === 1
					});
					if (bp.test(bw)) {
						return b.filter(bw, bv, !e)
					} else {
						bw = b.filter(bw, bv)
					}
				}
			}
		}
		return b.grep(bx, function (bz, by) {
			return (b.inArray(bz, bw) >= 0) === e
		})
	}
	function a(e) {
		var bw = aR.split("|"),
			bv = e.createDocumentFragment();
		if (bv.createElement) {
			while (bw.length) {
				bv.createElement(bw.pop())
			}
		}
		return bv
	}
	var aR = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		ag = / jQuery\d+="(?:\d+|null)"/g,
		ar = /^\s+/,
		R = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
		d = /<([\w:]+)/,
		w = /<tbody/i,
		W = /<|&#?\w+;/,
		ae = /<(?:script|style)/i,
		O = /<(?:script|object|embed|option|style)/i,
		ah = new RegExp("<(?:" + aR + ")", "i"),
		o = /checked\s*(?:[^=]|=\s*.checked.)/i,
		bm = /\/(java|ecma)script/i,
		aN = /^\s*<!(?:\[CDATA\[|\-\-)/,
		ax = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		}, ac = a(av);
	ax.optgroup = ax.option;
	ax.tbody = ax.tfoot = ax.colgroup = ax.caption = ax.thead;
	ax.th = ax.td;
	if (!b.support.htmlSerialize) {
		ax._default = [1, "div<div>", "</div>"]
	}
	b.fn.extend({
		text: function (e) {
			if (b.isFunction(e)) {
				return this.each(function (bw) {
					var bv = b(this);
					bv.text(e.call(this, bw, bv.text()))
				})
			}
			if (typeof e !== "object" && e !== L) {
				return this.empty().append((this[0] && this[0].ownerDocument || av).createTextNode(e))
			}
			return b.text(this)
		},
		wrapAll: function (e) {
			if (b.isFunction(e)) {
				return this.each(function (bw) {
					b(this).wrapAll(e.call(this, bw))
				})
			}
			if (this[0]) {
				var bv = b(e, this[0].ownerDocument).eq(0).clone(true);
				if (this[0].parentNode) {
					bv.insertBefore(this[0])
				}
				bv.map(function () {
					var bw = this;
					while (bw.firstChild && bw.firstChild.nodeType === 1) {
						bw = bw.firstChild
					}
					return bw
				}).append(this)
			}
			return this
		},
		wrapInner: function (e) {
			if (b.isFunction(e)) {
				return this.each(function (bv) {
					b(this).wrapInner(e.call(this, bv))
				})
			}
			return this.each(function () {
				var bv = b(this),
					bw = bv.contents();
				if (bw.length) {
					bw.wrapAll(e)
				} else {
					bv.append(e)
				}
			})
		},
		wrap: function (e) {
			var bv = b.isFunction(e);
			return this.each(function (bw) {
				b(this).wrapAll(bv ? e.call(this, bw) : e)
			})
		},
		unwrap: function () {
			return this.parent().each(function () {
				if (!b.nodeName(this, "body")) {
					b(this).replaceWith(this.childNodes)
				}
			}).end()
		},
		append: function () {
			return this.domManip(arguments, true, function (e) {
				if (this.nodeType === 1) {
					this.appendChild(e)
				}
			})
		},
		prepend: function () {
			return this.domManip(arguments, true, function (e) {
				if (this.nodeType === 1) {
					this.insertBefore(e, this.firstChild)
				}
			})
		},
		before: function () {
			if (this[0] && this[0].parentNode) {
				return this.domManip(arguments, false, function (bv) {
					this.parentNode.insertBefore(bv, this)
				})
			} else {
				if (arguments.length) {
					var e = b.clean(arguments);
					e.push.apply(e, this.toArray());
					return this.pushStack(e, "before", arguments)
				}
			}
		},
		after: function () {
			if (this[0] && this[0].parentNode) {
				return this.domManip(arguments, false, function (bv) {
					this.parentNode.insertBefore(bv, this.nextSibling)
				})
			} else {
				if (arguments.length) {
					var e = this.pushStack(this, "after", arguments);
					e.push.apply(e, b.clean(arguments));
					return e
				}
			}
		},
		remove: function (e, bx) {
			for (var bv = 0, bw;
			(bw = this[bv]) != null; bv++) {
				if (!e || b.filter(e, [bw]).length) {
					if (!bx && bw.nodeType === 1) {
						b.cleanData(bw.getElementsByTagName("*"));
						b.cleanData([bw])
					}
					if (bw.parentNode) {
						bw.parentNode.removeChild(bw)
					}
				}
			}
			return this
		},
		empty: function () {
			for (var e = 0, bv;
			(bv = this[e]) != null; e++) {
				if (bv.nodeType === 1) {
					b.cleanData(bv.getElementsByTagName("*"))
				}
				while (bv.firstChild) {
					bv.removeChild(bv.firstChild)
				}
			}
			return this
		},
		clone: function (bv, e) {
			bv = bv == null ? false : bv;
			e = e == null ? bv : e;
			return this.map(function () {
				return b.clone(this, bv, e)
			})
		},
		html: function (bx) {
			if (bx === L) {
				return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(ag, "") : null
			} else {
				if (typeof bx === "string" && !ae.test(bx) && (b.support.leadingWhitespace || !ar.test(bx)) && !ax[(d.exec(bx) || ["", ""])[1].toLowerCase()]) {
					bx = bx.replace(R, "<$1></$2>");
					try {
						for (var bw = 0, bv = this.length; bw < bv; bw++) {
							if (this[bw].nodeType === 1) {
								b.cleanData(this[bw].getElementsByTagName("*"));
								this[bw].innerHTML = bx
							}
						}
					} catch (by) {
						this.empty().append(bx)
					}
				} else {
					if (b.isFunction(bx)) {
						this.each(function (bz) {
							var e = b(this);
							e.html(bx.call(this, bz, e.html()))
						})
					} else {
						this.empty().append(bx)
					}
				}
			}
			return this
		},
		replaceWith: function (e) {
			if (this[0] && this[0].parentNode) {
				if (b.isFunction(e)) {
					return this.each(function (bx) {
						var bw = b(this),
							bv = bw.html();
						bw.replaceWith(e.call(this, bx, bv))
					})
				}
				if (typeof e !== "string") {
					e = b(e).detach()
				}
				return this.each(function () {
					var bw = this.nextSibling,
						bv = this.parentNode;
					b(this).remove();
					if (bw) {
						b(bw).before(e)
					} else {
						b(bv).append(e)
					}
				})
			} else {
				return this.length ? this.pushStack(b(b.isFunction(e) ? e() : e), "replaceWith", e) : this
			}
		},
		detach: function (e) {
			return this.remove(e, true)
		},
		domManip: function (bB, bF, bE) {
			var bx, by, bA, bD, bC = bB[0],
				bv = [];
			if (!b.support.checkClone && arguments.length === 3 && typeof bC === "string" && o.test(bC)) {
				return this.each(function () {
					b(this).domManip(bB, bF, bE, true)
				})
			}
			if (b.isFunction(bC)) {
				return this.each(function (bH) {
					var bG = b(this);
					bB[0] = bC.call(this, bH, bF ? bG.html() : L);
					bG.domManip(bB, bF, bE)
				})
			}
			if (this[0]) {
				bD = bC && bC.parentNode;
				if (b.support.parentNode && bD && bD.nodeType === 11 && bD.childNodes.length === this.length) {
					bx = {
						fragment: bD
					}
				} else {
					bx = b.buildFragment(bB, this, bv)
				}
				bA = bx.fragment;
				if (bA.childNodes.length === 1) {
					by = bA = bA.firstChild
				} else {
					by = bA.firstChild
				} if (by) {
					bF = bF && b.nodeName(by, "tr");
					for (var bw = 0, e = this.length, bz = e - 1; bw < e; bw++) {
						bE.call(bF ? ba(this[bw], by) : this[bw], bx.cacheable || (e > 1 && bw < bz) ? b.clone(bA, true, true) : bA)
					}
				}
				if (bv.length) {
					b.each(bv, bo)
				}
			}
			return this
		}
	});

	function ba(e, bv) {
		return b.nodeName(e, "table") ? (e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody"))) : e
	}
	function t(bB, bv) {
		if (bv.nodeType !== 1 || !b.hasData(bB)) {
			return
		}
		var by, bx, e, bA = b._data(bB),
			bz = b._data(bv, bA),
			bw = bA.events;
		if (bw) {
			delete bz.handle;
			bz.events = {};
			for (by in bw) {
				for (bx = 0, e = bw[by].length; bx < e; bx++) {
					b.event.add(bv, by + (bw[by][bx].namespace ? "." : "") + bw[by][bx].namespace, bw[by][bx], bw[by][bx].data)
				}
			}
		}
		if (bz.data) {
			bz.data = b.extend({}, bz.data)
		}
	}
	function ai(bv, e) {
		var bw;
		if (e.nodeType !== 1) {
			return
		}
		if (e.clearAttributes) {
			e.clearAttributes()
		}
		if (e.mergeAttributes) {
			e.mergeAttributes(bv)
		}
		bw = e.nodeName.toLowerCase();
		if (bw === "object") {
			e.outerHTML = bv.outerHTML
		} else {
			if (bw === "input" && (bv.type === "checkbox" || bv.type === "radio")) {
				if (bv.checked) {
					e.defaultChecked = e.checked = bv.checked
				}
				if (e.value !== bv.value) {
					e.value = bv.value
				}
			} else {
				if (bw === "option") {
					e.selected = bv.defaultSelected
				} else {
					if (bw === "input" || bw === "textarea") {
						e.defaultValue = bv.defaultValue
					}
				}
			}
		}
		e.removeAttribute(b.expando)
	}
	b.buildFragment = function (bz, bx, bv) {
		var by, e, bw, bA, bB = bz[0];
		if (bx && bx[0]) {
			bA = bx[0].ownerDocument || bx[0]
		}
		if (!bA.createDocumentFragment) {
			bA = av
		}
		if (bz.length === 1 && typeof bB === "string" && bB.length < 512 && bA === av && bB.charAt(0) === "<" && !O.test(bB) && (b.support.checkClone || !o.test(bB)) && (b.support.html5Clone || !ah.test(bB))) {
			e = true;
			bw = b.fragments[bB];
			if (bw && bw !== 1) {
				by = bw
			}
		}
		if (!by) {
			by = bA.createDocumentFragment();
			b.clean(bz, bA, by, bv)
		}
		if (e) {
			b.fragments[bB] = bw ? by : 1
		}
		return {
			fragment: by,
			cacheable: e
		}
	};
	b.fragments = {};
	b.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (e, bv) {
		b.fn[e] = function (bw) {
			var bz = [],
				bC = b(bw),
				bB = this.length === 1 && this[0].parentNode;
			if (bB && bB.nodeType === 11 && bB.childNodes.length === 1 && bC.length === 1) {
				bC[bv](this[0]);
				return this
			} else {
				for (var bA = 0, bx = bC.length; bA < bx; bA++) {
					var by = (bA > 0 ? this.clone(true) : this).get();
					b(bC[bA])[bv](by);
					bz = bz.concat(by)
				}
				return this.pushStack(bz, e, bC.selector)
			}
		}
	});

	function bg(e) {
		if (typeof e.getElementsByTagName !== "undefined") {
			return e.getElementsByTagName("*")
		} else {
			if (typeof e.querySelectorAll !== "undefined") {
				return e.querySelectorAll("*")
			} else {
				return []
			}
		}
	}
	function az(e) {
		if (e.type === "checkbox" || e.type === "radio") {
			e.defaultChecked = e.checked
		}
	}
	function E(e) {
		var bv = (e.nodeName || "").toLowerCase();
		if (bv === "input") {
			az(e)
		} else {
			if (bv !== "script" && typeof e.getElementsByTagName !== "undefined") {
				b.grep(e.getElementsByTagName("input"), az)
			}
		}
	}
	function al(e) {
		var bv = av.createElement("div");
		ac.appendChild(bv);
		bv.innerHTML = e.outerHTML;
		return bv.firstChild
	}
	b.extend({
		clone: function (by, bA, bw) {
			var e, bv, bx, bz = b.support.html5Clone || !ah.test("<" + by.nodeName) ? by.cloneNode(true) : al(by);
			if ((!b.support.noCloneEvent || !b.support.noCloneChecked) && (by.nodeType === 1 || by.nodeType === 11) && !b.isXMLDoc(by)) {
				ai(by, bz);
				e = bg(by);
				bv = bg(bz);
				for (bx = 0; e[bx]; ++bx) {
					if (bv[bx]) {
						ai(e[bx], bv[bx])
					}
				}
			}
			if (bA) {
				t(by, bz);
				if (bw) {
					e = bg(by);
					bv = bg(bz);
					for (bx = 0; e[bx]; ++bx) {
						t(e[bx], bv[bx])
					}
				}
			}
			e = bv = null;
			return bz
		},
		clean: function (bw, by, bH, bA) {
			var bF;
			by = by || av;
			if (typeof by.createElement === "undefined") {
				by = by.ownerDocument || by[0] && by[0].ownerDocument || av
			}
			var bI = [],
				bB;
			for (var bE = 0, bz;
			(bz = bw[bE]) != null; bE++) {
				if (typeof bz === "number") {
					bz += ""
				}
				if (!bz) {
					continue
				}
				if (typeof bz === "string") {
					if (!W.test(bz)) {
						bz = by.createTextNode(bz)
					} else {
						bz = bz.replace(R, "<$1></$2>");
						var bK = (d.exec(bz) || ["", ""])[1].toLowerCase(),
							bx = ax[bK] || ax._default,
							bD = bx[0],
							bv = by.createElement("div");
						if (by === av) {
							ac.appendChild(bv)
						} else {
							a(by).appendChild(bv)
						}
						bv.innerHTML = bx[1] + bz + bx[2];
						while (bD--) {
							bv = bv.lastChild
						}
						if (!b.support.tbody) {
							var e = w.test(bz),
								bC = bK === "table" && !e ? bv.firstChild && bv.firstChild.childNodes : bx[1] === "<table>" && !e ? bv.childNodes : [];
							for (bB = bC.length - 1; bB >= 0; --bB) {
								if (b.nodeName(bC[bB], "tbody") && !bC[bB].childNodes.length) {
									bC[bB].parentNode.removeChild(bC[bB])
								}
							}
						}
						if (!b.support.leadingWhitespace && ar.test(bz)) {
							bv.insertBefore(by.createTextNode(ar.exec(bz)[0]), bv.firstChild)
						}
						bz = bv.childNodes
					}
				}
				var bG;
				if (!b.support.appendChecked) {
					if (bz[0] && typeof (bG = bz.length) === "number") {
						for (bB = 0; bB < bG; bB++) {
							E(bz[bB])
						}
					} else {
						E(bz)
					}
				}
				if (bz.nodeType) {
					bI.push(bz)
				} else {
					bI = b.merge(bI, bz)
				}
			}
			if (bH) {
				bF = function (bL) {
					return !bL.type || bm.test(bL.type)
				};
				for (bE = 0; bI[bE]; bE++) {
					if (bA && b.nodeName(bI[bE], "script") && (!bI[bE].type || bI[bE].type.toLowerCase() === "text/javascript")) {
						bA.push(bI[bE].parentNode ? bI[bE].parentNode.removeChild(bI[bE]) : bI[bE])
					} else {
						if (bI[bE].nodeType === 1) {
							var bJ = b.grep(bI[bE].getElementsByTagName("script"), bF);
							bI.splice.apply(bI, [bE + 1, 0].concat(bJ))
						}
						bH.appendChild(bI[bE])
					}
				}
			}
			return bI
		},
		cleanData: function (bv) {
			var by, bw, e = b.cache,
				bB = b.event.special,
				bA = b.support.deleteExpando;
			for (var bz = 0, bx;
			(bx = bv[bz]) != null; bz++) {
				if (bx.nodeName && b.noData[bx.nodeName.toLowerCase()]) {
					continue
				}
				bw = bx[b.expando];
				if (bw) {
					by = e[bw];
					if (by && by.events) {
						for (var bC in by.events) {
							if (bB[bC]) {
								b.event.remove(bx, bC)
							} else {
								b.removeEvent(bx, bC, by.handle)
							}
						}
						if (by.handle) {
							by.handle.elem = null
						}
					}
					if (bA) {
						delete bx[b.expando]
					} else {
						if (bx.removeAttribute) {
							bx.removeAttribute(b.expando)
						}
					}
					delete e[bw]
				}
			}
		}
	});

	function bo(e, bv) {
		if (bv.src) {
			b.ajax({
				url: bv.src,
				async: false,
				dataType: "script"
			})
		} else {
			b.globalEval((bv.text || bv.textContent || bv.innerHTML || "").replace(aN, "/*$0*/"))
		} if (bv.parentNode) {
			bv.parentNode.removeChild(bv)
		}
	}
	var ak = /alpha\([^)]*\)/i,
		au = /opacity=([^)]*)/,
		z = /([A-Z]|^ms)/g,
		bc = /^-?\d+(?:px)?$/i,
		bn = /^-?\d/,
		I = /^([\-+])=([\-+.\de]+)/,
		a7 = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		}, an = ["Left", "Right"],
		a1 = ["Top", "Bottom"],
		Z, aI, aX;
	b.fn.css = function (e, bv) {
		if (arguments.length === 2 && bv === L) {
			return this
		}
		return b.access(this, e, bv, true, function (bx, bw, by) {
			return by !== L ? b.style(bx, bw, by) : b.css(bx, bw)
		})
	};
	b.extend({
		cssHooks: {
			opacity: {
				get: function (bw, bv) {
					if (bv) {
						var e = Z(bw, "opacity", "opacity");
						return e === "" ? "1" : e
					} else {
						return bw.style.opacity
					}
				}
			}
		},
		cssNumber: {
			fillOpacity: true,
			fontWeight: true,
			lineHeight: true,
			opacity: true,
			orphans: true,
			widows: true,
			zIndex: true,
			zoom: true
		},
		cssProps: {
			"float": b.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function (bx, bw, bD, by) {
			if (!bx || bx.nodeType === 3 || bx.nodeType === 8 || !bx.style) {
				return
			}
			var bB, bC, bz = b.camelCase(bw),
				bv = bx.style,
				bE = b.cssHooks[bz];
			bw = b.cssProps[bz] || bz;
			if (bD !== L) {
				bC = typeof bD;
				if (bC === "string" && (bB = I.exec(bD))) {
					bD = (+(bB[1] + 1) * +bB[2]) + parseFloat(b.css(bx, bw));
					bC = "number"
				}
				if (bD == null || bC === "number" && isNaN(bD)) {
					return
				}
				if (bC === "number" && !b.cssNumber[bz]) {
					bD += "px"
				}
				if (!bE || !("set" in bE) || (bD = bE.set(bx, bD)) !== L) {
					try {
						bv[bw] = bD
					} catch (bA) {}
				}
			} else {
				if (bE && "get" in bE && (bB = bE.get(bx, false, by)) !== L) {
					return bB
				}
				return bv[bw]
			}
		},
		css: function (by, bx, bv) {
			var bw, e;
			bx = b.camelCase(bx);
			e = b.cssHooks[bx];
			bx = b.cssProps[bx] || bx;
			if (bx === "cssFloat") {
				bx = "float"
			}
			if (e && "get" in e && (bw = e.get(by, true, bv)) !== L) {
				return bw
			} else {
				if (Z) {
					return Z(by, bx)
				}
			}
		},
		swap: function (bx, bw, by) {
			var e = {};
			for (var bv in bw) {
				e[bv] = bx.style[bv];
				bx.style[bv] = bw[bv]
			}
			by.call(bx);
			for (bv in bw) {
				bx.style[bv] = e[bv]
			}
		}
	});
	b.curCSS = b.css;
	b.each(["height", "width"], function (bv, e) {
		b.cssHooks[e] = {
			get: function (by, bx, bw) {
				var bz;
				if (bx) {
					if (by.offsetWidth !== 0) {
						return p(by, e, bw)
					} else {
						b.swap(by, a7, function () {
							bz = p(by, e, bw)
						})
					}
					return bz
				}
			},
			set: function (bw, bx) {
				if (bc.test(bx)) {
					bx = parseFloat(bx);
					if (bx >= 0) {
						return bx + "px"
					}
				} else {
					return bx
				}
			}
		}
	});
	if (!b.support.opacity) {
		b.cssHooks.opacity = {
			get: function (bv, e) {
				return au.test((e && bv.currentStyle ? bv.currentStyle.filter : bv.style.filter) || "") ? (parseFloat(RegExp.$1) / 100) + "" : e ? "1" : ""
			},
			set: function (by, bz) {
				var bx = by.style,
					bv = by.currentStyle,
					e = b.isNumeric(bz) ? "alpha(opacity=" + bz * 100 + ")" : "",
					bw = bv && bv.filter || bx.filter || "";
				bx.zoom = 1;
				if (bz >= 1 && b.trim(bw.replace(ak, "")) === "") {
					bx.removeAttribute("filter");
					if (bv && !bv.filter) {
						return
					}
				}
				bx.filter = ak.test(bw) ? bw.replace(ak, e) : bw + " " + e
			}
		}
	}
	b(function () {
		if (!b.support.reliableMarginRight) {
			b.cssHooks.marginRight = {
				get: function (bw, bv) {
					var e;
					b.swap(bw, {
						display: "inline-block"
					}, function () {
						if (bv) {
							e = Z(bw, "margin-right", "marginRight")
						} else {
							e = bw.style.marginRight
						}
					});
					return e
				}
			}
		}
	});
	if (av.defaultView && av.defaultView.getComputedStyle) {
		aI = function (by, bw) {
			var bv, bx, e;
			bw = bw.replace(z, "-$1").toLowerCase();
			if ((bx = by.ownerDocument.defaultView) && (e = bx.getComputedStyle(by, null))) {
				bv = e.getPropertyValue(bw);
				if (bv === "" && !b.contains(by.ownerDocument.documentElement, by)) {
					bv = b.style(by, bw)
				}
			}
			return bv
		}
	}
	if (av.documentElement.currentStyle) {
		aX = function (bz, bw) {
			var bA, e, by, bv = bz.currentStyle && bz.currentStyle[bw],
				bx = bz.style;
			if (bv === null && bx && (by = bx[bw])) {
				bv = by
			}
			if (!bc.test(bv) && bn.test(bv)) {
				bA = bx.left;
				e = bz.runtimeStyle && bz.runtimeStyle.left;
				if (e) {
					bz.runtimeStyle.left = bz.currentStyle.left
				}
				bx.left = bw === "fontSize" ? "1em" : (bv || 0);
				bv = bx.pixelLeft + "px";
				bx.left = bA;
				if (e) {
					bz.runtimeStyle.left = e
				}
			}
			return bv === "" ? "auto" : bv
		}
	}
	Z = aI || aX;

	function p(by, bw, bv) {
		var bA = bw === "width" ? by.offsetWidth : by.offsetHeight,
			bz = bw === "width" ? an : a1,
			bx = 0,
			e = bz.length;
		if (bA > 0) {
			if (bv !== "border") {
				for (; bx < e; bx++) {
					if (!bv) {
						bA -= parseFloat(b.css(by, "padding" + bz[bx])) || 0
					}
					if (bv === "margin") {
						bA += parseFloat(b.css(by, bv + bz[bx])) || 0
					} else {
						bA -= parseFloat(b.css(by, "border" + bz[bx] + "Width")) || 0
					}
				}
			}
			return bA + "px"
		}
		bA = Z(by, bw, bw);
		if (bA < 0 || bA == null) {
			bA = by.style[bw] || 0
		}
		bA = parseFloat(bA) || 0;
		if (bv) {
			for (; bx < e; bx++) {
				bA += parseFloat(b.css(by, "padding" + bz[bx])) || 0;
				if (bv !== "padding") {
					bA += parseFloat(b.css(by, "border" + bz[bx] + "Width")) || 0
				}
				if (bv === "margin") {
					bA += parseFloat(b.css(by, bv + bz[bx])) || 0
				}
			}
		}
		return bA + "px"
	}
	if (b.expr && b.expr.filters) {
		b.expr.filters.hidden = function (bw) {
			var bv = bw.offsetWidth,
				e = bw.offsetHeight;
			return (bv === 0 && e === 0) || (!b.support.reliableHiddenOffsets && ((bw.style && bw.style.display) || b.css(bw, "display")) === "none")
		};
		b.expr.filters.visible = function (e) {
			return !b.expr.filters.hidden(e)
		}
	}
	var k = /%20/g,
		ap = /\[\]$/,
		bs = /\r?\n/g,
		bq = /#.*$/,
		aD = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		aZ = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		aM = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
		aQ = /^(?:GET|HEAD)$/,
		c = /^\/\//,
		M = /\?/,
		a6 = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		q = /^(?:select|textarea)/i,
		h = /\s+/,
		br = /([?&])_=[^&]*/,
		K = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
		A = b.fn.load,
		aa = {}, r = {}, aE, s, aV = ["*/"] + ["*"];
	try {
		aE = bl.href
	} catch (aw) {
		aE = av.createElement("a");
		aE.href = "";
		aE = aE.href
	}
	s = K.exec(aE.toLowerCase()) || [];

	function f(e) {
		return function (by, bA) {
			if (typeof by !== "string") {
				bA = by;
				by = "*"
			}
			if (b.isFunction(bA)) {
				var bx = by.toLowerCase().split(h),
					bw = 0,
					bz = bx.length,
					bv, bB, bC;
				for (; bw < bz; bw++) {
					bv = bx[bw];
					bC = /^\+/.test(bv);
					if (bC) {
						bv = bv.substr(1) || "*"
					}
					bB = e[bv] = e[bv] || [];
					bB[bC ? "unshift" : "push"](bA)
				}
			}
		}
	}
	function aW(bv, bE, bz, bD, bB, bx) {
		bB = bB || bE.dataTypes[0];
		bx = bx || {};
		bx[bB] = true;
		var bA = bv[bB],
			bw = 0,
			e = bA ? bA.length : 0,
			by = (bv === aa),
			bC;
		for (; bw < e && (by || !bC); bw++) {
			bC = bA[bw](bE, bz, bD);
			if (typeof bC === "string") {
				if (!by || bx[bC]) {
					bC = L
				} else {
					bE.dataTypes.unshift(bC);
					bC = aW(bv, bE, bz, bD, bC, bx)
				}
			}
		}
		if ((by || !bC) && !bx["*"]) {
			bC = aW(bv, bE, bz, bD, "*", bx)
		}
		return bC
	}
	function am(bw, bx) {
		var bv, e, by = b.ajaxSettings.flatOptions || {};
		for (bv in bx) {
			if (bx[bv] !== L) {
				(by[bv] ? bw : (e || (e = {})))[bv] = bx[bv]
			}
		}
		if (e) {
			b.extend(true, bw, e)
		}
	}
	b.fn.extend({
		load: function (bw, bz, bA) {
			if (typeof bw !== "string" && A) {
				return A.apply(this, arguments)
			} else {
				if (!this.length) {
					return this
				}
			}
			var by = bw.indexOf(" ");
			if (by >= 0) {
				var e = bw.slice(by, bw.length);
				bw = bw.slice(0, by)
			}
			var bx = "GET";
			if (bz) {
				if (b.isFunction(bz)) {
					bA = bz;
					bz = L
				} else {
					if (typeof bz === "object") {
						bz = b.param(bz, b.ajaxSettings.traditional);
						bx = "POST"
					}
				}
			}
			var bv = this;
			b.ajax({
				url: bw,
				type: bx,
				dataType: "html",
				data: bz,
				complete: function (bC, bB, bD) {
					bD = bC.responseText;
					if (bC.isResolved()) {
						bC.done(function (bE) {
							bD = bE
						});
						bv.html(e ? b("<div>").append(bD.replace(a6, "")).find(e) : bD)
					}
					if (bA) {
						bv.each(bA, [bD, bB, bC])
					}
				}
			});
			return this
		},
		serialize: function () {
			return b.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				return this.elements ? b.makeArray(this.elements) : this
			}).filter(function () {
				return this.name && !this.disabled && (this.checked || q.test(this.nodeName) || aZ.test(this.type))
			}).map(function (e, bv) {
				var bw = b(this).val();
				return bw == null ? null : b.isArray(bw) ? b.map(bw, function (by, bx) {
					return {
						name: bv.name,
						value: by.replace(bs, "\r\n")
					}
				}) : {
					name: bv.name,
					value: bw.replace(bs, "\r\n")
				}
			}).get()
		}
	});
	b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, bv) {
		b.fn[bv] = function (bw) {
			return this.on(bv, bw)
		}
	});
	b.each(["get", "post"], function (e, bv) {
		b[bv] = function (bw, by, bz, bx) {
			if (b.isFunction(by)) {
				bx = bx || bz;
				bz = by;
				by = L
			}
			return b.ajax({
				type: bv,
				url: bw,
				data: by,
				success: bz,
				dataType: bx
			})
		}
	});
	b.extend({
		getScript: function (e, bv) {
			return b.get(e, L, bv, "script")
		},
		getJSON: function (e, bv, bw) {
			return b.get(e, bv, bw, "json")
		},
		ajaxSetup: function (bv, e) {
			if (e) {
				am(bv, b.ajaxSettings)
			} else {
				e = bv;
				bv = b.ajaxSettings
			}
			am(bv, e);
			return bv
		},
		ajaxSettings: {
			url: aE,
			isLocal: aM.test(s[1]),
			global: true,
			type: "GET",
			contentType: "application/x-www-form-urlencoded",
			processData: true,
			async: true,
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": aV
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": bb.String,
				"text html": true,
				"text json": b.parseJSON,
				"text xml": b.parseXML
			},
			flatOptions: {
				context: true,
				url: true
			}
		},
		ajaxPrefilter: f(aa),
		ajaxTransport: f(r),
		ajax: function (bz, bx) {
			if (typeof bz === "object") {
				bx = bz;
				bz = L
			}
			bx = bx || {};
			var bD = b.ajaxSetup({}, bx),
				bS = bD.context || bD,
				bG = bS !== bD && (bS.nodeType || bS instanceof b) ? b(bS) : b.event,
				bR = b.Deferred(),
				bN = b.Callbacks("once memory"),
				bB = bD.statusCode || {}, bC, bH = {}, bO = {}, bQ, by, bL, bE, bI, bA = 0,
				bw, bK, bJ = {
					readyState: 0,
					setRequestHeader: function (bT, bU) {
						if (!bA) {
							var e = bT.toLowerCase();
							bT = bO[e] = bO[e] || bT;
							bH[bT] = bU
						}
						return this
					},
					getAllResponseHeaders: function () {
						return bA === 2 ? bQ : null
					},
					getResponseHeader: function (bT) {
						var e;
						if (bA === 2) {
							if (!by) {
								by = {};
								while ((e = aD.exec(bQ))) {
									by[e[1].toLowerCase()] = e[2]
								}
							}
							e = by[bT.toLowerCase()]
						}
						return e === L ? null : e
					},
					overrideMimeType: function (e) {
						if (!bA) {
							bD.mimeType = e
						}
						return this
					},
					abort: function (e) {
						e = e || "abort";
						if (bL) {
							bL.abort(e)
						}
						bF(0, e);
						return this
					}
				};

			function bF(bZ, bU, b0, bW) {
				if (bA === 2) {
					return
				}
				bA = 2;
				if (bE) {
					clearTimeout(bE)
				}
				bL = L;
				bQ = bW || "";
				bJ.readyState = bZ > 0 ? 4 : 0;
				var bT, b4, b3, bX = bU,
					bY = b0 ? bj(bD, bJ, b0) : L,
					bV, b2;
				if (bZ >= 200 && bZ < 300 || bZ === 304) {
					if (bD.ifModified) {
						if ((bV = bJ.getResponseHeader("Last-Modified"))) {
							b.lastModified[bC] = bV
						}
						if ((b2 = bJ.getResponseHeader("Etag"))) {
							b.etag[bC] = b2
						}
					}
					if (bZ === 304) {
						bX = "notmodified";
						bT = true
					} else {
						try {
							b4 = G(bD, bY);
							bX = "success";
							bT = true
						} catch (b1) {
							bX = "parsererror";
							b3 = b1
						}
					}
				} else {
					b3 = bX;
					if (!bX || bZ) {
						bX = "error";
						if (bZ < 0) {
							bZ = 0
						}
					}
				}
				bJ.status = bZ;
				bJ.statusText = "" + (bU || bX);
				if (bT) {
					bR.resolveWith(bS, [b4, bX, bJ])
				} else {
					bR.rejectWith(bS, [bJ, bX, b3])
				}
				bJ.statusCode(bB);
				bB = L;
				if (bw) {
					bG.trigger("ajax" + (bT ? "Success" : "Error"), [bJ, bD, bT ? b4 : b3])
				}
				bN.fireWith(bS, [bJ, bX]);
				if (bw) {
					bG.trigger("ajaxComplete", [bJ, bD]);
					if (!(--b.active)) {
						b.event.trigger("ajaxStop")
					}
				}
			}
			bR.promise(bJ);
			bJ.success = bJ.done;
			bJ.error = bJ.fail;
			bJ.complete = bN.add;
			bJ.statusCode = function (bT) {
				if (bT) {
					var e;
					if (bA < 2) {
						for (e in bT) {
							bB[e] = [bB[e], bT[e]]
						}
					} else {
						e = bT[bJ.status];
						bJ.then(e, e)
					}
				}
				return this
			};
			bD.url = ((bz || bD.url) + "").replace(bq, "").replace(c, s[1] + "//");
			bD.dataTypes = b.trim(bD.dataType || "*").toLowerCase().split(h);
			if (bD.crossDomain == null) {
				bI = K.exec(bD.url.toLowerCase());
				bD.crossDomain = !! (bI && (bI[1] != s[1] || bI[2] != s[2] || (bI[3] || (bI[1] === "http:" ? 80 : 443)) != (s[3] || (s[1] === "http:" ? 80 : 443))))
			}
			if (bD.data && bD.processData && typeof bD.data !== "string") {
				bD.data = b.param(bD.data, bD.traditional)
			}
			aW(aa, bD, bx, bJ);
			if (bA === 2) {
				return false
			}
			bw = bD.global;
			bD.type = bD.type.toUpperCase();
			bD.hasContent = !aQ.test(bD.type);
			if (bw && b.active++ === 0) {
				b.event.trigger("ajaxStart")
			}
			if (!bD.hasContent) {
				if (bD.data) {
					bD.url += (M.test(bD.url) ? "&" : "?") + bD.data;
					delete bD.data
				}
				bC = bD.url;
				if (bD.cache === false) {
					var bv = b.now(),
						bP = bD.url.replace(br, "$1_=" + bv);
					bD.url = bP + ((bP === bD.url) ? (M.test(bD.url) ? "&" : "?") + "_=" + bv : "")
				}
			}
			if (bD.data && bD.hasContent && bD.contentType !== false || bx.contentType) {
				bJ.setRequestHeader("Content-Type", bD.contentType)
			}
			if (bD.ifModified) {
				bC = bC || bD.url;
				if (b.lastModified[bC]) {
					bJ.setRequestHeader("If-Modified-Since", b.lastModified[bC])
				}
				if (b.etag[bC]) {
					bJ.setRequestHeader("If-None-Match", b.etag[bC])
				}
			}
			bJ.setRequestHeader("Accept", bD.dataTypes[0] && bD.accepts[bD.dataTypes[0]] ? bD.accepts[bD.dataTypes[0]] + (bD.dataTypes[0] !== "*" ? ", " + aV + "; q=0.01" : "") : bD.accepts["*"]);
			for (bK in bD.headers) {
				bJ.setRequestHeader(bK, bD.headers[bK])
			}
			if (bD.beforeSend && (bD.beforeSend.call(bS, bJ, bD) === false || bA === 2)) {
				bJ.abort();
				return false
			}
			for (bK in {
				success: 1,
				error: 1,
				complete: 1
			}) {
				bJ[bK](bD[bK])
			}
			bL = aW(r, bD, bx, bJ);
			if (!bL) {
				bF(-1, "No Transport")
			} else {
				bJ.readyState = 1;
				if (bw) {
					bG.trigger("ajaxSend", [bJ, bD])
				}
				if (bD.async && bD.timeout > 0) {
					bE = setTimeout(function () {
						bJ.abort("timeout")
					}, bD.timeout)
				}
				try {
					bA = 1;
					bL.send(bH, bF)
				} catch (bM) {
					if (bA < 2) {
						bF(-1, bM)
					} else {
						throw bM
					}
				}
			}
			return bJ
		},
		param: function (e, bw) {
			var bv = [],
				by = function (bz, bA) {
					bA = b.isFunction(bA) ? bA() : bA;
					bv[bv.length] = encodeURIComponent(bz) + "=" + encodeURIComponent(bA)
				};
			if (bw === L) {
				bw = b.ajaxSettings.traditional
			}
			if (b.isArray(e) || (e.jquery && !b.isPlainObject(e))) {
				b.each(e, function () {
					by(this.name, this.value)
				})
			} else {
				for (var bx in e) {
					v(bx, e[bx], bw, by)
				}
			}
			return bv.join("&").replace(k, "+")
		}
	});

	function v(bw, by, bv, bx) {
		if (b.isArray(by)) {
			b.each(by, function (bA, bz) {
				if (bv || ap.test(bw)) {
					bx(bw, bz)
				} else {
					v(bw + "[" + (typeof bz === "object" || b.isArray(bz) ? bA : "") + "]", bz, bv, bx)
				}
			})
		} else {
			if (!bv && by != null && typeof by === "object") {
				for (var e in by) {
					v(bw + "[" + e + "]", by[e], bv, bx)
				}
			} else {
				bx(bw, by)
			}
		}
	}
	b.extend({
		active: 0,
		lastModified: {},
		etag: {}
	});

	function bj(bD, bC, bz) {
		var bv = bD.contents,
			bB = bD.dataTypes,
			bw = bD.responseFields,
			by, bA, bx, e;
		for (bA in bw) {
			if (bA in bz) {
				bC[bw[bA]] = bz[bA]
			}
		}
		while (bB[0] === "*") {
			bB.shift();
			if (by === L) {
				by = bD.mimeType || bC.getResponseHeader("content-type")
			}
		}
		if (by) {
			for (bA in bv) {
				if (bv[bA] && bv[bA].test(by)) {
					bB.unshift(bA);
					break
				}
			}
		}
		if (bB[0] in bz) {
			bx = bB[0]
		} else {
			for (bA in bz) {
				if (!bB[0] || bD.converters[bA + " " + bB[0]]) {
					bx = bA;
					break
				}
				if (!e) {
					e = bA
				}
			}
			bx = bx || e
		} if (bx) {
			if (bx !== bB[0]) {
				bB.unshift(bx)
			}
			return bz[bx]
		}
	}
	function G(bH, bz) {
		if (bH.dataFilter) {
			bz = bH.dataFilter(bz, bH.dataType)
		}
		var bD = bH.dataTypes,
			bG = {}, bA, bE, bw = bD.length,
			bB, bC = bD[0],
			bx, by, bF, bv, e;
		for (bA = 1; bA < bw; bA++) {
			if (bA === 1) {
				for (bE in bH.converters) {
					if (typeof bE === "string") {
						bG[bE.toLowerCase()] = bH.converters[bE]
					}
				}
			}
			bx = bC;
			bC = bD[bA];
			if (bC === "*") {
				bC = bx
			} else {
				if (bx !== "*" && bx !== bC) {
					by = bx + " " + bC;
					bF = bG[by] || bG["* " + bC];
					if (!bF) {
						e = L;
						for (bv in bG) {
							bB = bv.split(" ");
							if (bB[0] === bx || bB[0] === "*") {
								e = bG[bB[1] + " " + bC];
								if (e) {
									bv = bG[bv];
									if (bv === true) {
										bF = e
									} else {
										if (e === true) {
											bF = bv
										}
									}
									break
								}
							}
						}
					}
					if (!(bF || e)) {
						b.error("No conversion from " + by.replace(" ", " to "))
					}
					if (bF !== true) {
						bz = bF ? bF(bz) : e(bv(bz))
					}
				}
			}
		}
		return bz
	}
	var aC = b.now(),
		u = /(\=)\?(&|$)|\?\?/i;
	b.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			return b.expando + "_" + (aC++)
		}
	});
	b.ajaxPrefilter("json jsonp", function (bD, bA, bC) {
		var bx = bD.contentType === "application/x-www-form-urlencoded" && (typeof bD.data === "string");
		if (bD.dataTypes[0] === "jsonp" || bD.jsonp !== false && (u.test(bD.url) || bx && u.test(bD.data))) {
			var bB, bw = bD.jsonpCallback = b.isFunction(bD.jsonpCallback) ? bD.jsonpCallback() : bD.jsonpCallback,
				bz = bb[bw],
				e = bD.url,
				by = bD.data,
				bv = "$1" + bw + "$2";
			if (bD.jsonp !== false) {
				e = e.replace(u, bv);
				if (bD.url === e) {
					if (bx) {
						by = by.replace(u, bv)
					}
					if (bD.data === by) {
						e += (/\?/.test(e) ? "&" : "?") + bD.jsonp + "=" + bw
					}
				}
			}
			bD.url = e;
			bD.data = by;
			bb[bw] = function (bE) {
				bB = [bE]
			};
			bC.always(function () {
				bb[bw] = bz;
				if (bB && b.isFunction(bz)) {
					bb[bw](bB[0])
				}
			});
			bD.converters["script json"] = function () {
				if (!bB) {
					b.error(bw + " was not called")
				}
				return bB[0]
			};
			bD.dataTypes[0] = "json";
			return "script"
		}
	});
	b.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /javascript|ecmascript/
		},
		converters: {
			"text script": function (e) {
				b.globalEval(e);
				return e
			}
		}
	});
	b.ajaxPrefilter("script", function (e) {
		if (e.cache === L) {
			e.cache = false
		}
		if (e.crossDomain) {
			e.type = "GET";
			e.global = false
		}
	});
	b.ajaxTransport("script", function (bw) {
		if (bw.crossDomain) {
			var e, bv = av.head || av.getElementsByTagName("head")[0] || av.documentElement;
			return {
				send: function (bx, by) {
					e = av.createElement("script");
					e.async = "async";
					if (bw.scriptCharset) {
						e.charset = bw.scriptCharset
					}
					e.src = bw.url;
					e.onload = e.onreadystatechange = function (bA, bz) {
						if (bz || !e.readyState || /loaded|complete/.test(e.readyState)) {
							e.onload = e.onreadystatechange = null;
							if (bv && e.parentNode) {
								bv.removeChild(e)
							}
							e = L;
							if (!bz) {
								by(200, "success")
							}
						}
					};
					bv.insertBefore(e, bv.firstChild)
				},
				abort: function () {
					if (e) {
						e.onload(0, 1)
					}
				}
			}
		}
	});
	var B = bb.ActiveXObject ? function () {
			for (var e in N) {
				N[e](0, 1)
			}
		} : false,
		y = 0,
		N;

	function aL() {
		try {
			return new bb.XMLHttpRequest()
		} catch (bv) {}
	}
	function aj() {
		try {
			return new bb.ActiveXObject("Microsoft.XMLHTTP")
		} catch (bv) {}
	}
	b.ajaxSettings.xhr = bb.ActiveXObject ? function () {
		return !this.isLocal && aL() || aj()
	} : aL;
	(function (e) {
		b.extend(b.support, {
			ajax: !! e,
			cors: !! e && ("withCredentials" in e)
		})
	})(b.ajaxSettings.xhr());
	if (b.support.ajax) {
		b.ajaxTransport(function (e) {
			if (!e.crossDomain || b.support.cors) {
				var bv;
				return {
					send: function (bB, bw) {
						var bA = e.xhr(),
							bz, by;
						if (e.username) {
							bA.open(e.type, e.url, e.async, e.username, e.password)
						} else {
							bA.open(e.type, e.url, e.async)
						} if (e.xhrFields) {
							for (by in e.xhrFields) {
								bA[by] = e.xhrFields[by]
							}
						}
						if (e.mimeType && bA.overrideMimeType) {
							bA.overrideMimeType(e.mimeType)
						}
						if (!e.crossDomain && !bB["X-Requested-With"]) {
							bB["X-Requested-With"] = "XMLHttpRequest"
						}
						try {
							for (by in bB) {
								bA.setRequestHeader(by, bB[by])
							}
						} catch (bx) {}
						bA.send((e.hasContent && e.data) || null);
						bv = function (bK, bE) {
							var bF, bD, bC, bI, bH;
							try {
								if (bv && (bE || bA.readyState === 4)) {
									bv = L;
									if (bz) {
										bA.onreadystatechange = b.noop;
										if (B) {
											delete N[bz]
										}
									}
									if (bE) {
										if (bA.readyState !== 4) {
											bA.abort()
										}
									} else {
										bF = bA.status;
										bC = bA.getAllResponseHeaders();
										bI = {};
										bH = bA.responseXML;
										if (bH && bH.documentElement) {
											bI.xml = bH
										}
										bI.text = bA.responseText;
										try {
											bD = bA.statusText
										} catch (bJ) {
											bD = ""
										}
										if (!bF && e.isLocal && !e.crossDomain) {
											bF = bI.text ? 200 : 404
										} else {
											if (bF === 1223) {
												bF = 204
											}
										}
									}
								}
							} catch (bG) {
								if (!bE) {
									bw(-1, bG)
								}
							}
							if (bI) {
								bw(bF, bD, bI, bC)
							}
						};
						if (!e.async || bA.readyState === 4) {
							bv()
						} else {
							bz = ++y;
							if (B) {
								if (!N) {
									N = {};
									b(bb).unload(B)
								}
								N[bz] = bv
							}
							bA.onreadystatechange = bv
						}
					},
					abort: function () {
						if (bv) {
							bv(0, 1)
						}
					}
				}
			}
		})
	}
	var Q = {}, a8, m, aB = /^(?:toggle|show|hide)$/,
		aT = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
		a3, aH = [
			["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
			["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
			["opacity"]
		],
		a4;
	b.fn.extend({
		show: function (bx, bA, bz) {
			var bw, by;
			if (bx || bx === 0) {
				return this.animate(a0("show", 3), bx, bA, bz)
			} else {
				for (var bv = 0, e = this.length; bv < e; bv++) {
					bw = this[bv];
					if (bw.style) {
						by = bw.style.display;
						if (!b._data(bw, "olddisplay") && by === "none") {
							by = bw.style.display = ""
						}
						if (by === "" && b.css(bw, "display") === "none") {
							b._data(bw, "olddisplay", x(bw.nodeName))
						}
					}
				}
				for (bv = 0; bv < e; bv++) {
					bw = this[bv];
					if (bw.style) {
						by = bw.style.display;
						if (by === "" || by === "none") {
							bw.style.display = b._data(bw, "olddisplay") || ""
						}
					}
				}
				return this
			}
		},
		hide: function (bx, bA, bz) {
			if (bx || bx === 0) {
				return this.animate(a0("hide", 3), bx, bA, bz)
			} else {
				var bw, by, bv = 0,
					e = this.length;
				for (; bv < e; bv++) {
					bw = this[bv];
					if (bw.style) {
						by = b.css(bw, "display");
						if (by !== "none" && !b._data(bw, "olddisplay")) {
							b._data(bw, "olddisplay", by)
						}
					}
				}
				for (bv = 0; bv < e; bv++) {
					if (this[bv].style) {
						this[bv].style.display = "none"
					}
				}
				return this
			}
		},
		_toggle: b.fn.toggle,
		toggle: function (bw, bv, bx) {
			var e = typeof bw === "boolean";
			if (b.isFunction(bw) && b.isFunction(bv)) {
				this._toggle.apply(this, arguments)
			} else {
				if (bw == null || e) {
					this.each(function () {
						var by = e ? bw : b(this).is(":hidden");
						b(this)[by ? "show" : "hide"]()
					})
				} else {
					this.animate(a0("toggle", 3), bw, bv, bx)
				}
			}
			return this
		},
		fadeTo: function (e, bx, bw, bv) {
			return this.filter(":hidden").css("opacity", 0).show().end().animate({
				opacity: bx
			}, e, bw, bv)
		},
		animate: function (bz, bw, by, bx) {
			var e = b.speed(bw, by, bx);
			if (b.isEmptyObject(bz)) {
				return this.each(e.complete, [false])
			}
			bz = b.extend({}, bz);

			function bv() {
				if (e.queue === false) {
					b._mark(this)
				}
				var bE = b.extend({}, e),
					bK = this.nodeType === 1,
					bI = bK && b(this).is(":hidden"),
					bB, bF, bD, bJ, bH, bC, bG, bL, bA;
				bE.animatedProperties = {};
				for (bD in bz) {
					bB = b.camelCase(bD);
					if (bD !== bB) {
						bz[bB] = bz[bD];
						delete bz[bD]
					}
					bF = bz[bB];
					if (b.isArray(bF)) {
						bE.animatedProperties[bB] = bF[1];
						bF = bz[bB] = bF[0]
					} else {
						bE.animatedProperties[bB] = bE.specialEasing && bE.specialEasing[bB] || bE.easing || "swing"
					} if (bF === "hide" && bI || bF === "show" && !bI) {
						return bE.complete.call(this)
					}
					if (bK && (bB === "height" || bB === "width")) {
						bE.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
						if (b.css(this, "display") === "inline" && b.css(this, "float") === "none") {
							if (!b.support.inlineBlockNeedsLayout || x(this.nodeName) === "inline") {
								this.style.display = "inline-block"
							} else {
								this.style.zoom = 1
							}
						}
					}
				}
				if (bE.overflow != null) {
					this.style.overflow = "hidden"
				}
				for (bD in bz) {
					bJ = new b.fx(this, bE, bD);
					bF = bz[bD];
					if (aB.test(bF)) {
						bA = b._data(this, "toggle" + bD) || (bF === "toggle" ? bI ? "show" : "hide" : 0);
						if (bA) {
							b._data(this, "toggle" + bD, bA === "show" ? "hide" : "show");
							bJ[bA]()
						} else {
							bJ[bF]()
						}
					} else {
						bH = aT.exec(bF);
						bC = bJ.cur();
						if (bH) {
							bG = parseFloat(bH[2]);
							bL = bH[3] || (b.cssNumber[bD] ? "" : "px");
							if (bL !== "px") {
								b.style(this, bD, (bG || 1) + bL);
								bC = ((bG || 1) / bJ.cur()) * bC;
								b.style(this, bD, bC + bL)
							}
							if (bH[1]) {
								bG = ((bH[1] === "-=" ? -1 : 1) * bG) + bC
							}
							bJ.custom(bC, bG, bL)
						} else {
							bJ.custom(bC, bF, "")
						}
					}
				}
				return true
			}
			return e.queue === false ? this.each(bv) : this.queue(e.queue, bv)
		},
		stop: function (bw, bv, e) {
			if (typeof bw !== "string") {
				e = bv;
				bv = bw;
				bw = L
			}
			if (bv && bw !== false) {
				this.queue(bw || "fx", [])
			}
			return this.each(function () {
				var bx, by = false,
					bA = b.timers,
					bz = b._data(this);
				if (!e) {
					b._unmark(true, this)
				}
				function bB(bE, bF, bD) {
					var bC = bF[bD];
					b.removeData(bE, bD, true);
					bC.stop(e)
				}
				if (bw == null) {
					for (bx in bz) {
						if (bz[bx] && bz[bx].stop && bx.indexOf(".run") === bx.length - 4) {
							bB(this, bz, bx)
						}
					}
				} else {
					if (bz[bx = bw + ".run"] && bz[bx].stop) {
						bB(this, bz, bx)
					}
				}
				for (bx = bA.length; bx--;) {
					if (bA[bx].elem === this && (bw == null || bA[bx].queue === bw)) {
						if (e) {
							bA[bx](true)
						} else {
							bA[bx].saveState()
						}
						by = true;
						bA.splice(bx, 1)
					}
				}
				if (!(e && by)) {
					b.dequeue(this, bw)
				}
			})
		}
	});

	function bh() {
		setTimeout(at, 0);
		return (a4 = b.now())
	}
	function at() {
		a4 = L
	}
	function a0(bv, e) {
		var bw = {};
		b.each(aH.concat.apply([], aH.slice(0, e)), function () {
			bw[this] = bv
		});
		return bw
	}
	b.each({
		slideDown: a0("show", 1),
		slideUp: a0("hide", 1),
		slideToggle: a0("toggle", 1),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function (e, bv) {
		b.fn[e] = function (bw, by, bx) {
			return this.animate(bv, bw, by, bx)
		}
	});
	b.extend({
		speed: function (bw, bx, bv) {
			var e = bw && typeof bw === "object" ? b.extend({}, bw) : {
				complete: bv || !bv && bx || b.isFunction(bw) && bw,
				duration: bw,
				easing: bv && bx || bx && !b.isFunction(bx) && bx
			};
			e.duration = b.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in b.fx.speeds ? b.fx.speeds[e.duration] : b.fx.speeds._default;
			if (e.queue == null || e.queue === true) {
				e.queue = "fx"
			}
			e.old = e.complete;
			e.complete = function (by) {
				if (b.isFunction(e.old)) {
					e.old.call(this)
				}
				if (e.queue) {
					b.dequeue(this, e.queue)
				} else {
					if (by !== false) {
						b._unmark(this)
					}
				}
			};
			return e
		},
		easing: {
			linear: function (bw, bx, e, bv) {
				return e + bv * bw
			},
			swing: function (bw, bx, e, bv) {
				return ((-Math.cos(bw * Math.PI) / 2) + 0.5) * bv + e
			}
		},
		timers: [],
		fx: function (bv, e, bw) {
			this.options = e;
			this.elem = bv;
			this.prop = bw;
			e.orig = e.orig || {}
		}
	});
	b.fx.prototype = {
		update: function () {
			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this)
			}(b.fx.step[this.prop] || b.fx.step._default)(this)
		},
		cur: function () {
			if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
				return this.elem[this.prop]
			}
			var e, bv = b.css(this.elem, this.prop);
			return isNaN(e = parseFloat(bv)) ? !bv || bv === "auto" ? 0 : bv : e
		},
		custom: function (bz, by, bx) {
			var e = this,
				bw = b.fx;
			this.startTime = a4 || bh();
			this.end = by;
			this.now = this.start = bz;
			this.pos = this.state = 0;
			this.unit = bx || this.unit || (b.cssNumber[this.prop] ? "" : "px");

			function bv(bA) {
				return e.step(bA)
			}
			bv.queue = this.options.queue;
			bv.elem = this.elem;
			bv.saveState = function () {
				if (e.options.hide && b._data(e.elem, "fxshow" + e.prop) === L) {
					b._data(e.elem, "fxshow" + e.prop, e.start)
				}
			};
			if (bv() && b.timers.push(bv) && !a3) {
				a3 = setInterval(bw.tick, bw.interval)
			}
		},
		show: function () {
			var e = b._data(this.elem, "fxshow" + this.prop);
			this.options.orig[this.prop] = e || b.style(this.elem, this.prop);
			this.options.show = true;
			if (e !== L) {
				this.custom(this.cur(), e)
			} else {
				this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur())
			}
			b(this.elem).show()
		},
		hide: function () {
			this.options.orig[this.prop] = b._data(this.elem, "fxshow" + this.prop) || b.style(this.elem, this.prop);
			this.options.hide = true;
			this.custom(this.cur(), 0)
		},
		step: function (by) {
			var bA, bB, bv, bx = a4 || bh(),
				e = true,
				bz = this.elem,
				bw = this.options;
			if (by || bx >= bw.duration + this.startTime) {
				this.now = this.end;
				this.pos = this.state = 1;
				this.update();
				bw.animatedProperties[this.prop] = true;
				for (bA in bw.animatedProperties) {
					if (bw.animatedProperties[bA] !== true) {
						e = false
					}
				}
				if (e) {
					if (bw.overflow != null && !b.support.shrinkWrapBlocks) {
						b.each(["", "X", "Y"], function (bC, bD) {
							bz.style["overflow" + bD] = bw.overflow[bC]
						})
					}
					if (bw.hide) {
						b(bz).hide()
					}
					if (bw.hide || bw.show) {
						for (bA in bw.animatedProperties) {
							b.style(bz, bA, bw.orig[bA]);
							b.removeData(bz, "fxshow" + bA, true);
							b.removeData(bz, "toggle" + bA, true)
						}
					}
					bv = bw.complete;
					if (bv) {
						bw.complete = false;
						bv.call(bz)
					}
				}
				return false
			} else {
				if (bw.duration == Infinity) {
					this.now = bx
				} else {
					bB = bx - this.startTime;
					this.state = bB / bw.duration;
					this.pos = b.easing[bw.animatedProperties[this.prop]](this.state, bB, 0, 1, bw.duration);
					this.now = this.start + ((this.end - this.start) * this.pos)
				}
				this.update()
			}
			return true
		}
	};
	b.extend(b.fx, {
		tick: function () {
			var bw, bv = b.timers,
				e = 0;
			for (; e < bv.length; e++) {
				bw = bv[e];
				if (!bw() && bv[e] === bw) {
					bv.splice(e--, 1)
				}
			}
			if (!bv.length) {
				b.fx.stop()
			}
		},
		interval: 13,
		stop: function () {
			clearInterval(a3);
			a3 = null
		},
		speeds: {
			slow: 900,
			fast: 200,
			_default: 500
		},
		step: {
			opacity: function (e) {
				b.style(e.elem, "opacity", e.now)
			},
			_default: function (e) {
				if (e.elem.style && e.elem.style[e.prop] != null) {
					e.elem.style[e.prop] = e.now + e.unit
				} else {
					e.elem[e.prop] = e.now
				}
			}
		}
	});
	b.each(["width", "height"], function (e, bv) {
		b.fx.step[bv] = function (bw) {
			b.style(bw.elem, bv, Math.max(0, bw.now) + bw.unit)
		}
	});
	if (b.expr && b.expr.filters) {
		b.expr.filters.animated = function (e) {
			return b.grep(b.timers, function (bv) {
				return e === bv.elem
			}).length
		}
	}
	function x(bx) {
		if (!Q[bx]) {
			var e = av.body,
				bv = b("<" + bx + ">").appendTo(e),
				bw = bv.css("display");
			bv.remove();
			if (bw === "none" || bw === "") {
				if (!a8) {
					a8 = av.createElement("iframe");
					a8.frameBorder = a8.width = a8.height = 0
				}
				e.appendChild(a8);
				if (!m || !a8.createElement) {
					m = (a8.contentWindow || a8.contentDocument).document;
					m.write((av.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>");
					m.close()
				}
				bv = m.createElement(bx);
				m.body.appendChild(bv);
				bw = b.css(bv, "display");
				e.removeChild(a8)
			}
			Q[bx] = bw
		}
		return Q[bx]
	}
	var V = /^t(?:able|d|h)$/i,
		ad = /^(?:body|html)$/i;
	if ("getBoundingClientRect" in av.documentElement) {
		b.fn.offset = function (bI) {
			var by = this[0],
				bB;
			if (bI) {
				return this.each(function (e) {
					b.offset.setOffset(this, bI, e)
				})
			}
			if (!by || !by.ownerDocument) {
				return null
			}
			if (by === by.ownerDocument.body) {
				return b.offset.bodyOffset(by)
			}
			try {
				bB = by.getBoundingClientRect()
			} catch (bF) {}
			var bH = by.ownerDocument,
				bw = bH.documentElement;
			if (!bB || !b.contains(bw, by)) {
				return bB ? {
					top: bB.top,
					left: bB.left
				} : {
					top: 0,
					left: 0
				}
			}
			var bC = bH.body,
				bD = aK(bH),
				bA = bw.clientTop || bC.clientTop || 0,
				bE = bw.clientLeft || bC.clientLeft || 0,
				bv = bD.pageYOffset || b.support.boxModel && bw.scrollTop || bC.scrollTop,
				bz = bD.pageXOffset || b.support.boxModel && bw.scrollLeft || bC.scrollLeft,
				bG = bB.top + bv - bA,
				bx = bB.left + bz - bE;
			return {
				top: bG,
				left: bx
			}
		}
	} else {
		b.fn.offset = function (bF) {
			var bz = this[0];
			if (bF) {
				return this.each(function (bG) {
					b.offset.setOffset(this, bF, bG)
				})
			}
			if (!bz || !bz.ownerDocument) {
				return null
			}
			if (bz === bz.ownerDocument.body) {
				return b.offset.bodyOffset(bz)
			}
			var bC, bw = bz.offsetParent,
				bv = bz,
				bE = bz.ownerDocument,
				bx = bE.documentElement,
				bA = bE.body,
				bB = bE.defaultView,
				e = bB ? bB.getComputedStyle(bz, null) : bz.currentStyle,
				bD = bz.offsetTop,
				by = bz.offsetLeft;
			while ((bz = bz.parentNode) && bz !== bA && bz !== bx) {
				if (b.support.fixedPosition && e.position === "fixed") {
					break
				}
				bC = bB ? bB.getComputedStyle(bz, null) : bz.currentStyle;
				bD -= bz.scrollTop;
				by -= bz.scrollLeft;
				if (bz === bw) {
					bD += bz.offsetTop;
					by += bz.offsetLeft;
					if (b.support.doesNotAddBorder && !(b.support.doesAddBorderForTableAndCells && V.test(bz.nodeName))) {
						bD += parseFloat(bC.borderTopWidth) || 0;
						by += parseFloat(bC.borderLeftWidth) || 0
					}
					bv = bw;
					bw = bz.offsetParent
				}
				if (b.support.subtractsBorderForOverflowNotVisible && bC.overflow !== "visible") {
					bD += parseFloat(bC.borderTopWidth) || 0;
					by += parseFloat(bC.borderLeftWidth) || 0
				}
				e = bC
			}
			if (e.position === "relative" || e.position === "static") {
				bD += bA.offsetTop;
				by += bA.offsetLeft
			}
			if (b.support.fixedPosition && e.position === "fixed") {
				bD += Math.max(bx.scrollTop, bA.scrollTop);
				by += Math.max(bx.scrollLeft, bA.scrollLeft)
			}
			return {
				top: bD,
				left: by
			}
		}
	}
	b.offset = {
		bodyOffset: function (e) {
			var bw = e.offsetTop,
				bv = e.offsetLeft;
			if (b.support.doesNotIncludeMarginInBodyOffset) {
				bw += parseFloat(b.css(e, "marginTop")) || 0;
				bv += parseFloat(b.css(e, "marginLeft")) || 0
			}
			return {
				top: bw,
				left: bv
			}
		},
		setOffset: function (bx, bG, bA) {
			var bB = b.css(bx, "position");
			if (bB === "static") {
				bx.style.position = "relative"
			}
			var bz = b(bx),
				bv = bz.offset(),
				e = b.css(bx, "top"),
				bE = b.css(bx, "left"),
				bF = (bB === "absolute" || bB === "fixed") && b.inArray("auto", [e, bE]) > -1,
				bD = {}, bC = {}, bw, by;
			if (bF) {
				bC = bz.position();
				bw = bC.top;
				by = bC.left
			} else {
				bw = parseFloat(e) || 0;
				by = parseFloat(bE) || 0
			} if (b.isFunction(bG)) {
				bG = bG.call(bx, bA, bv)
			}
			if (bG.top != null) {
				bD.top = (bG.top - bv.top) + bw
			}
			if (bG.left != null) {
				bD.left = (bG.left - bv.left) + by
			}
			if ("using" in bG) {
				bG.using.call(bx, bD)
			} else {
				bz.css(bD)
			}
		}
	};
	b.fn.extend({
		position: function () {
			if (!this[0]) {
				return null
			}
			var bw = this[0],
				bv = this.offsetParent(),
				bx = this.offset(),
				e = ad.test(bv[0].nodeName) ? {
					top: 0,
					left: 0
				} : bv.offset();
			bx.top -= parseFloat(b.css(bw, "marginTop")) || 0;
			bx.left -= parseFloat(b.css(bw, "marginLeft")) || 0;
			e.top += parseFloat(b.css(bv[0], "borderTopWidth")) || 0;
			e.left += parseFloat(b.css(bv[0], "borderLeftWidth")) || 0;
			return {
				top: bx.top - e.top,
				left: bx.left - e.left
			}
		},
		offsetParent: function () {
			return this.map(function () {
				var e = this.offsetParent || av.body;
				while (e && (!ad.test(e.nodeName) && b.css(e, "position") === "static")) {
					e = e.offsetParent
				}
				return e
			})
		}
	});
	b.each(["Left", "Top"], function (bv, e) {
		var bw = "scroll" + e;
		b.fn[bw] = function (bz) {
			var bx, by;
			if (bz === L) {
				bx = this[0];
				if (!bx) {
					return null
				}
				by = aK(bx);
				return by ? ("pageXOffset" in by) ? by[bv ? "pageYOffset" : "pageXOffset"] : b.support.boxModel && by.document.documentElement[bw] || by.document.body[bw] : bx[bw]
			}
			return this.each(function () {
				by = aK(this);
				if (by) {
					by.scrollTo(!bv ? bz : b(by).scrollLeft(), bv ? bz : b(by).scrollTop())
				} else {
					this[bw] = bz
				}
			})
		}
	});

	function aK(e) {
		return b.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
	}
	b.each(["Height", "Width"], function (bv, e) {
		var bw = e.toLowerCase();
		b.fn["inner" + e] = function () {
			var bx = this[0];
			return bx ? bx.style ? parseFloat(b.css(bx, bw, "padding")) : this[bw]() : null
		};
		b.fn["outer" + e] = function (by) {
			var bx = this[0];
			return bx ? bx.style ? parseFloat(b.css(bx, bw, by ? "margin" : "border")) : this[bw]() : null
		};
		b.fn[bw] = function (bz) {
			var bA = this[0];
			if (!bA) {
				return bz == null ? null : this
			}
			if (b.isFunction(bz)) {
				return this.each(function (bE) {
					var bD = b(this);
					bD[bw](bz.call(this, bE, bD[bw]()))
				})
			}
			if (b.isWindow(bA)) {
				var bB = bA.document.documentElement["client" + e],
					bx = bA.document.body;
				return bA.document.compatMode === "CSS1Compat" && bB || bx && bx["client" + e] || bB
			} else {
				if (bA.nodeType === 9) {
					return Math.max(bA.documentElement["client" + e], bA.body["scroll" + e], bA.documentElement["scroll" + e], bA.body["offset" + e], bA.documentElement["offset" + e])
				} else {
					if (bz === L) {
						var bC = b.css(bA, bw),
							by = parseFloat(bC);
						return b.isNumeric(by) ? by : bC
					} else {
						return this.css(bw, typeof bz === "string" ? bz : bz + "px")
					}
				}
			}
		}
	});
	bb.jQuery = bb.$ = b;
	if (typeof define === "function" && define.amd && define.amd.jQuery) {
		define("jquery", [], function () {
			return b
		})
	}
})(window);
(function (d) {
	var b = d.event,
		a, c;
	a = b.special.debouncedresize = {
		setup: function () {
			d(this).on("resize", a.handler)
		},
		teardown: function () {
			d(this).off("resize", a.handler)
		},
		handler: function (i, e) {
			var h = this,
				g = arguments,
				f = function () {
					i.type = "debouncedresize";
					b.dispatch.apply(h, g)
				};
			if (c) {
				clearTimeout(c)
			}
			e ? f() : c = setTimeout(f, a.threshold)
		},
		threshold: 150
	}
})(jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function (e, f, a, h, g) {
		return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
	},
	easeInQuad: function (e, f, a, h, g) {
		return h * (f /= g) * f + a
	},
	easeOutQuad: function (e, f, a, h, g) {
		return -h * (f /= g) * (f - 2) + a
	},
	easeInOutQuad: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f + a
		}
		return -h / 2 * ((--f) * (f - 2) - 1) + a
	},
	easeInCubic: function (e, f, a, h, g) {
		return h * (f /= g) * f * f + a
	},
	easeOutCubic: function (e, f, a, h, g) {
		return h * ((f = f / g - 1) * f * f + 1) + a
	},
	easeInOutCubic: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f + a
		}
		return h / 2 * ((f -= 2) * f * f + 2) + a
	},
	easeInQuart: function (e, f, a, h, g) {
		return h * (f /= g) * f * f * f + a
	},
	easeOutQuart: function (e, f, a, h, g) {
		return -h * ((f = f / g - 1) * f * f * f - 1) + a
	},
	easeInOutQuart: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f * f + a
		}
		return -h / 2 * ((f -= 2) * f * f * f - 2) + a
	},
	easeInQuint: function (e, f, a, h, g) {
		return h * (f /= g) * f * f * f * f + a
	},
	easeOutQuint: function (e, f, a, h, g) {
		return h * ((f = f / g - 1) * f * f * f * f + 1) + a
	},
	easeInOutQuint: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f * f * f + a
		}
		return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
	},
	easeInSine: function (e, f, a, h, g) {
		return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
	},
	easeOutSine: function (e, f, a, h, g) {
		return h * Math.sin(f / g * (Math.PI / 2)) + a
	},
	easeInOutSine: function (e, f, a, h, g) {
		return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
	},
	easeInExpo: function (e, f, a, h, g) {
		return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
	},
	easeOutExpo: function (e, f, a, h, g) {
		return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
	},
	easeInOutExpo: function (e, f, a, h, g) {
		if (f == 0) {
			return a
		}
		if (f == g) {
			return a + h
		}
		if ((f /= g / 2) < 1) {
			return h / 2 * Math.pow(2, 10 * (f - 1)) + a
		}
		return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
	},
	easeInCirc: function (e, f, a, h, g) {
		return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
	},
	easeOutCirc: function (e, f, a, h, g) {
		return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
	},
	easeInOutCirc: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
		}
		return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
	},
	easeInElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e
		}
		if ((h /= k) == 1) {
			return e + l
		}
		if (!j) {
			j = k * 0.3
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g)
		}
		return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
	},
	easeOutElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e
		}
		if ((h /= k) == 1) {
			return e + l
		}
		if (!j) {
			j = k * 0.3
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g)
		}
		return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
	},
	easeInOutElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e
		}
		if ((h /= k / 2) == 2) {
			return e + l
		}
		if (!j) {
			j = k * (0.3 * 1.5)
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g)
		} if (h < 1) {
			return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
		}
		return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
	},
	easeInBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158
		}
		return i * (f /= h) * f * ((g + 1) * f - g) + a
	},
	easeOutBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158
		}
		return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
	},
	easeInOutBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158
		}
		if ((f /= h / 2) < 1) {
			return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
		}
		return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
	},
	easeInBounce: function (e, f, a, h, g) {
		return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
	},
	easeOutBounce: function (e, f, a, h, g) {
		if ((f /= g) < (1 / 2.75)) {
			return h * (7.5625 * f * f) + a
		} else {
			if (f < (2 / 2.75)) {
				return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
			} else {
				if (f < (2.5 / 2.75)) {
					return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
				} else {
					return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
				}
			}
		}
	},
	easeInOutBounce: function (e, f, a, h, g) {
		if (f < g / 2) {
			return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
		}
		return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
	}
});
(function (a) {
	a.flexslider = function (d, n) {
		var b = a(d),
			l = a.extend({}, a.flexslider.defaults, n),
			g = l.namespace,
			i = ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch,
			c = (i) ? "touchend" : "click",
			h = l.direction === "vertical",
			j = l.reverse,
			m = (l.itemWidth > 0),
			f = l.animation === "fade",
			k = l.asNavFor !== "",
			e = {};
		a.data(d, "flexslider", b);
		e = {
			init: function () {
				b.animating = false;
				b.currentSlide = l.startAt;
				b.animatingTo = b.currentSlide;
				b.atEnd = (b.currentSlide === 0 || b.currentSlide === b.last);
				b.containerSelector = l.selector.substr(0, l.selector.search(" "));
				b.slides = a(l.selector, b);
				b.container = a(b.containerSelector, b);
				b.count = b.slides.length;
				b.syncExists = a(l.sync).length > 0;
				if (l.animation === "slide") {
					l.animation = "swing"
				}
				b.prop = (h) ? "top" : "marginLeft";
				b.args = {};
				b.manualPause = false;
				b.transitions = !l.video && !f && l.useCSS && (function () {
					var q = document.createElement("div"),
						p = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
					for (var o in p) {
						if (q.style[p[o]] !== undefined) {
							b.pfx = p[o].replace("Perspective", "").toLowerCase();
							b.prop = "-" + b.pfx + "-transform";
							return true
						}
					}
					return false
				}());
				if (l.controlsContainer !== "") {
					b.controlsContainer = a(l.controlsContainer).length > 0 && a(l.controlsContainer)
				}
				if (l.manualControls !== "") {
					b.manualControls = a(l.manualControls).length > 0 && a(l.manualControls)
				}
				if (l.randomize) {
					b.slides.sort(function () {
						return (Math.round(Math.random()) - 0.5)
					});
					b.container.empty().append(b.slides)
				}
				b.doMath();
				if (k) {
					e.asNav.setup()
				}
				b.setup("init");
				if (l.controlNav) {
					e.controlNav.setup()
				}
				if (l.directionNav) {
					e.directionNav.setup()
				}
				if (l.keyboard && (a(b.containerSelector).length === 1 || l.multipleKeyboard)) {
					a(document).bind("keyup", function (p) {
						var o = p.keyCode;
						if (!b.animating && (o === 39 || o === 37)) {
							var q = (o === 39) ? b.getTarget("next") : (o === 37) ? b.getTarget("prev") : false;
							b.flexAnimate(q, l.pauseOnAction)
						}
					})
				}
				if (l.mousewheel) {
					b.bind("mousewheel", function (q, s, p, o) {
						q.preventDefault();
						var r = (s < 0) ? b.getTarget("next") : b.getTarget("prev");
						b.flexAnimate(r, l.pauseOnAction)
					})
				}
				if (l.pausePlay) {
					e.pausePlay.setup()
				}
				if (l.slideshow) {
					if (l.pauseOnHover) {
						b.hover(function () {
							b.pause()
						}, function () {
							if (!b.manualPause) {
								b.play()
							}
						})
					}(l.initDelay > 0) ? setTimeout(b.play, l.initDelay) : b.play()
				}
				if (i && l.touch) {
					e.touch()
				}
				if (!f || (f && l.smoothHeight)) {
					a(window).bind("resize focus", e.resize)
				}
				setTimeout(function () {
					l.start(b)
				}, 200)
			},
			asNav: {
				setup: function () {
					b.asNav = true;
					b.animatingTo = Math.floor(b.currentSlide / b.move);
					b.currentItem = b.currentSlide;
					b.slides.removeClass(g + "active-slide").eq(b.currentItem).addClass(g + "active-slide");
					b.slides.click(function (q) {
						q.preventDefault();
						var p = a(this),
							o = p.index();
						if (!a(l.asNavFor).data("flexslider").animating && !p.hasClass("active")) {
							b.direction = (b.currentItem < o) ? "next" : "prev";
							b.flexAnimate(o, l.pauseOnAction, false, true, true)
						}
					})
				}
			},
			controlNav: {
				setup: function () {
					if (!b.manualControls) {
						e.controlNav.setupPaging()
					} else {
						e.controlNav.setupManual()
					}
				},
				setupPaging: function () {
					var q = (l.controlNav === "thumbnails") ? "control-thumbs" : "control-paging",
						o = 1,
						r;
					b.controlNavScaffold = a('<ol class="' + g + "control-nav " + g + q + '"></ol>');
					if (b.pagingCount > 1) {
						for (var p = 0; p < b.pagingCount; p++) {
							r = (l.controlNav === "thumbnails") ? '<img src="' + b.slides.eq(p).attr("data-thumb") + '"/>' : "<a>" + o + "</a>";
							b.controlNavScaffold.append("<li>" + r + "</li>");
							o++
						}
					}(b.controlsContainer) ? a(b.controlsContainer).append(b.controlNavScaffold) : b.append(b.controlNavScaffold);
					e.controlNav.set();
					e.controlNav.active();
					b.controlNavScaffold.delegate("a, img", c, function (s) {
						s.preventDefault();
						var u = a(this),
							t = b.controlNav.index(u);
						if (!u.hasClass(g + "active")) {
							b.direction = (t > b.currentSlide) ? "next" : "prev";
							b.flexAnimate(t, l.pauseOnAction)
						}
					});
					if (i) {
						b.controlNavScaffold.delegate("a", "click touchstart", function (s) {
							s.preventDefault()
						})
					}
				},
				setupManual: function () {
					b.controlNav = b.manualControls;
					e.controlNav.active();
					b.controlNav.live(c, function (o) {
						o.preventDefault();
						var q = a(this),
							p = b.controlNav.index(q);
						if (!q.hasClass(g + "active")) {
							(p > b.currentSlide) ? b.direction = "next" : b.direction = "prev";
							b.flexAnimate(p, l.pauseOnAction)
						}
					});
					if (i) {
						b.controlNav.live("click touchstart", function (o) {
							o.preventDefault()
						})
					}
				},
				set: function () {
					var o = (l.controlNav === "thumbnails") ? "img" : "a";
					b.controlNav = a("." + g + "control-nav li " + o, (b.controlsContainer) ? b.controlsContainer : b)
				},
				active: function () {
					b.controlNav.removeClass(g + "active").eq(b.animatingTo).addClass(g + "active")
				},
				update: function (o, p) {
					if (b.pagingCount > 1 && o === "add") {
						b.controlNavScaffold.append(a("<li><a>" + b.count + "</a></li>"))
					} else {
						if (b.pagingCount === 1) {
							b.controlNavScaffold.find("li").remove()
						} else {
							b.controlNav.eq(p).closest("li").remove()
						}
					}
					e.controlNav.set();
					(b.pagingCount > 1 && b.pagingCount !== b.controlNav.length) ? b.update(p, o) : e.controlNav.active()
				}
			},
			directionNav: {
				setup: function () {
					var o = a('<ul class="' + g + 'direction-nav"><li><a class="' + g + 'prev" href="#">' + l.prevText + '</a></li><li><a class="' + g + 'next" href="#">' + l.nextText + "</a></li></ul>");
					if (b.controlsContainer) {
						a(b.controlsContainer).append(o);
						b.directionNav = a("." + g + "direction-nav li a", b.controlsContainer)
					} else {
						b.append(o);
						b.directionNav = a("." + g + "direction-nav li a", b)
					}
					e.directionNav.update();
					b.directionNav.bind(c, function (p) {
						p.preventDefault();
						var q = (a(this).hasClass(g + "next")) ? b.getTarget("next") : b.getTarget("prev");
						b.flexAnimate(q, l.pauseOnAction)
					});
					if (i) {
						b.directionNav.bind("click touchstart", function (p) {
							p.preventDefault()
						})
					}
				},
				update: function () {
					var o = g + "disabled";
					if (!l.animationLoop) {
						if (b.pagingCount === 1) {
							b.directionNav.addClass(o)
						} else {
							if (b.animatingTo === 0) {
								b.directionNav.removeClass(o).filter("." + g + "prev").addClass(o)
							} else {
								if (b.animatingTo === b.last) {
									b.directionNav.removeClass(o).filter("." + g + "next").addClass(o)
								} else {
									b.directionNav.removeClass(o)
								}
							}
						}
					}
				}
			},
			pausePlay: {
				setup: function () {
					var o = a('<div class="' + g + 'pauseplay"><a></a></div>');
					if (b.controlsContainer) {
						b.controlsContainer.append(o);
						b.pausePlay = a("." + g + "pauseplay a", b.controlsContainer)
					} else {
						b.append(o);
						b.pausePlay = a("." + g + "pauseplay a", b)
					}
					e.pausePlay.update((l.slideshow) ? g + "pause" : g + "play");
					b.pausePlay.bind(c, function (p) {
						p.preventDefault();
						if (a(this).hasClass(g + "pause")) {
							b.pause();
							b.manualPause = true
						} else {
							b.play();
							b.manualPause = false
						}
					});
					if (i) {
						b.pausePlay.bind("click touchstart", function (p) {
							p.preventDefault()
						})
					}
				},
				update: function (o) {
					(o === "play") ? b.pausePlay.removeClass(g + "pause").addClass(g + "play").text(l.playText) : b.pausePlay.removeClass(g + "play").addClass(g + "pause").text(l.pauseText)
				}
			},
			touch: function () {
				var t, r, p, u, x, v, s = false;
				d.addEventListener("touchstart", q, false);

				function q(y) {
					if (b.animating) {
						y.preventDefault()
					} else {
						if (y.touches.length === 1) {
							b.pause();
							u = (h) ? b.h : b.w;
							v = Number(new Date());
							p = (m && j && b.animatingTo === b.last) ? 0 : (m && j) ? b.limit - (((b.itemW + l.itemMargin) * b.move) * b.animatingTo) : (m && b.currentSlide === b.last) ? b.limit : (m) ? ((b.itemW + l.itemMargin) * b.move) * b.currentSlide : (j) ? (b.last - b.currentSlide + b.cloneOffset) * u : (b.currentSlide + b.cloneOffset) * u;
							t = (h) ? y.touches[0].pageY : y.touches[0].pageX;
							r = (h) ? y.touches[0].pageX : y.touches[0].pageY;
							d.addEventListener("touchmove", o, false);
							d.addEventListener("touchend", w, false)
						}
					}
				}
				function o(y) {
					x = (h) ? t - y.touches[0].pageY : t - y.touches[0].pageX;
					s = (h) ? (Math.abs(x) < Math.abs(y.touches[0].pageX - r)) : (Math.abs(x) < Math.abs(y.touches[0].pageY - r));
					if (!s || Number(new Date()) - v > 500) {
						y.preventDefault();
						if (!f && b.transitions) {
							if (!l.animationLoop) {
								x = x / ((b.currentSlide === 0 && x < 0 || b.currentSlide === b.last && x > 0) ? (Math.abs(x) / u + 2) : 1)
							}
							b.setProps(p + x, "setTouch")
						}
					}
				}
				function w(A) {
					if (b.animatingTo === b.currentSlide && !s && !(x === null)) {
						var z = (j) ? -x : x,
							y = (z > 0) ? b.getTarget("next") : b.getTarget("prev");
						if (b.canAdvance(y) && (Number(new Date()) - v < 550 && Math.abs(z) > 20 || Math.abs(z) > u / 2)) {
							b.flexAnimate(y, l.pauseOnAction)
						} else {
							b.flexAnimate(b.currentSlide, l.pauseOnAction, true)
						}
					}
					d.removeEventListener("touchmove", o, false);
					d.removeEventListener("touchend", w, false);
					t = null;
					r = null;
					x = null;
					p = null
				}
			},
			resize: function () {
				if (!b.animating && b.is(":visible")) {
					if (!m) {
						b.doMath()
					}
					if (f) {
						e.smoothHeight()
					} else {
						if (m) {
							b.slides.width(b.computedW);
							b.update(b.pagingCount);
							b.setProps()
						} else {
							if (h) {
								b.viewport.height(b.h);
								b.setProps(b.h, "setTotal")
							} else {
								if (l.smoothHeight) {
									e.smoothHeight()
								}
								b.newSlides.width(b.computedW);
								b.setProps(b.computedW, "setTotal")
							}
						}
					}
				}
			},
			smoothHeight: function (o) {
				if (!h || f) {
					var p = (f) ? b : b.viewport;
					(o) ? p.animate({
						height: b.slides.eq(b.animatingTo).height()
					}, o) : p.height(b.slides.eq(b.animatingTo).height())
				}
			},
			sync: function (o) {
				var q = a(l.sync).data("flexslider"),
					p = b.animatingTo;
				switch (o) {
					case "animate":
						q.flexAnimate(p, l.pauseOnAction, false, true);
						break;
					case "play":
						if (!q.playing && !q.asNav) {
							q.play()
						}
						break;
					case "pause":
						q.pause();
						break
				}
			}
		};
		b.flexAnimate = function (w, x, q, s, t) {
			if (!b.animating && (b.canAdvance(w) || q) && b.is(":visible")) {
				if (k && s) {
					var p = a(l.asNavFor).data("flexslider");
					b.atEnd = w === 0 || w === b.count - 1;
					p.flexAnimate(w, true, false, true, t);
					b.direction = (b.currentItem < w) ? "next" : "prev";
					p.direction = b.direction;
					if (Math.ceil((w + 1) / b.visible) - 1 !== b.currentSlide && w !== 0) {
						b.currentItem = w;
						b.slides.removeClass(g + "active-slide").eq(w).addClass(g + "active-slide");
						w = Math.floor(w / b.visible)
					} else {
						b.currentItem = w;
						b.slides.removeClass(g + "active-slide").eq(w).addClass(g + "active-slide");
						return false
					}
				}
				b.animating = true;
				b.animatingTo = w;
				l.before(b);
				if (x) {
					b.pause()
				}
				if (b.syncExists && !t) {
					e.sync("animate")
				}
				if (l.controlNav) {
					e.controlNav.active()
				}
				if (!m) {
					b.slides.removeClass(g + "active-slide").eq(w).addClass(g + "active-slide")
				}
				b.atEnd = w === 0 || w === b.last;
				if (l.directionNav) {
					e.directionNav.update()
				}
				if (w === b.last) {
					l.end(b);
					if (!l.animationLoop) {
						b.pause()
					}
				}
				if (!f) {
					var v = (h) ? b.slides.filter(":first").height() : b.computedW,
						u, r, o;
					if (m) {
						u = (l.itemWidth > b.w) ? l.itemMargin * 2 : l.itemMargin;
						o = ((b.itemW + u) * b.move) * b.animatingTo;
						r = (o > b.limit && b.visible !== 1) ? b.limit : o
					} else {
						if (b.currentSlide === 0 && w === b.count - 1 && l.animationLoop && b.direction !== "next") {
							r = (j) ? (b.count + b.cloneOffset) * v : 0
						} else {
							if (b.currentSlide === b.last && w === 0 && l.animationLoop && b.direction !== "prev") {
								r = (j) ? 0 : (b.count + 1) * v
							} else {
								r = (j) ? ((b.count - 1) - w + b.cloneOffset) * v : (w + b.cloneOffset) * v
							}
						}
					}
					b.setProps(r, "", l.animationSpeed);
					if (b.transitions) {
						if (!l.animationLoop || !b.atEnd) {
							b.animating = false;
							b.currentSlide = b.animatingTo
						}
						b.container.unbind("webkitTransitionEnd transitionend");
						b.container.bind("webkitTransitionEnd transitionend", function () {
							b.wrapup(v)
						})
					} else {
						b.container.animate(b.args, l.animationSpeed, l.easing, function () {
							b.wrapup(v)
						})
					}
				} else {
					b.slides.eq(b.currentSlide).fadeOut(l.animationSpeed, l.easing);
					b.slides.eq(w).fadeIn(l.animationSpeed, l.easing, b.wrapup)
				} if (l.smoothHeight) {
					e.smoothHeight(l.animationSpeed)
				}
			}
		};
		b.wrapup = function (o) {
			if (!f && !m) {
				if (b.currentSlide === 0 && b.animatingTo === b.last && l.animationLoop) {
					b.setProps(o, "jumpEnd")
				} else {
					if (b.currentSlide === b.last && b.animatingTo === 0 && l.animationLoop) {
						b.setProps(o, "jumpStart")
					}
				}
			}
			b.animating = false;
			b.currentSlide = b.animatingTo;
			l.after(b)
		};
		b.animateSlides = function () {
			if (!b.animating) {
				b.flexAnimate(b.getTarget("next"))
			}
		};
		b.pause = function () {
			clearInterval(b.animatedSlides);
			b.playing = false;
			if (l.pausePlay) {
				e.pausePlay.update("play")
			}
			if (b.syncExists) {
				e.sync("pause")
			}
		};
		b.play = function () {
			b.animatedSlides = setInterval(b.animateSlides, l.slideshowSpeed);
			b.playing = true;
			if (l.pausePlay) {
				e.pausePlay.update("pause")
			}
			if (b.syncExists) {
				e.sync("play")
			}
		};
		b.canAdvance = function (p) {
			var o = (k) ? b.pagingCount - 1 : b.last;
			return (k && b.currentItem === 0 && p === b.pagingCount - 1 && b.direction !== "next") ? false : (p === b.currentSlide && !k) ? false : (l.animationLoop) ? true : (b.atEnd && b.currentSlide === 0 && p === o && b.direction !== "next") ? false : (b.atEnd && b.currentSlide === o && p === 0 && b.direction === "next") ? false : true
		};
		b.getTarget = function (o) {
			b.direction = o;
			if (o === "next") {
				return (b.currentSlide === b.last) ? 0 : b.currentSlide + 1
			} else {
				return (b.currentSlide === 0) ? b.last : b.currentSlide - 1
			}
		};
		b.setProps = function (r, o, p) {
			var q = (function () {
				var s = (r) ? r : ((b.itemW + l.itemMargin) * b.move) * b.animatingTo,
					t = (function () {
						if (m) {
							return (o === "setTouch") ? r : (j && b.animatingTo === b.last) ? 0 : (j) ? b.limit - (((b.itemW + l.itemMargin) * b.move) * b.animatingTo) : (b.animatingTo === b.last) ? b.limit : s
						} else {
							switch (o) {
								case "setTotal":
									return (j) ? ((b.count - 1) - b.currentSlide + b.cloneOffset) * r : (b.currentSlide + b.cloneOffset) * r;
								case "setTouch":
									return (j) ? r : r;
								case "jumpEnd":
									return (j) ? r : b.count * r;
								case "jumpStart":
									return (j) ? b.count * r : r;
								default:
									return r
							}
						}
					}());
				return (t * -1) + "px"
			}());
			if (b.transitions) {
				q = (h) ? "translate3d(0," + q + ",0)" : "translate3d(" + q + ",0,0)";
				p = (p !== undefined) ? (p / 1000) + "s" : "0s";
				b.container.css("-" + b.pfx + "-transition-duration", p)
			}
			b.args[b.prop] = q;
			if (b.transitions || p === undefined) {
				b.container.css(b.args)
			}
		};
		b.setup = function (p) {
			if (!f) {
				var q, o;
				if (p === "init") {
					b.viewport = a('<div class="flex-viewport"></div>').css({
						overflow: "hidden",
						position: "relative"
					}).appendTo(b).append(b.container);
					b.cloneCount = 0;
					b.cloneOffset = 0;
					if (j) {
						o = a.makeArray(b.slides).reverse();
						b.slides = a(o);
						b.container.empty().append(b.slides)
					}
				}
				if (l.animationLoop && !m) {
					b.cloneCount = 2;
					b.cloneOffset = 1;
					if (p !== "init") {
						b.container.find(".clone").remove()
					}
					b.container.append(b.slides.first().clone().addClass("clone")).prepend(b.slides.last().clone().addClass("clone"))
				}
				b.newSlides = a(l.selector, b);
				q = (j) ? b.count - 1 - b.currentSlide + b.cloneOffset : b.currentSlide + b.cloneOffset;
				if (h && !m) {
					b.container.height((b.count + b.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
					setTimeout(function () {
						b.newSlides.css({
							display: "block"
						});
						b.doMath();
						b.viewport.height(b.h);
						b.setProps(q * b.h, "init")
					}, (p === "init") ? 100 : 0)
				} else {
					b.container.width((b.count + b.cloneCount) * 200 + "%");
					b.setProps(q * b.computedW, "init");
					setTimeout(function () {
						b.doMath();
						b.newSlides.css({
							width: b.computedW,
							"float": "left",
							display: "block"
						});
						if (l.smoothHeight) {
							e.smoothHeight()
						}
					}, (p === "init") ? 100 : 0)
				}
			} else {
				b.slides.css({
					width: "100%",
					"float": "left",
					marginRight: "-100%",
					position: "relative"
				});
				if (p === "init") {
					b.slides.eq(b.currentSlide).fadeIn(l.animationSpeed, l.easing)
				}
				if (l.smoothHeight) {
					e.smoothHeight()
				}
			} if (!m) {
				b.slides.removeClass(g + "active-slide").eq(b.currentSlide).addClass(g + "active-slide")
			}
		};
		b.doMath = function () {
			var o = b.slides.first(),
				r = l.itemMargin,
				p = l.minItems,
				q = l.maxItems;
			b.w = b.width();
			b.h = o.height();
			b.boxPadding = o.outerWidth() - o.width();
			if (m) {
				b.itemT = l.itemWidth + r;
				b.minW = (p) ? p * b.itemT : b.w;
				b.maxW = (q) ? q * b.itemT : b.w;
				b.itemW = (b.minW > b.w) ? (b.w - (r * p)) / p : (b.maxW < b.w) ? (b.w - (r * q)) / q : (l.itemWidth > b.w) ? b.w : l.itemWidth;
				b.visible = Math.floor(b.w / (b.itemW + r));
				b.move = (l.move > 0 && l.move < b.visible) ? l.move : b.visible;
				b.pagingCount = Math.ceil(((b.count - b.visible) / b.move) + 1);
				b.last = b.pagingCount - 1;
				b.limit = (b.pagingCount === 1) ? 0 : (l.itemWidth > b.w) ? ((b.itemW + (r * 2)) * b.count) - b.w - r : ((b.itemW + r) * b.count) - b.w
			} else {
				b.itemW = b.w;
				b.pagingCount = b.count;
				b.last = b.count - 1
			}
			b.computedW = b.itemW - b.boxPadding
		};
		b.update = function (p, o) {
			b.doMath();
			if (!m) {
				if (p < b.currentSlide) {
					b.currentSlide += 1
				} else {
					if (p <= b.currentSlide && p !== 0) {
						b.currentSlide -= 1
					}
				}
				b.animatingTo = b.currentSlide
			}
			if (l.controlNav && !b.manualControls) {
				if ((o === "add" && !m) || b.pagingCount > b.controlNav.length) {
					e.controlNav.update("add")
				} else {
					if ((o === "remove" && !m) || b.pagingCount < b.controlNav.length) {
						if (m && b.currentSlide > b.last) {
							b.currentSlide -= 1;
							b.animatingTo -= 1
						}
						e.controlNav.update("remove", b.last)
					}
				}
			}
			if (l.directionNav) {
				e.directionNav.update()
			}
		};
		b.addSlide = function (o, q) {
			var p = a(o);
			b.count += 1;
			b.last = b.count - 1;
			if (h && j) {
				(q !== undefined) ? b.slides.eq(b.count - q).after(p) : b.container.prepend(p)
			} else {
				(q !== undefined) ? b.slides.eq(q).before(p) : b.container.append(p)
			}
			b.update(q, "add");
			b.slides = a(l.selector + ":not(.clone)", b);
			b.setup();
			l.added(b)
		};
		b.removeSlide = function (o) {
			var p = (isNaN(o)) ? b.slides.index(a(o)) : o;
			b.count -= 1;
			b.last = b.count - 1;
			if (isNaN(o)) {
				a(o, b.slides).remove()
			} else {
				(h && j) ? b.slides.eq(b.last).remove() : b.slides.eq(o).remove()
			}
			b.doMath();
			b.update(p, "remove");
			b.slides = a(l.selector + ":not(.clone)", b);
			b.setup();
			l.removed(b)
		};
		e.init()
	};
	a.flexslider.defaults = {
		namespace: "flex-",
		selector: ".slides > li",
		animation: "fade",
		easing: "swing",
		direction: "horizontal",
		reverse: false,
		animationLoop: true,
		smoothHeight: false,
		startAt: 0,
		slideshow: true,
		slideshowSpeed: 5500,
		animationSpeed: 3000,
		initDelay: 0,
		randomize: false,
		pauseOnAction: true,
		pauseOnHover: false,
		useCSS: true,
		touch: true,
		video: false,
		controlNav: true,
		directionNav: true,
		prevText: "Previous",
		nextText: "Next",
		keyboard: true,
		multipleKeyboard: false,
		mousewheel: false,
		pausePlay: false,
		pauseText: "Pause",
		playText: "Play",
		controlsContainer: "",
		manualControls: "",
		sync: "",
		asNavFor: "",
		itemWidth: 0,
		itemMargin: 0,
		minItems: 0,
		maxItems: 0,
		move: 0,
		start: function () {},
		before: function () {},
		after: function () {},
		end: function () {},
		added: function () {},
		removed: function () {}
	};
	a.fn.flexslider = function (b) {
		b = b === 0 ? 0 : b || {};
		if (typeof b === "object") {
			return this.each(function () {
				var f = a(this),
					d = (b.selector) ? b.selector : ".slides > li",
					e = f.find(d);
				if (e.length === 1) {
					e.fadeIn(400);
					if (b.start) {
						b.start(f)
					}
				} else {
					if (f.data("flexslider") === undefined) {
						new a.flexslider(this, b)
					}
				}
			})
		} else {
			var c = a(this).data("flexslider");
			switch (b) {
				case "play":
					c.play();
					break;
				case "pause":
					c.pause();
					break;
				case "next":
					c.flexAnimate(c.getTarget("next"), true);
					break;
				case "prev":
				case "previous":
					c.flexAnimate(c.getTarget("prev"), true);
					break;
				default:
					if (typeof b === "number") {
						c.flexAnimate(b, true)
					}
			}
		}
	}
})(jQuery);
(function (p) {
	var j = {}, f, i, e = /^(?:toggle|show|hide)$/,
		d = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
		g, o;
	var a = document.createElement("div"),
		b = a.style,
		n = "Transition",
		k = "cubic-bezier(",
		c;
	p.support.transition = "Moz" + n in b ? "Moz" + n : "Webkit" + n in b ? "Webkit" + n : false;
	p.cssNumber.color = p.cssNumber.backgroundColor = true;
	c = {
		linear: "linear",
		swing: "ease-out",
		bounce: k + "0,.35,.5,1.3)",
		easeInQuad: k + ".55,.085,.68,.53)",
		easeInCubic: k + ".55,.055,.675,.19)",
		easeInQuart: k + ".895,.03,.685,.22)",
		easeInQuint: k + ".755,.05,.855,.06)",
		easeInSine: k + ".47,0,.745,.715)",
		easeInExpo: k + ".95,.05,.795,.035)",
		easeInCirc: k + ".6,.04,.98,.335)",
		easeOutQuad: k + ".25,.46,.45,.94)",
		easeOutCubic: k + ".215,.61,.355,1)",
		easeOutQuart: k + ".165,.84,.44,1)",
		easeOutQuint: k + ".23,1,.32,1)",
		easeOutSine: k + ".39,.575,.565,1)",
		easeOutExpo: k + ".19,1,.22,1)",
		easeOutCirc: k + ".075,.82,.165,1)",
		easeInOutQuad: k + ".455,.03,.515,.955)",
		easeInOutCubic: k + ".645,.045,.355,1)",
		easeInOutQuart: k + ".77,0,.175,1)",
		easeInOutQuint: k + ".86,0,.07,1)",
		easeInOutSine: k + ".445,.05,.55,.95)",
		easeInOutExpo: k + "1,0,0,1)",
		easeInOutCirc: k + ".785,.135,.15,.86)"
	};
	p.fn.extend({
		animate: function (v, s, u, t) {
			var q = p.speed(s, u, t);
			if (p.isEmptyObject(v)) {
				return this.each(q.complete, [false])
			}
			v = p.extend({}, v);

			function r() {
				if (q.queue === false) {
					p._mark(this)
				}
				var x = p.extend({}, q),
					G = this.nodeType === 1,
					J = G && p(this).is(":hidden"),
					R, Q, F, M, y, N, I, B, A, D, z, w = p.cssProps,
					K = !x.step && p.support.transition,
					L, P = [],
					H, E, O, C;
				x.animatedProperties = {};
				x.transition = {};
				for (F in v) {
					R = p.camelCase(F);
					if (F !== R) {
						v[R] = v[F];
						delete v[F]
					}
					if ((y = p.cssHooks[R]) && "expand" in y) {
						N = y.expand(v[R]);
						delete v[R];
						for (F in N) {
							if (!(F in v)) {
								v[F] = N[F]
							}
						}
					}
				}
				for (R in v) {
					Q = v[R];
					if (p.isArray(Q)) {
						H = x.animatedProperties[R] = Q[1];
						Q = v[R] = Q[0]
					} else {
						H = x.animatedProperties[R] = x.specialEasing && x.specialEasing[R] || x.easing || "swing"
					}
					L = K && G && x.duration > 0 && R.indexOf("scroll") && c[H];
					if (L) {
						E = w[R] || R;
						O = E.replace(/([A-Z])/g, "-$1").toLowerCase();
						L = O + " " + x.duration + "ms " + L;
						x.transition[R] = {
							lower: O,
							real: E
						};
						P.push(L)
					}
					if (Q === "hide" && J || Q === "show" && !J) {
						return x.complete.call(this)
					}
					if (G && (R === "height" || R === "width")) {
						x.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
						if (p.css(this, "display") === "inline" && p.css(this, "float") === "none") {
							if (!p.support.inlineBlockNeedsLayout || m(this.nodeName) === "inline") {
								this.style.display = "inline-block"
							} else {
								this.style.zoom = 1
							}
						}
					}
				}
				if (x.overflow != null) {
					this.style.overflow = "hidden"
				}
				for (F in v) {
					M = new p.fx(this, x, F);
					Q = v[F];
					if (e.test(Q)) {
						z = p._data(this, "toggle" + F) || (Q === "toggle" ? J ? "show" : "hide" : 0);
						if (z) {
							p._data(this, "toggle" + F, z === "show" ? "hide" : "show");
							M[z]()
						} else {
							M[Q]()
						}
					} else {
						I = d.exec(Q);
						B = M.cur();
						if (I) {
							A = parseFloat(I[2]);
							D = I[3] || (p.cssNumber[F] ? "" : "px");
							if (D !== "px" && F !== "opacity") {
								p.style(this, F, (A || 1) + D);
								B = ((A || 1) / M.cur()) * B;
								p.style(this, F, B + D)
							}
							if (I[1]) {
								A = ((I[1] === "-=" ? -1 : 1) * A) + B
							}
							M.custom(B, A, D)
						} else {
							M.custom(B, Q, "")
						}
					}
				}
				if (K && P.length) {
					L = this.style[K];
					C = window.getComputedStyle(this);
					this.style[K] = P.join() + (L && L.indexOf("none") ? "," + L : "");
					for (F in x.transition) {
						C[F];
						p.style.apply(null, x.transition[F].styleToSet)
					}
				}
				return true
			}
			return q.queue === false ? this.each(r) : this.queue(q.queue, r)
		},
		stop: function (s, r, q) {
			if (typeof s !== "string") {
				q = r;
				r = s;
				s = undefined
			}
			if (r && s !== false) {
				this.queue(s || "fx", [])
			}
			return this.each(function () {
				var t, u = false,
					w = p.timers,
					v = p._data(this),
					x = p.support.transition;
				if (!q) {
					p._unmark(true, this)
				}
				function y(B, C, A) {
					var z = C[A];
					p.removeData(B, A, true);
					z.stop(q)
				}
				if (s == null) {
					for (t in v) {
						if (v[t] && v[t].stop && t.indexOf(".run") === t.length - 4) {
							y(this, v, t)
						}
					}
				} else {
					if (v[t = s + ".run"] && v[t].stop) {
						y(this, v, t)
					}
				}
				for (t = w.length; t--;) {
					if (w[t].elem === this && (s == null || w[t].queue === s)) {
						if (q || x) {
							w[t](q)
						}
						if (!q) {
							w[t].saveState()
						}
						u = true;
						w.splice(t, 1)
					}
				}
				if (!(q && u)) {
					p.dequeue(this, s)
				}
			})
		}
	});

	function l() {
		setTimeout(h, 0);
		return (o = p.now())
	}
	function h() {
		o = undefined
	}
	p.extend(p.fx.prototype, {
		cur: function () {
			if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
				return this.elem[this.prop]
			}
			var q, s = p.css(this.elem, this.prop);
			return isNaN(q = parseFloat(s)) ? !s || s === "auto" ? 0 : s : q
		},
		custom: function (y, x, u) {
			var q = this,
				s = p.fx,
				v = q.options.transition,
				w = this.prop;
			this.startTime = o || l();
			this.end = x;
			this.now = this.start = y;
			this.pos = this.state = 0;
			this.unit = u || this.unit || (p.cssNumber[w] ? "" : "px");

			function r(t) {
				return q.step(t)
			}
			r.queue = this.options.queue;
			r.elem = this.elem;
			r.saveState = function () {
				if (p._data(q.elem, "fxshow" + q.prop) === undefined) {
					if (q.options.hide) {
						p._data(q.elem, "fxshow" + q.prop, q.start)
					} else {
						if (q.options.show) {
							p._data(q.elem, "fxshow" + q.prop, q.end)
						}
					}
				}
			};
			if ((r.transition = v[w])) {
				p.timers.push(r);
				if (w != "transform") {
					q.elem.style[v[w].real] = y + q.unit
				}
				p.fx.step[w] && (x = Math.max(0, x));
				v[w].styleToSet = [q.elem, w, x + q.unit];
				v[w].timeout = setTimeout(function () {
					p.timers.splice(p.timers.indexOf(r), 1);
					q.step(true)
				}, q.options.duration + 30)
			} else {
				if (r() && p.timers.push(r) && !g) {
					g = setInterval(s.tick, s.interval)
				}
			}
		},
		step: function (v) {
			var q, s, r, A = o || l(),
				w = true,
				u = this.elem,
				B = this.options,
				y = B.transition[this.prop],
				x = A >= B.duration + this.startTime,
				z = p.support.transition;
			if (y || v || x) {
				if (!y) {
					this.now = this.end;
					this.pos = this.state = 1;
					this.update()
				} else {
					clearTimeout(y.timeout);
					if (!v && !x) {
						this.elem.style[y.real] = p.css(this.elem, y.real)
					}
				}
				B.animatedProperties[this.prop] = true;
				for (q in B.animatedProperties) {
					if (B.animatedProperties[q] !== true) {
						w = false
					}
				}
				if (w) {
					if (B.overflow != null && !p.support.shrinkWrapBlocks) {
						p.each(["", "X", "Y"], function (t, C) {
							u.style["overflow" + C] = B.overflow[t]
						})
					}
					if (B.hide) {
						p(u).hide()
					}
					if (y) {
						y = "," + u.style[z];
						for (q in B.transition) {
							y = y.split(B.transition[q].lower).join("_")
						}
						y = y.replace(/, ?_[^,]*/g, "").substr(1);
						u.style[z] = y || "none";
						!y && (u.style[z] = y)
					}
					if (B.hide || B.show) {
						for (q in B.animatedProperties) {
							(v || x) && p.style(u, q, B.orig[q]);
							p.removeData(u, "fxshow" + q, true);
							p.removeData(u, "toggle" + q, true)
						}
					}
					r = B.complete;
					if (r && (v || x)) {
						B.complete = false;
						r.call(u)
					}
				}
				return false
			} else {
				if (B.duration == Infinity) {
					this.now = A
				} else {
					s = A - this.startTime;
					this.state = s / B.duration;
					this.pos = p.easing[B.animatedProperties[this.prop]](this.state, s, 0, 1, B.duration);
					this.now = this.start + ((this.end - this.start) * this.pos)
				}
				this.update()
			}
			return true
		}
	});
	p.extend(p.fx, {
		tick: function () {
			var s, r = p.timers,
				q = 0;
			for (; q < r.length; q++) {
				s = r[q];
				if (!s.transition && !s() && r[q] === s) {
					r.splice(q--, 1)
				}
			}
			if (!r.length) {
				p.fx.stop()
			}
		}
	});

	function m(t) {
		if (!j[t]) {
			var q = document.body,
				r = p("<" + t + ">").appendTo(q),
				s = r.css("display");
			r.remove();
			if (s === "none" || s === "") {
				if (!f) {
					f = document.createElement("iframe");
					f.frameBorder = f.width = f.height = 0
				}
				q.appendChild(f);
				if (!i || !f.createElement) {
					i = (f.contentWindow || f.contentDocument).document;
					i.write((p.support.boxModel ? "<!doctype html>" : "") + "<html><body>");
					i.close()
				}
				r = i.createElement(t);
				i.body.appendChild(r);
				s = p.css(r, "display");
				q.removeChild(f)
			}
			j[t] = s
		}
		return j[t]
	}
})(jQuery);
/*!
 * jQVMap Version 1.0
 *
 * http://jqvmap.com
 *
 * Copyright 2012, Peter Schmalfeldt <manifestinteractive@gmail.com>
 * Copyright 2011-2012, Kirill Lebedev
 * Licensed under the MIT license.
 *
 * Fork Me @ https://github.com/manifestinteractive/jqvmap
 */ (function (e) {
	var f = {
		colors: 1,
		values: 1,
		backgroundColor: 1,
		scaleColors: 1,
		normalizeFunction: 1,
		enableZoom: 1,
		showTooltip: 1,
		borderColor: 1,
		borderWidth: 1,
		borderOpacity: 1,
		selectedRegion: 1
	};
	var b = {
		onLabelShow: "labelShow",
		onRegionOver: "regionMouseOver",
		onRegionOut: "regionMouseOut",
		onRegionClick: "regionClick"
	};
	e.fn.vectorMap = function (g) {
		var h = {
			map: "world_en",
			backgroundColor: "#a5bfdd",
			color: "#f4f3f0",
			hoverColor: "#c9dfaf",
			selectedColor: "#c9dfaf",
			scaleColors: ["#b6d6ff", "#005ace"],
			normalizeFunction: "linear",
			enableZoom: true,
			showTooltip: true,
			borderColor: "#818181",
			borderWidth: 1,
			borderOpacity: 0.25,
			selectedRegion: null
		}, j;
		if (g === "addMap") {
			c.maps[arguments[1]] = arguments[2]
		} else {
			if (g === "set" && f[arguments[1]]) {
				this.data("mapObject")["set" + arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1)].apply(this.data("mapObject"), Array.prototype.slice.call(arguments, 2))
			} else {
				e.extend(h, g);
				h.container = this;
				this.css({
					position: "relative",
					overflow: "hidden"
				});
				j = new c(h);
				this.data("mapObject", j);
				for (var i in b) {
					if (h[i]) {
						this.bind(b[i] + ".jqvmap", h[i])
					}
				}
			}
		}
	};
	var d = function (h, g, j) {
		this.mode = window.SVGAngle ? "svg" : "vml";
		this.params = j;
		if (this.mode == "svg") {
			this.createSvgNode = function (k) {
				return document.createElementNS(this.svgns, k)
			}
		} else {
			try {
				if (!document.namespaces.rvml) {
					document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml")
				}
				this.createVmlNode = function (k) {
					return document.createElement("<rvml:" + k + ' class="rvml">')
				}
			} catch (i) {
				this.createVmlNode = function (k) {
					return document.createElement("<" + k + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
				}
			}
			document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)")
		} if (this.mode == "svg") {
			this.canvas = this.createSvgNode("svg")
		} else {
			this.canvas = this.createVmlNode("group");
			this.canvas.style.position = "absolute"
		}
		this.setSize(h, g)
	};
	d.prototype = {
		svgns: "http://www.w3.org/2000/svg",
		mode: "svg",
		width: 0,
		height: 0,
		canvas: null,
		setSize: function (m, g) {
			if (this.mode == "svg") {
				this.canvas.setAttribute("width", m);
				this.canvas.setAttribute("height", g)
			} else {
				this.canvas.style.width = m + "px";
				this.canvas.style.height = g + "px";
				this.canvas.coordsize = m + " " + g;
				this.canvas.coordorigin = "0 0";
				if (this.rootGroup) {
					var j = this.rootGroup.getElementsByTagName("shape");
					for (var k = 0, h = j.length; k < h; k++) {
						j[k].coordsize = m + " " + g;
						j[k].style.width = m + "px";
						j[k].style.height = g + "px"
					}
					this.rootGroup.coordsize = m + " " + g;
					this.rootGroup.style.width = m + "px";
					this.rootGroup.style.height = g + "px"
				}
			}
			this.width = m;
			this.height = g
		},
		createPath: function (g) {
			var h;
			if (this.mode == "svg") {
				h = this.createSvgNode("path");
				h.setAttribute("d", g.path);
				if (this.params.borderColor !== null) {
					h.setAttribute("stroke", this.params.borderColor)
				}
				if (this.params.borderWidth > 0) {
					h.setAttribute("stroke-width", this.params.borderWidth);
					h.setAttribute("stroke-linecap", "round");
					h.setAttribute("stroke-linejoin", "round")
				}
				if (this.params.borderOpacity > 0) {
					h.setAttribute("stroke-opacity", this.params.borderOpacity)
				}
				h.setFill = function (k) {
					this.setAttribute("fill", k);
					if (this.getAttribute("original") === null) {
						this.setAttribute("original", k)
					}
				};
				h.getFill = function (k) {
					return this.getAttribute("fill")
				};
				h.getOriginalFill = function () {
					return this.getAttribute("original")
				};
				h.setOpacity = function (k) {
					this.setAttribute("fill-opacity", k)
				}
			} else {
				h = this.createVmlNode("shape");
				h.coordorigin = "0 0";
				h.coordsize = this.width + " " + this.height;
				h.style.width = this.width + "px";
				h.style.height = this.height + "px";
				h.fillcolor = c.defaultFillColor;
				h.stroked = false;
				h.path = d.pathSvgToVml(g.path);
				var j = this.createVmlNode("skew");
				j.on = true;
				j.matrix = "0.01,0,0,0.01,0,0";
				j.offset = "0,0";
				h.appendChild(j);
				var i = this.createVmlNode("fill");
				h.appendChild(i);
				h.setFill = function (k) {
					this.getElementsByTagName("fill")[0].color = k
				};
				h.getFill = function (k) {
					return this.getElementsByTagName("fill")[0].color
				};
				h.setOpacity = function (k) {
					this.getElementsByTagName("fill")[0].opacity = parseInt(k * 100, 10) + "%"
				}
			}
			return h
		},
		createGroup: function (g) {
			var h;
			if (this.mode == "svg") {
				h = this.createSvgNode("g")
			} else {
				h = this.createVmlNode("group");
				h.style.width = this.width + "px";
				h.style.height = this.height + "px";
				h.style.left = "0px";
				h.style.top = "0px";
				h.coordorigin = "0 0";
				h.coordsize = this.width + " " + this.height
			} if (g) {
				this.rootGroup = h
			}
			return h
		},
		applyTransformParams: function (i, h, g) {
			if (this.mode == "svg") {
				this.rootGroup.setAttribute("transform", "scale(" + i + ") translate(" + h + ", " + g + ")")
			} else {
				this.rootGroup.coordorigin = (this.width - h) + "," + (this.height - g);
				this.rootGroup.coordsize = this.width / i + "," + this.height / i
			}
		}
	};
	d.pathSvgToVml = function (k) {
		var h = "";
		var g = 0,
			l = 0,
			j, i;
		return k.replace(/([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g, function (q, p, r, n) {
			r = r.replace(/(\d)-/g, "$1,-").replace(/\s+/g, ",").split(",");
			if (!r[0]) {
				r.shift()
			}
			for (var o = 0, m = r.length; o < m; o++) {
				r[o] = Math.round(100 * r[o])
			}
			switch (p) {
				case "m":
					g += r[0];
					l += r[1];
					return "t" + r.join(",");
					break;
				case "M":
					g = r[0];
					l = r[1];
					return "m" + r.join(",");
					break;
				case "l":
					g += r[0];
					l += r[1];
					return "r" + r.join(",");
					break;
				case "L":
					g = r[0];
					l = r[1];
					return "l" + r.join(",");
					break;
				case "h":
					g += r[0];
					return "r" + r[0] + ",0";
					break;
				case "H":
					g = r[0];
					return "l" + g + "," + l;
					break;
				case "v":
					l += r[0];
					return "r0," + r[0];
					break;
				case "V":
					l = r[0];
					return "l" + g + "," + l;
					break;
				case "c":
					j = g + r[r.length - 4];
					i = l + r[r.length - 3];
					g += r[r.length - 2];
					l += r[r.length - 1];
					return "v" + r.join(",");
					break;
				case "C":
					j = r[r.length - 4];
					i = r[r.length - 3];
					g = r[r.length - 2];
					l = r[r.length - 1];
					return "c" + r.join(",");
					break;
				case "s":
					r.unshift(l - i);
					r.unshift(g - j);
					j = g + r[r.length - 4];
					i = l + r[r.length - 3];
					g += r[r.length - 2];
					l += r[r.length - 1];
					return "v" + r.join(",");
					break;
				case "S":
					r.unshift(l + l - i);
					r.unshift(g + g - j);
					j = r[r.length - 4];
					i = r[r.length - 3];
					g = r[r.length - 2];
					l = r[r.length - 1];
					return "c" + r.join(",");
					break;
				default:
					return false;
					break
			}
			return ""
		}).replace(/z/g, "")
	};
	var c = function (k) {
		k = k || {};
		var i = this;
		var j = c.maps[k.map];
		this.container = k.container;
		this.defaultWidth = j.width;
		this.defaultHeight = j.height;
		this.color = k.color;
		this.hoverColor = k.hoverColor;
		this.setBackgroundColor(k.backgroundColor);
		this.width = k.container.width();
		this.height = k.container.height();
		this.resize();
		jQuery(window).resize(function () {
			i.width = k.container.width();
			i.height = k.container.height();
			i.resize();
			i.canvas.setSize(i.width, i.height);
			i.applyTransform()
		});
		this.canvas = new d(this.width, this.height, k);
		k.container.append(this.canvas.canvas);
		this.makeDraggable();
		this.rootGroup = this.canvas.createGroup(true);
		this.index = c.mapIndex;
		this.label = jQuery("<div/>").addClass("jqvmap-label").appendTo(jQuery("body"));
		if (k.enableZoom) {
			jQuery("<div/>").addClass("jqvmap-zoomin").text("+").appendTo(k.container);
			jQuery("<div/>").addClass("jqvmap-zoomout").html("&#x2212;").appendTo(k.container)
		}
		i.countries = [];
		for (var g in j.pathes) {
			var h = this.canvas.createPath({
				path: j.pathes[g].path
			});
			h.setFill(this.color);
			h.id = "jqvmap" + i.index + "_" + g;
			i.countries[g] = h;
			jQuery(this.rootGroup).append(h);
			h.setAttribute("class", "jqvmap-region");
			if (k.selectedRegion !== null) {
				if (g.toLowerCase() == k.selectedRegion.toLowerCase()) {
					h.setFill(k.selectedColor)
				}
			}
		}
		jQuery(k.container).delegate(this.canvas.mode == "svg" ? "path" : "shape", "mouseover mouseout", function (p) {
			var o = p.target,
				m = p.target.id.split("_").pop(),
				l = e.Event("labelShow.jqvmap"),
				n = e.Event("regionMouseOver.jqvmap");
			if (p.type == "mouseover") {
				jQuery(k.container).trigger(n, [m, j.pathes[m].name]);
				if (!n.isDefaultPrevented()) {
					if (k.hoverOpacity) {
						o.setOpacity(k.hoverOpacity)
					} else {
						if (k.hoverColor) {
							o.currentFillColor = o.getFill() + "";
							o.setFill(k.hoverColor)
						}
					}
				}
				if (k.showTooltip) {
					i.label.text(j.pathes[m].name);
					jQuery(k.container).trigger(l, [i.label, m]);
					if (!l.isDefaultPrevented()) {
						i.label.show();
						i.labelWidth = i.label.width();
						i.labelHeight = i.label.height()
					}
				}
			} else {
				o.setOpacity(1);
				if (o.currentFillColor) {
					o.setFill(o.currentFillColor)
				}
				i.label.hide();
				jQuery(k.container).trigger("regionMouseOut.jqvmap", [m, j.pathes[m].name])
			}
		});
		jQuery(k.container).delegate(this.canvas.mode == "svg" ? "path" : "shape", "click", function (q) {
			for (var m in j.pathes) {
				i.countries[m].currentFillColor = i.countries[m].getOriginalFill();
				i.countries[m].setFill(i.countries[m].getOriginalFill())
			}
			var p = q.target,
				n = q.target.id.split("_").pop(),
				o;
			var l = {
				az: "#2B2B2B",
				ca: "#2B2B2B",
				co: "#2B2B2B",
				fl: "#2B2B2B",
				hi: "#2B2B2B",
				ne: "#2B2B2B",
				nv: "#2B2B2B",
				or: "#2B2B2B",
				tx: "#2B2B2B",
				wa: "#2B2B2B"
			};
			if (l[n] !== undefined && k.iPad) {
				console.log(k.isIpad);
				p.currentFillColor = k.selectedColor;
				p.setFill(k.selectedColor);
				e("#states_list").find("ul li").removeClass("active");
				e("#states_list").find("#" + n).addClass("active");
				o = setTimeout(function () {
					p.currentFillColor = "2B2B2B";
					p.setFill("#2B2B2B");
					e("#states_list").find("ul li").removeClass("active")
				}, 1000)
			}
		});
		if (k.showTooltip) {
			k.container.mousemove(function (l) {
				if (i.label.is(":visible")) {
					i.label.css({
						left: l.pageX - 15 - i.labelWidth,
						top: l.pageY - 15 - i.labelHeight
					})
				}
			})
		}
		this.setColors(k.colors);
		this.canvas.canvas.appendChild(this.rootGroup);
		this.applyTransform();
		this.colorScale = new a(k.scaleColors, k.normalizeFunction, k.valueMin, k.valueMax);
		if (k.values) {
			this.values = k.values;
			this.setValues(k.values)
		}
		this.bindZoomButtons();
		c.mapIndex++
	};
	c.prototype = {
		transX: 0,
		transY: 0,
		scale: 1,
		baseTransX: 0,
		baseTransY: 0,
		baseScale: 1,
		width: 0,
		height: 0,
		countries: {},
		countriesColors: {},
		countriesData: {},
		zoomStep: 1.4,
		zoomMaxStep: 4,
		zoomCurStep: 1,
		setColors: function (i, h) {
			if (typeof i == "string") {
				this.countries[i].setFill(h);
				this.countries[i].setAttribute("original", h)
			} else {
				var g = i;
				for (var j in g) {
					if (this.countries[j]) {
						this.countries[j].setFill(g[j]);
						this.countries[j].setAttribute("original", g[j])
					}
				}
			}
		},
		setValues: function (i) {
			var g = 0,
				j = Number.MAX_VALUE,
				k;
			for (var l in i) {
				k = parseFloat(i[l]);
				if (k > g) {
					g = i[l]
				}
				if (k && k < j) {
					j = k
				}
			}
			this.colorScale.setMin(j);
			this.colorScale.setMax(g);
			var h = {};
			for (l in i) {
				k = parseFloat(i[l]);
				if (k) {
					h[l] = this.colorScale.getColor(k)
				} else {
					h[l] = this.color
				}
			}
			this.setColors(h);
			this.values = i
		},
		setBackgroundColor: function (g) {
			this.container.css("background-color", g)
		},
		setScaleColors: function (g) {
			this.colorScale.setColors(g);
			if (this.values) {
				this.setValues(this.values)
			}
		},
		setNormalizeFunction: function (g) {
			this.colorScale.setNormalizeFunction(g);
			if (this.values) {
				this.setValues(this.values)
			}
		},
		resize: function () {
			var g = this.baseScale;
			if (this.width / this.height > this.defaultWidth / this.defaultHeight) {
				this.baseScale = this.height / this.defaultHeight;
				this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale)
			} else {
				this.baseScale = this.width / this.defaultWidth;
				this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale)
			}
			this.scale *= this.baseScale / g;
			this.transX *= this.baseScale / g;
			this.transY *= this.baseScale / g
		},
		reset: function () {
			this.countryTitle.reset();
			for (var g in this.countries) {
				this.countries[g].setFill(c.defaultColor)
			}
			this.scale = this.baseScale;
			this.transX = this.baseTransX;
			this.transY = this.baseTransY;
			this.applyTransform()
		},
		applyTransform: function () {
			var i, h, g, j;
			if (this.defaultWidth * this.scale <= this.width) {
				i = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
				g = (this.width - this.defaultWidth * this.scale) / (2 * this.scale)
			} else {
				i = 0;
				g = (this.width - this.defaultWidth * this.scale) / this.scale
			} if (this.defaultHeight * this.scale <= this.height) {
				h = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
				j = (this.height - this.defaultHeight * this.scale) / (2 * this.scale)
			} else {
				h = 0;
				j = (this.height - this.defaultHeight * this.scale) / this.scale
			} if (this.transY > h) {
				this.transY = h
			} else {
				if (this.transY < j) {
					this.transY = j
				}
			} if (this.transX > i) {
				this.transX = i
			} else {
				if (this.transX < g) {
					this.transX = g
				}
			}
			this.canvas.applyTransformParams(this.scale, this.transX, this.transY)
		},
		makeDraggable: function () {
			var h = false;
			var i, g;
			var j = this;
			this.container.mousemove(function (m) {
				if (h) {
					var l = j.transX;
					var k = j.transY;
					j.transX -= (i - m.pageX) / j.scale;
					j.transY -= (g - m.pageY) / j.scale;
					j.applyTransform();
					i = m.pageX;
					g = m.pageY
				}
				return false
			}).mousedown(function (k) {
				h = true;
				i = k.pageX;
				g = k.pageY;
				return false
			}).mouseup(function () {
				h = false;
				return false
			})
		},
		bindZoomButtons: function () {
			var h = this;
			var g = (jQuery("#zoom").innerHeight() - 6 * 2 - 15 * 2 - 3 * 2 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);
			this.container.find(".jqvmap-zoomin").click(function () {
				if (h.zoomCurStep < h.zoomMaxStep) {
					var j = h.transX;
					var i = h.transY;
					var k = h.scale;
					h.transX -= (h.width / h.scale - h.width / (h.scale * h.zoomStep)) / 2;
					h.transY -= (h.height / h.scale - h.height / (h.scale * h.zoomStep)) / 2;
					h.setScale(h.scale * h.zoomStep);
					h.zoomCurStep++;
					jQuery("#zoomSlider").css("top", parseInt(jQuery("#zoomSlider").css("top"), 10) - g)
				}
			});
			this.container.find(".jqvmap-zoomout").click(function () {
				if (h.zoomCurStep > 1) {
					var j = h.transX;
					var i = h.transY;
					var k = h.scale;
					h.transX += (h.width / (h.scale / h.zoomStep) - h.width / h.scale) / 2;
					h.transY += (h.height / (h.scale / h.zoomStep) - h.height / h.scale) / 2;
					h.setScale(h.scale / h.zoomStep);
					h.zoomCurStep--;
					jQuery("#zoomSlider").css("top", parseInt(jQuery("#zoomSlider").css("top"), 10) + g)
				}
			})
		},
		setScale: function (g) {
			this.scale = g;
			this.applyTransform()
		},
		getCountryPath: function (g) {
			return jQuery("#" + g)[0]
		}
	};
	c.xlink = "http://www.w3.org/1999/xlink";
	c.mapIndex = 1;
	c.maps = {};
	var a = function (g, h, i, j) {
		if (g) {
			this.setColors(g)
		}
		if (h) {
			this.setNormalizeFunction(h)
		}
		if (i) {
			this.setMin(i)
		}
		if (i) {
			this.setMax(j)
		}
	};
	a.prototype = {
		colors: [],
		setMin: function (g) {
			this.clearMinValue = g;
			if (typeof this.normalize === "function") {
				this.minValue = this.normalize(g)
			} else {
				this.minValue = g
			}
		},
		setMax: function (g) {
			this.clearMaxValue = g;
			if (typeof this.normalize === "function") {
				this.maxValue = this.normalize(g)
			} else {
				this.maxValue = g
			}
		},
		setColors: function (g) {
			for (var h = 0; h < g.length; h++) {
				g[h] = a.rgbToArray(g[h])
			}
			this.colors = g
		},
		setNormalizeFunction: function (g) {
			if (g === "polynomial") {
				this.normalize = function (h) {
					return Math.pow(h, 0.2)
				}
			} else {
				if (g === "linear") {
					delete this.normalize
				} else {
					this.normalize = g
				}
			}
			this.setMin(this.clearMinValue);
			this.setMax(this.clearMaxValue)
		},
		getColor: function (k) {
			if (typeof this.normalize === "function") {
				k = this.normalize(k)
			}
			var o = [];
			var m = 0;
			var g;
			for (var j = 0; j < this.colors.length - 1; j++) {
				g = this.vectorLength(this.vectorSubtract(this.colors[j + 1], this.colors[j]));
				o.push(g);
				m += g
			}
			var n = (this.maxValue - this.minValue) / m;
			for (j = 0; j < o.length; j++) {
				o[j] *= n
			}
			j = 0;
			k -= this.minValue;
			while (k - o[j] >= 0) {
				k -= o[j];
				j++
			}
			var h;
			if (j == this.colors.length - 1) {
				h = this.vectorToNum(this.colors[j]).toString(16)
			} else {
				h = (this.vectorToNum(this.vectorAdd(this.colors[j], this.vectorMult(this.vectorSubtract(this.colors[j + 1], this.colors[j]), (k) / (o[j]))))).toString(16)
			}
			while (h.length < 6) {
				h = "0" + h
			}
			return "#" + h
		},
		vectorToNum: function (g) {
			var h = 0;
			for (var j = 0; j < g.length; j++) {
				h += Math.round(g[j]) * Math.pow(256, g.length - j - 1)
			}
			return h
		},
		vectorSubtract: function (k, j) {
			var g = [];
			for (var h = 0; h < k.length; h++) {
				g[h] = k[h] - j[h]
			}
			return g
		},
		vectorAdd: function (k, j) {
			var g = [];
			for (var h = 0; h < k.length; h++) {
				g[h] = k[h] + j[h]
			}
			return g
		},
		vectorMult: function (h, j) {
			var g = [];
			for (var k = 0; k < h.length; k++) {
				g[k] = h[k] * j
			}
			return g
		},
		vectorLength: function (h) {
			var g = 0;
			for (var j = 0; j < h.length; j++) {
				g += h[j] * h[j]
			}
			return Math.sqrt(g)
		}
	};
	a.arrayToRgb = function (g) {
		var h = "#";
		var k;
		for (var j = 0; j < g.length; j++) {
			k = g[j].toString(16);
			h += k.length == 1 ? "0" + k : k
		}
		return h
	};
	a.rgbToArray = function (g) {
		g = g.substr(1);
		return [parseInt(g.substr(0, 2), 16), parseInt(g.substr(2, 2), 16), parseInt(g.substr(4, 2), 16)]
	}
})(jQuery);
jQuery.fn.vectorMap("addMap", "usa_en", {
	width: 959,
	height: 593,
	pathes: {
		hi: {
			path: "m244.66,512.25c-2.48,3.8 2.23,4.04 4.74,5.38 3.06,0.16 3.51,-4.28 2.66,-6.56 -2.72,-0.77 -5.01,-0.19 -7.41,1.19z m-9.31,3.97c-4.02,5.11 3.64,0.48 0.63,-0.09l-0.5,0.07 -0.14,0.02z m39.69,7.97c-0.62,2.09 1.91,6.73 4.39,6.2 2.41,-1.46 3.73,1.73 6.48,0.56 1.23,-1.48 -3.77,-3.2 -3.7,-6.08 -0.95,-3.8 -3.28,-3.2 -5.96,-1.28 -0.41,0.2 -0.81,0.4 -1.22,0.6z m19.94,10.03c3.58,0.95 7.91,2.99 11.25,0.47 -1.05,-1.63 -5.06,-0.59 -7.1,-0.86 -1.44,0.01 -3.54,-1.63 -4.15,0.39z m12.13,4.38c2.33,2.45 3.64,6.83 7.24,7.4 2.36,-0.69 6.84,-0.66 7.32,-3.43 -2.09,-2.51 -5.77,-3.35 -8.88,-4.29 -2.53,-1.2 -4.11,-3.25 -5.68,0.33z m-7.06,1c-0.29,3.69 5.55,3.98 3.67,0.55 -0.27,-1.25 -3.83,-1.74 -3.67,-0.55z m23.66,14.69c0.27,2.45 3.18,3.93 0.47,6.15 -0.65,2.42 -5.54,2.87 -2.52,5.53 2.36,1.46 2.01,4.85 2.92,7.14 -0.72,2.69 -1.43,6.78 1.72,8.06 2.8,2.95 4.5,-1.93 6.19,-3.68 1.27,-1.69 3.85,-4.1 5.94,-2.59 3.04,-0.81 6.3,-2.42 7.78,-5.22 -2.79,-1.31 -4.88,-3.19 -5.57,-6.29 -2.4,-5.33 -8.95,-6.26 -13.58,-8.98 -1.29,-0.52 -2.26,-1.62 -3.34,-0.11z",
			name: "Hawaii"
		},
		ak: {
			path: "m107.84,436.56c-2.27,0.55 -4.87,0.32 -6.84,-0.34 -2.41,1.22 -5.63,4.03 -8.25,1.88 -3.1,0.93 -3.51,3.84 -5.22,5.97 -1.82,2.52 -4.21,3.65 -7.31,3.14 -2.5,-0.94 -5.49,-1.15 -7.5,0.98 2.03,4.34 6.39,8.13 5.82,13.23 -1.85,2.94 6.31,2.99 2.68,5.02 0.15,2.8 3.07,5.68 2.91,7.88 -2.35,2.21 -5.24,-0.38 -7.71,-1.06 -3.24,-0.64 -2.73,-3.35 -0.82,-5.22 -1.57,-1.51 -7.35,-1.81 -6.51,1.12 -2.01,0.04 -3.81,-1.66 -6.27,-0.77 -3.72,-0.44 -5.97,0.65 -2.94,4.05 3.68,1.45 1.06,4.72 1.17,7.57 0.76,2.63 3.66,4.89 6.67,4.17 3.2,-0.06 5.87,3.59 9.21,1.65 2.16,-1.3 5.33,-0.99 4.79,1.89 -2.53,2.07 -1.36,6.13 -2.78,8.75 -1.96,1.88 -4.53,1.59 -6.59,0.16 -1.52,1.37 -4.7,3.68 -6.28,2.22 0.72,-3.71 -4.77,-3.63 -5.51,-0.61 -1.21,3.97 -6.27,4.46 -8.31,7.63 -0.7,2.42 -1.55,6.7 1.74,6.3 1.26,1.11 -1.2,4.8 -2.77,5.52 1.62,2.19 2.65,4.59 2.72,7.34 1.71,1.55 6.35,1.98 7.5,-0.16 2.45,-0.95 1.79,4.1 2.08,5.97 2.47,2.95 -4.02,1.28 -1.61,4.56 -0.85,2.93 -1.76,5.02 2,2.72 2.76,-0.47 5.11,-0.69 5.66,2.09 2.59,-3.91 2.26,2.78 3.25,4.66 0.59,-0.75 1.3,-5.69 3.94,-3.06 -0.17,4.52 5.33,-0.45 5.78,-0.04 0.54,2.92 -1.63,4.24 -2.86,6.41 -1.51,2.24 -2.07,5.63 -4.21,7.17 -3.87,-0.42 -3.37,4.1 -5.5,5.02 -2.65,-0.72 -5.73,0.71 -8.44,1.41 -1.35,2.41 -3.61,4.2 -5.78,1.81 -2.56,0.05 -5.63,0.68 -7.63,2.33 -2.48,2.43 -6.32,3.11 -9.66,2.29 -2.78,-1.91 -7.11,3.41 -3.11,2.31 2.5,-1.91 4.66,0.64 7.25,0.63 2.21,-1.15 4.17,-2.75 6.84,-2.06 2.32,-3.35 5.1,-0.32 7.92,-1.16 2.31,-0.39 7.01,-3.91 5.26,0.66 0.09,-2.91 3.42,-2.73 5.54,-2.04 4.21,0.96 0.29,-3.16 2.08,-3.43 3.47,-2.05 7.52,-2.41 11.2,-3.72 5.48,-3.19 11.62,-5.7 16.21,-10.1 4.27,-2.97 -2.78,-3.48 -1.21,-6.32 1.68,-2.43 4.58,-3.81 7.47,-4.5 1.5,-3.07 3.53,-6.11 5.88,-8.52 2.49,-1.32 4.83,-3.39 7.83,-2.32 2.67,0.71 3.74,5.32 -0.52,3.66 -1.27,-1.88 -5.56,-0.09 -5.25,2.41 -0.21,2.44 -2.56,4.22 -3.06,6.66 4.79,0.85 0.24,3.54 -1.38,3.8 1.67,1.91 5.66,0.6 7.57,-1.14 1.25,-1.85 3.43,-3.8 5.41,-4.22 1.81,2.8 5.1,-1.16 5.74,2.72 0.71,2.78 6.02,-4.86 3.34,-3.1 -3.03,3.11 -3.78,2.86 -1.94,-1.24 1.43,-4.85 -1.76,6.17 -1.45,0.81 -0.81,-3.19 -0.93,-6.03 3.05,-6.4 2.7,-0.86 5.37,-0.87 5.79,2.52 0.42,3.48 3.8,2.84 5.95,4.76 2.41,2.2 4.76,1.95 7.8,1.78 4.34,-0.47 8.01,4.04 12.28,3.17 2.49,-0.42 5.1,-5.2 4.29,-0.23 -2.26,2.83 -0.02,4.12 2.5,5.41 3.13,1.35 5.87,3.14 7.94,5.85 1.31,3.02 6.05,0.28 6.18,2.43 -3.83,1.25 -1.23,3.54 0.21,5.47 1.81,1.95 0.33,5.72 3.64,5.82 1.14,1.28 3.49,7.44 4.01,5.38 -0.35,-2.32 -0.7,-7.86 1.61,-3.76 0.37,1.42 1.04,8.7 2.07,4.74 1.07,-4.88 3.18,0.18 2.22,2.93 3.33,1.69 -1.23,3.33 0.69,4.88 0.69,-3.24 1.31,-0.36 2.16,1.56 1.05,1 1.54,3.94 3.13,3.72 -1.68,-1.72 -2.94,-6.23 0.4,-3 2.42,2.79 4.05,2.12 2.74,-1.66 -2.65,-2.66 0.28,-4.96 2.58,-2.29 3.12,-0.05 2.84,5.21 5.28,4.53 3.31,-3.17 1.5,-7.87 0.69,-11.7 -3.3,-1.55 -7.04,-2.54 -10.22,-4.06 -1.5,-5.33 -6.29,-8.69 -8.4,-13.77 -0.44,-3.33 -4.71,-2.62 -5.75,-5.23 -2.32,-1.72 -2.7,-4.4 -4.56,-6.35 -1.65,-1.53 -5.22,0.95 -5.51,2.94 0.59,3.09 -3.23,3.04 -5.06,4.72 0.05,-4.27 -4.3,-6.15 -6.7,-9.1 -1.33,-1.99 -1.32,-5.36 -4.45,-2.34 -2.37,0.24 -6.38,-0.31 -5.34,-3.62 0.1,-27.7 0.2,-55.4 0.31,-83.09 -2.75,-1.88 -5.88,-4.17 -9.15,-4.4 -2.52,1.72 -5.07,1.09 -7.39,-0.62 -2.72,0.23 -5.12,-0.65 -7.7,-2.89 -3.08,-2.74 -8.58,0.17 -10.98,-3.65 1.13,-3.56 -3.22,-4.83 -5,-2.09 -2.09,0.26 -0.65,-4.31 -3.64,-4.93 -2.57,-2.85 -4.01,-1.28 -5.86,1.21z M36.38,480.63c-0.67,3.11 4.27,1.31 4.72,4.66 0.24,3.82 5.37,3.9 2.34,-0.08 -0.1,-3.22 -3.92,-1.83 -5.06,-4.43 -0.76,-2.02 -0.9,-1.86 -2,-0.16z m-17.16,23.16c2.57,4.06 1.45,1.37 0.13,-1.28 -0.36,0.01 0,1 -0.13,1.28z m21.84,14.81c1.27,1.79 4.99,5.58 6.22,2.03 2.26,-3.3 -3.27,-2.89 -5.23,-3.68 -1.83,-0.9 -0.88,0.54 -0.99,1.65z m91.72,18.78c0.06,3.21 2.81,-1.98 0,0z m-31.47,14.69c-3.2,2.91 -7.24,4.67 -10.56,7.38 0.22,2.75 0.99,7.64 4.67,5.15 2.5,-1.44 4.98,-2.9 7.45,-4.37 -1.84,-3.31 -0.81,-3.15 -4.55,-3.48 -4.15,0.09 1.06,-3.73 2.64,-1.62 3.74,-1.04 3.95,-2.36 1.5,-3.66 0.7,-1.08 -1,0.61 -1.16,0.59z M55.75,570.75c1.42,2.83 3.53,-1.99 0,0z m-35.78,0.34c0.53,2.46 -4.04,4.84 1.05,3.59 4.2,0.47 3.46,-4.35 0.01,-3.84 -0.35,0.08 -0.7,0.16 -1.06,0.24z m62.19,0.69c1.57,2.91 1.31,-2.03 0,0z M58.63,573.13c3.23,0.49 0.99,-3.05 0,0z m-49,0.09c-4.84,2.56 -0.44,1.81 2.29,0.58 2.89,0.16 5.05,-0.48 0.84,-1.46 -1.04,0.29 -2.08,0.58 -3.13,0.88z m7.25,1.38c1.28,0.21 -2.23,-0.59 0,0z",
			name: "Alaska"
		},
		fl: {
			path: "m748.38,439.94c1.69,2.92 1.5,6.12 1.16,9.34 -4.12,0.54 -2.15,-4.69 -5.56,-3.99 -6.18,-0.07 -12.34,1.13 -18.54,1.19 -10.09,0.29 -20.37,2.14 -30.33,0.64 -2.57,-1.57 -2.84,-6.15 -6.5,-5.33 -9.12,-0.12 -18.18,1.79 -27.26,2.55 -5.82,0.63 -11.62,1.37 -17.43,2.12 -1.42,3.25 2.6,4.37 4.06,6.34 0.8,2.28 -1.56,8.42 2.19,7.1 4.11,-1.2 8.08,-2.93 12.48,-2.72 3.34,-0.82 6.63,-0.73 9.89,0.45 4.09,0.8 7.77,3.09 11.41,4.98 1.77,1.94 5.5,1.87 5.97,5 -0.14,3.27 4.32,-0.94 6.5,0.53 3.19,-0.8 5.24,-3.68 7.69,-5.5 4.86,1.69 0.62,-2.9 3.27,-3.97 3.13,-0.83 6.62,-1.39 9.35,0.79 3.04,0.57 5.43,2 6.57,4.99 3.68,0.02 2.88,4.13 5.48,5.3 2.96,0.49 2.98,4.52 6.3,4.3 2.91,0.36 5.45,1.15 5.84,4.45 2.05,2.11 3.92,4.26 3.09,7.41 0.18,3.68 0.12,7.33 -1.44,10.75 0.39,3.68 1.37,7.94 3.28,10.78 2.25,-3.46 0.17,-3.87 -1.74,-6.03 2.19,-1.76 4.86,-0.22 7.3,0.16 0.82,3.15 -2.16,5.6 -3.48,8.19 -3.3,2.21 1.65,4.09 2.73,6.3 3.11,3.34 4.35,7.94 7.53,11.26 0.78,2.29 2.51,7.47 4.63,3.09 2.54,-0.24 3.88,3.44 5.28,5.41 -0.02,2.26 1.93,7.04 3.59,6.44 2.88,-0.8 6.04,0.65 8.28,2.59 2.56,3.3 4.58,6.98 4.56,11.27 1.37,2.73 4.55,0.44 5.81,-1.14 3.74,0.45 7.26,-1.25 9.22,-4.47 -1.01,-2.36 -0.57,-4.83 -0.32,-7.17 -0.04,-2.18 4.33,-3.19 2.25,-6.51 -0.98,-6.33 -0.19,-12.96 -1.87,-19.25 -2.46,-6.93 -7.54,-12.74 -10.4,-19.56 -1.51,-2.41 -4.24,-3.92 -4.62,-7.04 -0.94,-2.28 -2.67,-4.95 -0.07,-6.71 -0.39,-3.56 -4.86,-5.42 -6.84,-8.41 -5.38,-5.57 -8.29,-12.94 -12.35,-19.44 -2.15,-5.53 -4.29,-11.07 -5.91,-16.78 -3.43,0.07 -7.3,-1.03 -10.46,-0.35l-0.34,0.37 -0.26,0.29z m52.91,109.22c-1.9,4.58 0.72,0.38 0.66,-1.91 -0.22,0.64 -0.44,1.27 -0.66,1.91z m-4.69,9.91c2.56,-1.97 3.68,-6.84 1.04,-1.68 -0.35,0.56 -0.69,1.12 -1.04,1.68z m-2.25,2.22c1.46,-1.22 2.04,-2.07 0.18,-0.18l-0.18,0.18z m-5.72,4.16c-5.23,3.69 4.03,-2.14 0.33,-0.19l-0.33,0.19z m-10.72,3.22c-3.41,3.16 5.71,-0.32 4.1,-0.81 -1.8,-0.56 -2.56,-0.71 -4.1,0.81z m-4.59,3.16c0.08,0.16 0.4,-0.3 0,0z",
			name: "Florida"
		},
		nh: {
			path: "m862.56,94c-1.4,-0.41 -3.87,-0.72 -3.05,3 0.22,3.63 -0.73,7.84 2.23,10.59 0.33,2.78 0.08,5.36 -2.17,7.29 -0.19,2.83 -5.98,2.58 -3.35,5.32 1.16,7.35 -0.56,15.03 -0.62,22.51 1.2,1.95 0.98,4.39 0.76,6.75 -1.07,3.79 4.84,-0.05 6.89,0.06 3.93,-1.29 8.46,-1.74 12.04,-3.54 0.77,-3.1 4.37,-2.75 5.94,-4.96 2.59,-3.52 -3.01,-2.73 -2,-6.59 -3.83,0.01 -4.27,-2.46 -4.66,-5.62 -3.84,-11.98 -7.32,-24.45 -11.49,-36.1 -0.18,0.43 -0.35,0.85 -0.53,1.28z",
			name: "New Hampshire"
		},
		mi: {
			path: "M697.86,177.24L694.63,168.99L692.36,159.94L689.94,156.71L687.35,154.93L685.74,156.06L681.86,157.84L679.92,162.85L677.17,166.57L676.04,167.21L674.58,166.57C674.58,166.57 671.99,165.11 672.16,164.47C672.32,163.82 672.64,159.45 672.64,159.45L676.04,158.16L676.84,154.77L677.49,152.18L679.92,150.56L679.59,140.54L677.98,138.28L676.68,137.47L675.87,135.37L676.68,134.56L678.3,134.88L678.46,133.27L676.04,131L674.74,128.42L672.16,128.42L667.63,126.96L662.13,123.57L659.38,123.57L658.74,124.21L657.77,123.73L654.7,121.46L651.79,123.24L648.88,125.51L649.2,129.06L650.17,129.39L652.27,129.87L652.76,130.68L650.17,131.49L647.58,131.81L646.13,133.59L645.81,135.69L646.13,137.31L646.45,142.8L642.9,144.9L642.25,144.74L642.25,140.54L643.54,138.12L644.19,135.69L643.38,134.88L641.44,135.69L640.47,139.89L637.72,141.02L635.94,142.96L635.78,143.93L636.43,144.74L635.78,147.33L633.52,147.81L633.52,148.95L634.33,151.37L633.2,157.51L631.58,161.56L632.23,166.24L632.71,167.38L631.9,169.8L631.58,170.61L631.26,173.36L634.81,179.34L637.72,185.8L639.18,190.65L638.37,195.34L637.4,201.32L634.97,206.5L634.65,209.25L631.39,212.33L635.8,212.17L657.22,209.91L664.5,208.92L664.59,210.58L671.45,209.37L681.74,207.87L685.6,207.41L685.74,206.82L685.9,205.37L688,201.65L690,199.91L689.78,194.86L691.37,193.26L692.46,192.92L692.69,189.36L694.22,186.33L695.27,186.94L695.44,187.58L696.24,187.74L698.18,186.77L697.86,177.24z M581.62,82.06L583.45,80L585.62,79.2L590.99,75.31L593.28,74.74L593.74,75.2L588.59,80.34L585.28,82.29L583.22,83.2L581.62,82.06z M667.79,114.19L668.44,116.69L671.67,116.85L672.97,115.64C672.97,115.64 672.89,114.19 672.56,114.03C672.24,113.86 670.95,112.17 670.95,112.17L668.76,112.41L667.15,112.57L666.82,113.7L667.79,114.19z M567.49,111.21L568.21,110.63L570.96,109.82L574.51,107.56L574.51,106.59L575.16,105.94L581.14,104.97L583.57,103.03L587.93,100.93L588.09,99.64L590.03,96.73L591.81,95.92L593.1,94.14L595.37,91.88L599.73,89.46L604.42,88.97L605.55,90.1L605.23,91.07L601.51,92.04L600.06,95.11L597.79,95.92L597.31,98.35L594.88,101.58L594.56,104.17L595.37,104.65L596.34,103.52L599.89,100.61L601.19,101.9L603.45,101.9L606.68,102.87L608.14,104L609.59,107.08L612.34,109.82L616.22,109.66L617.68,108.69L619.29,109.99L620.91,110.47L622.2,109.66L623.33,109.66L624.95,108.69L628.99,105.14L632.39,104L639.02,103.68L643.54,101.74L646.13,100.45L647.58,100.61L647.58,106.27L648.07,106.59L650.98,107.4L652.92,106.91L659.06,105.3L660.19,104.17L661.65,104.65L661.65,111.6L664.88,114.67L666.17,115.32L667.47,116.29L666.17,116.61L665.37,116.29L661.65,115.81L659.55,116.45L657.28,116.29L654.05,117.75L652.27,117.75L646.45,116.45L641.28,116.61L639.34,119.2L632.39,119.85L629.96,120.66L628.83,123.73L627.54,124.86L627.05,124.7L625.6,123.08L621.07,125.51L620.42,125.51L619.29,123.89L618.48,124.05L616.54,128.42L615.57,132.46L612.39,139.46L611.22,138.42L609.85,137.39L607.9,127.1L604.36,125.73L602.31,123.45L590.19,120.7L587.33,119.67L579.1,117.5L571.21,116.36L567.49,111.21z",
			name: "Michigan"
		},
		vt: {
			path: "m833.16,106.59c0.19,6 4.65,11.21 3.72,17.28 -2.48,4.23 4.52,7.29 2.22,11.58 0.9,1.59 4.66,1.96 4.06,5.25 1.08,4.21 2.86,8.34 1.84,12.76 3.35,-0.51 7.06,-1.17 10.13,-1.97 -0.21,-2.13 1.51,-5.75 -0.53,-7.81 0.2,-7.64 1.01,-15.26 1.13,-22.91 -3.25,-2.41 0.32,-3.79 2.12,-5.18 1.96,-2.28 3.9,-5.07 2.6,-8.1 -2.62,-1.63 -1.02,-5.94 -2.39,-7.22 -8.3,2.1 -16.59,4.21 -24.89,6.31z",
			name: "Vermont"
		},
		me: {
			path: "m889.88,40.22c-2.16,1.31 -3.69,2.74 -4.84,4.69 -2.29,0.6 -4.99,-1.37 -4.88,-3.94 -2.97,-0.82 -3.33,3.68 -4.37,5.71 -1.09,4.29 -3.27,8.39 -3.97,12.69 -0.06,3.04 1,6.63 -1.35,9.09 0.08,2.92 -0.75,6.18 2,8.16 -1.37,5.7 -6.23,10.36 -5.41,16.56 -4.27,-2.21 -1.74,2.47 -1.09,4.73 3.51,11.08 7.19,22.16 10.25,33.35 0.21,3.01 5.81,1.35 4.53,5.7 2.9,2 2.06,-3.92 2.66,-5.87 -1.01,-3.29 2.7,-4.63 0.66,-7.62 0.94,-1.05 2.92,-5.9 4.61,-3.46 2.03,1.03 5.28,-1.89 6.74,-3.19 -0.98,-4.02 4.21,-1.75 4.73,-5.32 -1.11,-2.61 0.74,-5.45 -0.57,-7.44 -2.42,-1.59 3.53,-4.63 3.31,-0.78 2.27,0.48 2.15,2.8 3.66,3.93 1.94,-2.82 -2.15,-3.81 0.35,-6.03 2.43,-0.81 3.1,-3.96 6,-3.31 -0.17,1.46 1.03,3.34 2.26,1.38 2.94,-2.9 5.24,-7.08 9.37,-8.34 1.17,-2.61 3.34,-5.74 0.71,-8.24 -0.55,-1.64 -3.68,-4.84 -4.15,-2.58 -0.75,2.6 -4.66,-0.65 -4.92,-2.22 0.1,-2.8 0.29,-7.17 -3.8,-5.81 -3.96,1.36 -3.64,-3.04 -4.69,-5.61C905.22,58.3 902.75,50.15 900.28,42c-2.86,-1.25 -5.71,-2.92 -8.81,-3.38 -0.53,0.53 -1.06,1.06 -1.59,1.59z m20.47,61c-2.81,1.7 1.87,5.16 1.13,1.22 1.48,-0.9 0.13,-2.4 -1.13,-1.22z m-7.81,7.81c3.16,6.67 2.63,-3.59 0,0z",
			name: "Maine"
		},
		ri: {
			path: "m871,164.28c1.15,4.66 2.29,9.31 3.44,13.97 2.56,-0.49 4.66,-2.29 5.84,-4.56 4.17,0.76 4,-2.64 1.51,-4.97 -1.79,-1.94 -3.16,-5.31 -5.74,-5.92 -1.68,0.49 -3.37,0.99 -5.05,1.48z",
			name: "Rhode Island"
		},
		ny: {
			path: "m825.56,108.66c-2.7,1.12 -5.45,1.68 -8.33,1.43 -5.07,0.72 -10.17,2.73 -12.92,7.31 -2.84,3.43 -4.89,7.49 -7.18,11.2 -1.65,2.36 -5.82,3.73 -5.55,6.84 -0.17,3.56 5.77,0.73 4.43,4.38 -2.69,2.3 0.8,4.23 0.56,6.59 0.5,3.47 -4.26,1.99 -5.36,4 -1.62,2.71 -3.35,6.62 -7.22,6.05 -3.04,-0.43 -5.35,2.05 -7.98,2.63 -2.5,-0.75 -4.7,-2.05 -7.59,-1.31 -5.31,0.21 -10.62,1.98 -15.23,4.53 -0.29,1.77 0.61,6.25 3.17,6.14 1.55,2.48 2.09,4.96 -0.63,6.72 -1.51,1.76 -1.8,4.25 -4.16,5.3 -1.93,1.14 -2.68,3.51 -4.8,4.54 0.33,3.07 -0.22,7.29 4.08,5.12 22.14,-4.26 44.26,-8.68 66.23,-13.74 0.98,3.85 5.67,1.32 6.44,4 0.64,2.93 1.36,7.4 5.33,6.88 3.14,1.9 6.9,3.68 10.69,4.22 2.71,0.47 7.18,1.43 6.44,5.06 -0.33,1.97 -1.62,7.56 1.97,5.93 5.3,-1.65 10.96,-2.84 15.06,-6.85 3.23,-2.49 6.76,-4.64 9.35,-7.86 -2.99,-2.44 -4.65,0.46 -6.81,2.42 -2.91,1.56 -6.01,3.51 -9.16,4.32 -2.6,-0.63 -4.83,-0.86 -6.18,2.07 -1.03,2.04 -4.86,2.98 -3.98,-0.15 4.26,-1.87 -2.17,-3.97 -0.33,-6.21 1.19,-3.13 0.56,-6.87 0.42,-10.21 -1.43,-7.38 -3.69,-14.76 -2.54,-22.36 -0.08,-4.46 1.55,-8.97 -0.51,-13.21 -1.22,-2.56 -0.47,-6.83 -4.05,-7.34 -2.99,-0.66 0.75,-4.31 -1.57,-6.2 -1.7,-2.43 -3.17,-4.91 -1.54,-7.81 0.38,-5.77 -3.83,-10.57 -3.55,-16.35 -2.32,0.65 -4.65,1.29 -6.97,1.94z",
			name: "New York"
		},
		pa: {
			path: "m798.88,181.63c-17.5,3.38 -34.87,7.42 -52.47,10.28 -0.61,-2 0.48,-8.42 -2.41,-4.31 -2.18,2.73 -5.48,3.74 -8.09,5.97 1.52,9.75 2.63,19.57 5.44,29.05 1.14,6.09 2.27,12.17 3.41,18.26 8.85,-1.42 17.79,-2.25 26.51,-4.41 16.39,-3.45 33.03,-6.46 49.33,-9.87 2.48,-3.07 8.03,-1.69 8.97,-6.19 0.64,-2.36 4.86,-3.99 4.33,-5.9 -2.3,-1.89 -5.94,-2.77 -6.39,-6.13 -3.14,1.09 -4.42,-3.94 -3.12,-5.32 3.86,-1.1 -0.49,-3.68 0.55,-5.96 2.52,-1.88 1.12,-5.15 2.81,-7.07 3.87,-2.7 -2.98,-1.1 -3.72,-3.99 -1.35,-2.18 -0.28,-7.24 -4.16,-5.92 -2.34,-1.13 -3.87,-3.75 -7.09,-1.7 -4.64,1.07 -9.28,2.15 -13.92,3.22z",
			name: "Pennsylvania"
		},
		nj: {
			path: "m827.84,191.34c1.03,2.99 -1.82,4.8 -2.06,7.47 2.86,1.63 0.49,4.87 -0.92,5.73 -0.41,3.86 4.01,1.68 4.16,5.14 1.37,2.19 4.72,3.02 6.26,4.94 -0.15,2.61 -3.85,3.5 -4.69,6.06 -0.26,3.07 -4.09,3.19 -4.18,5.96 -0.99,2.38 -0.74,5.09 1.7,6.47 2.85,2.76 6.86,3.99 10.73,4.38 0.48,1.55 -1.84,7.18 1.1,3.59 1.5,-2.42 0.59,-5.95 3.11,-8.01 2.5,-4.08 5.03,-8.84 4.88,-13.61 -1.35,-4.07 0.8,-9.01 -1.81,-12.82 -1.1,1.32 -6.17,1.23 -4.13,-0.8 2.39,-1.39 3.37,-3.62 2.39,-6.31 0.21,-2.31 1.58,-5.42 -1.69,-6.19 -4.35,-1.15 -8.82,-2.13 -12.88,-4.26 -0.66,0.75 -1.31,1.5 -1.97,2.25z",
			name: "New Jersey"
		},
		de: {
			path: "m824.88,225.34c-3.72,0.25 -3.47,3.52 -1.91,6.13 3.35,6.89 3.86,14.58 6.03,21.81 3.45,0.11 6.81,-0.49 10.16,-1.25 -1.2,-2.17 -0.68,-6.38 -3.32,-6.38 -2.9,-1.2 -4.17,-3.69 -4.9,-6.58 -0.91,-3.11 -3.62,-4.96 -5.48,-7.35 -1.85,-1.82 0.94,-5.5 -0.26,-6.47l-0.33,0.09z",
			name: "Delaware"
		},
		md: {
			path: "m813.59,229.19c-17.31,3.18 -34.53,6.83 -51.78,10.28 0.74,3.02 1.31,6.08 1.78,9.16 2.14,-1.9 3.29,-5.35 6.59,-5.34 2.14,-1.85 2.67,-5.25 5.77,-3.55 3.46,0.18 5.43,-5.35 9.01,-3.85 2.63,1.63 5.66,2.79 7.34,5.59 4.19,0.11 3.68,3.73 5.74,4.96 2.73,1.11 5.02,1.18 6.38,-0.53 4.29,1.38 2.24,3.74 1.44,6.9 0.09,2.97 -3.7,4.92 -1.66,7.97 3.1,1.31 6.4,1.2 9.63,1.4 2.17,1.58 6.83,1.03 3.79,-2.1 0.41,-2.74 -3.08,-3.35 -3.32,-6.04 -1.7,-2.67 -1.42,-5.47 -0.36,-8.32 1.68,-2.42 -2.83,-3.82 -0.4,-5.41 1.25,-1.53 0.43,-4.16 2.98,-4.7 1.62,-3.02 5.1,-1.45 2.35,1.02 -2.54,2.98 -0.81,4.5 0.57,6.3 1.41,3.55 -0.68,5.07 -1.53,7.31 -0.22,-0.81 3.62,-1.01 3.22,1.79 -3.15,1.64 -1.45,6.12 1.09,7.31 2.98,0.99 5.58,-1.8 6.98,2.14 1.5,3.75 4.92,0.81 7.41,-0.02 2.74,-1.21 3.47,-4.93 2.78,-7.7 -1.13,-1.58 -4.82,0.92 -7.13,0.4 -3.86,1.26 -4.9,-1.25 -5.28,-4.64 -1.68,-5.97 -2.14,-12.33 -5.16,-17.9 -0.04,-4.32 -2.71,-4.2 -6.07,-2.91 -0.73,0.16 -1.45,0.31 -2.18,0.47z m10.94,32.59c1.32,0.99 0.59,4.97 2.06,4.63 -0.48,-1.31 -0.36,-4.99 -2.06,-4.63z",
			name: "Maryland"
		},
		va: {
			path: "m792.88,242.88c-0.16,1.46 0.24,5.89 -2.4,4.29 -2.58,-0.67 -6.42,-3.2 -8.23,-2.73 0.7,3.72 -1.46,6.77 -2.99,9.94 -3.05,1.14 -2.29,5.83 -5.84,5.58 -1.62,1.74 -1.47,5.31 -2.45,7.73 -3.09,1.14 -5.37,-0.48 -7.28,-1.75 0.11,6.5 -3.72,11.95 -5.91,17.84 -1.69,1.73 1.19,3.8 -0.74,5.77 -1.35,3.56 -3.79,2.72 -6.19,4.19 -2.72,1.1 -4.9,0.5 -5.4,4.61 -2.07,1.14 -4.83,2.63 -6.91,0.47 -2.38,1.51 -5.02,3.21 -7.81,1.6 -2.69,-0.01 -3.9,-6.55 -6.07,-2.94 -3.27,4.09 -7.89,7.48 -10.21,12.09 0.43,3.25 -4.46,3.32 -6.42,5.15 -4.27,1.95 3.62,-0.11 5.16,-0.07 5.56,-0.79 11.14,-1.37 16.76,-1.36 1.95,-2.65 4.98,-1.81 7.77,-1.65 7.86,-0.32 15.65,-2.12 23.48,-2.99 12.85,-1.4 25.44,-4.27 38.04,-7.05 11.65,-2.52 23.3,-5.03 34.96,-7.55 -1.64,-2.66 -2.75,-6.67 -6.42,-4.14 -1.99,2.03 -6.61,-1.82 -2.7,-2.48 2.65,-1.62 -1.75,-4.07 -1.8,-5.97 -2.73,-0.62 -2.88,-5.12 0.54,-3.6 -0.17,-1.37 -1.24,-3.62 -1.62,-5.68 1.47,-3.51 -0.84,-4.97 -3.72,-5.16 0.31,-3.42 -2.9,-2.93 -5.22,-3.97 -3.33,0.21 -7.06,-0.25 -9.91,-1.66 -1.22,-2.41 -0.91,-5.12 1.25,-6.88 1.39,-2.83 -0.28,-5.7 -3.3,-6.27 -2.65,-0.83 -6.97,-0.29 -5.73,-4.3 -0.83,-0.3 -2.05,-1.06 -2.69,-1.06z m39.16,21.59c0.44,4.71 -3.15,8.7 -2.62,13.48 -0.34,4.11 2.64,5.72 3.48,0.92 1.71,-3.04 -0.23,-6.47 0.8,-9.73 0.4,-2.53 3.66,-3.88 3.52,-6.73 -1.73,0.69 -3.46,1.38 -5.19,2.06z",
			name: "Virginia"
		},
		wv: {
			path: "m739.75,223.25c-1.6,2.23 1.3,5.02 0.25,7.75 -0.18,4.04 -0.63,8.11 -0.84,12.13 -1.94,3.58 -4.43,7.35 -8.16,9.13 -3.15,-1.33 -3.92,3.25 -5.76,4.98 -1.56,2.28 2.64,4.93 -0.3,6.69 -2.57,3.58 -2.6,-4.8 -4.46,-0.71 -1.32,2.59 0.02,6.02 -1.35,8.33 -1.82,1.54 -0.53,5.19 -4.16,4.81 -2.23,0.13 -1.45,6.19 1,6.81 2.24,1.47 2.49,4.74 5.5,5.92 1.92,1.96 2.28,5.18 5.39,6.05 1.64,2.19 3.07,4.96 6.25,4.88 2.63,0.5 4.77,-3.86 7.22,-1.35 1.49,0.81 3.93,-0.57 4.58,-1.83 0.43,-4.57 3.42,-2.71 6.03,-4.39 2.39,-0.94 4.82,-0.98 5.62,-4.44 -1.26,-2.59 0.3,-5 1.56,-7.64 2.23,-4.81 4.72,-9.61 4.67,-15.05 2.65,-2.31 3.72,3.56 7.05,1.41 1.64,-1.77 1.12,-5.67 2.6,-7.59 3.47,0.39 2.97,-3.96 5.76,-5.21 2.29,-3.11 3.52,-6.8 3.06,-10.7 1.06,-1.29 5.1,1.62 7.23,2.15 3.3,3.35 4.34,-1.98 2.85,-4.05 -2,-2.28 -5.12,-3.7 -7.62,-4.75 -3.31,0.98 -5.44,5.47 -9.38,3.97 -1.86,-0.23 -2.38,3.98 -4.86,3.88 -2.89,0.71 -3.79,4.38 -6.03,6.22 -1.1,-0.06 -0.99,-4.82 -1.62,-6.64 -0.01,-3.93 -1.77,-5.3 -5.48,-3.82 -4.21,0.6 -8.41,1.23 -12.61,1.91 -1.17,-6.45 -2.29,-12.92 -3.44,-19.38l-0.35,0.35 -0.18,0.18z",
			name: "West Virginia"
		},
		oh: {
			path: "m729.5,197.78c-4.85,2.06 -7.38,6.9 -11.47,9.97 -4.08,0.86 -8.09,1.75 -11.72,3.88 -3.41,1.61 -4.39,-4.09 -7.67,-2.63 -3.13,1.35 -5.49,-1.1 -8.11,-2.41 -8.6,1.15 -17.15,2.64 -25.66,4.38 1.45,17.83 4.12,35.53 5.87,53.33 -0.69,3.82 4.06,2.26 6.23,1.48 2.74,0.41 4.83,2.16 5.48,4.94 1.26,2.48 5.82,-0.87 6.96,2.54 2.19,1.53 4.46,-2.33 7.03,-0.58 2.52,0.04 5.62,1.51 6.84,-1.56 1.49,-0.55 5.37,-3.85 5.41,-0.71 0.38,2.53 3.82,3.57 5.77,4.7 3.53,0.63 2.32,-3.91 4.21,-5.51 -0.11,-2.74 0.21,-5.73 1.39,-8.13 2.53,-2.81 3.8,4.53 4.98,0.39 -2.02,-2.27 -0.99,-5.41 0.93,-7.41 1.07,-4.06 4.05,-2.41 6.5,-4.39 2.93,-3.16 6.59,-6.57 5.97,-11.27 0.44,-4.71 1.18,-9.75 -0.53,-14.23 1.47,-2.48 2.58,-4.29 0.96,-7.33 -2.04,-7.53 -2.56,-15.37 -3.93,-23.04 -1.81,1.2 -3.63,2.4 -5.44,3.59z",
			name: "Ohio"
		},
		"in": {
			path: "m658.66,210.31c-9.12,0.93 -18.35,1.98 -27.41,2.68 -2.6,0.39 -4.21,5.08 -6.89,2.98 -3.83,-2.84 -2.64,1.83 -2.41,4.45 1.1,14.81 2.73,29.61 3.44,44.42 -0.76,3.69 -1.39,7.89 1.36,10.91 0.1,2.99 1.4,6.28 -1.14,8.65 -1.83,2.73 -2.55,6.09 -5.02,8.42 0.09,2.08 -2.02,8.2 1.63,5.16 3.49,-0.6 7.25,-1.53 10.69,-1.34 2.36,4.08 2.67,-0.62 5.26,-1.29 2.03,-2.62 4.78,2.05 5.34,1.04 -1.26,-3.41 3.05,-3.77 5.1,-5.22 1.09,0.63 6.05,3.38 5.3,-0.64 -0.46,-2.47 2.02,-4.71 3.65,-6.34 3.11,-1.39 4.33,-3.9 4.16,-7.23 1.83,-1 4.93,-1.01 6.97,-2.47 4.23,-1.03 0.26,-3.48 1.22,-5.92 -0.83,-12.56 -2.8,-25.13 -4.08,-37.69 -0.85,-6.99 -1.44,-14.01 -2.14,-21.02 -1.68,0.16 -3.35,0.31 -5.03,0.47z",
			name: "Indiana"
		},
		il: {
			path: "m569.75,200.44c-0.29,2.58 4.2,1.83 3.73,5.07 2.07,2.09 5.71,4.21 4.38,7.77 -0.31,3.04 -2.61,5.44 -3.08,8.4 -2.38,2.71 -6.06,2.98 -9.31,3.94 -1.61,2.47 -1.05,4.91 1.28,6.47 0.63,3.25 -1.08,5.07 -2.74,7.38 1.41,3.63 -2.39,2.86 -3.56,5.02 1.08,3.12 -2.11,3.8 -2.53,6.64 0.19,3.95 1.33,8.21 3.28,11.58 3.68,3.96 7.38,7.9 12.21,10.47 -0.61,2.88 -0.64,6.7 3.43,5.71 2.05,0 6.18,0.38 6.26,2.68 -0.19,4.39 -3.6,8.24 -3.28,12.53 1.6,3.83 5.33,6.26 8.59,8.42 3.37,-0.29 5.36,1.27 5.9,4.6 1.01,2.64 3.84,4.73 1.73,7.67 0.55,1.74 2.58,7.7 4.31,4.05 1.21,-2.98 5.41,-4.78 8.07,-2.46 3.1,2.46 5.94,0.47 3.13,-2.8 -0.98,-3.39 2.61,-4.96 5.37,-5.33 1.01,-1.55 -1.6,-4.46 1.4,-5.97 1.8,-3.97 -0.56,-9.39 3.32,-12.49 1.43,-2.97 3.23,-5.97 4.4,-8.97 0.13,-3 -0.7,-5.7 -2.34,-8.16 -0.45,-4.59 1.31,-9.09 0.02,-13.65 -1.16,-15 -2.22,-30.05 -3.67,-45.01 -1.02,-3.1 -1.61,-6.46 -4.04,-8.77 -2.27,-1.83 -0.51,-5.93 -1.97,-7.32 -14.76,0.83 -29.52,1.67 -44.28,2.5z",
			name: "Illinois"
		},
		ct: {
			path: "m865.78,165.41c-6.91,1.54 -13.81,3.08 -20.72,4.63 2.17,6.2 2.74,12.83 2.44,19.34 -2.62,4.3 2.61,2.38 3.97,-0.21 2.09,-1.89 4.19,-3.71 5.99,-5.88 2.06,1.35 4.78,-1.86 7.44,-1.46 2.98,-0.68 5.69,-2.24 8.56,-3.26 -1.15,-4.67 -2.29,-9.33 -3.44,-14 -1.42,0.28 -2.83,0.56 -4.25,0.84z",
			name: "Connecticut"
		},
		wi: {
			path: "m559.53,104.97c-4.06,2.75 -8.71,4.92 -13.53,5.84 -2.88,-1.08 -5.54,-1.12 -5.57,2.68 -0.48,3.34 0.51,7.03 -0.47,10.17 -2.02,3.26 -6.91,4.03 -7.36,8.38 -2.63,2.78 2.21,3.06 2.23,5.53 1.79,2.9 -2.13,4.74 -1.33,7.65 0.29,2.93 -0.4,6.49 1.14,8.93 1.33,3.48 5.88,0.21 6.64,3.93 1.56,2.26 5.47,1.03 6.19,4.78 2.15,5.1 9.7,4.85 11.21,10.39 0.68,3.38 0.35,7.34 1.94,10.32 3.26,1.05 1.94,4.34 0.25,6.21 -0.79,3.96 2.53,8.34 6.75,8.25 2.28,1.6 4.86,1.65 7.83,1.19 13.03,-0.77 26.07,-1.53 39.1,-2.3 -0.02,-4.45 -1.98,-8.61 -1.86,-13.13 -1.7,-2.04 -0.86,-4.17 -0.04,-6.39 0.32,-2.84 3.07,-4.93 1.51,-7.87 -1.05,-2.94 -0.88,-6.21 1.73,-8.27 -0.2,-2.83 -0.5,-5.03 -0.16,-7.93 -1.14,-4.2 2.64,-7.5 3.69,-11.36 0.92,-1.13 3.15,-8.34 0.73,-4.93 -2.65,3.81 -4.99,8.01 -8.18,11.29 -0.86,2.06 -3.21,4.55 -5.21,4.5 -2.57,-1.26 0.28,-4.49 0.9,-6.41 0.47,-2.94 3.2,-4.25 4.09,-6.85 -3.31,-1.29 -2.77,-5.03 -3.54,-7.92 0.02,-3.09 -1.23,-5.08 -4.29,-5.57 -2.14,-3.67 -7.04,-2.78 -10.59,-4.12 -7.13,-1.87 -14.21,-4.39 -21.67,-4.99 -2.48,-0.54 -2.84,-5.51 -5.51,-4.73 -1.71,-1.54 -3.85,-0.7 -5.82,0.13 -2.8,-1.32 0.68,-4.59 1.5,-6.38 2.18,-1.34 -1.53,-2.14 -2.31,-1z",
			name: "Wisconsin"
		},
		nc: {
			path: "m830.06,295.97c-18.3,3.8 -36.53,8 -54.86,11.65 -12.74,1.51 -25.38,4.07 -38.18,4.94 -3.32,-0.82 -1.17,3.72 -2.5,5.53 -2.62,1.34 -3.49,4.59 -5.03,6.38 -3.24,-1.36 -5.07,1.46 -6.34,3.97 -1.09,-0.57 -2.96,0.03 -3.41,-1.41 -2.02,1.96 -4.37,3.73 -4.31,6.81 -3.66,1.1 -6.31,3.82 -9.28,5.96 -2.64,0.94 -5.76,2.16 -7.4,4.35 0.73,4.06 -2.98,3.3 -5.1,5.29 -1.98,4.69 2.74,2.66 5.58,2.5 6.41,-1.19 13.32,-0.49 19.18,-3.73 5.04,-1.9 9.41,-5.9 15.06,-5.67 6.5,-0.64 13.15,-0.6 19.62,-0.69 2.99,0.53 3.36,4.79 5.58,5.01 5.37,-0.81 10.87,-1.67 16.25,-1.79 5.38,1.36 9.61,5.45 14.52,7.93 3.59,2.64 6.93,5.66 10.43,8.44 3.15,-0.86 6.32,-1.58 9.59,-1.72 1.06,-4.55 2.04,-9.29 5.39,-12.78 4.2,-4.27 9.23,-8.29 15.33,-9.29 2.91,1.95 3.69,-2.9 5.27,-4.53 2.72,-5 -2.44,3.91 -2.46,-1.22 -3.87,0.7 -5.43,-0.26 -3.29,-4 2.77,-4.25 -2.73,-2.51 -2.12,-6.02 -1.42,-3.76 2.84,2.19 5.06,0.81 2.81,0.12 5.1,-1.87 5.59,-4.6 0.45,-2.9 4.59,-2.7 3.28,-6.48 -4.02,-2.43 4.25,-0.66 0.4,-3.93 -3.52,-3.44 -5.24,-8.33 -7.23,-12.76 -1.54,0.35 -3.08,0.71 -4.63,1.06z m17.13,23.72c1.55,2.61 -4.64,4.26 -0.52,2.69 1.38,-1.92 0.21,-5.22 0.24,-7.62 -0.74,-2.05 0.37,4.57 0.28,4.94z",
			name: "North Carolina"
		},
		dc: {
			path: "m803.44,248.16c2.67,3.43 3.85,-1.02 0.55,-0.75l-0.29,0.4 -0.25,0.35z",
			name: "District of Columbia"
		},
		ma: {
			path: "m877.59,144.41c-1.04,3.1 -4.01,3.5 -6.79,4.13 -8.62,2.32 -17.17,4.6 -25.96,6.12 -0.11,4.77 -1.17,9.59 -0.03,14.31 10.66,-2.6 21.54,-4.29 32,-7.44 3.57,2.81 6.01,6.73 8.28,10.59 2.13,-0.78 0.01,-5.15 3.77,-5.38 2.93,-3.28 1.83,4.78 3.17,2.62 2.13,-3.09 6.1,-3.9 9.41,-5.21 -0.11,-3.41 -2.21,-8.55 -6.38,-7.53 1.64,-0.1 4.89,0.87 4.91,3.82 0.85,2.24 -2.55,3.71 -4.35,4.24 -3.37,0.51 -4.99,-1.76 -6.32,-4.47 -1.38,-2.05 -3.58,-6.56 -6.3,-3.6 -1.89,-1.72 -3.13,-4.04 -1.33,-6.3 2.3,-2.34 1.23,-6.2 -1.28,-7.16 -0.93,0.41 -1.86,0.82 -2.79,1.24z M902.25,172.69c-1.6,2.76 3.05,-2.44 0.08,-0.32l-0.08,0.32z m-11.28,1.28c1.59,0.78 6.09,-2.26 1.78,-2.03 -0.59,0.68 -1.19,1.35 -1.78,2.03z",
			name: "Massachusetts"
		},
		tn: {
			path: "m730.41,314.34c-8.87,-0.11 -17.76,1.5 -26.57,2.73 -10.24,2.86 -20.99,2.66 -31.48,4.02 -16.34,1.45 -32.65,3.29 -48.96,4.95 -4.57,-1.71 -0.43,5.74 -5.06,4.14 -6.97,0.06 -13.87,1.23 -20.84,0.71 -0.95,4.26 -1.37,9.04 -3.6,12.76 -3.45,1.82 -4.01,5.81 -4.43,9.33 -3.1,1.1 -4.68,2.61 -2.53,5.59 -1.75,3.9 -0.58,5.24 3.51,3.98 33.91,-3.26 67.83,-6.53 101.74,-9.79 -0.23,-2.54 0.72,-5.31 3.53,-5.69 3.11,-0.4 0.99,-5.41 4.88,-5.81 2.77,-2.02 6.49,-2.19 8.62,-5.18 1.76,-2.26 6.31,-1.64 5.78,-5.38 1.19,-1.77 3.1,-3.84 5.03,-4.85 1.04,-0.39 0.28,1.78 1.72,1.19 2.38,0.56 2.2,-4.36 5.22,-3.86 3.3,1.27 2.68,-2.92 4.96,-4.18 2.05,-0.94 3.81,-6.68 0.92,-6.59 -0.81,0.64 -1.63,1.27 -2.44,1.91z",
			name: "Tennessee"
		},
		ar: {
			path: "m509.47,335.31c1.73,4.9 1.5,10.02 1.53,15.12 2.15,12.21 1.13,24.64 1.47,36.97 0.02,3.71 0.04,7.42 0.06,11.13 2.06,3.2 5.05,-1.45 7.69,1.47 1.53,1.76 -0.88,7.54 2.97,6.49 17.61,-0.36 35.23,-0.72 52.84,-1.08 1.97,-2.6 0.41,-5.9 -1.28,-8.22 3.3,-1.61 -1.59,-3.96 0.84,-6.53 0.75,-2.77 0.62,-6.34 3.78,-7.69 -1.88,-3.07 2.08,-5.24 3.19,-7.88 3.77,-0.38 1.58,-3.3 2.64,-5.42 1.12,-2.67 2.56,-5.28 4.85,-6.58 1.2,-4.12 0.21,-2.67 -1.53,-5.61 -2.76,-3.32 1.95,-3.96 2.36,-6.84 -0.05,-1.94 3.31,-6.69 1.22,-6.75 -2.65,0.85 -5.34,-0.18 -8.02,-0.33 -0.09,-3.38 4.4,-3.88 4.22,-7.3 0.58,-3.87 -3.58,-3.68 -6.34,-3.26 -24.17,0.77 -48.34,1.54 -72.5,2.31z",
			name: "Arkansas"
		},
		mo: {
			path: "m490.44,245.63c-2.39,-0.46 -0.19,4.05 0.07,5.6 2.45,3.32 4.51,7.86 8.55,9.22 2.81,-0.24 3.61,2.67 2.79,4.84 -3.22,1.64 -1.72,5.03 0.19,7.07 0.9,2.55 4.61,3.05 4.89,5.61 2.1,12.97 1.12,26.14 1.51,39.22 0,5.72 0.08,11.44 0.72,17.13 24.99,-0.94 49.98,-1.8 74.97,-2.51 3.02,-1.12 4.35,1.72 5.31,3.98 0.52,3.48 -2.86,4.46 -4.14,6.86 2.37,0.64 5.57,0.65 8.21,-0.08 1.46,-3.59 1.87,-7.45 2.38,-11.22 0.84,-2.83 5.27,-2.89 4.61,-6.03 1.37,-2.94 0.14,-4.6 -2.22,-4.28 -2.15,-1.81 -2.84,-5.03 -2.86,-7.6 1.45,-2.84 -2.08,-5.07 -2.44,-7.89 -0.66,-3.24 -5.34,-0.87 -6.89,-3.66 -2.64,-2.34 -6.24,-3.94 -6.91,-7.76 -0.94,-3.21 1.52,-6.47 2.17,-9.64 2.2,-3.53 -1.34,-4.7 -4.33,-4.5 -2.66,0.39 -5.34,-1.15 -4.81,-4.1 0.86,-4.07 -4.71,-4.05 -6.43,-6.93 -2.7,-3.4 -6.72,-6.05 -7.25,-10.67 -1.1,-3.16 -2.12,-6.86 -0.62,-10.06 -2.3,-1.34 -2.28,-5.77 -5.37,-4.89 -20.69,0.77 -41.38,1.53 -62.06,2.3z",
			name: "Missouri"
		},
		ga: {
			path: "m672.78,356c-0.74,7.06 4.28,12.69 5.29,19.4 1.36,6.57 3.44,12.96 5.03,19.44 0.94,4.88 2.17,9.95 5.53,13.75 -0.85,3.5 3.37,3.17 2.59,6.44 -1.89,4.45 -3.57,9.65 -0.84,14.13 0.05,2.63 0.94,5.4 -0.38,7.88 2.95,0.94 1.45,4.01 3.07,6.01 1.35,2.67 3.68,4.75 6.83,4 12.35,-0.01 24.69,-1.31 37.03,-1.92 3.32,-0.58 6.67,-0.74 10.04,-0.59 -0.78,4.24 3.04,4.15 2.09,-0.09 -0.9,-2.14 -2.94,-6.23 0.59,-6.62 3.2,0.5 6.42,0.91 9.66,1.02 -0.84,-3.8 -0.8,-7.57 0.5,-11.27 0.2,-3.54 2.62,-6.73 2.21,-10.21 -0.72,-2.93 3.26,-5.26 2.85,-8.05 -2.19,1.37 -5.29,-0.71 -5.34,-3.19 -0.56,-3.12 -2.71,-5.83 -6.03,-6.06 -1.33,-3.9 -2.62,-8.17 -4.99,-11.43 -3.12,-1.07 -6.13,-2.99 -7.17,-6.29 -2.06,-2.33 -5.23,-3.21 -6.66,-6.16 -2.08,-2.2 -5.24,-2.83 -7.66,-4.19 -0.76,-2.53 -3.21,-4.09 -3.94,-6.67 -1.36,-2.63 -2.97,-4.65 -6.15,-3.77 -2.33,-1.57 -7.15,-3.38 -5.31,-6.97 2.02,-2.01 3.76,-4.11 -0.8,-3.11 -12.68,1.51 -25.37,3.01 -38.05,4.52z",
			name: "Georgia"
		},
		sc: {
			path: "m737.03,343.19c-4.26,0.4 -8.64,0.43 -12.24,3.07 -3.2,1.75 -6.48,3.19 -9.88,4.49 2.21,3.31 -4.28,2.74 -2.34,6.44 2.27,2.24 5.2,4.13 8.5,3.28 2.53,3.15 3.83,6.94 6.53,9.88 0.91,2.76 5.13,2.06 6.85,4.46 2.18,1.38 2.96,4.25 5.62,5.01 2.99,1.95 3.36,6.38 7.26,7.24 3.61,0.62 3.77,4.77 5.34,7.38 0.38,3.35 2.02,4.84 4.79,5.96 3.36,1.79 1.76,7.23 5.67,8.16 3.63,-1.38 5.8,-4.63 8.38,-7.34 -2.35,-3.93 0.29,-3.32 3.01,-4.44 1.95,-2.4 5.02,-3.3 6.25,-6.28 2.17,-2 3.86,-4.52 5.4,-6.9 2.81,-0.17 3.42,-3.58 4.92,-5.03 -0.28,-4.13 1.3,-7.89 3.12,-11.47 1.03,-2.11 7.03,-4.5 3.47,-6.34 -5.97,-5.35 -12.78,-9.5 -19.71,-13.47 -4.45,-2.68 -9.74,-0.07 -14.57,-0.06 -2.57,-0.23 -6.63,2.48 -7.32,-1.28 -1.66,-4.5 -6.93,-2.82 -10.63,-2.96 -2.8,0.07 -5.61,0.14 -8.41,0.21z",
			name: "South Carolina"
		},
		ky: {
			path: "m675,267.5c-2.76,-0.77 -6,1.11 -3.38,3.78 1.52,3.15 -3.12,4.12 -5.19,5.27 -2.94,0.53 -4.71,1.29 -4.3,4.82 -1.15,2.66 -5.3,3.24 -6.32,6.32 -2.16,1.4 0.74,6.22 -2.84,5.92 -3.06,0.61 -4.36,-2.79 -7.09,0.11 -2.26,0.51 -1.1,6.98 -3.85,3.1 -2.27,-2.54 -5.57,0.14 -6.16,2.81 -1.91,1.07 -3.4,-3.73 -6.02,-1.91 -3.32,0.61 -7.48,0.47 -9.92,2.91 0.08,2.65 -3.39,3.78 -1.7,6.05 2.34,2.66 -2.23,2.68 -3.86,3.3 -3.57,1.35 -0.68,4.35 -0.76,6.72 0.33,3.45 -3.76,1.44 -5.49,0.72 -2.5,-2.29 -6.26,-0.38 -7.13,2.53 2.86,2.28 -0.04,4.76 0.41,7.66 -3.47,2.04 -3.19,2.73 0.94,2.35 5.84,0.01 11.64,-0.95 17.5,-0.76 -0.7,-3.74 0.98,-4.99 4.56,-4.19 24.33,-3.01 48.82,-4.7 73.16,-7.43 4.3,-0.7 8.2,-2.38 11.75,-4.88 3.3,-0.8 4.04,-2.71 5.12,-5.35 3.46,-4.09 7.13,-8.06 10.79,-12 -3.27,-1.24 -3.03,-5.51 -6.21,-6.95 -2.6,-1.25 -2.07,-4.66 -5.16,-5.36 -2.38,-2.64 0.8,-7.28 -3.02,-8.87 -3.02,-0.01 -2.37,-4.65 -4.57,-3.51 -2.95,0.61 -3.67,4.78 -7.02,3.29 -2.69,-0.23 -5.51,-1.19 -7.82,0.71 -3,0.83 -3.99,-3.61 -7.44,-2.06 -3.51,0.82 -2.17,-5.19 -5.65,-5.26C677.17,266.43 676.21,267.17 675,267.5z",
			name: "Kentucky"
		},
		al: {
			path: "m628.53,359.63c-0.2,14.37 0.12,28.75 -0.54,43.12 -0.04,9.01 -0.88,18.1 -0.07,27.07 1.55,10 2.94,20.01 3.85,30.09 3.07,1.09 3.69,-1.92 4.4,-4.18 -0.3,-3.89 4.27,-3.02 4.89,-0.04 0.72,2.06 4.08,5.27 0.77,6.65 -0.15,0.92 6.17,-0.9 5.88,-2.89 -0.44,-3.01 0.64,-6.86 -2.87,-8.19 -2.29,-0.88 -3.03,-5.59 -0.32,-5.67 14.08,-1.86 28.21,-3.59 42.35,-4.8 2.7,1.07 6.76,-0.25 2.97,-2.5 -1.8,-2 0.95,-5.03 -0.27,-7.65 -0.31,-3.1 -2.63,-5.9 -1.31,-9.15 0.01,-2.92 2.49,-5.36 1.93,-8.3 -3.52,-0.45 -1.34,-5.11 -4.26,-6.7 -3.48,-5.82 -3.36,-13.04 -5.96,-19.21 -2.02,-8.09 -3.34,-16.41 -7.25,-23.88 -0.51,-2.39 -1.08,-4.85 -0.72,-7.31 -14.49,1.18 -28.98,2.35 -43.47,3.53z",
			name: "Alabama"
		},
		la: {
			path: "m521.09,407.28c0.1,7.53 -0.24,15.32 1.67,22.61 2.08,2.49 2.82,5.51 3.15,8.67 1.87,2.78 5.27,4.95 4.59,8.72 1.61,2.18 -0.21,5.69 0.08,8.38 0.42,2.64 -4.36,4.89 -2.01,7.12 1.07,2.26 -0.92,5.31 -0.53,7.95 0.38,3.22 -2.37,5.7 -1.55,8.93 5.18,-2.4 10.98,-0.86 16.47,-1.09 5.72,1.7 11.56,4.87 17.56,4.26 2.93,-2.25 5.94,0.36 8.98,0.93 1.08,-3.4 -4.22,-0.81 -5.8,-2.2 -1.91,-0.36 -2.89,-2.3 -1.17,-3.4 2.08,-1.1 4.08,-1.09 5.66,0.04 2.15,-1.39 5.6,-0.24 6.26,2.38 -0.33,3.62 3.42,1.7 5.28,3.15 3.83,1.5 -1.41,4.07 0.83,5.37 2.88,0.97 5.73,2.94 8.62,3.29 3.51,-0.05 2.81,-4.53 6.47,-4.17 1.83,-2.9 4.44,-0.25 4.39,2.31 1.53,1.64 4,-3.68 1.98,-3.66 0.22,-3.37 2.17,-3.21 4.31,-5.41 1.59,0.95 0.91,2.82 1.41,4.16 3.33,0.39 7.44,1.09 9.34,4.06 2.79,0.08 5.17,1.1 5.56,-2.56 -2.68,-0.27 -4.15,-3.88 -7.35,-3.19 -2.31,0.06 -6.3,-1.62 -6.15,-3.77 1.62,-3.62 2.23,-1.74 2.03,-4.38 2.88,1.09 5.69,-2.27 3.22,-4.47 0.46,-4.62 -3.73,-0.15 -3.34,2.19 -1.36,1.21 -6.35,-0.96 -4.6,-3.27 1.71,-1.84 4.2,-4.5 2.19,-6.95 -0.13,-3.26 -2.69,-5.21 -4.47,-7.38 0.52,-2.7 2.26,-7.35 -2.36,-5.46 -10.43,1.28 -20.97,0.69 -31.45,1.12 -1.61,-3.72 -0.02,-7.76 0.16,-11.59 2.66,-4.86 5.46,-9.65 8.25,-14.44 -2.04,-2.82 3.52,-4.45 -0.74,-6.48 -0.53,-2.15 -1.29,-4.65 -2.32,-6.83 -0.08,-3.1 0.9,-7.3 -3.62,-5.79 -17,0.28 -34,0.57 -51,0.85z",
			name: "Louisiana"
		},
		ms: {
			path: "m591.03,363.5c-1.45,1.74 -4.03,3.15 -4.63,6.03 -1.4,2.22 1.43,5.74 -2.69,6.07 -1.48,1.97 -4.77,4.42 -3.4,7.17 -1.36,1.83 -3.59,3.95 -3.48,7.01 -2.16,2.66 1.55,5.28 -0.27,7.12 -0.45,1.84 2.25,4.42 1.35,7.03 -1.92,2.71 -1.63,6.55 -0.61,9.53 1.6,2.4 0.78,5.54 3.73,6.94 -0.95,2.53 -1.41,3.75 -1.87,6.31 -2.55,4.96 -6.07,9.62 -7.89,14.84 0.01,2.98 -1.44,6.14 -0.14,8.97 11.4,-0.36 22.87,0.25 34.19,-1.5 2.75,2.21 -2.19,6.39 1.33,8.15 2.82,1.62 2.28,5.18 3.89,7.63 2.07,-1.86 2.51,-6.19 5.82,-4.07 3.21,-0.67 6.85,-3.02 9.89,-0.64 3.62,0.73 6.01,-0.27 4.42,-4.26 -0.81,-10.1 -2.99,-20.07 -3.84,-30.15 0.14,-21.99 1.48,-43.98 0.64,-65.97 -12.15,1.26 -24.29,2.52 -36.44,3.78z",
			name: "Mississippi"
		},
		ia: {
			path: "m476.25,181.16c-3.42,-0.05 -2.16,5.68 0.72,6.29 0.54,2.07 -0.75,5.06 -1.41,7.35 -2.13,2.82 -0.93,5.45 1.04,7.92 1.22,4.34 2.24,8.85 4.05,13.06 0.6,3.22 1.29,6.38 3.41,9 0.02,3.49 1.27,6.69 2.3,9.91 -0.04,3.54 0.03,7.05 2.08,10.09 22.2,-1.02 44.44,-1.75 66.66,-2.63 0.77,1.43 3.25,7.11 4.37,4.25 -0.96,-2.5 1.19,-4.52 3.57,-4.72 -0.88,-2.62 1.19,-4.59 2.5,-6.28 1.27,-2.92 -1.39,-4.02 -2.41,-6.31 0.69,-2.9 1.79,-5.3 5.13,-5.46 2.88,-0.83 6.57,-1.81 6.65,-5.41 1.76,-3.04 3.73,-8.01 -0.26,-10.18 -2.74,-1.06 -1.75,-5.27 -5.21,-5.14 -0.64,-1.97 -0.85,-4.76 -4.19,-4.21 -2.75,-0.8 -4.55,-3.47 -5.37,-6 -1.36,-2.89 2.01,-4.72 1.65,-7.28 -3.82,-0.4 -1.19,-6.5 -5.03,-5.47 -26.75,0.41 -53.5,0.81 -80.25,1.22z",
			name: "Iowa"
		},
		mn: {
			path: "m497.03,53.84c-0.69,2.52 0.93,7.42 -1.31,8.34 -9.65,-0.01 -19.29,-0.02 -28.94,-0.03 1.16,2.87 2.18,5.76 0.97,8.81 0.05,5.74 -0.79,11.86 2.51,16.95 2.04,3.78 0.64,8.47 1.5,12.6 0.82,6.84 1.76,13.67 3.55,20.32 0.05,3.83 0.88,7.8 0.03,11.53 -1.57,1.74 -4.91,3.29 -2.22,5.78 1.89,1.83 5.05,2.94 4.58,6.1 0.28,11.9 0.25,23.83 0.42,35.75 26.72,-0.38 53.44,-0.75 80.16,-1.13 -0.15,-3.62 -0.46,-7.93 -4.36,-9.47 -3.02,-1.66 -6.24,-3.1 -7.63,-6.5 -0.72,-3.61 -5.32,-1.16 -6.05,-4.61 -1.56,-2.09 -5.29,-0.37 -6.57,-3.78 -1.66,-2.1 -0.52,-5.5 -1.1,-8.1 -1.34,-2.93 1.65,-4.99 1.47,-7.54 -0.2,-3.22 -5.36,-3.85 -2.24,-7.43 0.41,-4.47 5.39,-5.33 7.61,-8.59 0.24,-3.87 -0.73,-8.14 0.52,-11.77 1.76,-3.14 5.17,-5.1 8.28,-6.26 1.92,-2.08 3.66,-4.57 6.13,-5.81 2.54,-4.97 6.04,-9.99 11.81,-11.4 4.55,-1.98 9.12,-3.92 13.6,-6.04 0.73,-3.15 -3.7,-0.18 -5.06,0.03 -0.82,-3.87 -4.2,-3.09 -7.28,-2.87 -2.25,-0.87 -5.34,2.83 -6,-0.66 -1.13,-3.5 -4.51,0.72 -5.88,2.13 -2.33,1.63 -6.22,1.16 -8.06,-0.56 0.94,-3.05 -4.61,-0.39 -4.53,-3.96 -0.16,-2.3 -3.48,1.3 -5.77,-1.2 -3.04,-0.91 -5.5,-3.22 -8.29,-4.38 -2.49,0.4 -5.86,-2.38 -6.7,1.5 -1.17,0.79 -7.15,1.83 -5.93,-1.54 -2.99,0.03 -6.03,-0.05 -7.53,-1.75 -2.6,0.59 -5.72,-0.41 -5.9,-3.43 -0.88,-3.28 -1.44,-6.61 -1.88,-9.98 -1.23,-0.6 -2.54,-1.02 -3.91,-1.06z",
			name: "Minnesota"
		},
		ok: {
			path: "m363.31,330.03c17.51,1.12 35.04,1.73 52.56,2.47 -1.37,13.62 -2.89,27.23 -2.83,40.93 -0.92,3.93 3.48,5.78 6.14,7.66 0.56,-5.56 2.96,1.46 4.25,-1.31 0.93,-1.5 5.57,1.68 3.39,4.42 1.59,0.66 4.76,0.51 6.73,1.82 2.79,-0.99 5.16,3.32 7.03,1.26 1.82,-1.93 5.59,-0.31 6.5,2.02 2.44,0.79 1.71,5.84 4.76,3.05 1.39,-1.65 6.25,-1.17 6.69,1.21 1.28,1.5 5.69,3.72 7.39,1.92 0.33,-2.75 3.38,-5.95 4.59,-1.83 3.59,0.38 6.96,2 10.46,3 2.28,-1.86 2.44,-4.68 6.53,-3.41 2.53,1.92 3.8,-1.41 6.31,-1.16 0.85,2.42 5.2,2.41 6.19,-0.5 3.2,-0.2 3.66,3.71 6.55,4.35 1.86,0.4 6.31,3.63 5.36,0.18 -0.32,-12.27 0.1,-24.59 -0.7,-36.82 -1.15,-6.03 -1.01,-12.18 -1.43,-18.25 -1.32,-5.29 -2.05,-10.73 -2.07,-16.18 -20.01,0.66 -40.04,-0.04 -60.06,-0.22 -27.85,-1.32 -55.73,-2.3 -83.53,-4.56 -0.27,3.31 -0.54,6.63 -0.81,9.94z",
			name: "Oklahoma"
		},
		tx: {
			path: "m359.47,330.97c2.34,-0.11 -0.86,-1.81 0,0z m0.72,18.31c-1.64,20.84 -2.52,41.75 -4.68,62.55 -0.51,4.33 -0.99,8.66 -1.51,12.98 -17.84,-0.87 -35.67,-1.93 -53.42,-3.89 -4.16,-0.41 -8.32,-0.76 -12.48,-1.11 -0.67,3.74 2.27,3.68 4.04,6.12 2.26,1.83 1.13,6.03 4.65,6.5 3.52,0.48 2.9,4.6 5.45,6.34 3.38,3.15 5.5,7.91 10.27,9.06 1.91,1.27 4,3.22 4.53,5.46 0.69,3.96 4.53,7.02 3.47,11.33 -0.88,5.15 2.22,9.63 5.93,12.88 2.18,2.95 5.14,4.76 8.63,5.78 1.88,1.95 3.01,3.88 5.72,4.88 2.59,0.18 5.38,4.34 7.35,1.18 2.59,-3.14 5.48,-6.41 6.05,-10.55 1.26,-2.82 3.58,-4.32 6.5,-5.06 2.72,-1.59 5.32,-2.13 7.47,0.62 4.91,0.57 10.2,0.53 14.79,2.22 2.83,1.43 2.56,4.53 5.17,6.33 1.73,2.05 4.83,3.37 5.81,5.82 1.37,2.07 2.66,4.26 2.69,7.03 1.62,4.34 4.17,8.51 5.31,12.94 -0.24,2.77 4.65,2.49 4.95,5.51 2.24,4.08 4.37,9.17 9.21,10.49 3.28,2 0.03,5.04 0.91,7.5 3.28,0.87 -0.01,4.68 0.94,6.67 2.53,1.36 4.37,3.2 4.22,6.44 0.39,3.34 2.13,6.83 5.69,7.54 3.01,1.93 6.69,2.13 9.87,3.4 2.28,1.79 5.15,4.09 8.16,2.83 3.46,0.46 6.77,1.29 9.37,3.75 1.43,2.54 6.51,-0.91 4.31,-2.89 -2.04,-3.39 -1.3,-7.79 -2.83,-11.46 -0.63,-3.07 -2.39,-5.95 -0.99,-9.1 1.17,-4.9 2.87,-9.76 4.04,-14.71 -3.37,-1.01 -2.07,-5.47 1.21,-4.71 3.99,0.42 3.65,-6.43 7.81,-6.05 5.25,-1.56 9.07,-6 14.16,-8.05 6.91,-2.81 13.62,-6.46 18.72,-12.05 2.58,-2.98 7.09,-3.95 8.69,-7.75 5,-2.22 9.8,-4.93 15.22,-6 -0.97,-2.64 0.52,-4.86 1.32,-7.22 0.39,-2.99 0.19,-6.07 1.18,-8.94 -3.15,-2.27 0.38,-4.91 1.38,-7.41 -0.2,-2.8 1.42,-6.25 0.09,-8.66 0.3,-2.93 -1.49,-5.14 -3.35,-7.29 -2.46,-2.64 -1.11,-6.91 -3.87,-9.52 -2.53,-4.57 -1.59,-10.19 -2.25,-15.22 0.02,-5 0.19,-10 -0.5,-14.97 -2.63,-2.31 -5.52,2.33 -7.52,-1.37 -3.1,-2.07 -7.66,-2.1 -9.73,-5.68 -2.31,-2.48 -3.82,2.84 -7.18,0.96 -1.91,-2.73 -3.59,0.03 -5.98,0.18 -2.27,-1.15 -6.07,-1.48 -6.09,1.76 -2.76,2.37 -5.95,-0.93 -8.94,-1.28 -3,1.38 -5.23,-3.83 -6.3,-1.87 -0.15,2.66 -2.52,5.1 -5.13,3.34 -3.23,-0.15 -4.91,-2.49 -6.57,-3.89 -2.95,-1.74 -4.3,2.32 -6.94,0.88 -1.48,-1.39 -1.87,-3.6 -3.92,-5.65 -3.06,-2.83 -5.03,3.17 -7.13,0.23 -2.05,-2.11 -5.57,-0.83 -7.94,-2.69 -3.56,0.59 -5.54,-0.24 -4.13,-4.11 -1.89,-1.85 -2.28,1.21 -4.77,-0.14 -0.59,-0.41 -3.45,1.78 -5,-1.11 -1.9,-1.9 -5.13,-3.22 -4.18,-6.45 0.03,-10.58 0.25,-21.15 1.66,-31.65 0.3,-2.99 0.6,-5.98 0.89,-8.98 -17.65,-0.63 -35.3,-1.27 -52.94,-2.22 -0.52,6.07 -1.04,12.15 -1.56,18.22z M466.53,518.63c-5.2,7.17 2.93,-3.27 0,0z",
			name: "Texas"
		},
		nm: {
			path: "m242.72,428.78c4.82,0.63 9.65,1.25 14.47,1.88 0.43,-3.33 0.85,-6.67 1.28,-10 9.7,0.89 19.4,1.86 29.09,2.78 -0.9,-3.14 -1.39,-5.98 2.84,-4.5 18.29,1.28 36.48,3.79 54.81,4.49 2.45,-0.6 7.66,2.13 7.99,-1.01 3.06,-22.93 3.75,-46.09 5.59,-69.14 0.54,-7.79 1.39,-15.56 2.02,-23.34 3.21,0.65 1.17,-4.81 2.07,-6.86 1.79,-4.38 -2.87,-3.37 -5.73,-3.85 -32.35,-3.3 -64.71,-6.59 -97.06,-9.89 -5.79,39.81 -11.58,79.63 -17.38,119.44z",
			name: "New Mexico"
		},
		ks: {
			path: "m380.53,320.34c25.06,1.17 50.11,2.71 75.19,3.35 17.22,0.07 34.44,0.63 51.66,0.18 -0.25,-12.69 0.23,-25.42 -0.47,-38.08 -0.61,-2.83 -0.17,-6.27 -1.38,-8.74 -3.04,-2.03 -6.02,-5.19 -6.68,-8.77 -0.43,-2.51 4.3,-4.59 1.29,-6.64 -3.02,0.54 -4.05,-3.34 -7.17,-2.43 -36.21,-0.82 -72.43,-1.33 -108.63,-2.5 -1.27,21.21 -2.54,42.42 -3.81,63.63z",
			name: "Kansas"
		},
		ne: {
			path: "m353.38,230.59c10.76,0.96 21.27,2.72 32.03,3.66 -0.37,7.11 -0.71,14.23 -1.06,21.34 36.49,1.29 73,1.84 109.5,2.56 -0.31,-1.17 -3.13,-4.05 -4.03,-6.15 -1.99,-2.11 -0.36,-5.13 -2.45,-7.34 -2.42,-3.19 -1.66,-7.14 -2.2,-10.79 -1.66,-2.86 -1.45,-6.25 -2.29,-9.26 -2.94,-2.85 -2.34,-7.01 -3.95,-10.49 -1.13,-3.1 -2.18,-6.19 -2.62,-9.47 -3.51,1.32 -2.89,-3.07 -4.85,-4.29 -2.4,-1.68 -5.57,-1.85 -7.72,-3.93 -3.79,0.07 -7.65,1.04 -11.13,1.94 -2.52,-2.2 -6.03,-3.13 -7.91,-6.06 -13.61,0.96 -27.23,-0.49 -40.83,-1.11 -15.5,-1.05 -31.02,-1.79 -46.51,-2.86 -1.67,14.08 -2.83,28.17 -4,42.25z",
			name: "Nebraska"
		},
		sd: {
			path: "m357.44,187.41c25.68,1.58 51.37,3.15 77.06,4.26 3.58,-0.01 7.34,-0.51 10.81,-0.23 1.8,2.9 5.24,3.85 7.69,6 3.55,-1.45 7.52,-1.89 11.25,-1.91 2.45,2.67 7.26,2.29 9.15,5.33 1.32,4.76 3.27,1.86 0.18,-1.15 -1.53,-2.17 1.46,-4.6 1.56,-6.99 1.2,-2.87 1.38,-5.28 -1.58,-6.75 -0.5,-2.04 -0.73,-6.65 2.41,-5.84 2.62,-0.28 0.39,-5.28 1.06,-7.5 -0.32,-9.7 0.19,-19.47 -0.64,-29.13 -0.24,-3.58 -6.26,-4.19 -5.42,-8.4 1.09,-1.22 5.81,-4.38 2.75,-5.4 -27.23,-0.89 -54.5,-1.01 -81.67,-3.15 -9.79,-0.62 -19.57,-1.24 -29.36,-1.86 -1.75,20.91 -3.5,41.81 -5.25,62.72z",
			name: "South Dakota"
		},
		nd: {
			path: "m362.88,123.72c26.46,1.49 52.89,3.7 79.4,3.91 10.84,0.26 21.67,0.52 32.51,0.78 0.01,-5.53 -1.38,-10.82 -2.5,-16.17 -1.27,-7.42 -2.05,-14.89 -2.13,-22.42 -2.61,-4.16 -4.11,-9 -3.48,-13.94 -0.44,-3.25 0.67,-6.57 0.3,-9.7 -0.15,-4.01 -2.83,-4.61 -6.31,-4.12 -25.15,-0.47 -50.33,-1.05 -75.41,-3.06 -5.17,-0.49 -10.33,-0.98 -15.5,-1.47 -2.29,22.06 -4.58,44.13 -6.88,66.19z",
			name: "North Dakota"
		},
		wy: {
			path: "m240.16,217.84c37.4,4.49 74.29,8.23 111.69,12.72 2.5,-29.2 5.5,-57.65 8,-86.84 -35.26,-4.45 -70.52,-8.9 -105.78,-13.34 -4.64,29.16 -9.27,58.31 -13.91,87.47z",
			name: "Wyoming"
		},
		mt: {
			path: "m192.59,52.19c0.84,2.76 3.25,5.4 3.2,8.23 -1.5,2.79 -1,5.49 0.52,8.15 3.4,0.39 4.18,3.44 5.26,6.16 1.43,3.34 2.55,6.88 5.37,9.34 0.88,2.21 5.27,1.18 4.34,4.72 -2.23,6.21 -5.45,12.23 -7.06,18.56 0.02,3.34 3.4,5.25 5.73,2.22 1.61,-2.43 5.63,-3.04 4.69,0.97 -0.5,5.3 1.81,10.35 2.59,15.53 1.9,2 5.27,3.44 5.68,6.31 -0.71,1.91 -0.39,8.78 2.32,5.14 1.85,-1.89 4.93,-0.29 6.85,0.86 3.28,-1.63 7.26,-1.21 10.34,0.69 3.69,0.41 1.52,-5 5.95,-4.08 2.71,-0.42 2.01,6.69 3.21,4.1 0.56,-3.26 1.09,-6.54 1.68,-9.8 35.57,4.49 71.15,8.96 106.72,13.44 2.9,-28.44 5.79,-56.88 8.69,-85.31 -28.84,-2.29 -57.55,-5.91 -86.19,-9.99 -26.71,-4.12 -53.36,-8.71 -79.73,-14.68 -3.05,-0.61 -6.99,-2.59 -6.53,2.19 -1.21,5.75 -2.42,11.51 -3.62,17.26z",
			name: "Montana"
		},
		co: {
			path: "m260.17,308.53c39.89,4.09 79.51,8.26 119.39,11.91 1.61,-28.46 3.23,-56.92 4.84,-85.38 -37.47,-4.17 -74.94,-8.33 -112.41,-12.5 -4.03,28.98 -7.8,56.99 -11.83,85.97z",
			name: "Colorado"
		},
		id: {
			path: "m169.84,91.72c0.52,3.07 2.27,5.25 4.94,6.78 0.4,3.02 -0.61,5.46 -3.03,7.31 -2.3,2.7 -4.38,5.97 -6.09,8.83 0.39,2.93 -2.57,3.54 -4.23,4.8 -1.77,2.31 -4.28,4.3 -3.93,7.5 -0.64,2.43 4.69,0.57 4.09,4.34 -5.19,11.17 -6.78,23.51 -10.13,35.32 -0.79,3.16 -1.22,4.91 -2.01,8.08 56.92,12.84 62.26,13.45 93.58,19.41 2.75,-17.6 5.5,-35.21 8.25,-52.81 -2.66,-0.84 -0.58,-6.52 -4.23,-4.97 -1.24,1.7 -1.62,4.95 -5.17,3.47 -3.11,-1.99 -6.81,-1.34 -10.13,-0.56 -2.53,-1.76 -5.91,-2.01 -7.69,0.88 -1.75,-0.05 -3.29,-3.39 -2.79,-5.36 1.91,-3.98 -2.85,-5.89 -5.05,-8.27 -0.98,-5.88 -3.48,-11.64 -2.5,-17.69 -1.86,-0.01 -4.25,2.69 -6.47,3.63 -2.21,0.18 -4.52,-3.09 -4.1,-5.31 1.19,-5.37 4.07,-10.37 5.88,-15.6 1.95,-2.64 1.12,-5.57 -2.41,-5.62 -1.55,-3.37 -4.92,-5.66 -5.61,-9.53 -1.31,-2.63 -1.42,-6.47 -5.06,-6.76 -0.99,-1.85 -3.18,-4.47 -1.91,-6.73 2.09,-2.98 -0.34,-5.7 -1.53,-8.5 -2.13,-3.05 0.55,-6.68 0.67,-10.01 0.9,-4.35 1.8,-8.69 2.69,-13.04 -4.18,-0.78 -8.35,-1.56 -12.53,-2.34 -4.5,20.92 -9,41.83 -13.5,62.75z",
			name: "Idaho"
		},
		ut: {
			path: "m176.34,297.78c27.57,3.92 55.15,7.83 82.72,11.75 4.04,-29.08 8.08,-58.17 12.13,-87.25 -10.83,-1.14 -21.65,-2.33 -32.47,-3.59 1.43,-7.93 2.82,-15.85 3.84,-23.84 -15.27,-2.85 -30.54,-5.71 -45.81,-8.56 -6.8,37.17 -13.6,74.33 -20.41,111.5z",
			name: "Utah"
		},
		az: {
			path: "m173.19,314.66c-2.49,-0.06 -3.05,4.43 -6.38,2.94 -0.74,-2.87 -3.59,-2.82 -5.59,-4.22 -3.74,0.74 -2.37,4.58 -2.68,7.41 -0.52,5.04 -0.42,10.21 -0.89,15.22 -2.19,2.33 -2.44,5.78 -0.24,8.19 2.32,2.62 0.58,7.52 4.09,9.09 0.98,3.59 -2.89,4.83 -5.41,6.09 -3.29,2.46 -3.28,6.86 -3.88,10.47 -1.25,2.44 -4.81,2.39 -4.92,4.97 0.47,2.18 6.18,0.38 3.42,4.54 -0.65,2.75 -3.14,3.45 -5.62,3.78 -3.6,1.45 -2.69,4.7 0.77,5.44 14.69,7.84 28.52,17.13 43.01,25.32 5.79,3.19 11.27,7.21 17.27,9.88 11.71,2.83 23.75,3.45 35.68,4.87 5.71,-39.38 11.42,-78.75 17.13,-118.13 -27.58,-3.93 -55.17,-7.85 -82.75,-11.78 -1,5.31 -2,10.63 -3,15.94z",
			name: "Arizona"
		},
		nv: {
			path: "m84.84,232.41c22.96,34.61 45.92,69.23 68.88,103.84 3.66,2.65 3.19,-3.47 3.27,-5.71 0.37,-5.43 0.36,-11.24 1.08,-16.44 2.05,-2.03 4.26,-2 6.08,-0.39 2.62,-0.16 3.86,5.9 6.03,1.27 2.74,-0.82 2.66,-3.64 3.13,-6.41 7.5,-40.87 15,-81.75 22.51,-122.62 -30.72,-6.81 -61.44,-13.63 -92.16,-20.44 -6.27,22.3 -12.54,44.6 -18.81,66.91z",
			name: "Nevada"
		},
		or: {
			path: "M67.16,62.81C64.24,70.42 62.73,78.57 58.5,85.63c-2.86,8.53 -5.96,16.93 -10.17,24.89 -3.06,6.61 -8,12.31 -11.32,18.7 -1.03,6.5 -0.64,13.05 -0.36,19.6 37.23,8.7 74.46,16.69 111.69,25.39 3.45,-13.15 6.51,-25.75 10.19,-38.81 1.2,-2.48 3.15,-6.06 -1.1,-5.42 -2.58,-1.78 -0.23,-4.45 -0.38,-6.91 2.3,-2.82 4.36,-5.82 7.47,-7.75 1.75,-5.08 5.43,-9.19 9.03,-13.06 1.66,-3.48 -2.46,-3.92 -3.39,-6.47 -0.25,-3.79 -3.56,-4.26 -6.62,-4.99 -7.63,-2.2 -15.38,-4.2 -23.21,-5.54 -4.9,0.03 -9.79,0.06 -14.69,0.09 -0.95,-2.84 -4.67,1.86 -7.11,0.5 -2.61,0.82 -4.42,-2.63 -6.57,-1.28 -2.61,-0.06 -5.23,0.11 -7.15,-1.87 -3.09,-1.53 -6.33,-1.81 -9.5,-3.1 -1.87,3.03 -5.69,1.22 -8.53,1.31 -1.65,-1.64 -5.79,-3.02 -6.03,-4.81 1.1,-2.44 0.78,-5.93 0.53,-8.59 -0.42,-3.92 -4.72,-2.63 -6.25,-4.49C74.59,58.67 69.45,62.45 67.16,62.81z",
			name: "Oregon"
		},
		wa: {
			path: "m101.38,8.72c0.05,2.75 2.93,5.39 3.25,8.16 -1.92,2.33 -1.78,5.19 -1.32,7.71 -1.81,2.64 1.63,4.82 0.67,7.42 -3.6,1.52 -2.43,-3.7 -4.86,-4.99 -3.34,-2.24 1.47,-3.87 1.17,-5.42 -2.5,-1.11 -2.24,3.88 -3.69,4.17C92.33,26.39 88.86,23.04 84.76,22.57 79.82,20.66 75.28,17.69 72.25,13.25c-3.13,-0.98 -1.96,4.97 -3.25,6.95 -0.63,2.8 2.59,5.06 1.41,8.21 0.52,3.86 -1.29,7.55 0.18,11.29 -1.06,2.88 4.75,5.54 2.94,6.39 -3.45,-1.05 -6.2,3.2 -2.25,4.34 1.57,0.97 -0.61,6.32 -3.3,5.43 -1.83,2.15 1.28,6.86 4.14,4.17 3.77,-1.55 2.75,3.51 5.83,3.13 2.81,-0.24 4.26,3.31 4.54,5.61 0.04,2.48 -0.15,6.02 -0.26,7.78 2.63,1.76 5.01,4.26 8.46,3.62 3.2,0.66 4.7,-3.26 7.97,-0.5 3.01,0.48 6.37,1.55 8.79,3.66 3.03,0.92 6.02,-1.78 8.19,1.05 3.44,1.3 6.67,0.03 9.84,-1.4 0.99,1.78 4.42,1.32 7,1.3 5.35,-0.19 10.68,-0.16 15.82,1.55 6.99,1.44 13.78,3.45 20.65,5.4 4.47,-20.85 8.94,-41.71 13.41,-62.56 -19.81,-3.93 -39.37,-9.21 -58.73,-14.66 -7.27,-1.53 -14.4,-3.52 -21.46,-5.87L101.75,8.45 101.38,8.72z M95.5,15.16C94.05,13.72 92.15,14.26 94.72,17.63 94.39,13.84 99.19,18.11 98.98,14.18 98.24,12.75 96.05,14.08 95.5,15.16z m2.31,1.91c-3.13,3.04 1.36,2.18 0.16,-0.25l-0.16,0.25z",
			name: "Washington"
		},
		ca: {
			path: "m35.06,153.94c-0.1,4.04 0.4,8.21 -1.99,11.75 -1.86,3.68 -2.55,8.24 -6.48,10.38 -1.19,2.11 -3.49,3.38 -3.59,6.45 -1.94,3.49 2.49,5.65 2.91,8.98 1.54,3.39 2.34,6.94 1.63,10.65 0,2.92 -2.79,5.01 -2.24,8.14 0.05,2.97 -2.24,5.87 0.04,8.54 2.58,5 6.38,9.93 6.71,15.69 -0.54,2.77 -0.99,5.37 1.81,7.17 1.6,1.95 4.49,3.66 2.79,6.46 -1.73,3.87 -1.14,8.04 -1.09,12.16 1.68,2.67 2.83,6.76 6.66,6.53 1.48,2.33 0.97,4.84 -0.22,7.13 -2.5,1.53 -4.36,2.73 -3.66,6.08 0.27,3.49 4.27,5.34 4.36,9.01 1.46,6.2 4.13,11.92 7.59,17.25 0.71,2.57 2.16,4.34 2.9,6.41 -0.24,3.33 -1.93,6.49 -2.41,9.87 -1.66,2.61 1.19,5.52 3.99,5.12 4.03,0.15 7.27,3.31 11.01,4.04 3,-0.55 4.74,2.9 6.07,5.11 1.54,2.71 2.37,6 5.76,6.88 2.51,1.14 6.19,0.05 7.17,3.45 2.41,2.72 -2.39,5.05 1.41,5.17 2.73,1.87 5.56,-1.74 7.56,-0.74 2.13,2.06 4.05,4.2 4.93,7.05 4.3,4.9 1.44,11.77 2.79,17.52 14.73,1.94 29.44,4.72 44.27,5.38 2.78,1.19 6.19,-4.43 2.84,-4.65 -3.13,0.64 -2.83,-4.02 -1.36,-4.66 3.15,-0.88 4.92,-3.83 4.65,-7.04 0.47,-3.98 3.27,-7.43 7.22,-8.4 3.43,-2.04 -0.33,-3.58 -0.79,-5.79 -0.23,-3.65 -1.95,-6.81 -3.62,-9.89 2.02,-3.66 -2.22,-3.32 -3.16,-6.24 -22.6,-34.1 -45.2,-68.19 -67.81,-102.29 6.27,-22.44 12.54,-44.88 18.81,-67.31 -22.04,-5.16 -44.08,-10.31 -66.13,-15.47 -0.45,1.38 -0.9,2.75 -1.34,4.13z m24.13,184.72c-0.27,3.05 7.99,3.06 4.7,2.07 -1.63,-0.35 -3.17,-2.46 -4.7,-2.07z m-5.16,0.38c0.33,3.71 5.81,0.51 1.31,-0.04 -0.44,0.01 -0.88,0.02 -1.31,0.04z M79.69,357.5c-0.2,1.58 4.42,6 3.16,2.37C82.22,358.91 80.8,357.6 79.69,357.5z M77.75,369.13c-0.14,1.55 3.2,3.89 1.32,1.26C78.6,369.72 77.39,366.55 77.75,369.13z",
			name: "California"
		}
	}
});
! function (a) {
	var b = function (d, c) {
		this.$element = a(d);
		this.options = a.extend({}, a.fn.collapse.defaults, c);
		if (this.options.parent) {
			this.$parent = a(this.options.parent)
		}
		this.options.toggle && this.toggle()
	};
	b.prototype = {
		constructor: b,
		dimension: function () {
			var c = this.$element.hasClass("width");
			return c ? "width" : "height"
		},
		show: function () {
			var f, c, e, d;
			if (this.transitioning) {
				return
			}
			f = this.dimension();
			c = a.camelCase(["scroll", f].join("-"));
			e = this.$parent && this.$parent.find("> .accordion-group > .in");
			if (e && e.length) {
				d = e.data("collapse");
				if (d && d.transitioning) {
					return
				}
				e.collapse("hide");
				d || e.data("collapse", null)
			}
			this.$element[f](0);
			this.transition("addClass", a.Event("show"), "shown");
			this.$element[f](this.$element[0][c])
		},
		hide: function () {
			var c;
			if (this.transitioning) {
				return
			}
			c = this.dimension();
			this.reset(this.$element[c]());
			this.transition("removeClass", a.Event("hide"), "hidden");
			this.$element[c](0)
		},
		reset: function (c) {
			var d = this.dimension();
			this.$element.removeClass("collapse")[d](c || "auto")[0].offsetWidth;
			this.$element[c !== null ? "addClass" : "removeClass"]("collapse");
			return this
		},
		transition: function (g, d, e) {
			var f = this,
				c = function () {
					if (d.type == "show") {
						f.reset()
					}
					f.transitioning = 0;
					f.$element.trigger(e)
				};
			this.$element.trigger(d);
			if (d.isDefaultPrevented()) {
				return
			}
			this.transitioning = 1;
			this.$element[g]("in");
			a.support.transition && this.$element.hasClass("collapse") ? this.$element.one(a.support.transition.end, c) : c()
		},
		toggle: function () {
			this[this.$element.hasClass("in") ? "hide" : "show"]()
		}
	};
	a.fn.collapse = function (c) {
		return this.each(function () {
			var f = a(this),
				e = undefined,
				d = typeof c == "object" && c;
			if (!e) {
				f.data("collapse", (e = new b(this, d)))
			}
			if (typeof c == "string") {
				e[c]()
			}
		})
	};
	a.fn.collapse.defaults = {
		toggle: true
	};
	a.fn.collapse.Constructor = b;
	a(function () {
		a("body").on("click.collapse.data-api", "[data-toggle=collapse]", function (h) {
			var g = a(this),
				c, f = g.attr("data-target") || h.preventDefault() || (c = g.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
				d = g.data();
			a(f).collapse(d)
		})
	})
}(window.jQuery);

/*! Normalized address bar hiding for iOS & Android (c) @scottjehl MIT License */ (function (e) {
	var d = e.document;
	if (!location.hash && e.addEventListener) {
		window.scrollTo(0, 1);
		var c = 1,
			b = function () {
				return e.pageYOffset || d.compatMode === "CSS1Compat" && d.documentElement.scrollTop || d.body.scrollTop || 0
			}, a = setInterval(function () {
				if (d.body) {
					clearInterval(a);

					c = b();
					e.scrollTo(0, c === 1 ? 0 : 1)
				}
			}, 15);

		e.addEventListener("load", function () {
			setTimeout(function () {
				if (b() < 20) {
					e.scrollTo(0, c === 1 ? 0 : 1)
				}
			}, 0)
		}, false)
	}
})(this);

var DGA = {
	breakpoints: {
		fadeNavbar: 0,
		fixNavbar: 0
	},
	browserDimensions: {
		height: 0,
		width: 0
	},
	currentAboutModule: 0,
	currentProfile: -1,
	currentSection: 0,
	iPad: navigator.userAgent.match(/iPad/i) !== null,
	iPhone: navigator.userAgent.match(/iPhone/i) !== null,
	Safari: navigator.userAgent.match(/Safari/i) !== null,
	isAboutAnimating: false,
	offsets: {
		home: 0
	},
	scrollOffset: 54,
	sections: ["home", "about", "process", "services", "marketing", "contact","customized"],
	$about: {
		section: $("#about"),
		banner: $("#about .banner"),
		nav: $("#about #about_menu"),
		modules: {
			0: $('#about .module[data-id="0"]'),
			1: $('#about .banner .module[data-id="1"]'),
			2: $('#about .banner .module[data-id="2"]')
		},
		states_list: $("#about #states_list")
	},
	$body: $("body"),
	$html$body: $("html, body"),
	$home: $("#home"),	
	
	$nav: {
		navbar: $(".navbar"),
		inner: $(".navbar .navbar-inner"),
		list: $(".navbar .navbar-inner .nav li"),
		list_links: $(".navbar .navbar-inner .nav li a"),
		strip: $(".navbar .navbar-inner .nav #nav-strip")
	},
	
		$nav2: {
		navbar2: $(".navbar2"),
		inner: $(".navbar2 .navbar-inner2"),
		list: $(".navbar2 .navbar-inner2 .nav2 li"),
		list_links: $(".navbar2 .navbar-inner2 .nav2 li a")
	},
	

	$window: $(window),
	initialize: function () {
		var a = this;

		a.setBrowserProperties().resizeElements().loadFlexsliders().bindHandlers();
		$(window).load(function () {
			$("#loading").fadeOut();

			a.loadGoogleMaps()
		})
	},
	
	bindHandlers: function () {
		var g = this,
			b, e, a, f, d, c = function () {
				if (g.$nav.navbar.find(".nav-collapse").hasClass("in")) {
					g.$nav.navbar.find("#plus").fadeOut(250)
				} else {
					g.$nav.navbar.find("#plus").fadeIn(250)
				}
			};
		g.$window.on("debouncedresize", function () {
			g.setBrowserProperties().resizeElements()
		});

		g.$body.Keyboard();
		g.$html$body.on("scroll mousedown DOMMouseScroll mousewheel", function (h) {
			if (h.which > 0 || h.type == "mousedown" || h.type == "mousewheel") {
				g.$html$body.stop()
			}
		});

		g.$nav.navbar.on("click", ".brand, .nav li a", function (h) {
			h.preventDefault();
			e = ($(this).attr("href")).replace("#", "");

			g.scrollPage(e);
			if (g.browserDimensions.width < 767) {
				setTimeout(function () {
					g.$nav.inner.find(".nav-collapse").collapse("toggle");
					c()
				}, 1000)
			}
		});

		g.$nav.navbar.on("click", ".btn-navbar", function () {
			setTimeout(function () {
				c()
			}, 100)
		});

		g.$about.nav.on("click", "li", function () {
			b = parseInt($(this).attr("data-id"), 10);
			g.changeAboutModule(b, this)
		});
		g.$about.states_list.on("hover", "li", function (h) {
			a = {};

			f = $(this).attr("id");

			if (h.type == "mouseenter") {
				a[f] = "#963947"
			} else {
				if (h.type == "mouseleave") {
					a[f] = "#2B2B2B"
				}
			}
			$("#vmap").vectorMap("set", "colors", a)
		});

		$("#navigation").on("click", ".close", function () {
			$("#services  .banner").slideUp(function () {
				g.setBrowserOffsets()
			});
			$("#services  .tiles .tile").removeClass("current")
			
			
		});
		
		$("#navigation2").on("click", ".close", function () {
			$("#marketing  .banner").slideUp(function () {
				g.setBrowserOffsets()
			});
			$("#marketing  .tiles .tile").removeClass("current")
			
			
		});
		return g
	},
	loadFlexsliders:

	function () {
		var f = this
		
			, e = {
				animation: "slide",
				controlNav: false,
				direction: "vertical",
				directionNav: false,
				easing: "easeOutQuad",
				slideshow: false,
				touch: false,
				useCSS: true,
				start: function (g) {
					$("#thumbnails").on("click", "ul li", function () {
						$("#thumbnails").addClass("active").find('ul li[data-id="' + g.currentSlide + '"]').removeClass("active");
						var h = parseInt($(this).attr("data-id"), 10);
						$(this).addClass("active");
						g.flexAnimate(h)
					})
				}
			}

			, b = {
				animation: "fade",
				directionNav: false,
				useCSS: true,
				after:

				function (g) {
					f.$home.find('.slides li[data-id="' + g.currentSlide + '"] .content').delay(250).animate({
						opacity: 1
					}, 750, function () {
						$(this).find("h4").animate({
							opacity: 1
						}, 750)
					})
				},
				before:


				function (g) {
					f.$home.find('.slides li[data-id="' + g.currentSlide + '"] .content').animate({
						opacity: 0
					}, 100, function () {
						$(this).find("h4").animate({
							opacity: 0
						}, 100)
					})
				},
				start: function () {
					f.$home.find('.slides li[data-id="0"] .content').delay(750).animate({
						opacity: 1
					}, 750, function ()

					{
						$(this).find("h4").animate({
							opacity: 1
						}, 750)
					})
				}
			}
			, d = {
				animation: "slide",
				controlNav: false,
				directionNav: false,
				easing: "easeOutQuad",
				slideshow: false,
				touch: false,
				useCSS: true,
				start:

				function (j) {
					var h = j.is("#list"),
						i = function () {
							f.scrollPage("services");

							$("#services .tiles .tile").removeClass("current").filter('[data-id="' + g + '"]').addClass("current")
						}, g;
					$("#services .tiles").on("click", ".tile", function () {
						g = parseInt($(this).attr("data-id"), 10);
						if (h) {
							i();
							$("#services .banner").slideDown(function () {
								f.setBrowserOffsets()
							})
						}
						j.flexAnimate(g)
					});
					$("#navigation").on("click", ".arrow", function () {
						g = j.getTarget($(this).attr("data-id"));
						if (h) {
							i()
						}
						j.flexAnimate(g)
					})
				}
			}			
			
		
			, steve = {
				animation: "slide",
				controlNav: false,
				directionNav: false,
				easing: "easeOutQuad",
				slideshow: false,
				touch: false,
				useCSS: true,
				start:

				function (j) {
					var h = j.is("#list2"),
						i = function () {
							f.scrollPage("marketing");

							$("#marketing .tiles .tile").removeClass("current").filter('[data-id="' + g + '"]').addClass("current")
						}, g;
					$("#marketing .tiles").on("click", ".tile", function () {
						g = parseInt($(this).attr("data-id"), 10);
						if (h) {
							i();
							$("#marketing .banner").slideDown(function () {
								f.setBrowserOffsets()
							})
						}
						j.flexAnimate(g)
					});
					$("#navigation2").on("click", ".arrow", function () {
						g = j.getTarget($(this).attr("data-id"));
						if (h) {
							i()
						}
						j.flexAnimate(g)
					})

				}
			}			
			
			
			
			, c = $.extend({}, d)
			, z = $.extend({}, steve)
			,
			a;

		c.direction = "vertical";
		z.direction = "vertical";
	
		if (f.iPad) {
			b.animation = "slide";

			$(".hover").removeClass("hover")
		} else {
			$("#ipad_spacer").hide()
		} if (f.browserDimensions.width > 767) {
			$("#bios").flexslider(e);
				
			$("#home").flexslider(b);
			$("#services #list").flexslider(d);
			$("#services #counter .flexslider").flexslider(c);
			$("#marketing #list2").flexslider(steve);
			$("#marketing #counter2 .flexslider").flexslider(z);
		}
		return f
	},
	_convertIntToPx: function (a) {
		return a + "px"
	},
	changeAboutModule: function (b, c) {
		var e = this,
			a = 500,
			d = 250;
		DGA.scrollPage("about");
		if (b === 1) {
			e.$about.modules[1].find("#bios").flexslider(0);

			$("#thumbnails").removeClass("active").find("ul li").removeClass("active")
		}
		if (b === e.currentAboutModule || e.isAboutAnimating) {
			return false
		} else {
			e.isAboutAnimating = true;
			$("#about_menu li").removeClass("active");
			$(c).addClass("active");

			if (e.currentAboutModule === 0) {
				e.$about.modules[0].animate({
					opacity: 0
				}, d, function () {
					e.$about.banner.slideDown(a, function () {
						e.$about.modules[b].fadeIn(d, function () {
							if (b === 2) {
								e.$about.states_list.slideDown(d, function () {
									e.isAboutAnimating = false
								})
							} else {
								e.isAboutAnimating = false;
								e.$about.modules[1].find("#bios").flexslider(0)
							}
						})
					})
				})
			} else {
				if (e.currentAboutModule === 2) {
					e.$about.states_list.slideUp(d)
				}
				if (b === 0) {
					e.$about.modules[e.currentAboutModule].fadeOut(d, function () {
						e.$about.banner.slideUp(a, function () {
							e.$about.modules[b].animate({
								opacity: 1
							}, d, function () {
								e.isAboutAnimating = false
							})
						})
					})
				} else {
					e.$about.modules[e.currentAboutModule].fadeOut(d, function () {
						e.$about.modules[b].fadeIn(d, function () {
							if (b === 2) {
								e.$about.states_list.slideDown(d, function () {
									e.isAboutAnimating = false
								})
							} else {
								e.isAboutAnimating = false;
								e.$about.modules[1].find("#bios").flexslider(0)
							}
						})
					})
				}
			}
			e.currentAboutModule = b
		}
		return e
	},
	changeSection: function (a) {
		var b = this;

		if (b.currentSection === 0 && a === -1) {
			return false
		} else {
			b.currentSection += a;
			b.scrollPage(b.sections[DGA.currentSection])
		}
		return b
	},
	loadGoogleMaps: function ()

	{
		var c = new google.maps.LatLng(45.419208, -75.702742),
			b = {
				backgroundColor: "#0f1d33",
				backgroundOpacity:0.1,
				panControl: false,
				zoomControl: true,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.SMALL
				},
				scaleControl: false,
				center: c,
				mapTypeControl: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false,
				streetViewControl: false,
				zoom: 16,
				styles: [{
						featureType: "water",
						stylers: [{
								color: "#a7c4d2"
							}, {
								visibility: "on"
							}
						]
					}, {
						featureType: "landscape",
						stylers: [{
								color: "#ccc"
							}
						]
					}, {
						featureType: "administrative",
						elementType: "geometry.stroke",
						stylers: [{
								color: "#4a4a4a"
							}, {
								weight: 0.4
							}
						]
					}, {
						featureType: "poi",
						stylers: [{
								color: "#3f3f3f"
							}
						]
					}, {
						featureType: "road",
						elementType: "geometry.fill",
						stylers: [{
								color: "#494949"
							}
						]
					}, {
						featureType: "road",
						elementType: "geometry.stroke",
						stylers: [{
								color: "#a0a0a0"
							}, {
								weight: 0.1
							}, {
								visibility: "off"
							}
						]
					}, {
						featureType: "road",
						elementType: "labels.text.stroke",
						stylers: [{
								color: "#282828"
							}, {
								weight: 4
							}
						]
					}, {
						featureType: "road",
						elementType: "labels.text",
						stylers: [{
								color: "#eaeaea"
							}, {
								weight: 0.5
							}
						]
					}, {
						elementType: "labels.text",
						stylers: [{
								color: "#dbdbdb"
							}, {
								weight: 0.4
							}
						]
					}, {
						featureType: "administrative",
						elementType: "labels.text",
						stylers: [{
								visibility: "on"
							}, {
								weight: 0.4
							}, {
								color: "#f9f9f9"
							}
						]
					}, {
						featureType: "road.highway",
						elementType: "geometry",
						stylers: [{
								color: "#757575"
							}
						]
					}, {
						featureType: "road",
						elementType: "labels.icon",
						stylers: [{
								visibility: "off"
							}
						]
					}, {
						featureType: "transit",
						elementType: "labels.icon",
						stylers: [{
								visibility: "off"
							}
						]
					}, {
						featureType: "administrative",
						elementType: "labels.icon",
						stylers: [{
								visibility: "off"
							}
						]
					}, {
						featureType: "poi",
						elementType: "labels.icon",
						stylers: [{
								visibility: "off"
							}
						]
					}, {
						featureType: "transit.line",
						elementType: "geometry",
						stylers: [{
								visibility: "on"
							}, {
								color: "#a0a0a0"
							}
						]
					}, {
						featureType: "poi.medical",
						elementType: "labels",
						stylers: [{
								color: "#636363"
							}, {
								visibility: "off"
							}
						]
					}, {
						featureType: "poi.place_of_worship",
						elementType: "labels",
						stylers: [{
								visibility: "off"
							}
						]
					}, {
						featureType: "poi.attraction",
						elementType: "labels",
						stylers: [{
								visibility: "off"
							}
						]
					}, {
						featureType: "poi.business",
						elementType: "labels",
						stylers: [{
								visibility: "off"
							}
						]
					}
				]
			}, d = new google.maps.Map(document.getElementById("map_canvas"), b),
			a = new google.maps.Marker({
				animation: google.maps.Animation.DROP,
				icon: "img/map_marker.png",
				position: c,
				map: d
			});
		google.maps.event.addListener(a, "click", function () {
			var e = $("#directions").attr("href");
			window.open(e, "_blank");
			window.focus()
		});

		return this
	},
	loadImages: function () {
		var c = this,
			a, b = ".svg";
		if (Modernizr.svg) {
			c.loadVectorMap()
		} else {
			$("#load_map_png").attr("src", "img/states.png");
			c.$about.states_list.unbind("hover");

			b = ".png"
		} if (c.browserDimensions.width > 767) {
			$(".load-jpg").each(function () {
				$(this).attr("src", "img/" + $(this).attr("data-id") + ".jpg")
			})
		} else {
			a = $("#home .logo").attr("data-id");
			$("#load_mobile_svg").attr("data", "img/" + a + ".svg");
			$("#load_mobile_png").attr("src", "img/" + a + ".png")
		}
		$(".load-png-or-svg").each(function () {
			$(this).attr("src", "img/" + $(this).attr("data-id") + b)
		});
		return c
	},
	loadVectorMap: function () {
		var b = this,
			a = {
				az: "#2B2B2B",
				ca: "#2B2B2B",
				co: "#2B2B2B",
				fl: "#2B2B2B",
				hi: "#2B2B2B",
				ne: "#2B2B2B",
				nv: "#2B2B2B",
				or: "#2B2B2B",
				tx: "#2B2B2B",
				wa: "#2B2B2B"
			};
		$("#vmap").vectorMap({
			map: "usa_en",
			backgroundColor: null,
			borderColor: "#232323",
			borderOpacity: 1,
			borderWidth: 2,
			color: "#1C1C1C",
			colors: a,
			enableZoom: false,
			hoverColor: "#963947",
			hoverOpacity: 0,
			iPad: b.iPad,
			selectedColor: "#963947",
			selectedColorOpacity: 0,
			selectedRegion: "ca",
			showTooltip: false,
			onRegionOver: function (d, c, e) {
				if (a[c] === undefined) {
					d.preventDefault()
				} else {
					$("#states_list").find("#" + c).addClass("active")
				}
			},
			onRegionOut: function (d, c, e) {
				if (a[c] === undefined) {
					d.preventDefault()
				} else {
					$("#states_list").find("#" + c).removeClass("active")
				}
			}
		});
		return this
	},
	resizeElements: function () {
		var g = this,
			f = 60,
			e;
		if (g.browserDimensions.height > 800) {
			f = 106
		}
		$("#home").css("height", g._convertIntToPx(g.browserDimensions.height));
		$("#map_canvas").css("height", g._convertIntToPx(g.browserDimensions.height * 0.4));
		$("section").css("min-height", g._convertIntToPx(g.browserDimensions.height - f));
		g.setBrowserOffsets().loadImages();
		if (g.browserDimensions.width / g.browserDimensions.height > 1440 / 990) {
			var d = 960 / 1440 * g.browserDimensions.width;
			$(".slides img").removeClass("full-height").addClass("full-width");
			if (g.browserDimensions.height < d) {
				var a = -(d - g.browserDimensions.height) / 2;
				$(".slides img").css("margin-top", g._convertIntToPx(a)).css("margin-left", 0)
			}
		} else {
			var b = 1440 / 960 * g.browserDimensions.height;
			$(".slides img").removeClass("full-width").addClass("full-height");
			if (g.browserDimensions.width < b) {
				var c = -(b - g.browserDimensions.width) / 2;
				$(".slides img").css("margin-left", g._convertIntToPx(c)).css("margin-top", 0)
			}
		} if (g.browserDimensions.width > 767) {
			e = false;
			if (g.browserDimensions.width > 1024) {
				e = true
			}
			g.scrollHandler(e);
			$(window).scroll(function () {
				g.scrollHandler(e)
			})
		} else {
			g.$nav.list_links.removeClass("active");
			g.$nav.navbar.removeClass("navbar-fixed-top navbar-absolute-bottom");
			g.scrollOffset = 0;
			$(window).unbind("scroll")
		}
		return g
	},
	setBrowserOffsets: function () {
		var b = this,
			a;
		for (a = b.sections.length; a--;) {
			b.offsets[b.sections[a]] = $("#" + b.sections[a]).offset().top;
			if (a > 0) {
				b.offsets[b.sections[a] + "_detect"] = b.offsets[b.sections[a]] - 200
			}
		}
		return b
	},
	setBrowserProperties: function () {
		var a = this;
		a.browserDimensions.height = $(window).height();
		a.browserDimensions.width = $(window).width();
		a.breakpoints.fixNavbar = a.browserDimensions.height - 54;
		a.breakpoints.fadeNavbar = a.browserDimensions.height - 40;
		if (a.iPhone && a.Safari) {
			a.browserDimensions.height = $(window).height() + 60
		}
		return a
	},
	setSection: function (a) {
		var b = this;
		b.$nav.list.find("#" + b.currentSection).removeClass("active");
		if (a > b.offsets.contact_detect) {
			b.currentSection = 5;
			$("#left, #right, #down").removeClass("active");
			$("#up").addClass("active")
		} 
		
		else {
			if (a > b.offsets.marketing_detect) {
				b.currentSection = 4;
				$("#left, #right, #down, #up").addClass("active")
			} else
			if (a > b.offsets.services_detect) {
				b.currentSection = 3;
				$("#left, #right, #down, #up").addClass("active")
			} else {
				if (a > b.offsets.process_detect) {
					b.currentSection = 2;
					$("#left, #right").removeClass("active");
					$("#down, #up").addClass("active")
				} else {
					if (a > b.offsets.about_detect) {
						b.currentSection = 1;
						$("#left, #right, #down, #up").addClass("active")
					} else {
						b.currentSection = 0;
						$("#left, #right, #down").addClass("active");
						$("#up").removeClass("active")
					}
				}
			}
		}
		b.$nav.list.find("#" + b.currentSection).addClass("active");
		return b
	},
	scrollHandler: function (c) {
		var d = this,
			b = d.$window.scrollTop();
		if (c) {
			var a = "0 " + d._convertIntToPx(-b / 2);
			$("#blueprints").css("background-position", a)
		}
		d.setSection(b);
		if (b > d.breakpoints.fixNavbar) {
			d.$nav.navbar.addClass("navbar-fixed-top").css("top", 0)
		} else {
			d.$nav.navbar.removeClass("navbar-fixed-top").css("top", d._convertIntToPx(d.breakpoints.fixNavbar))
		} if (b > d.breakpoints.fadeNavbar) {
			d.$nav.inner.addClass("solid")
		} else {
			d.$nav.inner.removeClass("solid")
		} if (d.currentSection > 0) {
			d.$nav.strip.removeClass().fadeIn().attr("pos", d.currentSection)
		} else {
			d.$nav.strip.removeClass().fadeOut()
		}
		return d
	},
	scrollPage: function (d) {
		var a = DGA.offsets[d] - DGA.scrollOffset,
			e = Math.abs(DGA.currentSection - $.inArray(d, DGA.sections)),
			c = 500,
			b;
		if (e > 1) {
			c = c + c * (e - 1) / (e)
		}
		DGA.$html$body.stop().animate({
			scrollTop: a
		}, c, "easeInOutQuad", function () {
			if (DGA.iPad) {
				b = setTimeout(function () {
					$("#ipad_spacer").toggle()
				}, 10)
			}
		})
	}
};
jQuery(function (a) {
	DGA.initialize()
});
(function (a) {
	a.fn.Keyboard = function () {
		this.each(function () {
			a(document).bind("keydown", b);

			function b(f) {
				var d = f.charCode ? f.charCode : f.keyCode ? f.keyCode : 0,
					c = 0;

				switch (d) {
					case 32:
						f.preventDefault();
						DGA.changeSection(1);
						break;
					case 38:
						f.preventDefault();
						DGA.changeSection(-1);
						break;
					case 39:
						f.preventDefault();

						if (DGA.currentSection === 0) {
							DGA.$home.flexslider("next")
							DGA.$home.flexslider("next2")
						} else {
							if (DGA.currentSection === 1) {
								if (DGA.currentAboutModule < 2) {
									c = DGA.currentAboutModule + 1
								} else {
									c = 0
								}
								DGA.$about.nav.find('li[data-id="' + c + '"]').click()
							} else {
								if (DGA.currentSection === 3) {
									if (a("#services .banner").css("display") === "none") {
										a("#services .banner").slideDown(function () {
											DGA.setBrowserOffsets()
										})
									}
									a('#services .arrow[data-id="next"]').click()
								}
								if (DGA.currentSection === 4) {
									if (a("#marketing .banner").css("display") === "none") {
										a("#marketing .banner").slideDown(function () {
											DGA.setBrowserOffsets()
										})
									}
									a('#marketing .arrow[data-id="next2"]').click()
								}
								
								
							}
						}
						break;
					case 40:
						f.preventDefault();
						if (DGA.currentSection < 5) {
							DGA.changeSection(1)
						}
						break;
					case 37:
						f.preventDefault();
						if (DGA.currentSection === 0) {
							DGA.$home.flexslider("prev")
							DGA.$home.flexslider("prev2")
						} else {
							if (DGA.currentSection === 1) {
								if (DGA.currentAboutModule > 0) {
									c = DGA.currentAboutModule - 1
								} else {
									c = 2
								}
								DGA.$about.nav.find('li[data-id="' + c + '"]').click()
							} else {
								if (DGA.currentSection === 3) {
									if (a("#services .banner").css("display") === "none") {
										a("#services .banner").slideDown(function () {
											DGA.setBrowserOffsets()
										})
									}
									a('#services .arrow[data-id="prev"]').click()
								}
								if (DGA.currentSection === 4) {
									if (a("#marketing .banner").css("display") === "none") {
										a("#marketing .banner").slideDown(function () {
											DGA.setBrowserOffsets()
										})
									}
									a('#marketing .arrow[data-id="prev2"]').click()
								}
							}
						}
						break
				}
			}
		});
		return this
	}
})(jQuery);