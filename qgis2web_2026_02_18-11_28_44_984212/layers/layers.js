var wms_layers = [];


        var lyr_BingAerial_0 = new ol.layer.Tile({
            'title': 'Bing Aerial',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://ak.t0.tiles.virtualearth.net/tiles/a{q}.jpeg?n=z&g=5880'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Autressousprfecture_2 = new ol.format.GeoJSON();
var features_Autressousprfecture_2 = format_Autressousprfecture_2.readFeatures(json_Autressousprfecture_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autressousprfecture_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autressousprfecture_2.addFeatures(features_Autressousprfecture_2);
var lyr_Autressousprfecture_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Autressousprfecture_2, 
                style: style_Autressousprfecture_2,
                popuplayertitle: 'Autres sous-préfecture',
                interactive: false,
                title: '<img src="styles/legend/Autressousprfecture_2.png" /> Autres sous-préfecture'
            });
var format_Guyo_3 = new ol.format.GeoJSON();
var features_Guyo_3 = format_Guyo_3.readFeatures(json_Guyo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Guyo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Guyo_3.addFeatures(features_Guyo_3);
var lyr_Guyo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Guyo_3, 
                style: style_Guyo_3,
                popuplayertitle: 'Guéyo',
                interactive: false,
                title: '<img src="styles/legend/Guyo_3.png" /> Guéyo'
            });
var format_Sousprfecture_4 = new ol.format.GeoJSON();
var features_Sousprfecture_4 = format_Sousprfecture_4.readFeatures(json_Sousprfecture_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sousprfecture_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sousprfecture_4.addFeatures(features_Sousprfecture_4);
var lyr_Sousprfecture_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sousprfecture_4, 
                style: style_Sousprfecture_4,
                popuplayertitle: 'Sous préfecture',
                interactive: false,
    title: 'Sous préfecture<br />\
    <img src="styles/legend/Sousprfecture_4_0.png" /> Dabouyo<br />\
    <img src="styles/legend/Sousprfecture_4_1.png" /> Guéyo<br />\
    <img src="styles/legend/Sousprfecture_4_2.png" /> <br />' });
var format_Zonedoccupation_5 = new ol.format.GeoJSON();
var features_Zonedoccupation_5 = format_Zonedoccupation_5.readFeatures(json_Zonedoccupation_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonedoccupation_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonedoccupation_5.addFeatures(features_Zonedoccupation_5);
var lyr_Zonedoccupation_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonedoccupation_5, 
                style: style_Zonedoccupation_5,
                popuplayertitle: 'Zone d\'occupation',
                interactive: true,
    title: 'Zone d\'occupation<br />\
    <img src="styles/legend/Zonedoccupation_5_0.png" /> forest<br />\
    <img src="styles/legend/Zonedoccupation_5_1.png" /> residential<br />\
    <img src="styles/legend/Zonedoccupation_5_2.png" /> retail<br />\
    <img src="styles/legend/Zonedoccupation_5_3.png" /> <br />' });
var format_Rseauroutier_6 = new ol.format.GeoJSON();
var features_Rseauroutier_6 = format_Rseauroutier_6.readFeatures(json_Rseauroutier_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rseauroutier_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rseauroutier_6.addFeatures(features_Rseauroutier_6);
var lyr_Rseauroutier_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rseauroutier_6, 
                style: style_Rseauroutier_6,
                popuplayertitle: 'Réseau routier',
                interactive: true,
    title: 'Réseau routier<br />\
    <img src="styles/legend/Rseauroutier_6_0.png" /> path<br />\
    <img src="styles/legend/Rseauroutier_6_1.png" /> primary<br />\
    <img src="styles/legend/Rseauroutier_6_2.png" /> residential<br />\
    <img src="styles/legend/Rseauroutier_6_3.png" /> secondary<br />\
    <img src="styles/legend/Rseauroutier_6_4.png" /> service<br />\
    <img src="styles/legend/Rseauroutier_6_5.png" /> tertiary<br />\
    <img src="styles/legend/Rseauroutier_6_6.png" /> track<br />\
    <img src="styles/legend/Rseauroutier_6_7.png" /> unclassified<br />\
    <img src="styles/legend/Rseauroutier_6_8.png" /> <br />' });
var format_Reseauhydrographique_7 = new ol.format.GeoJSON();
var features_Reseauhydrographique_7 = format_Reseauhydrographique_7.readFeatures(json_Reseauhydrographique_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reseauhydrographique_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reseauhydrographique_7.addFeatures(features_Reseauhydrographique_7);
var lyr_Reseauhydrographique_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reseauhydrographique_7, 
                style: style_Reseauhydrographique_7,
                popuplayertitle: 'Reseau hydrographique',
                interactive: true,
    title: 'Reseau hydrographique<br />\
    <img src="styles/legend/Reseauhydrographique_7_0.png" /> river<br />\
    <img src="styles/legend/Reseauhydrographique_7_1.png" /> stream<br />\
    <img src="styles/legend/Reseauhydrographique_7_2.png" /> <br />' });
