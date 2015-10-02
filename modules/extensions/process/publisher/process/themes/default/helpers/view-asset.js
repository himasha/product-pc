/*
*  Copyright (c) 2015, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
*
*  WSO2 Inc. licenses this file to you under the Apache License,
*  Version 2.0 (the "License"); you may not use this file except
*  in compliance with the License.
*  You may obtain a copy of the License at
*
*  http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing,
*  software distributed under the License is distributed on an
*  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
*  KIND, either express or implied.  See the License for the
*  specific language governing permissions and limitations
*  under the License.
*
*/

var resources = function (block, page, area, meta) {
    return {
        js: ['jquery.MetaData.js', 'jquery.rating.pack.js', 'async.min.js', 'asset-core.js', 'asset.js', 'moment.min.js', 'porthole.min.js','jquery-1.8.3.min.js','assetReplacer.js','tinymce/tinymce.min.js'],
        css: ['assets.css','grid.css','styles.css','font-awesome-ie7.min.css','jslider.css','jslider.round.plastic.css','navigation.css','sort-assets.css','process.css'],
    };
};