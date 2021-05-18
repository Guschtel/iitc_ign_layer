// ==UserScript==
// @name           IITC plugin: IGN map tiles
// @id             iitc-plugin-basemap-ign
// @category       Map Tiles
// @version        0.5
// @namespace      https://github.com/jonatkins/ingress-intel-total-conversion
// @updateURL      https://github.com/Guschtel/iitc_ign_layer/raw/master/basemap-ign.meta.js
// @downloadURL    https://github.com/Guschtel/iitc_ign_layer/raw/master/basemap-ign.user.js
// @description    Add the IGN map tiles as an optional layer. Modified by @Guschtel Original Code from https://github.com/Ciriol/iitc_ign_layer
// @include        https://intel.ingress.com/intel*
// @include        https://intel.ingress.com/intel*
// @match          https://intel.ingress.com/intel*
// @match          https://intel.ingress.com/intel*
// @include        https://intel.ingress.com/mission/*
// @include        https://intel.ingress.com/mission/*
// @match          https://intel.ingress.com/mission/*
// @match          https://intel.ingress.com/mission/*
// @grant          none
// ==/UserScript==
function wrapper(plugin_info) {
    // ensure plugin framework is there, even if iitc is not yet loaded
    if (typeof window.plugin !== 'function') window.plugin = function() {};


    // PLUGIN START ////////////////////////////////////////////////////////

    // use own namespace for plugin
    window.plugin.mapTileIGN = function() {};

    window.plugin.mapTileIGN.setupLeaflet = function() {
        /*
        	Copyright (c) 2013 Jean-Marc VIGLINO,
        	released under the CeCILL license (http://www.cecill.info/).

        	Geoportail API config object.
        	Default parameters to access Geoportail's services.
        	The capabilities can be enumerated for each API key.

        */

        //

        var geoportailConfig = {
            // url of the services
            url: "//wxs.ign.fr/",
            // Default layer capabilities
            capabilities: {
                "default": {
                    "BASELAYER": {
                        "minZoom": 0,
                        "maxZoom": 20,
                        "visibility": false,
                        "displayInLayerSwitcher": false,
                        "title": "Baselayer",
                        "format": "image/jpeg",
                        "tilematrix": "PM",
                        "style": "normal",
                        "bbox": [-178.187, -84, 178, 84],
                        originators: {}
                    },
                    "GEOGRAPHICALGRIDSYSTEMS.MAPS": {
                        "title": "Cartes IGN",
                        "order": "9980000",
                        "format": "image/jpeg",
                        "tilematrix": "PM",
                        "style": "normal",
                        "minZoom": 0,
                        "maxZoom": 18,
                        "bbox": [-180, -68.138855, 180, 80],
                        "desc": "Cartes IGN",
                        "keys": "Cartes",
                        "qlook": "http://wxs.ign.fr/static/pictures/ign_carte2.jpg",
                        "legend": [],
                        "originators": {
                            "IGN": {
                                "href": "http://www.ign.fr",
                                "attribution": "Institut national de l'information géographique et forestière",
                                "logo": "http://wxs.ign.fr/static/logos/IGN/IGN.gif",
                                "minZoom": 0,
                                "maxZoom": 18,
                                "constraint": [{
                                    "minZoom": 18,
                                    "maxZoom": 18,
                                    "bbox": [-63.189068, -21.428364, 55.846638, 50.930748]
                                }, {
                                    "minZoom": 17,
                                    "maxZoom": 17,
                                    "bbox": [-63.189117, -21.428364, 55.84698, 50.930748]
                                }, {
                                    "minZoom": 0,
                                    "maxZoom": 6,
                                    "bbox": [-180, -60, 180, 80]
                                }, {
                                    "minZoom": 7,
                                    "maxZoom": 8,
                                    "bbox": [-178.20573, -68.138855, 144.84375, 51.909786]
                                }, {
                                    "minZoom": 13,
                                    "maxZoom": 13,
                                    "bbox": [-178.20573, -46.51099, 77.60037, 51.161537]
                                }, {
                                    "minZoom": 14,
                                    "maxZoom": 14,
                                    "bbox": [-178.20573, -46.502903, 77.60037, 51.161537]
                                }, {
                                    "minZoom": 12,
                                    "maxZoom": 12,
                                    "bbox": [-178.20573, -46.51099, 77.60037, 51.111763]
                                }, {
                                    "minZoom": 11,
                                    "maxZoom": 11,
                                    "bbox": [-178.20573, -46.68384, 77.60037, 51.111763]
                                }, {
                                    "minZoom": 9,
                                    "maxZoom": 10,
                                    "bbox": [-178.20573, -68.138855, 144.84375, 51.25205]
                                }, {
                                    "minZoom": 15,
                                    "maxZoom": 16,
                                    "bbox": [-178.20573, -46.502903, 77.60037, 50.930748]
                                }]
                            }
                        }
                    },
                    "GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN-EXPRESS.STANDARD": {
                        "title": "Cartes IGN",
                        "order": "9980000",
                        "format": "image/jpeg",
                        "tilematrix": "PM",
                        "style": "normal",
                        "minZoom": 0,
                        "maxZoom": 18,
                        "bbox": [-180, -68.138855, 180, 80],
                        "desc": "Cartes IGN",
                        "keys": "Cartes",
                        "qlook": "http://wxs.ign.fr/static/pictures/ign_carte2.jpg",
                        "legend": [],
                        "originators": {
                            "IGN": {
                                "href": "http://www.ign.fr",
                                "attribution": "Institut national de l'information géographique et forestière",
                                "logo": "http://wxs.ign.fr/static/logos/IGN/IGN.gif",
                                "minZoom": 0,
                                "maxZoom": 18,
                                "constraint": [{
                                    "minZoom": 18,
                                    "maxZoom": 18,
                                    "bbox": [-63.189068, -21.428364, 55.846638, 50.930748]
                                }, {
                                    "minZoom": 17,
                                    "maxZoom": 17,
                                    "bbox": [-63.189117, -21.428364, 55.84698, 50.930748]
                                }, {
                                    "minZoom": 0,
                                    "maxZoom": 6,
                                    "bbox": [-180, -60, 180, 80]
                                }, {
                                    "minZoom": 7,
                                    "maxZoom": 8,
                                    "bbox": [-178.20573, -68.138855, 144.84375, 51.909786]
                                }, {
                                    "minZoom": 13,
                                    "maxZoom": 13,
                                    "bbox": [-178.20573, -46.51099, 77.60037, 51.161537]
                                }, {
                                    "minZoom": 14,
                                    "maxZoom": 14,
                                    "bbox": [-178.20573, -46.502903, 77.60037, 51.161537]
                                }, {
                                    "minZoom": 12,
                                    "maxZoom": 12,
                                    "bbox": [-178.20573, -46.51099, 77.60037, 51.111763]
                                }, {
                                    "minZoom": 11,
                                    "maxZoom": 11,
                                    "bbox": [-178.20573, -46.68384, 77.60037, 51.111763]
                                }, {
                                    "minZoom": 9,
                                    "maxZoom": 10,
                                    "bbox": [-178.20573, -68.138855, 144.84375, 51.25205]
                                }, {
                                    "minZoom": 15,
                                    "maxZoom": 16,
                                    "bbox": [-178.20573, -46.502903, 77.60037, 50.930748]
                                }]
                            }
                        }
                    },
                    "GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN-EXPRESS.CLASSIQUE": {
                        "title": "Cartes IGN",
                        "order": "9980000",
                        "format": "image/jpeg",
                        "tilematrix": "PM",
                        "style": "normal",
                        "minZoom": 0,
                        "maxZoom": 18,
                        "bbox": [-180, -68.138855, 180, 80],
                        "desc": "Cartes IGN",
                        "keys": "Cartes",
                        "qlook": "http://wxs.ign.fr/static/pictures/ign_carte2.jpg",
                        "legend": [],
                        "originators": {
                            "IGN": {
                                "href": "http://www.ign.fr",
                                "attribution": "Institut national de l'information géographique et forestière",
                                "logo": "http://wxs.ign.fr/static/logos/IGN/IGN.gif",
                                "minZoom": 0,
                                "maxZoom": 18,
                                "constraint": [{
                                    "minZoom": 18,
                                    "maxZoom": 18,
                                    "bbox": [-63.189068, -21.428364, 55.846638, 50.930748]
                                }, {
                                    "minZoom": 17,
                                    "maxZoom": 17,
                                    "bbox": [-63.189117, -21.428364, 55.84698, 50.930748]
                                }, {
                                    "minZoom": 0,
                                    "maxZoom": 6,
                                    "bbox": [-180, -60, 180, 80]
                                }, {
                                    "minZoom": 7,
                                    "maxZoom": 8,
                                    "bbox": [-178.20573, -68.138855, 144.84375, 51.909786]
                                }, {
                                    "minZoom": 13,
                                    "maxZoom": 13,
                                    "bbox": [-178.20573, -46.51099, 77.60037, 51.161537]
                                }, {
                                    "minZoom": 14,
                                    "maxZoom": 14,
                                    "bbox": [-178.20573, -46.502903, 77.60037, 51.161537]
                                }, {
                                    "minZoom": 12,
                                    "maxZoom": 12,
                                    "bbox": [-178.20573, -46.51099, 77.60037, 51.111763]
                                }, {
                                    "minZoom": 11,
                                    "maxZoom": 11,
                                    "bbox": [-178.20573, -46.68384, 77.60037, 51.111763]
                                }, {
                                    "minZoom": 9,
                                    "maxZoom": 10,
                                    "bbox": [-178.20573, -68.138855, 144.84375, 51.25205]
                                }, {
                                    "minZoom": 15,
                                    "maxZoom": 16,
                                    "bbox": [-178.20573, -46.502903, 77.60037, 50.930748]
                                }]
                            }
                        }
                    },
                    "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2": {
                        "title": "Cartes IGN",
                        "order": "9980000",
                        "format": "image/png",
                        "tilematrix": "PM",
                        "style": "normal",
                        "minZoom": 0,
                        "maxZoom": 18,
                        "bbox": [-180, -68.138855, 180, 80],
                        "desc": "Cartes IGN",
                        "keys": "Cartes",
                        "qlook": "http://wxs.ign.fr/static/pictures/ign_carte2.jpg",
                        "legend": [],
                        "originators": {
                            "IGN": {
                                "href": "http://www.ign.fr",
                                "attribution": "Institut national de l'information géographique et forestière",
                                "logo": "http://wxs.ign.fr/static/logos/IGN/IGN.gif",
                                "minZoom": 0,
                                "maxZoom": 18,
                                "constraint": [{
                                    "minZoom": 18,
                                    "maxZoom": 18,
                                    "bbox": [-63.189068, -21.428364, 55.846638, 50.930748]
                                }, {
                                    "minZoom": 17,
                                    "maxZoom": 17,
                                    "bbox": [-63.189117, -21.428364, 55.84698, 50.930748]
                                }, {
                                    "minZoom": 0,
                                    "maxZoom": 6,
                                    "bbox": [-180, -60, 180, 80]
                                }, {
                                    "minZoom": 7,
                                    "maxZoom": 8,
                                    "bbox": [-178.20573, -68.138855, 144.84375, 51.909786]
                                }, {
                                    "minZoom": 13,
                                    "maxZoom": 13,
                                    "bbox": [-178.20573, -46.51099, 77.60037, 51.161537]
                                }, {
                                    "minZoom": 14,
                                    "maxZoom": 14,
                                    "bbox": [-178.20573, -46.502903, 77.60037, 51.161537]
                                }, {
                                    "minZoom": 12,
                                    "maxZoom": 12,
                                    "bbox": [-178.20573, -46.51099, 77.60037, 51.111763]
                                }, {
                                    "minZoom": 11,
                                    "maxZoom": 11,
                                    "bbox": [-178.20573, -46.68384, 77.60037, 51.111763]
                                }, {
                                    "minZoom": 9,
                                    "maxZoom": 10,
                                    "bbox": [-178.20573, -68.138855, 144.84375, 51.25205]
                                }, {
                                    "minZoom": 15,
                                    "maxZoom": 16,
                                    "bbox": [-178.20573, -46.502903, 77.60037, 50.930748]
                                }]
                            }
                        }
                    },
                    "ORTHOIMAGERY.ORTHOPHOTOS": {
                        "title": "Cartes IGN",
                        "order": "9980000",
                        "format": "image/jpeg",
                        "tilematrix": "PM",
                        "style": "normal",
                        "minZoom": 0,
                        "maxZoom": 18,
                        "bbox": [-180, -68.138855, 180, 80],
                        "desc": "Cartes IGN",
                        "keys": "Cartes",
                        "qlook": "http://wxs.ign.fr/static/pictures/ign_carte2.jpg",
                        "legend": [],
                        "originators": {
                            "IGN": {
                                "href": "http://www.ign.fr",
                                "attribution": "Institut national de l'information géographique et forestière",
                                "logo": "http://wxs.ign.fr/static/logos/IGN/IGN.gif",
                                "minZoom": 0,
                                "maxZoom": 18,
                                "constraint": [{
                                    "minZoom": 18,
                                    "maxZoom": 18,
                                    "bbox": [-63.189068, -21.428364, 55.846638, 50.930748]
                                }, {
                                    "minZoom": 17,
                                    "maxZoom": 17,
                                    "bbox": [-63.189117, -21.428364, 55.84698, 50.930748]
                                }, {
                                    "minZoom": 0,
                                    "maxZoom": 6,
                                    "bbox": [-180, -60, 180, 80]
                                }, {
                                    "minZoom": 7,
                                    "maxZoom": 8,
                                    "bbox": [-178.20573, -68.138855, 144.84375, 51.909786]
                                }, {
                                    "minZoom": 13,
                                    "maxZoom": 13,
                                    "bbox": [-178.20573, -46.51099, 77.60037, 51.161537]
                                }, {
                                    "minZoom": 14,
                                    "maxZoom": 14,
                                    "bbox": [-178.20573, -46.502903, 77.60037, 51.161537]
                                }, {
                                    "minZoom": 12,
                                    "maxZoom": 12,
                                    "bbox": [-178.20573, -46.51099, 77.60037, 51.111763]
                                }, {
                                    "minZoom": 11,
                                    "maxZoom": 11,
                                    "bbox": [-178.20573, -46.68384, 77.60037, 51.111763]
                                }, {
                                    "minZoom": 9,
                                    "maxZoom": 10,
                                    "bbox": [-178.20573, -68.138855, 144.84375, 51.25205]
                                }, {
                                    "minZoom": 15,
                                    "maxZoom": 16,
                                    "bbox": [-178.20573, -46.502903, 77.60037, 50.930748]
                                }]
                            }
                        }
                    }
                }
            }
        };

        /** Jquery autoconf
        	key			{String} the API key
        	success		{function} a collback function
        */
        geoportailConfig.jqautoconf = function(key, success, all) {
            var geopresolutions = [156543.03390625, 78271.516953125, 39135.7584765625, 19567.87923828125, 9783.939619140625, 4891.9698095703125, 2445.9849047851562, 1222.9924523925781, 611.4962261962891, 305.74811309814453, 152.87405654907226, 76.43702827453613, 38.218514137268066, 19.109257068634033, 9.554628534317017, 4.777314267158508, 2.388657133579254, 1.194328566789627, 0.5971642833948135, 0.29858214169740677, 0.14929107084870338];

            function getZoom(res) {
                res = Number(res) * 0.000281;
                for (var r = 0; r < geopresolutions.length; r++)
                    if (res > geopresolutions[r]) return r;
            }

            function getBbox(bbox) {
                bbox = bbox.split(",");
                for (var k = 0; k < bbox.length; k++) bbox[k] = Number(bbox[k]);
                return bbox;
            }
            $.ajax("https://wxs.ign.fr/choisirgeoportail/autoconf/?output=json", {
                dataType: "jsonp",
                success: function(resp, status) {
                    var xml = $.parseXML(resp.xml.replace(/xlink:|sld:|gpp:/g, ""));
                    var o, zmin, zmax, js = {};
                    if (!key) js.BASELAYER = geoportailConfig.capabilities['default'].BASELAYER;
                    var layers = $(xml).find("Layer");
                    for (var i = 0; i < layers.length; i++) {
                        var l = $(layers[i]);
                        if (!/WMTS/.test(l.find("Server").attr("service"))) continue;
                        if (!all && !/geoportail\/wmts/.test(l.find("OnlineResource").attr("href"))) continue;
                        var service = js[l.find("Name:first").text()] = {};
                        //service.server = l.find("Server").find("OnlineResource").attr("href");
                        service.server = l.find("Key").text().replace(key + "/", "");
                        if (!service.server) delete service.server;
                        service.title = l.find("Title:first").text();
                        service.order = l.find("Extension Layer").attr("order");
                        service.format = l.find("Format:first").text();
                        service.tilematrix = "PM";
                        service.style = l.find("Style:first Name").text();
                        service.minZoom = getZoom(l.find("MaxScaleDenominator:first").text());
                        service.maxZoom = getZoom(l.find("MinScaleDenominator:first").text());
                        service.bbox = getBbox(l.find("Extension BoundingBox:first").text());
                        service.desc = l.find("Abstract:first").text();
                        service.keys = l.find("Thematic").text();
                        service.qlook = l.find("QuickLook OnlineResource").attr("href");
                        if (/NOPIC|defaut/.test(service.qlook)) delete service.qlook;
                        service.legend = [];
                        l.find("Legend").each(function() {
                            var legend = $(this).find("OnlineResource").attr("href");
                            if (legend && !/NOLEGEND/.test(legend)) {
                                service.legend.push({
                                    zoom: getZoom($(this).find("MinScaleDenominator:first").text()),
                                    url: legend
                                });
                            }
                        });

                        service.originators = {};
                        l.find("Originators Originator").each(function() {
                            o = {
                                href: $(this).find("URL").text(),
                                attribution: $(this).find("Attribution").text(),
                                logo: $(this).find("Logo").text(),
                                minZoom: 20,
                                maxZoom: 0,
                                constraint: []
                            };
                            // Contrainte d'echelle
                            $(this).find("Constraint").each(function() {
                                zmax = getZoom($(this).find("MinScaleDenominator:first").text());
                                if (zmin > o.maxZoom) o.maxZoom = zmin;
                                if (zmin < o.minZoom) o.minZoom = zmin;
                                zmin = getZoom($(this).find("MaxScaleDenominator:first").text());
                                if (zmax > o.maxZoom) o.maxZoom = zmax;
                                if (zmax < o.minZoom) o.minZoom = zmax;

                                o.constraint.push({
                                    minZoom: zmin,
                                    maxZoom: zmax,
                                    bbox: getBbox($(this).find("BoundingBox:first").text())
                                });
                            });
                            // Fusionner les contraintes
                            for (var i = o.constraint.length - 1; i > 0; i--) {
                                for (var j = 0; j < i; j++) {
                                    var bok = true;
                                    for (k = 0; k < 4; k++) {
                                        if (o.constraint[i].bbox[k] != o.constraint[j].bbox[k]) {
                                            bok = false;
                                            break;
                                        }
                                    }
                                    if (!bok) continue;
                                    if (o.constraint[i].maxZoom == o.constraint[j].minZoom || o.constraint[j].maxZoom == o.constraint[i].minZoom || o.constraint[i].maxZoom + 1 == o.constraint[j].minZoom || o.constraint[j].maxZoom + 1 == o.constraint[i].minZoom || o.constraint[i].minZoom - 1 == o.constraint[j].maxZoom || o.constraint[j].minZoom - 1 == o.constraint[i].maxZoom) {
                                        o.constraint[j].maxZoom = Math.max(o.constraint[i].maxZoom, o.constraint[j].maxZoom);
                                        o.constraint[j].minZoom = Math.min(o.constraint[i].minZoom, o.constraint[j].minZoom);
                                        o.constraint.splice(i, 1);
                                        break;
                                    }
                                }
                            }
                            service.originators[$(this).attr("name")] = o;
                        });
                    }
                    geoportailConfig.capabilities[(key ? key : 'default')] = js;
                    if (typeof success == "function") success(js);
                },
                error: function() {
                    if (typeof success == "function") success(false);
                }
            });
        };

        /*
        	Copyright (c) 2013 Jean-Marc VIGLINO,
        	released under the CeCILL license (http://www.cecill.info/).
        	L.TileLayer.Geoportail : IGN's Geoportail WMTS layer definition
         */
        L.TileLayer.Geoportail = L.TileLayer.extend({
            /** APIProperty: attributionIGN
             *	Define the attribution text to use on the map
             */
            attributionIGN: {
                c_ign: " &copy; <a href='http://www.ign.fr/'>IGN-France</a> ",
                c_planet: " - <a href='http://www.planetobserver.com/'>Planet Observer</a> ",
                logoGeop: " <a class='attribution-ign' href='http://www.geoportail.fr/'><img src='http://api.ign.fr/geoportail/api/js/2.0.3/theme/geoportal/img/logo_gp.gif' /></a> "
            },

            /** APIProperty: capabilities
             *	Capabilities of the Geoportail services
             */
            capabilities: {},

            /** Constructor: OpenLayers.Layer.Geoportail
             *	Create a new Geoportail layer.
             *	Parameters:
             *	key - geoportal API key
             *	layer - {String} Layer name as defined by the service
             *	options - {Object} Configuration properties for the layer.
             *
             *	Any other documented layer properties can be provided in the config object.
             *
             */
            initialize: function(key, layer, options) { // Get apiKey capabilities or defaults
                this.capabilities = geoportailConfig.capabilities[key] || geoportailConfig.capabilities["default"];

                // Default attributions
                switch (layer) {
                    case "ORTHOIMAGERY.ORTHOPHOTOS":
                        this.options.attribution = this.attributionIGN.c_ign + this.attributionIGN.c_planet + this.attributionIGN.logoGeop;
                        break;
                    default:
                        this.options.attribution = this.attributionIGN.c_ign + this.attributionIGN.logoGeop;
                        break;
                }
                // Default options
                if (this.capabilities && this.capabilities[layer]) {
                    this.options.format = this.capabilities[layer].format;
                    this.options.minZoom = this.capabilities[layer].minZoom;
                    this.options.maxZoom = this.capabilities[layer].maxZoom;
                    this.options.style = this.capabilities[layer].style;
                    this.title = this.capabilities[layer].title;
                } else {
                    this.options.format = "image/png";
                    this.options.style = "normal";
                }
                L.setOptions(this, options);

                // Calculate url
                this._url = geoportailConfig.url + key + "/geoportail/wmts?layer=" + layer + "&style=normal&tilematrixset=PM&Service=WMTS&Request=GetTile&Version=1.0.0&Format=" + encodeURI(this.options.format) + "&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}";
            }

        });

        /* Plugin tileLayer.geoportail
         */
        L.tileLayer.geoportail = function(key, layer, options) {
            return new L.TileLayer.Geoportail(key, layer, options);
        };
    };

    window.plugin.mapTileIGN.setup = function() {

        window.plugin.mapTileIGN.setupLeaflet();

        var keyChoisir = "choisirgeoportail";
        var keyOther = "";
        var keyClassic = "";

        if (keyOther !== "") {
            var ignScan = L.tileLayer.geoportail(keyOther, "GEOGRAPHICALGRIDSYSTEMS.MAPS");
            layerChooser.addBaseLayer(ignScan, "IGN Cartes IGN");

            var ignScan = L.tileLayer.geoportail(keyOther, "GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN-EXPRESS.STANDARD");
            layerChooser.addBaseLayer(ignScan, "IGN Cartes SCAN Express Standard");
        }

        if (keyClassic !== "") {
            var ignScan = L.tileLayer.geoportail(keyClassic, "GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN-EXPRESS.CLASSIQUE");
            layerChooser.addBaseLayer(ignScan, "IGN Cartes SCAN Express Classique");
        }

        if (keyChoisir !== "") {
            var ignOrtho = L.tileLayer.geoportail(keyChoisir, "ORTHOIMAGERY.ORTHOPHOTOS");
            layerChooser.addBaseLayer(ignOrtho, "IGN Photographies aériennes");

            var ign = L.tileLayer.geoportail(keyChoisir, "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2");
            layerChooser.addBaseLayer(ign, "IGN Plan IGN V2");
        }

    };

    var setup = window.plugin.mapTileIGN.setup;

    // PLUGIN END //////////////////////////////////////////////////////////


    setup.info = plugin_info; //add the script info data to the function as a property
    if (!window.bootPlugins) window.bootPlugins = [];
    window.bootPlugins.push(setup);
    // if IITC has already booted, immediately run the 'setup' function
    if (window.iitcLoaded && typeof setup === 'function') setup();
} // wrapper end
// inject code into site context
var script = document.createElement('script');
var info = {};
if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) info.script = {
    version: GM_info.script.version,
    name: GM_info.script.name,
    description: GM_info.script.description
};
script.appendChild(document.createTextNode('(' + wrapper + ')(' + JSON.stringify(info) + ');'));
(document.body || document.head || document.documentElement).appendChild(script);