var format_Centredesant_8 = new ol.format.GeoJSON();
var features_Centredesant_8 = format_Centredesant_8.readFeatures(json_Centredesant_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centredesant_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centredesant_8.addFeatures(features_Centredesant_8);
var lyr_Centredesant_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centredesant_8, 
                style: style_Centredesant_8,
                popuplayertitle: 'Centre de santé',
                interactive: true,
                title: '<img src="styles/legend/Centredesant_8.png" /> Centre de santé'
            });
var format_Ecole_9 = new ol.format.GeoJSON();
var features_Ecole_9 = format_Ecole_9.readFeatures(json_Ecole_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ecole_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecole_9.addFeatures(features_Ecole_9);
var lyr_Ecole_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ecole_9, 
                style: style_Ecole_9,
                popuplayertitle: 'Ecole',
                interactive: true,
                title: '<img src="styles/legend/Ecole_9.png" /> Ecole'
            });
var format_Magasin_10 = new ol.format.GeoJSON();
var features_Magasin_10 = format_Magasin_10.readFeatures(json_Magasin_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Magasin_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Magasin_10.addFeatures(features_Magasin_10);
var lyr_Magasin_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Magasin_10, 
                style: style_Magasin_10,
                popuplayertitle: 'Magasin',
                interactive: true,
                title: '<img src="styles/legend/Magasin_10.png" /> Magasin'
            });
var format_Section_11 = new ol.format.GeoJSON();
var features_Section_11 = format_Section_11.readFeatures(json_Section_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Section_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Section_11.addFeatures(features_Section_11);
var lyr_Section_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Section_11, 
                style: style_Section_11,
                popuplayertitle: 'Section',
                interactive: true,
                title: '<img src="styles/legend/Section_11.png" /> Section'
            });
var format_Localit_12 = new ol.format.GeoJSON();
var features_Localit_12 = format_Localit_12.readFeatures(json_Localit_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localit_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localit_12.addFeatures(features_Localit_12);
var lyr_Localit_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localit_12, 
                style: style_Localit_12,
                popuplayertitle: 'Localité',
                interactive: true,
    title: 'Localité<br />\
    <img src="styles/legend/Localit_12_0.png" /> town<br />\
    <img src="styles/legend/Localit_12_1.png" /> village<br />\
    <img src="styles/legend/Localit_12_2.png" /> PROV<br />' });
var format_Unitdeproduction_13 = new ol.format.GeoJSON();
var features_Unitdeproduction_13 = format_Unitdeproduction_13.readFeatures(json_Unitdeproduction_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unitdeproduction_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unitdeproduction_13.addFeatures(features_Unitdeproduction_13);
cluster_Unitdeproduction_13 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Unitdeproduction_13
});
var lyr_Unitdeproduction_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Unitdeproduction_13, 
                style: style_Unitdeproduction_13,
                popuplayertitle: 'Unité de production',
                interactive: true,
                title: '<img src="styles/legend/Unitdeproduction_13.png" /> Unité de production'
            });
var group_Localitetinfrastructure = new ol.layer.Group({
                                layers: [lyr_Zonedoccupation_5,lyr_Rseauroutier_6,lyr_Reseauhydrographique_7,lyr_Centredesant_8,lyr_Ecole_9,lyr_Magasin_10,lyr_Section_11,lyr_Localit_12,],
                                fold: 'open',
                                title: 'Localité et infrastructure'});

lyr_BingAerial_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Autressousprfecture_2.setVisible(true);lyr_Guyo_3.setVisible(true);lyr_Sousprfecture_4.setVisible(true);lyr_Zonedoccupation_5.setVisible(true);lyr_Rseauroutier_6.setVisible(true);lyr_Reseauhydrographique_7.setVisible(true);lyr_Centredesant_8.setVisible(true);lyr_Ecole_9.setVisible(true);lyr_Magasin_10.setVisible(true);lyr_Section_11.setVisible(true);lyr_Localit_12.setVisible(true);lyr_Unitdeproduction_13.setVisible(true);
var layersList = [lyr_BingAerial_0,lyr_OSMStandard_1,lyr_Autressousprfecture_2,lyr_Guyo_3,lyr_Sousprfecture_4,group_Localitetinfrastructure,lyr_Unitdeproduction_13];
lyr_Autressousprfecture_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM3_FR': 'ADM3_FR', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM3_REF': 'ADM3_REF', 'ADM3ALT1FR': 'ADM3ALT1FR', 'ADM3ALT2FR': 'ADM3ALT2FR', 'ADM2_FR': 'ADM2_FR', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_FR': 'ADM1_FR', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_FR': 'ADM0_FR', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_Guyo_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_FR': 'ADM2_FR', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1FR': 'ADM2ALT1FR', 'ADM2ALT2FR': 'ADM2ALT2FR', 'ADM1_FR': 'ADM1_FR', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_FR': 'ADM0_FR', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'ValidTo': 'ValidTo', });
lyr_Sousprfecture_4.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM3_FR': 'ADM3_FR', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM3_REF': 'ADM3_REF', 'ADM3ALT1FR': 'ADM3ALT1FR', 'ADM3ALT2FR': 'ADM3ALT2FR', 'ADM2_FR': 'ADM2_FR', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_FR': 'ADM1_FR', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_FR': 'ADM0_FR', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_Zonedoccupation_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Rseauroutier_6.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Reseauhydrographique_7.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_Centredesant_8.set('fieldAliases', {'Field1': 'Field1', 'Field2': 'Field2', });
lyr_Ecole_9.set('fieldAliases', {'Field1': 'Field1', 'Field2': 'Field2', });
lyr_Magasin_10.set('fieldAliases', {'Field1': 'Field1', });
lyr_Section_11.set('fieldAliases', {'Field1': 'Field1', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Localit_12.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'population': 'population', 'name': 'name', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Unitdeproduction_13.set('fieldAliases', {'Field1': 'Field1', 'Field2': 'Field2', });
lyr_Autressousprfecture_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM3_FR': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM3_REF': 'TextEdit', 'ADM3ALT1FR': 'TextEdit', 'ADM3ALT2FR': 'TextEdit', 'ADM2_FR': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_FR': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_FR': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_Guyo_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_FR': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1FR': 'TextEdit', 'ADM2ALT2FR': 'TextEdit', 'ADM1_FR': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_FR': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'ValidTo': 'DateTime', });
lyr_Sousprfecture_4.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM3_FR': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM3_REF': 'TextEdit', 'ADM3ALT1FR': 'TextEdit', 'ADM3ALT2FR': 'TextEdit', 'ADM2_FR': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_FR': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_FR': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_Zonedoccupation_5.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_Rseauroutier_6.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_Reseauhydrographique_7.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'width': 'Range', 'name': 'TextEdit', });
lyr_Centredesant_8.set('fieldImages', {'Field1': 'TextEdit', 'Field2': 'TextEdit', });
lyr_Ecole_9.set('fieldImages', {'Field1': 'TextEdit', 'Field2': 'TextEdit', });
lyr_Magasin_10.set('fieldImages', {'Field1': 'TextEdit', });
lyr_Section_11.set('fieldImages', {'Field1': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Localit_12.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'TextEdit', 'fclass': 'TextEdit', 'population': 'TextEdit', 'name': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Unitdeproduction_13.set('fieldImages', {'Field1': 'TextEdit', 'Field2': 'TextEdit', });
lyr_Autressousprfecture_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM3_FR': 'no label', 'ADM3_PCODE': 'no label', 'ADM3_REF': 'no label', 'ADM3ALT1FR': 'no label', 'ADM3ALT2FR': 'no label', 'ADM2_FR': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_FR': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_FR': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_Guyo_3.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_FR': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1FR': 'no label', 'ADM2ALT2FR': 'no label', 'ADM1_FR': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_FR': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'ValidTo': 'no label', });
lyr_Sousprfecture_4.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM3_FR': 'no label', 'ADM3_PCODE': 'no label', 'ADM3_REF': 'no label', 'ADM3ALT1FR': 'no label', 'ADM3ALT2FR': 'no label', 'ADM2_FR': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_FR': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_FR': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_Zonedoccupation_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'hidden field', });
lyr_Rseauroutier_6.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_Reseauhydrographique_7.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'width': 'no label', 'name': 'no label', });
lyr_Centredesant_8.set('fieldLabels', {'Field1': 'inline label - always visible', 'Field2': 'no label', });
lyr_Ecole_9.set('fieldLabels', {'Field1': 'inline label - always visible', 'Field2': 'no label', });
lyr_Magasin_10.set('fieldLabels', {'Field1': 'no label', });
lyr_Section_11.set('fieldLabels', {'Field1': 'no label', });
lyr_Localit_12.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'population': 'no label', 'name': 'no label', });
lyr_Unitdeproduction_13.set('fieldLabels', {'Field1': 'no label', 'Field2': 'no label', });
lyr_Unitdeproduction_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});