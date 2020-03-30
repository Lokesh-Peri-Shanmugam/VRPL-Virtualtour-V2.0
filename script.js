TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_t.jpg",
    "overlays": [
     {
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "rotate": false,
      "id": "panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 850,
         "width": 850,
         "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "inertia": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE",
  "hfovMax": 120,
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "label": "HOME",
  "thumbnailUrl": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_t.jpg",
  "hfov": 360,
  "hfovMin": 120
 },
 {
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_t.jpg",
    "overlays": [
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':1,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':1,'iconHeight':20,'rollOverBackgroundOpacity':1,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}, this.ImageResource_3B6D458C_2B0E_6F00_4137_F60375F9E4C8, null, null, 10000, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_25DA8B0C_2AFA_7B00_41C2_6A03F63F0461",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.49,
        "yaw": -170.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 96,
           "width": 118,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -41.57
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -170.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 192,
           "width": 236,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_1_0.png"
          }
         ]
        },
        "hfov": 10.49,
        "pitch": -41.57
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_3B0B7F59_2B0B_FB00_41B6_D5FA61080923, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_22CA7678_2B28_50B6_41BE_240CB22323F5, this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D, this.PlayList_3BA0B692_2B28_D07A_41BF_7C31B1A66FED, '95%', '95%', true, true); this.PlayList_3BA0B692_2B28_D07A_41BF_7C31B1A66FED.set('selectedIndex', 0); ; this.viewer_uid3B50A67D_2B28_D0AE_41C2_152CAA28AC86VideoPlayer.play();  }",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": false,
      "id": "overlay_2595973C_2AFA_AB00_415B_ADC56B4BBAF6",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.91,
        "yaw": 24.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 72,
           "width": 75,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -6.14
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 24.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 144,
           "width": 151,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_2_0.png"
          }
         ]
        },
        "hfov": 8.91,
        "pitch": -6.14
       }
      ]
     },
     {
      "class": "PopupPanoramaOverlay",
      "yaw": -170.64,
      "showEasing": "cubic_in",
      "popupMaxHeight": "45%",
      "rotationZ": 0,
      "hideDuration": 500,
      "popupMaxWidth": "45%",
      "id": "popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE",
      "hfov": 10.49,
      "rotationX": 0,
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 640,
         "width": 1024,
         "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_2.jpg"
        }
       ]
      },
      "hideEasing": "cubic_out",
      "rotationY": 0,
      "pitch": -41.57
     },
     {
      "class": "PopupPanoramaOverlay",
      "yaw": 24.44,
      "pitch": -6.14,
      "showEasing": "cubic_in",
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "hideDuration": 500,
      "popupMaxWidth": "95%",
      "loop": false,
      "id": "popup_3B0B7F59_2B0B_FB00_41B6_D5FA61080923",
      "hfov": 8.91,
      "rotationX": 0,
      "showDuration": 500,
      "video": {
       "class": "VideoResource",
       "height": 1080,
       "width": 1440,
       "mp4Url": "media/video_243E6AE5_2B0A_6500_419F_5585686B1C3D.mp4"
      },
      "hideEasing": "cubic_out",
      "rotationY": 0,
      "autoplay": true
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33, this.camera_512463BF_2CE8_57AA_41C0_967E98B34B91); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_24CAE2F7_2B0F_E500_41C4_A18761875ECF",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 9.3,
        "yaw": 128.9,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 44,
           "width": 89,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -28.55
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 128.9,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 88,
           "width": 178,
           "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_0_HS_3_0.png"
          }
         ]
        },
        "hfov": 9.3,
        "pitch": -28.55
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "rotate": false,
      "id": "panorama_21C17A97_2894_712C_41B7_9CFB64799D98_tcap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 850,
         "width": 850,
         "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "inertia": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_21C17A97_2894_712C_41B7_9CFB64799D98",
  "hfovMax": 120,
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "label": "PHYTOCHEMISTRY",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": -45.16,
    "panorama": {
     "vfov": 180,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_t.jpg",
       "overlays": [
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98, this.camera_5141A3F5_2CE8_57BE_418E_18157F45AC6B); this.mainPlayList.set('selectedIndex', 1)",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_2479695E_2B38_D0EA_41AD_DC4172FC61AB",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 14.72,
           "yaw": -45.16,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 44,
              "width": 130,
              "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -18.35
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -45.16,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 88,
              "width": 261,
              "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_0_HS_0_0.png"
             }
            ]
           },
           "hfov": 14.72,
           "pitch": -18.35
          }
         ]
        },
        {
         "class": "TripodCapPanoramaOverlay",
         "hfov": 45,
         "rotate": false,
         "id": "panorama_21C1904E_2894_713C_41B0_21CD9585DC33_tcap0",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 850,
            "width": 850,
            "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
           }
          ]
         },
         "angle": 0,
         "inertia": false
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3040,
          "width": 6080,
          "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33.jpeg"
         }
        ]
       }
      }
     ],
     "id": "panorama_21C1904E_2894_713C_41B0_21CD9585DC33",
     "hfovMax": 120,
     "partial": false,
     "pitch": 0,
     "class": "Panorama",
     "label": "5",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 128.9,
       "panorama": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98",
       "yaw": -45.16,
       "distance": 1
      }
     ],
     "thumbnailUrl": "media/panorama_21C1904E_2894_713C_41B0_21CD9585DC33_t.jpg",
     "hfov": 360,
     "hfovMin": 120
    },
    "yaw": 128.9,
    "distance": 1
   }
  ],
  "thumbnailUrl": "media/panorama_21C17A97_2894_712C_41B7_9CFB64799D98_t.jpg",
  "hfov": 360,
  "hfovMin": 120
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C17A97_2894_712C_41B7_9CFB64799D98_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 14.65,
   "pitch": -6.12
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -6.15,
     "easing": "cubic_in_out",
     "targetYaw": 23.88,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 2)",
     "pitchSpeed": 17.05,
     "targetPitch": -43.37,
     "easing": "cubic_in_out",
     "targetYaw": -168.93,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -3.09,
     "easing": "cubic_in_out",
     "targetYaw": 132.58,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C1904E_2894_713C_41B0_21CD9585DC33_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 127.67,
   "pitch": -3.51
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "longest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, null, null, false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, 0, null, null, false); this.mainPlayList.set('selectedIndex', 1)",
     "pitchSpeed": 11.7,
     "targetPitch": -3.7,
     "easing": "cubic_in_out",
     "targetYaw": -138.77,
     "yawSpeed": 22.5
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "vfov": 180,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_t.jpg",
    "overlays": [
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7, this.camera_512B73AE_2CE8_57AA_41B5_3024294E55AC); this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_3FEDAE92_2B28_707A_41C2_E8EBF519B4F5",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.04,
        "yaw": 12.85,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 27,
           "width": 96,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -14.56
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 12.85,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 54,
           "width": 192,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_0_0.png"
          }
         ]
        },
        "hfov": 11.04,
        "pitch": -14.56
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_3F761D72_2B28_D0BA_41C3_6C15AF70AE2D",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.28,
        "yaw": 12.33,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 15,
           "width": 44,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -6.88
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 12.33,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 30,
           "width": 89,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_1_0.png"
          }
         ]
        },
        "hfov": 5.28,
        "pitch": -6.88
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_3E0EE8D0_2B58_D1F6_41C3_24A916E36360, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_3EF6CA50_2B58_D0F6_41AF_88DDFBFB9295, this.video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F, this.PlayList_33B76FBF_2B68_4FAA_41BF_DDBB2DA8E865, '95%', '95%', true, true); this.PlayList_33B76FBF_2B68_4FAA_41BF_DDBB2DA8E865.set('selectedIndex', 0); ; this.viewer_uid33BE0FB1_2B68_4FB6_41C5_9A5E3791C4CEVideoPlayer.play();  }",
        "mapColor": "#FF0000"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_3F60ADD7_2B29_F3FA_41C1_3A789B8B4D39",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.83,
        "yaw": 39.7,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 66,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -8.62
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 39.7,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 119,
           "width": 133,
           "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_0_HS_2_0.png"
          }
         ]
        },
        "hfov": 7.83,
        "pitch": -8.62
       }
      ]
     },
     {
      "class": "PopupPanoramaOverlay",
      "yaw": 39.7,
      "pitch": -8.62,
      "showEasing": "cubic_in",
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "hideDuration": 500,
      "popupMaxWidth": "95%",
      "loop": false,
      "id": "popup_3E0EE8D0_2B58_D1F6_41C3_24A916E36360",
      "hfov": 7.83,
      "rotationX": 0,
      "showDuration": 500,
      "video": {
       "class": "VideoResource",
       "height": 1080,
       "width": 1440,
       "mp4Url": "media/video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F.mp4"
      },
      "hideEasing": "cubic_out",
      "rotationY": 0,
      "autoplay": true
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "rotate": false,
      "id": "panorama_21C1854F_2894_533C_41B2_3F2795CC3254_tcap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 850,
         "width": 850,
         "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "inertia": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3040,
       "width": 6080,
       "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254.jpeg"
      }
     ]
    }
   }
  ],
  "id": "panorama_21C1854F_2894_533C_41B2_3F2795CC3254",
  "hfovMax": 120,
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "label": "CENTRAL INSTRUMENTATION FACILITY",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": -90.53,
    "panorama": {
     "vfov": 180,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_t.jpg",
       "overlays": [
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254, this.camera_5189242C_2CE8_50AF_41B3_4A3FEC7E4D36); this.mainPlayList.set('selectedIndex', 3)",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_3E9F6432_2B58_70BA_419F_5306AE486F84",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 10.85,
           "yaw": -90.53,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 29,
              "width": 97,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -20.53
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -90.53,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 58,
              "width": 195,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_0_0.png"
             }
            ]
           },
           "hfov": 10.85,
           "pitch": -20.53
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_32A15801_2B78_B056_41C2_6BC10B35A8AA, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_3105DA62_2B78_B0DA_41BC_E69247CA4CB4, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_0928CF89_2B68_7056_41C4_459AAC4B4DCB, '95%', '95%', true, true); this.PlayList_0928CF89_2B68_7056_41C4_459AAC4B4DCB.set('selectedIndex', 0); ; this.viewer_uid09399F76_2B68_70BA_41BB_36C25CD778ECVideoPlayer.play();  }",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_3C29AFBA_2B58_4FAA_418A_EF7FAC3F6BC3",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 9.42,
           "yaw": -145.01,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 82,
              "width": 87,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -24.53
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -145.01,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 164,
              "width": 174,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_1_0.png"
             }
            ]
           },
           "hfov": 9.42,
           "pitch": -24.53
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283, this.camera_5197843F_2CE8_50AA_41C5_682C54F99659); this.mainPlayList.set('selectedIndex', 5)",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_3C08EAB3_2B68_71BA_41C3_88B21B58A8A3",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 9.86,
           "yaw": 86.03,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 25,
              "width": 85,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -12.6
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 86.03,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 50,
              "width": 170,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_2_0.png"
             }
            ]
           },
           "hfov": 9.86,
           "pitch": -12.6
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_31509B93_2B78_507A_41BE_6FF586B6E809, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_3225ADFB_2B78_53A9_41BA_5DA8D7C560E4, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_09286F8A_2B68_706A_41BA_DAC1F92E997D, '95%', '95%', true, true); this.PlayList_09286F8A_2B68_706A_41BA_DAC1F92E997D.set('selectedIndex', 0); ; this.viewer_uid0938CF77_2B68_70BA_41C1_2BE899DA3D33VideoPlayer.play();  }",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_323124BA_2B79_D1AA_414C_5D3AB97511E4",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.84,
           "yaw": 128.52,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 59,
              "width": 59,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "pitch": -14.03
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 128.52,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 119,
              "width": 119,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_3_0.png"
             }
            ]
           },
           "hfov": 6.84,
           "pitch": -14.03
          }
         ]
        },
        {
         "class": "PopupPanoramaOverlay",
         "yaw": 128.52,
         "pitch": -14.03,
         "showEasing": "cubic_in",
         "popupMaxHeight": "95%",
         "rotationZ": 0,
         "hideDuration": 500,
         "popupMaxWidth": "95%",
         "loop": false,
         "id": "popup_31509B93_2B78_507A_41BE_6FF586B6E809",
         "hfov": 6.84,
         "rotationX": 0,
         "showDuration": 500,
         "video": {
          "class": "VideoResource",
          "height": 1080,
          "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
          "width": 1920
         },
         "hideEasing": "cubic_out",
         "rotationY": 0,
         "autoplay": true
        },
        {
         "class": "PopupPanoramaOverlay",
         "yaw": -145.01,
         "pitch": -24.53,
         "showEasing": "cubic_in",
         "popupMaxHeight": "95%",
         "rotationZ": 0,
         "hideDuration": 500,
         "popupMaxWidth": "95%",
         "loop": false,
         "id": "popup_32A15801_2B78_B056_41C2_6BC10B35A8AA",
         "hfov": 9.42,
         "rotationX": 0,
         "showDuration": 500,
         "video": {
          "class": "VideoResource",
          "height": 1080,
          "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
          "width": 1920
         },
         "hideEasing": "cubic_out",
         "rotationY": 0,
         "autoplay": true
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_03DF8247_2B58_D0DA_41C0_97250405E525, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_0229F481_2B58_D056_41BD_1CAEF9DE8F00, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_6DA80910_2B78_F076_41B0_F6FC349409F1, '95%', '95%', true, true); this.PlayList_6DA80910_2B78_F076_41B0_F6FC349409F1.set('selectedIndex', 0); ; this.viewer_uid6D89F8EA_2B78_F1AA_418D_D27E95A2D1EFVideoPlayer.play();  }",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_0273C9CA_2B58_73EA_41AA_5B5B9D3B79B5",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 7,
           "yaw": 33.51,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 59,
              "width": 59,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_4_0_0_map.gif"
             }
            ]
           },
           "pitch": -6.36
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 33.51,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 119,
              "width": 119,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_4_0.png"
             }
            ]
           },
           "hfov": 7,
           "pitch": -6.36
          }
         ]
        },
        {
         "class": "PopupPanoramaOverlay",
         "yaw": 33.51,
         "pitch": -6.36,
         "showEasing": "cubic_in",
         "popupMaxHeight": "95%",
         "rotationZ": 0,
         "hideDuration": 500,
         "popupMaxWidth": "95%",
         "loop": false,
         "id": "popup_03DF8247_2B58_D0DA_41C0_97250405E525",
         "hfov": 7,
         "rotationX": 0,
         "showDuration": 500,
         "video": {
          "class": "VideoResource",
          "height": 1080,
          "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
          "width": 1920
         },
         "hideEasing": "cubic_out",
         "rotationY": 0,
         "autoplay": true
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_07F6BCB5_2B5B_D1BE_41C4_417944F0134D, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_0673CF7D_2B5B_D0AE_41C4_2D68C3CED7CC, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_6DAFA911_2B78_F076_41C4_EE7EC82960D4, '95%', '95%', true, true); this.PlayList_6DAFA911_2B78_F076_41C4_EE7EC82960D4.set('selectedIndex', 0); ; this.viewer_uid6D88A8EB_2B78_F1AA_419A_12C5EC1EFB34VideoPlayer.play();  }",
           "mapColor": "#FF0000"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "id": "overlay_01D596A0_2B58_7056_41B8_22A4BCD67EE3",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 6.33,
           "yaw": 56.43,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 49,
              "width": 53,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_5_0_0_map.gif"
             }
            ]
           },
           "pitch": -4.79
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 56.43,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 98,
              "width": 107,
              "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_0_HS_5_0.png"
             }
            ]
           },
           "hfov": 6.33,
           "pitch": -4.79
          }
         ]
        },
        {
         "class": "PopupPanoramaOverlay",
         "yaw": 56.43,
         "pitch": -4.79,
         "showEasing": "cubic_in",
         "popupMaxHeight": "95%",
         "rotationZ": 0,
         "hideDuration": 500,
         "popupMaxWidth": "95%",
         "loop": false,
         "id": "popup_07F6BCB5_2B5B_D1BE_41C4_417944F0134D",
         "hfov": 6.33,
         "rotationX": 0,
         "showDuration": 500,
         "video": {
          "class": "VideoResource",
          "height": 1080,
          "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
          "width": 1920
         },
         "hideEasing": "cubic_out",
         "rotationY": 0,
         "autoplay": true
        },
        {
         "class": "TripodCapPanoramaOverlay",
         "hfov": 45,
         "rotate": false,
         "id": "panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_tcap0",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 850,
            "width": 850,
            "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
           }
          ]
         },
         "angle": 0,
         "inertia": false
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3040,
          "width": 6080,
          "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7.jpeg"
         }
        ]
       }
      }
     ],
     "id": "panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7",
     "hfovMax": 120,
     "partial": false,
     "pitch": 0,
     "class": "Panorama",
     "label": "8",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 12.85,
       "panorama": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254",
       "yaw": -90.53,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": -89.79,
       "panorama": {
        "vfov": 180,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_t.jpg",
          "overlays": [
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_32F9A509_2B79_D056_41C3_C9791435C04A, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_316E07CA_2B79_DFEA_41B4_94CEEC7DD389, this.video_3E29B943_2B57_B0DA_41C4_87589CB6C427, this.PlayList_09281F8B_2B68_706A_41BB_DE7A13BB4313, '95%', '95%', true, true); this.PlayList_09281F8B_2B68_706A_41BB_DE7A13BB4313.set('selectedIndex', 0); ; this.viewer_uid09373F79_2B68_70B6_41A2_34B2E0E58AD7VideoPlayer.play();  }",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "id": "overlay_3270CB21_2B78_7059_41C0_F40E41FBCA4E",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.37,
              "yaw": 145.17,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 94,
                 "width": 96,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -24.62
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 145.17,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 188,
                 "width": 192,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_0_0.png"
                }
               ]
              },
              "hfov": 10.37,
              "pitch": -24.62
             }
            ]
           },
           {
            "class": "PopupPanoramaOverlay",
            "yaw": 145.17,
            "pitch": -24.62,
            "showEasing": "cubic_in",
            "popupMaxHeight": "95%",
            "rotationZ": 0,
            "hideDuration": 500,
            "popupMaxWidth": "95%",
            "loop": false,
            "id": "popup_32F9A509_2B79_D056_41C3_C9791435C04A",
            "hfov": 10.37,
            "rotationX": 0,
            "showDuration": 500,
            "video": {
             "class": "VideoResource",
             "height": 1080,
             "width": 1440,
             "mp4Url": "media/video_3E29B943_2B57_B0DA_41C4_87589CB6C427.mp4"
            },
            "hideEasing": "cubic_out",
            "rotationY": 0,
            "autoplay": true
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB, this.camera_51FEC486_2CE8_505B_41AA_A8704578954F); this.mainPlayList.set('selectedIndex', 6)",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "id": "overlay_31185C58_2B78_B0F6_41B4_28B9C2F6EC48",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.82,
              "yaw": 86.11,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 26,
                 "width": 94,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -13.9
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 86.11,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 52,
                 "width": 188,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_1_0.png"
                }
               ]
              },
              "hfov": 10.82,
              "pitch": -13.9
             }
            ]
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_312CFAA9_2B77_D1A9_41B4_2A485383A7F1, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_32A45D12_2B77_D07A_41B9_1E89C7C2F766, this.video_3E2A1D54_2B57_B0FE_4197_555277F79EEE, this.PlayList_09279F8B_2B68_706A_4195_DC6074CC8CDC, '95%', '95%', true, true); this.PlayList_09279F8B_2B68_706A_4195_DC6074CC8CDC.set('selectedIndex', 0); ; this.viewer_uid09367F7A_2B68_70AA_41B7_2E5D64D2CD3CVideoPlayer.play();  }",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "id": "overlay_31280070_2B78_50B6_419B_080177D85868",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.77,
              "yaw": 100.98,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 44,
                 "width": 40,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -4.39
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 100.98,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 88,
                 "width": 80,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_2_0.png"
                }
               ]
              },
              "hfov": 4.77,
              "pitch": -4.39
             }
            ]
           },
           {
            "class": "PopupPanoramaOverlay",
            "yaw": 100.98,
            "pitch": -4.39,
            "showEasing": "cubic_in",
            "popupMaxHeight": "95%",
            "rotationZ": 0,
            "hideDuration": 500,
            "popupMaxWidth": "95%",
            "loop": false,
            "id": "popup_312CFAA9_2B77_D1A9_41B4_2A485383A7F1",
            "hfov": 4.77,
            "rotationX": 0,
            "showDuration": 500,
            "video": {
             "class": "VideoResource",
             "height": 1080,
             "width": 1440,
             "mp4Url": "media/video_3E2A1D54_2B57_B0FE_4197_555277F79EEE.mp4"
            },
            "hideEasing": "cubic_out",
            "rotationY": 0,
            "autoplay": true
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_316B3794_2B69_F07E_41A6_B74E6DEAEE20, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_31E3EA29_2B69_F056_41BE_B00BBDFE598B, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_09271F8C_2B68_706E_41C0_2F8AECD3767C, '95%', '95%', true, true); this.PlayList_09271F8C_2B68_706E_41C0_2F8AECD3767C.set('selectedIndex', 0); ; this.viewer_uid0935AF7B_2B68_70AA_41B9_62C534AD5307VideoPlayer.play();  }",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "id": "overlay_310CE2F4_2B69_B1BE_41C5_919AF0474839",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 6.98,
              "yaw": 47.89,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 59,
                 "width": 59,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_3_0_0_map.gif"
                }
               ]
              },
              "pitch": -8.01
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 47.89,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 119,
                 "width": 119,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_3_0.png"
                }
               ]
              },
              "hfov": 6.98,
              "pitch": -8.01
             }
            ]
           },
           {
            "class": "PopupPanoramaOverlay",
            "yaw": 47.89,
            "pitch": -8.01,
            "showEasing": "cubic_in",
            "popupMaxHeight": "95%",
            "rotationZ": 0,
            "hideDuration": 500,
            "popupMaxWidth": "95%",
            "loop": false,
            "id": "popup_316B3794_2B69_F07E_41A6_B74E6DEAEE20",
            "hfov": 6.98,
            "rotationX": 0,
            "showDuration": 500,
            "video": {
             "class": "VideoResource",
             "height": 1080,
             "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
             "width": 1920
            },
            "hideEasing": "cubic_out",
            "rotationY": 0,
            "autoplay": true
           },
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7, this.camera_51D78475_2CE8_50BE_41C5_8688E73F8E89); this.mainPlayList.set('selectedIndex', 4)",
              "mapColor": "#FF0000"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "id": "overlay_31B9ED69_2B68_D0D6_41BA_E574FC153520",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 13.74,
              "yaw": -89.79,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 44,
                 "width": 130,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_4_0_0_map.gif"
                }
               ]
              },
              "pitch": -27.59
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -89.79,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 88,
                 "width": 261,
                 "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_0_HS_4_0.png"
                }
               ]
              },
              "hfov": 13.74,
              "pitch": -27.59
             }
            ]
           },
           {
            "class": "TripodCapPanoramaOverlay",
            "hfov": 45,
            "rotate": false,
            "id": "panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_tcap0",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 850,
               "width": 850,
               "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
              }
             ]
            },
            "angle": 0,
            "inertia": false
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3040,
             "width": 6080,
             "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283.jpeg"
            }
           ]
          }
         }
        ],
        "id": "panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283",
        "hfovMax": 120,
        "partial": false,
        "pitch": 0,
        "class": "Panorama",
        "label": "9",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 86.03,
          "panorama": "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7",
          "yaw": -89.79,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 158.9,
          "panorama": {
           "vfov": 180,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_t.jpg",
             "overlays": [
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_35E8285D_2B68_70EE_41B4_A1D3555F5130, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_3406AB30_2B68_70B7_41B8_1F1A3C97FD81, this.video_3E2A1D54_2B57_B0FE_4197_555277F79EEE, this.PlayList_0926AF8D_2B68_706E_41AB_D2DED822C73A, '95%', '95%', true, true); this.PlayList_0926AF8D_2B68_706E_41AB_D2DED822C73A.set('selectedIndex', 0); ; this.viewer_uid0934CF7C_2B68_70AE_41C5_290B43993616VideoPlayer.play();  }",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "id": "overlay_35D178C7_2B6B_B1DA_419D_6A9CE0D0D320",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 6.78,
                 "yaw": 146.17,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 57,
                    "width": 57,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -0.56
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 146.17,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 114,
                    "width": 114,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_0_0.png"
                   }
                  ]
                 },
                 "hfov": 6.78,
                 "pitch": -0.56
                }
               ]
              },
              {
               "class": "PopupPanoramaOverlay",
               "yaw": 146.17,
               "pitch": -0.56,
               "showEasing": "cubic_in",
               "popupMaxHeight": "95%",
               "rotationZ": 0,
               "hideDuration": 500,
               "popupMaxWidth": "95%",
               "loop": false,
               "id": "popup_35E8285D_2B68_70EE_41B4_A1D3555F5130",
               "hfov": 6.78,
               "rotationX": 0,
               "showDuration": 500,
               "video": {
                "class": "VideoResource",
                "height": 1080,
                "width": 1440,
                "mp4Url": "media/video_3E2A1D54_2B57_B0FE_4197_555277F79EEE.mp4"
               },
               "hideEasing": "cubic_out",
               "rotationY": 0,
               "autoplay": true
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283, this.camera_5132A3E3_2CE8_57DA_41A2_43664D509F44); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "id": "overlay_35AAC376_2B68_D0BA_41BB_7923190EDEF6",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 11.36,
                 "yaw": 158.9,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 31,
                    "width": 104,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -23.27
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 158.9,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 63,
                    "width": 208,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_1_0.png"
                   }
                  ]
                 },
                 "hfov": 11.36,
                 "pitch": -23.27
                }
               ]
              },
              {
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3, this.camera_513B93D1_2CE8_57F6_41B8_7351BF6E7F05); this.mainPlayList.set('selectedIndex', 7)",
                 "mapColor": "#FF0000"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "id": "overlay_35999D8F_2B69_B069_41A3_BFD7D3419C03",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 13.63,
                 "yaw": -140.96,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 44,
                    "width": 130,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -28.46
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -140.96,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 88,
                    "width": 261,
                    "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_0_HS_2_0.png"
                   }
                  ]
                 },
                 "hfov": 13.63,
                 "pitch": -28.46
                }
               ]
              },
              {
               "class": "TripodCapPanoramaOverlay",
               "hfov": 45,
               "rotate": false,
               "id": "panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_tcap0",
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "height": 850,
                  "width": 850,
                  "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                 }
                ]
               },
               "angle": 0,
               "inertia": false
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3040,
                "width": 6080,
                "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB.jpeg"
               }
              ]
             }
            }
           ],
           "id": "panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB",
           "hfovMax": 120,
           "partial": false,
           "pitch": 0,
           "class": "Panorama",
           "label": "10",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 99.8,
             "panorama": {
              "vfov": 180,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_t.jpg",
                "overlays": [
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1ACCB508_2B38_B056_41C4_EC11BEAC7CA3, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_199627C4_2B38_BFDE_41C3_0359288D0EF9, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_6DAE7913_2B78_F07A_41B8_E6938D27FB1C, '95%', '95%', true, true); this.PlayList_6DAE7913_2B78_F07A_41B8_E6938D27FB1C.set('selectedIndex', 0); ; this.viewer_uid6DB378F2_2B78_F1BA_41B8_88BC529E769FVideoPlayer.play();  }",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_044EDAC0_2B3B_F1D6_41C0_39F09160F6D7",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 7,
                    "yaw": -136.73,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 59,
                       "width": 59,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -6.62
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -136.73,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 119,
                       "width": 119,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_0_0.png"
                      }
                     ]
                    },
                    "hfov": 7,
                    "pitch": -6.62
                   }
                  ]
                 },
                 {
                  "class": "PopupPanoramaOverlay",
                  "yaw": -136.73,
                  "pitch": -6.62,
                  "showEasing": "cubic_in",
                  "popupMaxHeight": "95%",
                  "rotationZ": 0,
                  "hideDuration": 500,
                  "popupMaxWidth": "95%",
                  "loop": false,
                  "id": "popup_1ACCB508_2B38_B056_41C4_EC11BEAC7CA3",
                  "hfov": 7,
                  "rotationX": 0,
                  "showDuration": 500,
                  "video": {
                   "class": "VideoResource",
                   "height": 1080,
                   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                   "width": 1920
                  },
                  "hideEasing": "cubic_out",
                  "rotationY": 0,
                  "autoplay": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1B5C7552_2B38_50FA_41B3_32FE8ADB81AA, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_1ACA3831_2B38_50B6_41A8_016A71AC9BDE, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_6DADF914_2B78_F07E_419B_0677EF7A3B64, '95%', '95%', true, true); this.PlayList_6DADF914_2B78_F07E_419B_0677EF7A3B64.set('selectedIndex', 0); ; this.viewer_uid6DB228F3_2B78_F1BA_41B5_2CC2F7EB2F18VideoPlayer.play();  }",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_1BBC0855_2B39_F0FE_41C1_4D698D0C4AA2",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 6.97,
                    "yaw": 164,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 59,
                       "width": 59,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -8.45
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 164,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 119,
                       "width": 119,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_1_0.png"
                      }
                     ]
                    },
                    "hfov": 6.97,
                    "pitch": -8.45
                   }
                  ]
                 },
                 {
                  "class": "PopupPanoramaOverlay",
                  "yaw": 164,
                  "pitch": -8.45,
                  "showEasing": "cubic_in",
                  "popupMaxHeight": "95%",
                  "rotationZ": 0,
                  "hideDuration": 500,
                  "popupMaxWidth": "95%",
                  "loop": false,
                  "id": "popup_1B5C7552_2B38_50FA_41B3_32FE8ADB81AA",
                  "hfov": 6.97,
                  "rotationX": 0,
                  "showDuration": 500,
                  "video": {
                   "class": "VideoResource",
                   "height": 1080,
                   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                   "width": 1920
                  },
                  "hideEasing": "cubic_out",
                  "rotationY": 0,
                  "autoplay": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1A211D54_2B38_B0FE_41C3_EC05BEBD3A2A, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_19AD0006_2B38_505A_41BD_AEA1DB50005C, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_6DAD6914_2B78_F07E_41BE_BF98A802B246, '95%', '95%', true, true); this.PlayList_6DAD6914_2B78_F07E_41BE_BF98A802B246.set('selectedIndex', 0); ; this.viewer_uid6DB198F4_2B78_F1BE_41B0_203546EF932BVideoPlayer.play();  }",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_1B009202_2B38_F05A_41A0_FCD4FB26754D",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 7.01,
                    "yaw": 124.69,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 59,
                       "width": 59,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -5.48
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 124.69,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 119,
                       "width": 119,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_2_0.png"
                      }
                     ]
                    },
                    "hfov": 7.01,
                    "pitch": -5.48
                   }
                  ]
                 },
                 {
                  "class": "PopupPanoramaOverlay",
                  "yaw": 124.69,
                  "pitch": -5.48,
                  "showEasing": "cubic_in",
                  "popupMaxHeight": "95%",
                  "rotationZ": 0,
                  "hideDuration": 500,
                  "popupMaxWidth": "95%",
                  "loop": false,
                  "id": "popup_1A211D54_2B38_B0FE_41C3_EC05BEBD3A2A",
                  "hfov": 7.01,
                  "rotationX": 0,
                  "showDuration": 500,
                  "video": {
                   "class": "VideoResource",
                   "height": 1080,
                   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                   "width": 1920
                  },
                  "hideEasing": "cubic_out",
                  "rotationY": 0,
                  "autoplay": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1A3023F2_2B3F_B7BA_41B2_4C313511CDEA, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_1A59D660_2B3F_B0D6_41BD_EF7F148E4AF8, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_6DAC9915_2B78_F07E_41BE_1E14EE697DB3, '95%', '95%', true, true); this.PlayList_6DAC9915_2B78_F07E_41BE_1E14EE697DB3.set('selectedIndex', 0); ; this.viewer_uid6DB158F5_2B78_F1BE_41C2_40B208FF9C98VideoPlayer.play();  }",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_1B7F84CD_2B3F_F1E9_41BD_0AE3BCF1AF31",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 6.92,
                    "yaw": -61.5,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 59,
                       "width": 59,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_3_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -10.71
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -61.5,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 119,
                       "width": 119,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_3_0.png"
                      }
                     ]
                    },
                    "hfov": 6.92,
                    "pitch": -10.71
                   }
                  ]
                 },
                 {
                  "class": "PopupPanoramaOverlay",
                  "yaw": -61.5,
                  "pitch": -10.71,
                  "showEasing": "cubic_in",
                  "popupMaxHeight": "95%",
                  "rotationZ": 0,
                  "hideDuration": 500,
                  "popupMaxWidth": "95%",
                  "loop": false,
                  "id": "popup_1A3023F2_2B3F_B7BA_41B2_4C313511CDEA",
                  "hfov": 6.92,
                  "rotationX": 0,
                  "showDuration": 500,
                  "video": {
                   "class": "VideoResource",
                   "height": 1080,
                   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                   "width": 1920
                  },
                  "hideEasing": "cubic_out",
                  "rotationY": 0,
                  "autoplay": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_19C834C6_2B39_D1DA_41C2_82B1B834FC1E, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_189C1728_2B39_D056_41C2_D5D01A7E45E3, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_6DAC6916_2B78_F07A_41B9_1A95C82943BA, '95%', '95%', true, true); this.PlayList_6DAC6916_2B78_F07A_41B9_1A95C82943BA.set('selectedIndex', 0); ; this.viewer_uid6DB008F5_2B78_F1B9_41BD_802760DA1C60VideoPlayer.play();  }",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_1B72BA2C_2B38_B0AE_4174_164ADBFB86CA",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 4.55,
                    "yaw": -76.32,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 38,
                       "width": 38,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_4_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -8.8
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -76.32,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 77,
                       "width": 77,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_4_0.png"
                      }
                     ]
                    },
                    "hfov": 4.55,
                    "pitch": -8.8
                   }
                  ]
                 },
                 {
                  "class": "PopupPanoramaOverlay",
                  "yaw": -76.32,
                  "pitch": -8.8,
                  "showEasing": "cubic_in",
                  "popupMaxHeight": "95%",
                  "rotationZ": 0,
                  "hideDuration": 500,
                  "popupMaxWidth": "95%",
                  "loop": false,
                  "id": "popup_19C834C6_2B39_D1DA_41C2_82B1B834FC1E",
                  "hfov": 4.55,
                  "rotationX": 0,
                  "showDuration": 500,
                  "video": {
                   "class": "VideoResource",
                   "height": 1080,
                   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                   "width": 1920
                  },
                  "hideEasing": "cubic_out",
                  "rotationY": 0,
                  "autoplay": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_181326FB_2B38_D1AA_41BC_014F19FCB6A9, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_1B6809AD_2B38_D3AE_41B2_602652A126B6, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_6D53B916_2B78_F07A_41B7_BAB9F0C20112, '95%', '95%', true, true); this.PlayList_6D53B916_2B78_F07A_41B7_BAB9F0C20112.set('selectedIndex', 0); ; this.viewer_uid6DB7C8F6_2B78_F1BA_41A7_44B7C757164CVideoPlayer.play();  }",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_1A374A24_2B38_505E_41C5_02D82107BC2E",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 4.06,
                    "yaw": -112.85,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 31,
                       "width": 34,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_5_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -5.48
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -112.85,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 63,
                       "width": 68,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_5_0.png"
                      }
                     ]
                    },
                    "hfov": 4.06,
                    "pitch": -5.48
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB, this.camera_516FE406_2CE8_505A_41C0_540AFBF7252E); this.mainPlayList.set('selectedIndex', 6)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_1A3D2BE2_2B3B_F7DA_41B0_43BE97FE8F12",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 13.67,
                    "yaw": 99.8,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 44,
                       "width": 130,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_6_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -28.11
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 99.8,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 88,
                       "width": 261,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_6_0.png"
                      }
                     ]
                    },
                    "hfov": 13.67,
                    "pitch": -28.11
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B, this.camera_517D941A_2CE8_506A_41C4_DF0B542B7BF2); this.mainPlayList.set('selectedIndex', 8)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_1AB8B966_2B38_70DB_41B4_EE57D7A8147E",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 10.7,
                    "yaw": -95.11,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 27,
                       "width": 102,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_7_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -28.68
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -95.11,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 54,
                       "width": 205,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_7_0.png"
                      }
                     ]
                    },
                    "hfov": 10.7,
                    "pitch": -28.68
                   }
                  ]
                 },
                 {
                  "class": "PopupPanoramaOverlay",
                  "yaw": -112.85,
                  "pitch": -5.48,
                  "showEasing": "cubic_in",
                  "popupMaxHeight": "95%",
                  "rotationZ": 0,
                  "hideDuration": 500,
                  "popupMaxWidth": "95%",
                  "loop": false,
                  "id": "popup_181326FB_2B38_D1AA_41BC_014F19FCB6A9",
                  "hfov": 4.06,
                  "rotationX": 0,
                  "showDuration": 500,
                  "video": {
                   "class": "VideoResource",
                   "height": 1080,
                   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                   "width": 1920
                  },
                  "hideEasing": "cubic_out",
                  "rotationY": 0,
                  "autoplay": true
                 },
                 {
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 9)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "id": "overlay_18D981A3_2B28_F05A_41B7_CFB6BC709F32",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 5.04,
                    "yaw": -92.84,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 14,
                       "width": 44,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_8_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -14.95
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -92.84,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 29,
                       "width": 88,
                       "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_0_HS_8_0.png"
                      }
                     ]
                    },
                    "hfov": 5.04,
                    "pitch": -14.95
                   }
                  ]
                 },
                 {
                  "class": "TripodCapPanoramaOverlay",
                  "hfov": 45,
                  "rotate": false,
                  "id": "panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_tcap0",
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "height": 850,
                     "width": 850,
                     "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                    }
                   ]
                  },
                  "angle": 0,
                  "inertia": false
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 3040,
                   "width": 6080,
                   "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3.jpeg"
                  }
                 ]
                }
               }
              ],
              "id": "panorama_21C19075_2894_B1EC_41C2_706B0713E1F3",
              "hfovMax": 120,
              "partial": false,
              "pitch": 0,
              "class": "Panorama",
              "label": "11",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -140.96,
                "panorama": "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB",
                "yaw": 99.8,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 85.77,
                "panorama": {
                 "vfov": 180,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_t.jpg",
                   "overlays": [
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1F978010_2B58_5076_41A7_6D3C06AE6E2F, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_1F1F226E_2B58_50AA_41C4_4D937032CC21, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_6D530917_2B78_F07A_41BF_31D07960C5D5, '95%', '95%', true, true); this.PlayList_6D530917_2B78_F07A_41BF_31D07960C5D5.set('selectedIndex', 0); ; this.viewer_uid6DB568F9_2B78_F1B6_41B8_1AB12A8E6B81VideoPlayer.play();  }",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_185C2515_2B58_D07E_41A1_5BD0044513B5",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 6.37,
                       "yaw": -37.79,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -25.27
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -37.79,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_0_0.png"
                         }
                        ]
                       },
                       "hfov": 6.37,
                       "pitch": -25.27
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1F3EB0EC_2B58_D1AE_41C1_1281C85577D9, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_1E569350_2B58_D0F6_41A5_512AC1C2C2EA, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_6D52B917_2B78_F079_41C3_4F740519CE89, '95%', '95%', true, true); this.PlayList_6D52B917_2B78_F079_41C3_4F740519CE89.set('selectedIndex', 0); ; this.viewer_uid6DB4E8F9_2B78_F1A9_41AE_542187BCCD6CVideoPlayer.play();  }",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_19088C1E_2B58_506A_41C1_5D847567D393",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 4.36,
                       "yaw": -84.17,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 41,
                          "width": 37,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -10.37
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -84.17,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 83,
                          "width": 74,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_1_0.png"
                         }
                        ]
                       },
                       "hfov": 4.36,
                       "pitch": -10.37
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_195005A5_2B58_D05E_41AE_B430F46606C7, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_193C5803_2B58_D05A_41B8_482F07ECB61D, this.video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C, this.PlayList_6D523918_2B78_F076_41C5_5C8CEB49EFA4, '95%', '95%', true, true); this.PlayList_6D523918_2B78_F076_41C5_5C8CEB49EFA4.set('selectedIndex', 0); ; this.viewer_uid6DB478FA_2B78_F1AA_41C2_A5236E2A1BDEVideoPlayer.play();  }",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_1A1525A4_2B5B_B05E_4196_CE94695CD2F3",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 6.9,
                       "yaw": -143.61,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_2_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -11.5
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -143.61,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_2_0.png"
                         }
                        ]
                       },
                       "hfov": 6.9,
                       "pitch": -11.5
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1812DC26_2B58_B05A_41BE_343D6A86EE1C, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_1F91BE83_2B58_B05A_419C_F817087BA475, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_6D525919_2B78_F076_418F_B846FC23BD51, '95%', '95%', true, true); this.PlayList_6D525919_2B78_F076_418F_B846FC23BD51.set('selectedIndex', 0); ; this.viewer_uid6DBB28FB_2B78_F1AA_41C1_339639D25752VideoPlayer.play();  }",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_1844E73E_2B58_F0AA_41C4_385650C01BC3",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 6.98,
                       "yaw": -177,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_3_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -7.75
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -177,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_3_0.png"
                         }
                        ]
                       },
                       "hfov": 6.98,
                       "pitch": -7.75
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_184933F0_2B58_57B6_4188_25FA6469F73E, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_182A76C8_2B58_51D6_4195_5DE3E41F3EF4, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_6D512919_2B78_F076_41B6_A753A91E2393, '95%', '95%', true, true); this.PlayList_6D512919_2B78_F076_41B6_A753A91E2393.set('selectedIndex', 0); ; this.viewer_uid6DBB58FB_2B78_F1AA_41B4_7528DC051B09VideoPlayer.play();  }",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_19CFD7F5_2B58_7FBE_419B_76A922911F64",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 7.02,
                       "yaw": 119.8,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_4_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -4.44
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 119.8,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_4_0.png"
                         }
                        ]
                       },
                       "hfov": 7.02,
                       "pitch": -4.44
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_1939A537_2B5B_D0B9_41B5_0049148AC129, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_18A9F79B_2B5B_D06A_41C2_3D1E92234705, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_6D51591A_2B78_F06A_4193_6E783429DA1B, '95%', '95%', true, true); this.PlayList_6D51591A_2B78_F06A_4193_6E783429DA1B.set('selectedIndex', 0); ; this.viewer_uid6DBA38FC_2B78_F1AE_41B6_BF5DA42228F3VideoPlayer.play();  }",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_1FAF4C3A_2B58_50AA_41C4_3E08643314EE",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 6.97,
                       "yaw": 54.34,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 59,
                          "width": 59,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_5_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -8.27
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 54.34,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 119,
                          "width": 119,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_5_0.png"
                         }
                        ]
                       },
                       "hfov": 6.97,
                       "pitch": -8.27
                      }
                     ]
                    },
                    {
                     "class": "PopupPanoramaOverlay",
                     "yaw": -143.61,
                     "pitch": -11.5,
                     "showEasing": "cubic_in",
                     "popupMaxHeight": "95%",
                     "rotationZ": 0,
                     "hideDuration": 500,
                     "popupMaxWidth": "95%",
                     "loop": false,
                     "id": "popup_195005A5_2B58_D05E_41AE_B430F46606C7",
                     "hfov": 6.9,
                     "rotationX": 0,
                     "showDuration": 500,
                     "video": {
                      "class": "VideoResource",
                      "height": 1080,
                      "width": 1440,
                      "mp4Url": "media/video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C.mp4"
                     },
                     "hideEasing": "cubic_out",
                     "rotationY": 0,
                     "autoplay": true
                    },
                    {
                     "class": "PopupPanoramaOverlay",
                     "yaw": -177,
                     "pitch": -7.75,
                     "showEasing": "cubic_in",
                     "popupMaxHeight": "95%",
                     "rotationZ": 0,
                     "hideDuration": 500,
                     "popupMaxWidth": "95%",
                     "loop": false,
                     "id": "popup_1812DC26_2B58_B05A_41BE_343D6A86EE1C",
                     "hfov": 6.98,
                     "rotationX": 0,
                     "showDuration": 500,
                     "video": {
                      "class": "VideoResource",
                      "height": 1080,
                      "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                      "width": 1920
                     },
                     "hideEasing": "cubic_out",
                     "rotationY": 0,
                     "autoplay": true
                    },
                    {
                     "class": "PopupPanoramaOverlay",
                     "yaw": 119.8,
                     "pitch": -4.44,
                     "showEasing": "cubic_in",
                     "popupMaxHeight": "95%",
                     "rotationZ": 0,
                     "hideDuration": 500,
                     "popupMaxWidth": "95%",
                     "loop": false,
                     "id": "popup_184933F0_2B58_57B6_4188_25FA6469F73E",
                     "hfov": 7.02,
                     "rotationX": 0,
                     "showDuration": 500,
                     "video": {
                      "class": "VideoResource",
                      "height": 1080,
                      "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                      "width": 1920
                     },
                     "hideEasing": "cubic_out",
                     "rotationY": 0,
                     "autoplay": true
                    },
                    {
                     "class": "PopupPanoramaOverlay",
                     "yaw": 54.34,
                     "pitch": -8.27,
                     "showEasing": "cubic_in",
                     "popupMaxHeight": "95%",
                     "rotationZ": 0,
                     "hideDuration": 500,
                     "popupMaxWidth": "95%",
                     "loop": false,
                     "id": "popup_1939A537_2B5B_D0B9_41B5_0049148AC129",
                     "hfov": 6.97,
                     "rotationX": 0,
                     "showDuration": 500,
                     "video": {
                      "class": "VideoResource",
                      "height": 1080,
                      "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                      "width": 1920
                     },
                     "hideEasing": "cubic_out",
                     "rotationY": 0,
                     "autoplay": true
                    },
                    {
                     "class": "PopupPanoramaOverlay",
                     "yaw": -37.79,
                     "pitch": -25.27,
                     "showEasing": "cubic_in",
                     "popupMaxHeight": "95%",
                     "rotationZ": 0,
                     "hideDuration": 500,
                     "popupMaxWidth": "95%",
                     "loop": false,
                     "id": "popup_1F978010_2B58_5076_41A7_6D3C06AE6E2F",
                     "hfov": 6.37,
                     "rotationX": 0,
                     "showDuration": 500,
                     "video": {
                      "class": "VideoResource",
                      "height": 1080,
                      "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                      "width": 1920
                     },
                     "hideEasing": "cubic_out",
                     "rotationY": 0,
                     "autoplay": true
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_18A63C47_2B59_B0DA_41C5_BFD10DBD28F2, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_18213EB2_2B59_B1BA_41C4_DB51E25BADBE, this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D, this.PlayList_6D50F91B_2B78_F06A_41C1_3F6C9716FDC0, '95%', '95%', true, true); this.PlayList_6D50F91B_2B78_F06A_41C1_3F6C9716FDC0.set('selectedIndex', 0); ; this.viewer_uid6DB938FD_2B78_F1AE_41B5_E2C2CC61E320VideoPlayer.play();  }",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_1F6BFB9E_2B58_706A_41A0_D6359D2FB465",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 4.58,
                       "yaw": -121.3,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 36,
                          "width": 38,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_6_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -5.7
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -121.3,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 73,
                          "width": 77,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_6_0.png"
                         }
                        ]
                       },
                       "hfov": 4.58,
                       "pitch": -5.7
                      }
                     ]
                    },
                    {
                     "class": "PopupPanoramaOverlay",
                     "yaw": -121.3,
                     "pitch": -5.7,
                     "showEasing": "cubic_in",
                     "popupMaxHeight": "95%",
                     "rotationZ": 0,
                     "hideDuration": 500,
                     "popupMaxWidth": "95%",
                     "loop": false,
                     "id": "popup_18A63C47_2B59_B0DA_41C5_BFD10DBD28F2",
                     "hfov": 4.58,
                     "rotationX": 0,
                     "showDuration": 500,
                     "video": {
                      "class": "VideoResource",
                      "height": 1080,
                      "width": 1440,
                      "mp4Url": "media/video_243E6AE5_2B0A_6500_419F_5585686B1C3D.mp4"
                     },
                     "hideEasing": "cubic_out",
                     "rotationY": 0,
                     "autoplay": true
                    },
                    {
                     "class": "PopupPanoramaOverlay",
                     "yaw": -84.17,
                     "pitch": -10.37,
                     "showEasing": "cubic_in",
                     "popupMaxHeight": "95%",
                     "rotationZ": 0,
                     "hideDuration": 500,
                     "popupMaxWidth": "95%",
                     "loop": false,
                     "id": "popup_1F3EB0EC_2B58_D1AE_41C1_1281C85577D9",
                     "hfov": 4.36,
                     "rotationX": 0,
                     "showDuration": 500,
                     "video": {
                      "class": "VideoResource",
                      "height": 1080,
                      "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                      "width": 1920
                     },
                     "hideEasing": "cubic_out",
                     "rotationY": 0,
                     "autoplay": true
                    },
                    {
                     "class": "TripodCapPanoramaOverlay",
                     "hfov": 45,
                     "rotate": false,
                     "id": "panorama_21C35B31_2894_D764_41B0_8E768B049B9B_tcap0",
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "height": 850,
                        "width": 850,
                        "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                       }
                      ]
                     },
                     "angle": 0,
                     "inertia": false
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3, this.camera_51A2A451_2CE8_50F6_41A8_37211E695A7E); this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_6AE36307_2B69_F05A_41C0_F5F22EC988E1",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 13.35,
                       "yaw": 85.77,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 33,
                          "width": 117,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_7_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -16.65
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 85.77,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 66,
                          "width": 235,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_7_0.png"
                         }
                        ]
                       },
                       "hfov": 13.35,
                       "pitch": -16.65
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB, this.camera_51CB6463_2CE8_50DA_41C5_C2ADE0465402); this.mainPlayList.set('selectedIndex', 9)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "id": "overlay_6B17C17C_2B6B_B0AE_41A3_BBAAB5D8D8B2",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 11.18,
                       "yaw": -104.48,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 27,
                          "width": 102,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_8_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -22.58
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -104.48,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 54,
                          "width": 204,
                          "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_0_HS_8_0.png"
                         }
                        ]
                       },
                       "hfov": 11.18,
                       "pitch": -22.58
                      }
                     ]
                    }
                   ],
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 3040,
                      "width": 6080,
                      "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B.jpeg"
                     }
                    ]
                   }
                  }
                 ],
                 "id": "panorama_21C35B31_2894_D764_41B0_8E768B049B9B",
                 "hfovMax": 120,
                 "partial": false,
                 "pitch": 0,
                 "class": "Panorama",
                 "label": "12",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -95.11,
                   "panorama": "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3",
                   "yaw": 85.77,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 97.27,
                   "panorama": {
                    "vfov": 180,
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_t.jpg",
                      "overlays": [
                       {
                        "class": "TripodCapPanoramaOverlay",
                        "hfov": 45,
                        "rotate": false,
                        "id": "panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_tcap0",
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "class": "ImageResourceLevel",
                           "height": 850,
                           "width": 850,
                           "url": "media/panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_tcap0.png"
                          }
                         ]
                        },
                        "angle": 0,
                        "inertia": false
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6A9CAB79_2B69_B0B6_41BC_6D362232D5F5, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_6A1C5DE5_2B69_B3DE_41C1_043AACFEC932, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_6D50791B_2B78_F06A_41C1_99AA0E850F29, '95%', '95%', true, true); this.PlayList_6D50791B_2B78_F06A_41C1_99AA0E850F29.set('selectedIndex', 0); ; this.viewer_uid6DBF2900_2B78_F056_41B5_B50A8A9FE9AAVideoPlayer.play();  }",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "id": "overlay_694EB6C3_2B69_D1DA_41C5_644885469A76",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 5.25,
                          "yaw": -66.43,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 44,
                             "width": 45,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -13.29
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -66.43,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 88,
                             "width": 91,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_0_0.png"
                            }
                           ]
                          },
                          "hfov": 5.25,
                          "pitch": -13.29
                         }
                        ]
                       },
                       {
                        "class": "PopupPanoramaOverlay",
                        "yaw": -66.43,
                        "pitch": -13.29,
                        "showEasing": "cubic_in",
                        "popupMaxHeight": "95%",
                        "rotationZ": 0,
                        "hideDuration": 500,
                        "popupMaxWidth": "95%",
                        "loop": false,
                        "id": "popup_6A9CAB79_2B69_B0B6_41BC_6D362232D5F5",
                        "hfov": 5.25,
                        "rotationX": 0,
                        "showDuration": 500,
                        "video": {
                         "class": "VideoResource",
                         "height": 1080,
                         "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                         "width": 1920
                        },
                        "hideEasing": "cubic_out",
                        "rotationY": 0,
                        "autoplay": true
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6F5D6B66_2B78_D0DA_41B9_A026FFB313B3, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_6AD94E29_2B78_D056_41BA_FA656C81895E, this.video_6841836A_29BB_D7E4_41C1_99E27908293D, this.PlayList_6D57891C_2B78_F06E_41A7_511B94D17FD6, '95%', '95%', true, true); this.PlayList_6D57891C_2B78_F06E_41A7_511B94D17FD6.set('selectedIndex', 0); ; this.viewer_uid6DBEE900_2B78_F056_41BA_E7239EEC58A8VideoPlayer.play();  }",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "id": "overlay_6928B388_2B78_B06C_41B5_18CB7580BD03",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 6.61,
                          "yaw": 48.72,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 64,
                             "width": 66,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -32.46
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 48.72,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 129,
                             "width": 132,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_1_0.png"
                            }
                           ]
                          },
                          "hfov": 6.61,
                          "pitch": -32.46
                         }
                        ]
                       },
                       {
                        "class": "PopupPanoramaOverlay",
                        "yaw": 48.72,
                        "pitch": -32.46,
                        "showEasing": "cubic_in",
                        "popupMaxHeight": "95%",
                        "rotationZ": 0,
                        "hideDuration": 500,
                        "popupMaxWidth": "95%",
                        "loop": false,
                        "id": "popup_6F5D6B66_2B78_D0DA_41B9_A026FFB313B3",
                        "hfov": 6.61,
                        "rotationX": 0,
                        "showDuration": 500,
                        "video": {
                         "class": "VideoResource",
                         "height": 1080,
                         "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
                         "width": 1920
                        },
                        "hideEasing": "cubic_out",
                        "rotationY": 0,
                        "autoplay": true
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6EAC960D_2B78_506E_41C5_0380CA3F44BD, {'pressedIconHeight':20,'paddingTop':5,'backgroundOpacity':0.3,'borderColor':'#000000','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','borderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingRight':5,'pressedIconColor':'#888888','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderSize':0,'pressedBackgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','paddingLeft':5,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','iconLineWidth':5,'pressedIconWidth':20,'iconWidth':20,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF']}) } else { this.showPopupMedia(this.window_6AA788D7_2B78_51FA_41C3_C9D7688BD031, this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D, this.PlayList_6D57091C_2B78_F06F_41C3_ECEE4464451D, '95%', '95%', true, true); this.PlayList_6D57091C_2B78_F06F_41C3_ECEE4464451D.set('selectedIndex', 0); ; this.viewer_uid6DBFC901_2B78_F056_41C5_8941E71FAD9FVideoPlayer.play();  }",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "id": "overlay_681A448E_2B79_D06A_41C3_848A63AB0DC7",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 6.92,
                          "yaw": 163.82,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 59,
                             "width": 59,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_2_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -10.8
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 163.82,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 119,
                             "width": 119,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_2_0.png"
                            }
                           ]
                          },
                          "hfov": 6.92,
                          "pitch": -10.8
                         }
                        ]
                       },
                       {
                        "class": "PopupPanoramaOverlay",
                        "yaw": 163.82,
                        "pitch": -10.8,
                        "showEasing": "cubic_in",
                        "popupMaxHeight": "95%",
                        "rotationZ": 0,
                        "hideDuration": 500,
                        "popupMaxWidth": "95%",
                        "loop": false,
                        "id": "popup_6EAC960D_2B78_506E_41C5_0380CA3F44BD",
                        "hfov": 6.92,
                        "rotationX": 0,
                        "showDuration": 500,
                        "video": {
                         "class": "VideoResource",
                         "height": 1080,
                         "width": 1440,
                         "mp4Url": "media/video_243E6AE5_2B0A_6500_419F_5585686B1C3D.mp4"
                        },
                        "hideEasing": "cubic_out",
                        "rotationY": 0,
                        "autoplay": true
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B, this.camera_52046499_2CE8_5076_41B8_8DE4ACC9C282); this.mainPlayList.set('selectedIndex', 8)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "id": "overlay_693DF350_2B78_D0F6_41B0_DB0ADA44B1DD",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 13.58,
                          "yaw": 97.27,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 44,
                             "width": 130,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_3_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -28.81
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 97.27,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 88,
                             "width": 261,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_3_0.png"
                            }
                           ]
                          },
                          "hfov": 13.58,
                          "pitch": -28.81
                         }
                        ]
                       },
                       {
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.mainPlayList.set('selectedIndex', 3)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "useHandCursor": true,
                        "id": "overlay_69FB3384_2B78_B05E_41B7_FF964E937B13",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 11.37,
                          "yaw": -129.67,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 33,
                             "width": 105,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_4_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -24.1
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -129.67,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 67,
                             "width": 210,
                             "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_0_HS_4_0.png"
                            }
                           ]
                          },
                          "hfov": 11.37,
                          "pitch": -24.1
                         }
                        ]
                       }
                      ],
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 3040,
                         "width": 6080,
                         "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB.jpeg"
                        }
                       ]
                      }
                     }
                    ],
                    "id": "panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB",
                    "hfovMax": 120,
                    "partial": false,
                    "pitch": 0,
                    "class": "Panorama",
                    "label": "13",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "backwardYaw": -104.48,
                      "panorama": "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B",
                      "yaw": 97.27,
                      "distance": 1
                     }
                    ],
                    "thumbnailUrl": "media/panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_t.jpg",
                    "hfov": 360,
                    "hfovMin": 120
                   },
                   "yaw": -104.48,
                   "distance": 1
                  }
                 ],
                 "thumbnailUrl": "media/panorama_21C35B31_2894_D764_41B0_8E768B049B9B_t.jpg",
                 "hfov": 360,
                 "hfovMin": 120
                },
                "yaw": -95.11,
                "distance": 1
               }
              ],
              "thumbnailUrl": "media/panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_t.jpg",
              "hfov": 360,
              "hfovMin": 120
             },
             "yaw": -140.96,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 86.11,
             "panorama": "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283",
             "yaw": 158.9,
             "distance": 1
            }
           ],
           "thumbnailUrl": "media/panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_t.jpg",
           "hfov": 360,
           "hfovMin": 120
          },
          "yaw": 86.11,
          "distance": 1
         }
        ],
        "thumbnailUrl": "media/panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_t.jpg",
        "hfov": 360,
        "hfovMin": 120
       },
       "yaw": 86.03,
       "distance": 1
      }
     ],
     "thumbnailUrl": "media/panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_t.jpg",
     "hfov": 360,
     "hfovMin": 120
    },
    "yaw": 12.85,
    "distance": 1
   }
  ],
  "thumbnailUrl": "media/panorama_21C1854F_2894_533C_41B2_3F2795CC3254_t.jpg",
  "hfov": 360,
  "hfovMin": 120
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C1854F_2894_533C_41B2_3F2795CC3254_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 35.23,
   "pitch": -10.63
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": 0.04,
     "easing": "cubic_in_out",
     "targetYaw": 11.42,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -3.44,
     "easing": "cubic_in_out",
     "targetYaw": -22.84,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 4)",
     "pitchSpeed": 17.05,
     "targetPitch": -29.16,
     "easing": "cubic_in_out",
     "targetYaw": 13.16,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -141.9,
   "pitch": -6.73
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -20.7,
     "easing": "cubic_in_out",
     "targetYaw": -147.14,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -13.03,
     "easing": "cubic_in_out",
     "targetYaw": 130.23,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -5.1,
     "easing": "cubic_in_out",
     "targetYaw": 56.83,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -12.16,
     "easing": "cubic_in_out",
     "targetYaw": 0,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 5)",
     "pitchSpeed": 17.05,
     "targetPitch": -21.49,
     "easing": "cubic_in_out",
     "targetYaw": 85.77,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -139.92,
   "pitch": -7.62
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -12.68,
     "easing": "cubic_in_out",
     "targetYaw": -129.97,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -19.48,
     "easing": "cubic_in_out",
     "targetYaw": 150.1,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -6.06,
     "easing": "cubic_in_out",
     "targetYaw": 100.77,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -7.71,
     "easing": "cubic_in_out",
     "targetYaw": 47.77,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -11.81,
     "easing": "cubic_in_out",
     "targetYaw": -30.68,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 6)",
     "pitchSpeed": 17.05,
     "targetPitch": -15.21,
     "easing": "cubic_in_out",
     "targetYaw": 85.77,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -76.91,
   "pitch": 4.55
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": 3.79,
     "easing": "cubic_in_out",
     "targetYaw": -111.57,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -174.76,
   "pitch": -2.63
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -5.19,
     "easing": "cubic_in_out",
     "targetYaw": -114.62,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -6.76,
     "easing": "cubic_in_out",
     "targetYaw": -84.12,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -16,
     "easing": "cubic_in_out",
     "targetYaw": -62.5,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -7.37,
     "easing": "cubic_in_out",
     "targetYaw": 125.87,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 8)",
     "pitchSpeed": 17.05,
     "targetPitch": -25.93,
     "easing": "cubic_in_out",
     "targetYaw": -94.58,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_21C35B31_2894_D764_41B0_8E768B049B9B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 122.77,
   "pitch": -3.35
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -8.5,
     "easing": "cubic_in_out",
     "targetYaw": 177.38,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -8.67,
     "easing": "cubic_in_out",
     "targetYaw": -143.13,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -5.54,
     "easing": "cubic_in_out",
     "targetYaw": -121.86,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -10.5,
     "easing": "cubic_in_out",
     "targetYaw": -85.69,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -26.63,
     "easing": "cubic_in_out",
     "targetYaw": -37.74,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -10.07,
     "easing": "cubic_in_out",
     "targetYaw": 54.83,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 9)",
     "pitchSpeed": 17.05,
     "targetPitch": -26.46,
     "easing": "cubic_in_out",
     "targetYaw": -104.16,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 "this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -67.48,
   "pitch": -14.17
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -30.29,
     "easing": "cubic_in_out",
     "targetYaw": 44.11,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -7.1,
     "easing": "cubic_in_out",
     "targetYaw": 124.13,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -12.42,
     "easing": "cubic_in_out",
     "targetYaw": 162.83,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, null, null, false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, 0, null, null, false)",
     "pitchSpeed": 17.05,
     "targetPitch": -21.75,
     "easing": "cubic_in_out",
     "targetYaw": -129.18,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_camera",
    "begin": "this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0', this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0.get('visible')); this.registerKey('visibility_HTMLText_32D6B418_289C_5124_418C_C70EB9200360', this.HTMLText_32D6B418_289C_5124_418C_C70EB9200360.get('visible')); this.registerKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0', this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0.get('visible')); this.registerKey('visibility_Label_307710D4_28F4_512C_41AE_C31F869BD87A', this.Label_307710D4_28F4_512C_41AE_C31F869BD87A.get('visible')); this.registerKey('visibility_Label_31993ADD_28F4_56DC_4171_D033A81D6F12', this.Label_31993ADD_28F4_56DC_4171_D033A81D6F12.get('visible')); this.registerKey('visibility_Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE', this.Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE.get('visible')); this.registerKey('visibility_Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5', this.Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5.get('visible')); this.registerKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F', this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F.get('visible')); this.registerKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F', this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F.get('visible')); this.registerKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D', this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D.get('visible')); this.registerKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D', this.Container_3FB65883_2894_7124_41B7_81A73B20B38D.get('visible')); this.registerKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03', this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, 1000, this.effect_66A993C7_2B68_57DA_41B2_04B39F4CD777, 'showEffect', false); this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F, 'showEffect', false); this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40, 'showEffect', false); this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1, 'showEffect', false); this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407, 'showEffect', false); this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32, 'showEffect', false); this.setComponentVisibility(this.Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5, true, -1, this.effect_7F0C62F4_2B5B_D1BE_4165_0CACFA6A7B75, 'showEffect', false); this.setComponentVisibility(this.Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE, true, -1, this.effect_7F0CA2F5_2B5B_D1BE_41BF_6A0AAF96742A, 'showEffect', false); this.setComponentVisibility(this.Label_31993ADD_28F4_56DC_4171_D033A81D6F12, true, -1, this.effect_7F0CF2F6_2B5B_D1BA_41AF_DF00EF28837E, 'showEffect', false); this.setComponentVisibility(this.Label_307710D4_28F4_512C_41AE_C31F869BD87A, true, -1, this.effect_7F0D22F6_2B5B_D1BA_41BD_77068B1464D7, 'showEffect', false); this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298, 'showEffect', false); this.setComponentVisibility(this.HTMLText_32D6B418_289C_5124_418C_C70EB9200360, true, -1, this.effect_7F0DB2F7_2B5B_D1BA_41BC_10904047BD1D, 'showEffect', false); this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, true, -1, this.effect_7F0DE2F8_2B5B_D1B6_41C1_175D56E7F571, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_25102BD5_2B28_B7FE_41C4_041AFE0F0BAC, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1, 'hideEffect', false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1, 'hideEffect', false); if(this.existsKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')){ if(this.getKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')) { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, false, -1, this.effect_521654A1_2CE8_5056_41C1_65BC9C2362B8, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03'); if(this.existsKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')){ if(this.getKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')) { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, false, -1, this.effect_521614A2_2CE8_505A_4199_23CEFF6FDB4F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D'); if(this.existsKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')){ if(this.getKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')) { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, false, -1, this.effect_521624A2_2CE8_505A_41B4_D356AF47839B, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D'); if(this.existsKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')){ if(this.getKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')) { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407, 'showEffect', false); } else { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, false, -1, this.effect_521684A2_2CE8_505B_41B5_D5DB0F262F10, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F'); if(this.existsKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')){ if(this.getKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')) { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, false, -1, this.effect_521544A3_2CE8_505A_41B9_C20E70589633, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F'); if(this.existsKey('visibility_Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5')){ if(this.getKey('visibility_Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5')) { this.setComponentVisibility(this.Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5, true, -1, this.effect_7F0C62F4_2B5B_D1BE_4165_0CACFA6A7B75, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5, false, -1, this.effect_521564A3_2CE8_505A_4174_4F4586E7C0C7, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5'); if(this.existsKey('visibility_Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE')){ if(this.getKey('visibility_Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE')) { this.setComponentVisibility(this.Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE, true, -1, this.effect_7F0CA2F5_2B5B_D1BE_41BF_6A0AAF96742A, 'showEffect', false); } else { this.setComponentVisibility(this.Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE, false, -1, this.effect_521534A4_2CE8_505E_41C0_364D7EF3F536, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE'); if(this.existsKey('visibility_Label_31993ADD_28F4_56DC_4171_D033A81D6F12')){ if(this.getKey('visibility_Label_31993ADD_28F4_56DC_4171_D033A81D6F12')) { this.setComponentVisibility(this.Label_31993ADD_28F4_56DC_4171_D033A81D6F12, true, -1, this.effect_7F0CF2F6_2B5B_D1BA_41AF_DF00EF28837E, 'showEffect', false); } else { this.setComponentVisibility(this.Label_31993ADD_28F4_56DC_4171_D033A81D6F12, false, -1, this.effect_5215C4A4_2CE8_505E_41B6_3E894DBD10AF, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_31993ADD_28F4_56DC_4171_D033A81D6F12'); if(this.existsKey('visibility_Label_307710D4_28F4_512C_41AE_C31F869BD87A')){ if(this.getKey('visibility_Label_307710D4_28F4_512C_41AE_C31F869BD87A')) { this.setComponentVisibility(this.Label_307710D4_28F4_512C_41AE_C31F869BD87A, true, -1, this.effect_7F0D22F6_2B5B_D1BA_41BD_77068B1464D7, 'showEffect', false); } else { this.setComponentVisibility(this.Label_307710D4_28F4_512C_41AE_C31F869BD87A, false, -1, this.effect_5215B4A4_2CE8_505E_41A9_99B66AC403F7, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_307710D4_28F4_512C_41AE_C31F869BD87A'); if(this.existsKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')){ if(this.getKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')) { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298, 'showEffect', false); } else { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, false, -1, this.effect_521454A5_2CE8_505E_417B_880DB30172FB, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0'); if(this.existsKey('visibility_HTMLText_32D6B418_289C_5124_418C_C70EB9200360')){ if(this.getKey('visibility_HTMLText_32D6B418_289C_5124_418C_C70EB9200360')) { this.setComponentVisibility(this.HTMLText_32D6B418_289C_5124_418C_C70EB9200360, true, -1, this.effect_7F0DB2F7_2B5B_D1BA_41BC_10904047BD1D, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_32D6B418_289C_5124_418C_C70EB9200360, false, -1, this.effect_521464A5_2CE8_505E_41B3_1D869859FC31, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_32D6B418_289C_5124_418C_C70EB9200360'); if(this.existsKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0')){ if(this.getKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0')) { this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, true, -1, this.effect_7F0DE2F8_2B5B_D1B6_41C1_175D56E7F571, 'showEffect', false); } else { this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, false, -1, this.effect_5214D4A5_2CE8_505E_41BA_9BD51F98B204, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0'); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_269A2071_2B29_F0B6_41B4_001C61C97291, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_269A2071_2B29_F0B6_41B4_001C61C97291, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_269A7072_2B29_F0BA_41B4_E312EE67E18D, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_269A7072_2B29_F0BA_41B4_E312EE67E18D, 'hideEffect', false); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_5214A4A6_2CE8_505A_41C5_1BEF78F8CF8C, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_521374A6_2CE8_505A_41B9_C8C706D6E06B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_521314A6_2CE8_505A_41B1_9D204812EB86, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_5213D4A7_2CE8_505A_41AB_DCAC4C95E80E, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C, 'showEffect', false)",
    "media": "this.panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_2517ABD6_2B28_B7FA_41B9_E118F143094B, 'showEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_521244A7_2CE8_505A_41BB_7FC373A8E26A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F, 'hideEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F, 'hideEffect', false); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_521214A8_2CE8_5056_41B6_A2ACC81E5253, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_25172BD7_2B28_B7FA_41C3_EBDCF02182DF, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_5212F4A8_2CE8_5056_41B0_0645F9828D37, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_25168BD7_2B28_B7FA_41BB_F5A9D2E4E1C3, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_521294A8_2CE8_5056_41C4_7C5BA0BF5DB1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_25165BD8_2B28_B7F6_41BF_5C9F0E2EECB7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_5212A4A9_2CE8_5056_41A2_E14B903A583D, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_6E0755F2_2994_D2E4_41A3_D278A91C4E10', this.Image_6E0755F2_2994_D2E4_41A3_D278A91C4E10.get('visible')); this.registerKey('visibility_Container_6E10A998_29AD_B324_41BF_92FE747F453A', this.Container_6E10A998_29AD_B324_41BF_92FE747F453A.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.registerKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01', this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01.get('visible')); this.registerKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A', this.Image_61372758_2994_5F24_41C3_CE568D87E54A.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.registerKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D', this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.get('visible')); this.registerKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6', this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6.get('visible')); this.registerKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0', this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0.get('visible')); this.registerKey('visibility_HTMLText_32D6B418_289C_5124_418C_C70EB9200360', this.HTMLText_32D6B418_289C_5124_418C_C70EB9200360.get('visible')); this.registerKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0', this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0.get('visible')); this.registerKey('visibility_Label_307710D4_28F4_512C_41AE_C31F869BD87A', this.Label_307710D4_28F4_512C_41AE_C31F869BD87A.get('visible')); this.registerKey('visibility_Label_31993ADD_28F4_56DC_4171_D033A81D6F12', this.Label_31993ADD_28F4_56DC_4171_D033A81D6F12.get('visible')); this.registerKey('visibility_Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE', this.Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE.get('visible')); this.registerKey('visibility_Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5', this.Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5.get('visible')); this.registerKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F', this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F.get('visible')); this.registerKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F', this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F.get('visible')); this.registerKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D', this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D.get('visible')); this.registerKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D', this.Container_3FB65883_2894_7124_41B7_81A73B20B38D.get('visible')); this.registerKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03', this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03.get('visible')); this.registerKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927', this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927.get('visible')); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC, 'hideEffect', false); this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, false, -1, this.effect_3F20A9CF_2B1A_A700_41C5_3F8E27D3DC43, 'hideEffect', false); this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, false, -1, this.effect_3F20E9D0_2B1A_A700_4194_688EDB99E019, 'hideEffect', false); this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, false, -1, this.effect_3F2039D0_2B1A_A700_41C1_D0961B372F16, 'hideEffect', false); this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, false, -1, this.effect_3F2079D1_2B1A_A700_41B0_30CA61E53834, 'hideEffect', false); this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, false, -1, this.effect_3F23C9D1_2B1A_A700_41C3_4953F2464F7B, 'hideEffect', false); this.setComponentVisibility(this.Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5, false, -1, this.effect_3F2309D2_2B1A_A700_41B6_B78C81300286, 'hideEffect', false); this.setComponentVisibility(this.Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE, false, -1, this.effect_3F2359D3_2B1A_A700_41AD_FF54EABD0A79, 'hideEffect', false); this.setComponentVisibility(this.Label_31993ADD_28F4_56DC_4171_D033A81D6F12, false, -1, this.effect_3F22A9D3_2B1A_A700_41A9_250ECCADFFE7, 'hideEffect', false); this.setComponentVisibility(this.Label_307710D4_28F4_512C_41AE_C31F869BD87A, false, -1, this.effect_3F22D9D4_2B1A_A700_4194_6E7876152C10, 'hideEffect', false); this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, false, -1, this.effect_3F2249D4_2B1A_A700_41C0_5BF343442807, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_32D6B418_289C_5124_418C_C70EB9200360, false, -1, this.effect_3F23F9D5_2B1A_A700_41BC_8BC350296405, 'hideEffect', false); this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, false, -1, this.effect_3F2349D6_2B1A_A700_41B0_539270F4537C, 'hideEffect', false); this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, false, -1, this.effect_3F22B9D6_2B1A_A700_41C2_A8D2CC82EA66, 'hideEffect', false); this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_309931C2_2B3A_E700_41BB_D77E5464C333, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_3098B1C3_2B3A_E700_41B4_232B931F0113, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_3099A1C4_2B3A_E700_4170_E65033069B39, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_3099E1C4_2B3A_E701_41B1_BE4BED53379C, 'hideEffect', false); this.setComponentVisibility(this.Container_6E10A998_29AD_B324_41BF_92FE747F453A, false, -1, this.effect_309921C5_2B3A_E700_41C1_7BBD1322D493, 'hideEffect', false); this.setComponentVisibility(this.Image_6E0755F2_2994_D2E4_41A3_D278A91C4E10, false, -1, this.effect_309961C6_2B3A_E700_41C0_DB4AB36D32A3, 'hideEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_3D412C75_2B0A_5D00_41B4_22EF4999D51C, 'showEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_309881C6_2B3A_E701_41C0_5AB081857C81, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_309821C7_2B3A_E700_41C0_E75CD3F76820, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_309861C8_2B3A_E700_41C1_6120ED54C917, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_3BB108BF_2B38_D1AA_4182_50A68E2673E7, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')){ if(this.getKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927')) { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, -1, this.effect_521124A9_2CE8_5056_41C4_2EC070FCEEE8, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927'); if(this.existsKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')){ if(this.getKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')) { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_5211F4AA_2CE8_51AA_41C0_0127B3EB29BD, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, false, -1, this.effect_3F20A9CF_2B1A_A700_41C5_3F8E27D3DC43, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03'); if(this.existsKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')){ if(this.getKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')) { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_5211B4AA_2CE8_51AA_41C0_BCFD9E1C7E9A, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, false, -1, this.effect_3F20E9D0_2B1A_A700_4194_688EDB99E019, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D'); if(this.existsKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')){ if(this.getKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')) { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_5212D4AA_2CE8_51AB_41BD_60238A39A766, 'showEffect', false); } else { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, false, -1, this.effect_3F2039D0_2B1A_A700_41C1_D0961B372F16, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D'); if(this.existsKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')){ if(this.getKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')) { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_521294AB_2CE8_51AA_41BC_0BB57EFF61E4, 'showEffect', false); } else { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, false, -1, this.effect_3F2079D1_2B1A_A700_41B0_30CA61E53834, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F'); if(this.existsKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')){ if(this.getKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')) { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_5212A4AB_2CE8_51AA_41C2_8A16A0BAC238, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, false, -1, this.effect_3F23C9D1_2B1A_A700_41C3_4953F2464F7B, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F'); if(this.existsKey('visibility_Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5')){ if(this.getKey('visibility_Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5')) { this.setComponentVisibility(this.Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5, true, -1, this.effect_521144AB_2CE8_51AA_41BE_35339C96F377, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5, false, -1, this.effect_3F2309D2_2B1A_A700_41B6_B78C81300286, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5'); if(this.existsKey('visibility_Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE')){ if(this.getKey('visibility_Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE')) { this.setComponentVisibility(this.Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE, true, -1, this.effect_521104AC_2CE8_51AE_4152_64BB1A3726B0, 'showEffect', false); } else { this.setComponentVisibility(this.Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE, false, -1, this.effect_3F2359D3_2B1A_A700_41AD_FF54EABD0A79, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE'); if(this.existsKey('visibility_Label_31993ADD_28F4_56DC_4171_D033A81D6F12')){ if(this.getKey('visibility_Label_31993ADD_28F4_56DC_4171_D033A81D6F12')) { this.setComponentVisibility(this.Label_31993ADD_28F4_56DC_4171_D033A81D6F12, true, -1, this.effect_5211C4AC_2CE8_51AE_41BE_153BC0B6057A, 'showEffect', false); } else { this.setComponentVisibility(this.Label_31993ADD_28F4_56DC_4171_D033A81D6F12, false, -1, this.effect_3F22A9D3_2B1A_A700_41A9_250ECCADFFE7, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_31993ADD_28F4_56DC_4171_D033A81D6F12'); if(this.existsKey('visibility_Label_307710D4_28F4_512C_41AE_C31F869BD87A')){ if(this.getKey('visibility_Label_307710D4_28F4_512C_41AE_C31F869BD87A')) { this.setComponentVisibility(this.Label_307710D4_28F4_512C_41AE_C31F869BD87A, true, -1, this.effect_5211F4AC_2CE8_51AE_41B2_128C5E53FE8E, 'showEffect', false); } else { this.setComponentVisibility(this.Label_307710D4_28F4_512C_41AE_C31F869BD87A, false, -1, this.effect_3F22D9D4_2B1A_A700_4194_6E7876152C10, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_307710D4_28F4_512C_41AE_C31F869BD87A'); if(this.existsKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')){ if(this.getKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')) { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_521184AD_2CE8_51AE_419C_8B5881F23D4B, 'showEffect', false); } else { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, false, -1, this.effect_3F2249D4_2B1A_A700_41C0_5BF343442807, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0'); if(this.existsKey('visibility_HTMLText_32D6B418_289C_5124_418C_C70EB9200360')){ if(this.getKey('visibility_HTMLText_32D6B418_289C_5124_418C_C70EB9200360')) { this.setComponentVisibility(this.HTMLText_32D6B418_289C_5124_418C_C70EB9200360, true, -1, this.effect_521074AD_2CE8_51AE_41BC_741F66642EEC, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_32D6B418_289C_5124_418C_C70EB9200360, false, -1, this.effect_3F23F9D5_2B1A_A700_41BC_8BC350296405, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_32D6B418_289C_5124_418C_C70EB9200360'); if(this.existsKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0')){ if(this.getKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0')) { this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, true, -1, this.effect_521024AD_2CE8_51A9_4197_CA7738968BA9, 'showEffect', false); } else { this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, false, -1, this.effect_3F2349D6_2B1A_A700_41B0_539270F4537C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0'); if(this.existsKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6')){ if(this.getKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6')) { this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, true, -1, this.effect_5210F4AE_2CE8_51AA_41A6_55B2CB6F46DD, 'showEffect', false); } else { this.setComponentVisibility(this.Image_06E95D0A_2894_7324_41C3_E29CB520D1F6, false, -1, this.effect_3F22B9D6_2B1A_A700_41C2_A8D2CC82EA66, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_06E95D0A_2894_7324_41C3_E29CB520D1F6'); if(this.existsKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')){ if(this.getKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D')) { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, -1, this.effect_5210B4AE_2CE8_51AA_41C2_C53884C8AF83, 'showEffect', false); } else { this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, -1, this.effect_309931C2_2B3A_E700_41BB_D77E5464C333, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D'); if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_522F74AE_2CE8_51AB_41B8_5BCE38E4853F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_522F64AF_2CE8_51AA_41C0_9F1C0098115E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_3098B1C3_2B3A_E700_41B4_232B931F0113, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A')){ if(this.getKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A')) { this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, true, -1, this.effect_522FD4AF_2CE8_51AA_41BF_E95556201B76, 'showEffect', false); } else { this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_61372758_2994_5F24_41C3_CE568D87E54A'); if(this.existsKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01')){ if(this.getKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01')) { this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, true, -1, this.effect_522FE4B0_2CE8_51B6_41AD_2851C913385F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_3099A1C4_2B3A_E700_4170_E65033069B39, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_6F475BB5_2994_D76C_418F_CE09ACD35F01'); if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_522F94B0_2CE8_51B6_418D_87331F954CBB, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_3099E1C4_2B3A_E701_41B1_BE4BED53379C, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); if(this.existsKey('visibility_Container_6E10A998_29AD_B324_41BF_92FE747F453A')){ if(this.getKey('visibility_Container_6E10A998_29AD_B324_41BF_92FE747F453A')) { this.setComponentVisibility(this.Container_6E10A998_29AD_B324_41BF_92FE747F453A, true, -1, this.effect_522E74B0_2CE8_51B6_4183_B4F11304A3EB, 'showEffect', false); } else { this.setComponentVisibility(this.Container_6E10A998_29AD_B324_41BF_92FE747F453A, false, -1, this.effect_309921C5_2B3A_E700_41C1_7BBD1322D493, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_6E10A998_29AD_B324_41BF_92FE747F453A'); if(this.existsKey('visibility_Image_6E0755F2_2994_D2E4_41A3_D278A91C4E10')){ if(this.getKey('visibility_Image_6E0755F2_2994_D2E4_41A3_D278A91C4E10')) { this.setComponentVisibility(this.Image_6E0755F2_2994_D2E4_41A3_D278A91C4E10, true, -1, this.effect_522E64B1_2CE8_51B6_41BB_913C95A69447, 'showEffect', false); } else { this.setComponentVisibility(this.Image_6E0755F2_2994_D2E4_41A3_D278A91C4E10, false, -1, this.effect_309961C6_2B3A_E700_41C0_DB4AB36D32A3, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_6E0755F2_2994_D2E4_41A3_D278A91C4E10'); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_3D40CC76_2B0A_5D00_4195_195FBA3D9ABF, 'hideEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_3D40CC76_2B0A_5D00_4195_195FBA3D9ABF, 'hideEffect', false); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_522EF4B1_2CE8_51B6_41B0_F1FE2642E3E5, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_309881C6_2B3A_E701_41C0_5AB081857C81, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_522E84B1_2CE8_51B6_41BC_3F196B60AF22, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_309821C7_2B3A_E700_41C0_E75CD3F76820, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_522D54B2_2CE8_51BA_41BF_4454B6F9C6DE, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_309861C8_2B3A_E700_41C1_6120ED54C917, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_3BB108BF_2B38_D1AA_4182_50A68E2673E7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_522D74B2_2CE8_51BA_41BF_B00047A87AA5, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C1904E_2894_713C_41B0_21CD9585DC33"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A793D3_2B68_57FA_41B8_11E79F904362, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_522DE4B3_2CE8_51BA_41C2_9DF32465F03D, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_522E34B3_2CE8_51BA_41B2_41A2E5B0EE64, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A793D3_2B68_57FA_41B8_11E79F904362, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_522EC4B3_2CE8_51B9_41C5_B27C838D14F8, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_522EB4B4_2CE8_51BE_41A6_0FA8A40465CE, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083FF036_2B68_50BA_41B2_BA99A13F9561, 'showEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_70FEA952_2B2B_D0FB_41B0_341B5210D6F0, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A163D5_2B68_57F9_41B9_F97797238D6A, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083FA037_2B68_50BA_41C5_535FB194808D, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_083F5037_2B68_50B9_41C4_A9729CFC613F, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083FF036_2B68_50BA_41B2_BA99A13F9561, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_522D24B4_2CE8_51BE_417B_7B7B6D8D20E3, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_70FEA952_2B2B_D0FB_41B0_341B5210D6F0, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_522DC4B5_2CE8_51BE_41AC_DB75C5DFDF32, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_522D94B5_2CE8_51BE_41BC_843BE8EA7D44, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A163D5_2B68_57F9_41B9_F97797238D6A, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083FA037_2B68_50BA_41C5_535FB194808D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_522DA4B5_2CE8_51BE_41BD_203F12994886, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_083F5037_2B68_50B9_41C4_A9729CFC613F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_522C74B6_2CE8_51BA_4195_60721279C72C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C1DFF7_2894_4EEC_41C3_26F2D19C62D7"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083EA038_2B68_50B6_41C3_0BE33D67069D, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A003D7_2B68_57FA_41C5_D20DC33306FF, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083E6039_2B68_50B6_41C1_ECDB68119909, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_083DF039_2B68_50B6_41B8_2A2374D9FEBF, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_083EA038_2B68_50B6_41C3_0BE33D67069D, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_522CE4B6_2CE8_51BA_41C4_38C01B8E0C50, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_522C94B6_2CE8_51BA_41A5_24405BB2BA81, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A003D7_2B68_57FA_41C5_D20DC33306FF, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_083E6039_2B68_50B6_41C1_ECDB68119909, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_522B54B7_2CE8_51BA_41A3_0BB223B33825, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_083DF039_2B68_50B6_41B8_2A2374D9FEBF, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_522B74B7_2CE8_51BA_41B0_B8E8402919E5, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C19AC3_2894_B124_41B6_22F6D6CB5283"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB_camera",
    "begin": "this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A313D9_2B68_57F6_41C2_82515AC235DF, 'hideEffect', false)",
    "end": "if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_522BC4B8_2CE8_51B6_41B7_6B286AFAEAB4, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A313D9_2B68_57F6_41C2_82515AC235DF, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')",
    "media": "this.panorama_21C1E5AB_2894_B364_41BB_CE220CC58FBB"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_63937A53_2B78_F0FA_41C0_DBAC6E60FAF8, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A033DA_2B68_57EA_4193_A4F6D81D87ED, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_63922A54_2B78_F0FE_41B5_9D0B9F3255BC, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_63937A53_2B78_F0FA_41C0_DBAC6E60FAF8, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_522A64B8_2CE8_51B6_41BE_9472B78154EF, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_522A04B8_2CE8_51B7_41C3_1D0D10079E0E, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A033DA_2B68_57EA_4193_A4F6D81D87ED, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_522AD4B9_2CE8_51B6_41BE_8D74EA6CA647, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_63922A54_2B78_F0FE_41B5_9D0B9F3255BC, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_522AE4B9_2CE8_51B6_41B1_857EACEFFABD, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C19075_2894_B1EC_41C2_706B0713E1F3"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_6391BA55_2B78_F0FE_41B7_12877E2E8635, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A3C3DB_2B68_57E9_41C3_2B74E60F7238, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_63916A56_2B78_F0FA_41B5_906759C4A755, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_6391BA55_2B78_F0FE_41B7_12877E2E8635, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_522914BA_2CE8_51AA_4187_4031BFE94D97, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_522904BA_2CE8_51AA_41B8_F75A7E4E864E, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A3C3DB_2B68_57E9_41C3_2B74E60F7238, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_5229C4BA_2CE8_51AB_41B3_80C836C221CF, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_63916A56_2B78_F0FA_41B5_906759C4A755, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_522994BB_2CE8_51AA_419C_DF0D77402A11, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C35B31_2894_D764_41B0_8E768B049B9B"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.registerKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6', this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6.get('visible')); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_6390FA57_2B78_F0FA_41BC_E439ADCEC2DA, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A2F3DD_2B68_57EE_41A4_7E9BBFC56AD2, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_6397AA58_2B78_F0F6_4184_81A73FF7DA94, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')){ if(this.getKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6')) { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, -1, this.effect_6390FA57_2B78_F0FA_41BC_E439ADCEC2DA, 'showEffect', false); } else { this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_522874BB_2CE8_51AA_41A3_D68A07C35C92, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_61192088_29AC_5124_4182_B40BFFB7B4C6'); if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_522834BC_2CE8_51AE_4180_CC3CC32626C3, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A2F3DD_2B68_57EE_41A4_7E9BBFC56AD2, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_5228C4BC_2CE8_51AE_4174_F490A3CC8C13, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_6397AA58_2B78_F0F6_4184_81A73FF7DA94, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_522884BC_2CE8_51AE_41BA_1F38D6E99583, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_228BC51E_2894_D35C_41B9_C93B1E30D5FB"
   }
  ]
 },
 {
  "id": "ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B_playlist",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE_camera",
    "begin": "this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359', this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359.get('visible')); this.registerKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0', this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0.get('visible')); this.registerKey('visibility_HTMLText_32D6B418_289C_5124_418C_C70EB9200360', this.HTMLText_32D6B418_289C_5124_418C_C70EB9200360.get('visible')); this.registerKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0', this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0.get('visible')); this.registerKey('visibility_Label_307710D4_28F4_512C_41AE_C31F869BD87A', this.Label_307710D4_28F4_512C_41AE_C31F869BD87A.get('visible')); this.registerKey('visibility_Label_31993ADD_28F4_56DC_4171_D033A81D6F12', this.Label_31993ADD_28F4_56DC_4171_D033A81D6F12.get('visible')); this.registerKey('visibility_Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE', this.Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE.get('visible')); this.registerKey('visibility_Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5', this.Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5.get('visible')); this.registerKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F', this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F.get('visible')); this.registerKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F', this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F.get('visible')); this.registerKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D', this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D.get('visible')); this.registerKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D', this.Container_3FB65883_2894_7124_41B7_81A73B20B38D.get('visible')); this.registerKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03', this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03.get('visible')); this.setEndToItemIndex(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B_playlist, 0, 1); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, 1000, this.effect_66A993C7_2B68_57DA_41B2_04B39F4CD777, 'showEffect', false); this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F, 'showEffect', false); this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40, 'showEffect', false); this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1, 'showEffect', false); this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407, 'showEffect', false); this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32, 'showEffect', false); this.setComponentVisibility(this.Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5, true, -1, this.effect_7F0C62F4_2B5B_D1BE_4165_0CACFA6A7B75, 'showEffect', false); this.setComponentVisibility(this.Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE, true, -1, this.effect_7F0CA2F5_2B5B_D1BE_41BF_6A0AAF96742A, 'showEffect', false); this.setComponentVisibility(this.Label_31993ADD_28F4_56DC_4171_D033A81D6F12, true, -1, this.effect_7F0CF2F6_2B5B_D1BA_41AF_DF00EF28837E, 'showEffect', false); this.setComponentVisibility(this.Label_307710D4_28F4_512C_41AE_C31F869BD87A, true, -1, this.effect_7F0D22F6_2B5B_D1BA_41BD_77068B1464D7, 'showEffect', false); this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298, 'showEffect', false); this.setComponentVisibility(this.HTMLText_32D6B418_289C_5124_418C_C70EB9200360, true, -1, this.effect_7F0DB2F7_2B5B_D1BA_41BC_10904047BD1D, 'showEffect', false); this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, true, -1, this.effect_7F0DE2F8_2B5B_D1B6_41C1_175D56E7F571, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E, 'hideEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_25102BD5_2B28_B7FE_41C4_041AFE0F0BAC, 'hideEffect', false)",
    "end": "this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1, 'hideEffect', false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, -1, this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1, 'hideEffect', false); if(this.existsKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')){ if(this.getKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03')) { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, true, -1, this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03, false, -1, this.effect_522994BD_2CE8_51AE_41BF_A7E358370F54, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03'); if(this.existsKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')){ if(this.getKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D')) { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, true, -1, this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3FB65883_2894_7124_41B7_81A73B20B38D, false, -1, this.effect_5229A4BD_2CE8_51AE_41C2_72328096C39F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3FB65883_2894_7124_41B7_81A73B20B38D'); if(this.existsKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')){ if(this.getKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D')) { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, true, -1, this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1, 'showEffect', false); } else { this.setComponentVisibility(this.Image_31227ABF_2894_515C_41B6_160BDF6DEA3D, false, -1, this.effect_522864BD_2CE8_51A9_41C3_83031FB8C794, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_31227ABF_2894_515C_41B6_160BDF6DEA3D'); if(this.existsKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')){ if(this.getKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F')) { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, true, -1, this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407, 'showEffect', false); } else { this.setComponentVisibility(this.Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F, false, -1, this.effect_522804BE_2CE8_51AA_41C5_A3708EEB90B6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F'); if(this.existsKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')){ if(this.getKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F')) { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, true, -1, this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32, 'showEffect', false); } else { this.setComponentVisibility(this.Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F, false, -1, this.effect_5228E4BE_2CE8_51AA_41A4_C62BF7D825A2, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F'); if(this.existsKey('visibility_Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5')){ if(this.getKey('visibility_Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5')) { this.setComponentVisibility(this.Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5, true, -1, this.effect_7F0C62F4_2B5B_D1BE_4165_0CACFA6A7B75, 'showEffect', false); } else { this.setComponentVisibility(this.Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5, false, -1, this.effect_5228A4BF_2CE8_51AA_41B6_CD55A6E75322, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5'); if(this.existsKey('visibility_Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE')){ if(this.getKey('visibility_Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE')) { this.setComponentVisibility(this.Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE, true, -1, this.effect_7F0CA2F5_2B5B_D1BE_41BF_6A0AAF96742A, 'showEffect', false); } else { this.setComponentVisibility(this.Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE, false, -1, this.effect_522744BF_2CE8_51AA_41B7_B0817B2130CA, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE'); if(this.existsKey('visibility_Label_31993ADD_28F4_56DC_4171_D033A81D6F12')){ if(this.getKey('visibility_Label_31993ADD_28F4_56DC_4171_D033A81D6F12')) { this.setComponentVisibility(this.Label_31993ADD_28F4_56DC_4171_D033A81D6F12, true, -1, this.effect_7F0CF2F6_2B5B_D1BA_41AF_DF00EF28837E, 'showEffect', false); } else { this.setComponentVisibility(this.Label_31993ADD_28F4_56DC_4171_D033A81D6F12, false, -1, this.effect_522734BF_2CE8_51AA_41C4_329B5BD574FD, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_31993ADD_28F4_56DC_4171_D033A81D6F12'); if(this.existsKey('visibility_Label_307710D4_28F4_512C_41AE_C31F869BD87A')){ if(this.getKey('visibility_Label_307710D4_28F4_512C_41AE_C31F869BD87A')) { this.setComponentVisibility(this.Label_307710D4_28F4_512C_41AE_C31F869BD87A, true, -1, this.effect_7F0D22F6_2B5B_D1BA_41BD_77068B1464D7, 'showEffect', false); } else { this.setComponentVisibility(this.Label_307710D4_28F4_512C_41AE_C31F869BD87A, false, -1, this.effect_522724C0_2CE8_51D6_41C2_0862865F3768, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_307710D4_28F4_512C_41AE_C31F869BD87A'); if(this.existsKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')){ if(this.getKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0')) { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, true, -1, this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298, 'showEffect', false); } else { this.setComponentVisibility(this.Container_31C84245_28FC_512C_41B2_C8B8A201BAE0, false, -1, this.effect_5227F4C0_2CE8_51D6_41B4_51C6E66D3B08, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_31C84245_28FC_512C_41B2_C8B8A201BAE0'); if(this.existsKey('visibility_HTMLText_32D6B418_289C_5124_418C_C70EB9200360')){ if(this.getKey('visibility_HTMLText_32D6B418_289C_5124_418C_C70EB9200360')) { this.setComponentVisibility(this.HTMLText_32D6B418_289C_5124_418C_C70EB9200360, true, -1, this.effect_7F0DB2F7_2B5B_D1BA_41BC_10904047BD1D, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_32D6B418_289C_5124_418C_C70EB9200360, false, -1, this.effect_5227B4C0_2CE8_51D6_41AE_CDAD4F4CD0C7, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_32D6B418_289C_5124_418C_C70EB9200360'); if(this.existsKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0')){ if(this.getKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0')) { this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, true, -1, this.effect_7F0DE2F8_2B5B_D1B6_41C1_175D56E7F571, 'showEffect', false); } else { this.setComponentVisibility(this.Container_063F3017_2894_D12C_41C0_A30FBA33D2C0, false, -1, this.effect_522644C1_2CE8_51D6_41BD_DF66320206D6, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_063F3017_2894_D12C_41C0_A30FBA33D2C0'); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8, 'hideEffect', false); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_269A2071_2B29_F0B6_41B4_001C61C97291, 'hideEffect', false); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, -1, this.effect_269A2071_2B29_F0B6_41B4_001C61C97291, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7, 'hideEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, -1, this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, -1, this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_269A7072_2B29_F0BA_41B4_E312EE67E18D, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_269A7072_2B29_F0BA_41B4_E312EE67E18D, 'hideEffect', false); if(this.existsKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')){ if(this.getKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359')) { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_5226D4C1_2CE8_51D6_41BA_DCED58B6951D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_7615E83C_29EC_D15C_41B6_53D6B9448359'); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_5226E4C1_2CE8_51D6_415F_792A59DBD6D6, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_5226A4C2_2CE8_51DA_41C3_AAABF3123881, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_522544C2_2CE8_51DA_41C3_472BA1881F94, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C, 'showEffect', false)",
    "media": "this.panorama_221E72F7_2894_56EB_41C0_19FD2CB382EE"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235', this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.get('visible')); this.registerKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355', this.Image_74AA3858_29EC_5124_41B6_A1E86580D355.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.setEndToItemIndex(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B_playlist, 1, 2); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6, 'showEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, true, -1, this.effect_2517ABD6_2B28_B7FA_41B9_E118F143094B, 'showEffect', false); this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7, 'hideEffect', false); this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6, 'hideEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_5225C4C3_2CE8_51DA_41A1_EF4D2F31A843, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F, 'hideEffect', false); this.setComponentVisibility(this.Image_7615E83C_29EC_D15C_41B6_53D6B9448359, false, -1, this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F, 'hideEffect', false); if(this.existsKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')){ if(this.getKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355')) { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, true, -1, this.effect_5225B4C3_2CE8_51DA_41C0_41F0591DF4CF, 'showEffect', false); } else { this.setComponentVisibility(this.Image_74AA3858_29EC_5124_41B6_A1E86580D355, false, -1, this.effect_25172BD7_2B28_B7FA_41C3_EBDCF02182DF, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_74AA3858_29EC_5124_41B6_A1E86580D355'); if(this.existsKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')){ if(this.getKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235')) { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, true, -1, this.effect_522444C3_2CE8_51D9_41B5_419996F4414D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235, false, -1, this.effect_25168BD7_2B28_B7FA_41BB_F5A9D2E4E1C3, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_522434C4_2CE8_51DE_41C4_C445AAFCBDF3, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_25165BD8_2B28_B7F6_41BF_5C9F0E2EECB7, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_522424C4_2CE8_51DE_41B9_EE8F5F6831C1, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C17A97_2894_712C_41B7_9CFB64799D98"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254_camera",
    "begin": "this.registerKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE', this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.get('visible')); this.registerKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1', this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1.get('visible')); this.registerKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B', this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B.get('visible')); this.registerKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06', this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06.get('visible')); this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A793D3_2B68_57FA_41B8_11E79F904362, 'hideEffect', false); this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA, 'showEffect', false); this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200, 'showEffect', false)",
    "end": "if(this.existsKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')){ if(this.getKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06')) { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, true, -1, this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_619C3102_29AC_5324_41C1_3BF76C2BBF06, false, -1, this.effect_522374C5_2CE8_51DE_41A3_82173CD232C9, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_619C3102_29AC_5324_41C1_3BF76C2BBF06'); if(this.existsKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')){ if(this.getKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B')) { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, -1, this.effect_522304C5_2CE8_51DE_41B9_C14E32659B83, 'showEffect', false); } else { this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, -1, this.effect_66A793D3_2B68_57FA_41B8_11E79F904362, 'hideEffect', false); } }; this.unregisterKey('visibility_ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B'); if(this.existsKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')){ if(this.getKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1')) { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, true, -1, this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA, 'showEffect', false); } else { this.setComponentVisibility(this.Image_4A371192_29EB_D325_41B4_06FF095FB8E1, false, -1, this.effect_5223C4C5_2CE8_51DE_41C4_0D2ADEA0E02A, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_4A371192_29EB_D325_41B4_06FF095FB8E1'); if(this.existsKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')){ if(this.getKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')) { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, true, -1, this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200, 'showEffect', false); } else { this.setComponentVisibility(this.Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE, false, -1, this.effect_522384C5_2CE8_51D9_419C_5C15CF78B1EA, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE')",
    "media": "this.panorama_21C1854F_2894_533C_41B2_3F2795CC3254"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "height": 1080,
   "width": 1440,
   "mp4Url": "media/video_243E6AE5_2B0A_6500_419F_5585686B1C3D.mp4"
  },
  "label": "03 Ramprasad",
  "width": 1440,
  "loop": false,
  "id": "video_243E6AE5_2B0A_6500_419F_5585686B1C3D",
  "height": 1080,
  "thumbnailUrl": "media/video_243E6AE5_2B0A_6500_419F_5585686B1C3D_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_3BA0B692_2B28_D07A_41BF_7C31B1A66FED",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid3B50A67D_2B28_D0AE_41C2_152CAA28AC86VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid50FB9345_2CE8_50D9_41C1_FBD789D40F2C",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3B50A67D_2B28_D0AE_41C2_152CAA28AC86VideoPlayer)",
    "start": "this.viewer_uid3B50A67D_2B28_D0AE_41C2_152CAA28AC86VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_3BA0B692_2B28_D07A_41BF_7C31B1A66FED, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3BA0B692_2B28_D07A_41BF_7C31B1A66FED, 0, this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D)"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "height": 1080,
   "width": 1440,
   "mp4Url": "media/video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F.mp4"
  },
  "label": "05 Nikitha",
  "width": 1440,
  "loop": false,
  "id": "video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F",
  "height": 1080,
  "thumbnailUrl": "media/video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_33B76FBF_2B68_4FAA_41BF_DDBB2DA8E865",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid33BE0FB1_2B68_4FB6_41C5_9A5E3791C4CEVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid50F92348_2CE8_50D7_41AE_C20AA3775B2D",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid33BE0FB1_2B68_4FB6_41C5_9A5E3791C4CEVideoPlayer)",
    "start": "this.viewer_uid33BE0FB1_2B68_4FB6_41C5_9A5E3791C4CEVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_33B76FBF_2B68_4FAA_41BF_DDBB2DA8E865, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_33B76FBF_2B68_4FAA_41BF_DDBB2DA8E865, 0, this.video_3D718D0A_2B58_506B_41B4_5A5EB4AD463F)"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "height": 1080,
   "mp4Url": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D.mp4",
   "width": 1920
  },
  "label": "intro video",
  "width": 1920,
  "loop": false,
  "id": "video_6841836A_29BB_D7E4_41C1_99E27908293D",
  "height": 1080,
  "thumbnailUrl": "media/video_6841836A_29BB_D7E4_41C1_99E27908293D_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_0928CF89_2B68_7056_41C4_459AAC4B4DCB",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid09399F76_2B68_70BA_41BB_36C25CD778ECVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid50F8034B_2CE8_50EA_41A7_40BE124051CF",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid09399F76_2B68_70BA_41BB_36C25CD778ECVideoPlayer)",
    "start": "this.viewer_uid09399F76_2B68_70BA_41BB_36C25CD778ECVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_0928CF89_2B68_7056_41C4_459AAC4B4DCB, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_0928CF89_2B68_7056_41C4_459AAC4B4DCB, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "id": "PlayList_09286F8A_2B68_706A_41BA_DAC1F92E997D",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid0938CF77_2B68_70BA_41C1_2BE899DA3D33VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid50F8E34C_2CE8_50EE_4190_AA4F619F2F26",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid0938CF77_2B68_70BA_41C1_2BE899DA3D33VideoPlayer)",
    "start": "this.viewer_uid0938CF77_2B68_70BA_41C1_2BE899DA3D33VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_09286F8A_2B68_706A_41BA_DAC1F92E997D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_09286F8A_2B68_706A_41BA_DAC1F92E997D, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "id": "PlayList_6DA80910_2B78_F076_41B0_F6FC349409F1",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid6D89F8EA_2B78_F1AA_418D_D27E95A2D1EFVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid50F7734D_2CE8_50EE_41A9_48F963689445",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6D89F8EA_2B78_F1AA_418D_D27E95A2D1EFVideoPlayer)",
    "start": "this.viewer_uid6D89F8EA_2B78_F1AA_418D_D27E95A2D1EFVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6DA80910_2B78_F076_41B0_F6FC349409F1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6DA80910_2B78_F076_41B0_F6FC349409F1, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "id": "PlayList_6DAFA911_2B78_F076_41C4_EE7EC82960D4",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid6D88A8EB_2B78_F1AA_419A_12C5EC1EFB34VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid50F7D34D_2CE8_50EE_41C0_8027388E6102",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6D88A8EB_2B78_F1AA_419A_12C5EC1EFB34VideoPlayer)",
    "start": "this.viewer_uid6D88A8EB_2B78_F1AA_419A_12C5EC1EFB34VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6DAFA911_2B78_F076_41C4_EE7EC82960D4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6DAFA911_2B78_F076_41C4_EE7EC82960D4, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "height": 1080,
   "width": 1440,
   "mp4Url": "media/video_3E29B943_2B57_B0DA_41C4_87589CB6C427.mp4"
  },
  "label": "06 Usha T",
  "width": 1440,
  "loop": false,
  "id": "video_3E29B943_2B57_B0DA_41C4_87589CB6C427",
  "height": 1080,
  "thumbnailUrl": "media/video_3E29B943_2B57_B0DA_41C4_87589CB6C427_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_09281F8B_2B68_706A_41BB_DE7A13BB4313",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid09373F79_2B68_70B6_41A2_34B2E0E58AD7VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid50F6234F_2CE8_50EA_41BD_7C9C955CB824",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_3E29B943_2B57_B0DA_41C4_87589CB6C427",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid09373F79_2B68_70B6_41A2_34B2E0E58AD7VideoPlayer)",
    "start": "this.viewer_uid09373F79_2B68_70B6_41A2_34B2E0E58AD7VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_09281F8B_2B68_706A_41BB_DE7A13BB4313, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_09281F8B_2B68_706A_41BB_DE7A13BB4313, 0, this.video_3E29B943_2B57_B0DA_41C4_87589CB6C427)"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "height": 1080,
   "width": 1440,
   "mp4Url": "media/video_3E2A1D54_2B57_B0FE_4197_555277F79EEE.mp4"
  },
  "label": "12 Angela Paulson",
  "width": 1440,
  "loop": false,
  "id": "video_3E2A1D54_2B57_B0FE_4197_555277F79EEE",
  "height": 1080,
  "thumbnailUrl": "media/video_3E2A1D54_2B57_B0FE_4197_555277F79EEE_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_09279F8B_2B68_706A_4195_DC6074CC8CDC",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid09367F7A_2B68_70AA_41B7_2E5D64D2CD3CVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid50F68350_2CE8_50F6_41B3_39E2171232D1",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_3E2A1D54_2B57_B0FE_4197_555277F79EEE",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid09367F7A_2B68_70AA_41B7_2E5D64D2CD3CVideoPlayer)",
    "start": "this.viewer_uid09367F7A_2B68_70AA_41B7_2E5D64D2CD3CVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_09279F8B_2B68_706A_4195_DC6074CC8CDC, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_09279F8B_2B68_706A_4195_DC6074CC8CDC, 0, this.video_3E2A1D54_2B57_B0FE_4197_555277F79EEE)"
   }
  ]
 },
 {
  "id": "PlayList_09271F8C_2B68_706E_41C0_2F8AECD3767C",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid0935AF7B_2B68_70AA_41B9_62C534AD5307VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid50F56351_2CE8_50F6_41BA_E55087F301FC",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid0935AF7B_2B68_70AA_41B9_62C534AD5307VideoPlayer)",
    "start": "this.viewer_uid0935AF7B_2B68_70AA_41B9_62C534AD5307VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_09271F8C_2B68_706E_41C0_2F8AECD3767C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_09271F8C_2B68_706E_41C0_2F8AECD3767C, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "id": "PlayList_0926AF8D_2B68_706E_41AB_D2DED822C73A",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid0934CF7C_2B68_70AE_41C5_290B43993616VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid50F58352_2CE8_50FB_41A1_831721F2AABD",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_3E2A1D54_2B57_B0FE_4197_555277F79EEE",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid0934CF7C_2B68_70AE_41C5_290B43993616VideoPlayer)",
    "start": "this.viewer_uid0934CF7C_2B68_70AE_41C5_290B43993616VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_0926AF8D_2B68_706E_41AB_D2DED822C73A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_0926AF8D_2B68_706E_41AB_D2DED822C73A, 0, this.video_3E2A1D54_2B57_B0FE_4197_555277F79EEE)"
   }
  ]
 },
 {
  "id": "PlayList_6DAE7913_2B78_F07A_41B8_E6938D27FB1C",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid6DB378F2_2B78_F1BA_41B8_88BC529E769FVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid50F4B355_2CE8_50FE_41C5_501822563506",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6DB378F2_2B78_F1BA_41B8_88BC529E769FVideoPlayer)",
    "start": "this.viewer_uid6DB378F2_2B78_F1BA_41B8_88BC529E769FVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6DAE7913_2B78_F07A_41B8_E6938D27FB1C, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6DAE7913_2B78_F07A_41B8_E6938D27FB1C, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "id": "PlayList_6DADF914_2B78_F07E_419B_0677EF7A3B64",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid6DB228F3_2B78_F1BA_41B5_2CC2F7EB2F18VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid50F33355_2CE8_50FE_41AB_DEB819B4F6A8",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6DB228F3_2B78_F1BA_41B5_2CC2F7EB2F18VideoPlayer)",
    "start": "this.viewer_uid6DB228F3_2B78_F1BA_41B5_2CC2F7EB2F18VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6DADF914_2B78_F07E_419B_0677EF7A3B64, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6DADF914_2B78_F07E_419B_0677EF7A3B64, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "id": "PlayList_6DAD6914_2B78_F07E_41BE_BF98A802B246",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid6DB198F4_2B78_F1BE_41B0_203546EF932BVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid50F38356_2CE8_50FA_41A2_F07DA3330534",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6DB198F4_2B78_F1BE_41B0_203546EF932BVideoPlayer)",
    "start": "this.viewer_uid6DB198F4_2B78_F1BE_41B0_203546EF932BVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6DAD6914_2B78_F07E_41BE_BF98A802B246, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6DAD6914_2B78_F07E_41BE_BF98A802B246, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "id": "PlayList_6DAC9915_2B78_F07E_41BE_1E14EE697DB3",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid6DB158F5_2B78_F1BE_41C2_40B208FF9C98VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid50F27357_2CE8_50FA_41A2_A0FDF82D2D6B",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6DB158F5_2B78_F1BE_41C2_40B208FF9C98VideoPlayer)",
    "start": "this.viewer_uid6DB158F5_2B78_F1BE_41C2_40B208FF9C98VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6DAC9915_2B78_F07E_41BE_1E14EE697DB3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6DAC9915_2B78_F07E_41BE_1E14EE697DB3, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "id": "PlayList_6DAC6916_2B78_F07A_41B9_1A95C82943BA",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid6DB008F5_2B78_F1B9_41BD_802760DA1C60VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid50F2F357_2CE8_50F9_41BD_EE979CA75935",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6DB008F5_2B78_F1B9_41BD_802760DA1C60VideoPlayer)",
    "start": "this.viewer_uid6DB008F5_2B78_F1B9_41BD_802760DA1C60VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6DAC6916_2B78_F07A_41B9_1A95C82943BA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6DAC6916_2B78_F07A_41B9_1A95C82943BA, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "id": "PlayList_6D53B916_2B78_F07A_41B7_BAB9F0C20112",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid6DB7C8F6_2B78_F1BA_41A7_44B7C757164CVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid50F15358_2CE8_50F6_41A0_ABF496FA6223",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6DB7C8F6_2B78_F1BA_41A7_44B7C757164CVideoPlayer)",
    "start": "this.viewer_uid6DB7C8F6_2B78_F1BA_41A7_44B7C757164CVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6D53B916_2B78_F07A_41B7_BAB9F0C20112, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6D53B916_2B78_F07A_41B7_BAB9F0C20112, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "id": "PlayList_6D530917_2B78_F07A_41BF_31D07960C5D5",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid6DB568F9_2B78_F1B6_41B8_1AB12A8E6B81VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid50F0335B_2CE8_50EA_41B7_F62150C0886E",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6DB568F9_2B78_F1B6_41B8_1AB12A8E6B81VideoPlayer)",
    "start": "this.viewer_uid6DB568F9_2B78_F1B6_41B8_1AB12A8E6B81VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6D530917_2B78_F07A_41BF_31D07960C5D5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6D530917_2B78_F07A_41BF_31D07960C5D5, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "id": "PlayList_6D52B917_2B78_F079_41C3_4F740519CE89",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid6DB4E8F9_2B78_F1A9_41AE_542187BCCD6CVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid50F0935C_2CE8_50EE_419A_F8050F4F7D8C",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6DB4E8F9_2B78_F1A9_41AE_542187BCCD6CVideoPlayer)",
    "start": "this.viewer_uid6DB4E8F9_2B78_F1A9_41AE_542187BCCD6CVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6D52B917_2B78_F079_41C3_4F740519CE89, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6D52B917_2B78_F079_41C3_4F740519CE89, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "height": 1080,
   "width": 1440,
   "mp4Url": "media/video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C.mp4"
  },
  "label": "07 Smriti",
  "width": 1440,
  "loop": false,
  "id": "video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C",
  "height": 1080,
  "thumbnailUrl": "media/video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "id": "PlayList_6D523918_2B78_F076_41C5_5C8CEB49EFA4",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid6DB478FA_2B78_F1AA_41C2_A5236E2A1BDEVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid510F535C_2CE8_50EE_41B7_942CE0646290",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6DB478FA_2B78_F1AA_41C2_A5236E2A1BDEVideoPlayer)",
    "start": "this.viewer_uid6DB478FA_2B78_F1AA_41C2_A5236E2A1BDEVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6D523918_2B78_F076_41C5_5C8CEB49EFA4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6D523918_2B78_F076_41C5_5C8CEB49EFA4, 0, this.video_3E2A0B4F_2B57_B0EA_41A7_16D37D868D9C)"
   }
  ]
 },
 {
  "id": "PlayList_6D525919_2B78_F076_418F_B846FC23BD51",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid6DBB28FB_2B78_F1AA_41C1_339639D25752VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid510F335D_2CE8_50EE_41C0_29D4F6748357",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6DBB28FB_2B78_F1AA_41C1_339639D25752VideoPlayer)",
    "start": "this.viewer_uid6DBB28FB_2B78_F1AA_41C1_339639D25752VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6D525919_2B78_F076_418F_B846FC23BD51, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6D525919_2B78_F076_418F_B846FC23BD51, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "id": "PlayList_6D512919_2B78_F076_41B6_A753A91E2393",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid6DBB58FB_2B78_F1AA_41B4_7528DC051B09VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid510FF35E_2CE8_50EA_41C4_0250B698288D",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6DBB58FB_2B78_F1AA_41B4_7528DC051B09VideoPlayer)",
    "start": "this.viewer_uid6DBB58FB_2B78_F1AA_41B4_7528DC051B09VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6D512919_2B78_F076_41B6_A753A91E2393, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6D512919_2B78_F076_41B6_A753A91E2393, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "id": "PlayList_6D51591A_2B78_F06A_4193_6E783429DA1B",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid6DBA38FC_2B78_F1AE_41B6_BF5DA42228F3VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid510E535E_2CE8_50EA_4181_44162102378D",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6DBA38FC_2B78_F1AE_41B6_BF5DA42228F3VideoPlayer)",
    "start": "this.viewer_uid6DBA38FC_2B78_F1AE_41B6_BF5DA42228F3VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6D51591A_2B78_F06A_4193_6E783429DA1B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6D51591A_2B78_F06A_4193_6E783429DA1B, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "id": "PlayList_6D50F91B_2B78_F06A_41C1_3F6C9716FDC0",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid6DB938FD_2B78_F1AE_41B5_E2C2CC61E320VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid510EF35F_2CE8_50EA_41B5_63A552B8C523",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6DB938FD_2B78_F1AE_41B5_E2C2CC61E320VideoPlayer)",
    "start": "this.viewer_uid6DB938FD_2B78_F1AE_41B5_E2C2CC61E320VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6D50F91B_2B78_F06A_41C1_3F6C9716FDC0, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6D50F91B_2B78_F06A_41C1_3F6C9716FDC0, 0, this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D)"
   }
  ]
 },
 {
  "id": "PlayList_6D50791B_2B78_F06A_41C1_99AA0E850F29",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid6DBF2900_2B78_F056_41B5_B50A8A9FE9AAVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid510C5362_2CE8_50DA_41C4_8E1496EE253C",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6DBF2900_2B78_F056_41B5_B50A8A9FE9AAVideoPlayer)",
    "start": "this.viewer_uid6DBF2900_2B78_F056_41B5_B50A8A9FE9AAVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6D50791B_2B78_F06A_41C1_99AA0E850F29, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6D50791B_2B78_F06A_41C1_99AA0E850F29, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "id": "PlayList_6D57891C_2B78_F06E_41A7_511B94D17FD6",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid6DBEE900_2B78_F056_41BA_E7239EEC58A8VideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid510E9363_2CE8_50DA_4197_010A25EF54EA",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_6841836A_29BB_D7E4_41C1_99E27908293D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6DBEE900_2B78_F056_41BA_E7239EEC58A8VideoPlayer)",
    "start": "this.viewer_uid6DBEE900_2B78_F056_41BA_E7239EEC58A8VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6D57891C_2B78_F06E_41A7_511B94D17FD6, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6D57891C_2B78_F06E_41A7_511B94D17FD6, 0, this.video_6841836A_29BB_D7E4_41C1_99E27908293D)"
   }
  ]
 },
 {
  "id": "PlayList_6D57091C_2B78_F06F_41C3_ECEE4464451D",
  "class": "PlayList",
  "items": [
   {
    "player": {
     "id": "viewer_uid6DBFC901_2B78_F056_41C5_8941E71FAD9FVideoPlayer",
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "viewerArea": {
      "progressLeft": 10,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowColor": "#333333",
      "playbackBarOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarBackgroundOpacity": 1,
      "progressBarOpacity": 1,
      "playbackBarBorderSize": 2,
      "toolTipFontFamily": "Arial",
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipShadowHorizontalLength": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "progressHeight": 20,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingLeft": 6,
      "paddingTop": 0,
      "minWidth": 100,
      "playbackBarHeight": 20,
      "minHeight": 50,
      "borderSize": 0,
      "height": "100%",
      "playbackBarHeadShadowColor": "#000000",
      "width": "100%",
      "playbackBarHeadShadowHorizontalLength": 0,
      "paddingRight": 0,
      "playbackBarHeadWidth": 6,
      "paddingBottom": 0,
      "progressBorderSize": 2,
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarRight": 0,
      "progressOpacity": 1,
      "progressBarBorderRadius": 4,
      "progressRight": 10,
      "progressBarBorderSize": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarLeft": 0,
      "id": "viewer_uid510D6363_2CE8_50DA_41A7_4CC2C1370888",
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipOpacity": 1,
      "playbackBarHeadHeight": 30,
      "playbackBarProgressBorderRadius": 0,
      "shadow": false,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "class": "ViewerArea",
      "paddingLeft": 0,
      "toolTipPaddingBottom": 4,
      "toolTipFontStyle": "normal",
      "toolTipPaddingRight": 6,
      "transitionMode": "blending",
      "progressBarBorderColor": "#000000",
      "progressBorderRadius": 4,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "toolTipFontWeight": "normal",
      "playbackBarBorderColor": "#AAAAAA",
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarBorderRadius": 4,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBorderRadius": 0,
      "progressBackgroundColorDirection": "vertical"
     }
    },
    "media": "this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid6DBFC901_2B78_F056_41C5_8941E71FAD9FVideoPlayer)",
    "start": "this.viewer_uid6DBFC901_2B78_F056_41C5_8941E71FAD9FVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_6D57091C_2B78_F06F_41C3_ECEE4464451D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_6D57091C_2B78_F06F_41C3_ECEE4464451D, 0, this.video_243E6AE5_2B0A_6500_419F_5585686B1C3D)"
   }
  ]
 },
 {
  "id": "effect_402756BA_2CD8_71AA_41C5_9043F9060E01",
  "class": "FadeOutEffect",
  "easing": "linear",
  "duration": 0
 },
 {
  "id": "effect_73FAE20C_2B37_F06E_41C2_A4D0EFB0DD93",
  "class": "FadeInEffect",
  "easing": "linear",
  "duration": 0
 },
 {
  "id": "effect_435D6034_2CD8_D0BE_4145_942921BCE65C",
  "class": "FadeOutEffect",
  "easing": "linear",
  "duration": 0
 },
 {
  "id": "effect_71DBB227_2B38_505A_41B8_B1684C50BEB5",
  "class": "FadeInEffect",
  "easing": "linear",
  "duration": 0
 },
 {
  "id": "effect_73734831_2B38_F0B6_41A6_3056DA109D31",
  "class": "FadeOutEffect",
  "easing": "linear",
  "duration": 0
 },
 {
  "id": "effect_5EE51B49_2CD9_F0D6_41BB_9916451EC061",
  "class": "FadeInEffect",
  "easing": "linear",
  "duration": 0
 },
 {
  "id": "effect_19316399_289D_D724_41C3_5328AD97CF46",
  "class": "FadeOutEffect",
  "easing": "cubic_in",
  "duration": 100
 },
 "this.popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE",
 {
  "id": "ImageResource_3B6D458C_2B0E_6F00_4137_F60375F9E4C8",
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 2500,
    "width": 4000,
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_0.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 1280,
    "width": 2048,
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_1.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 640,
    "width": 1024,
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_2.jpg"
   },
   {
    "class": "ImageResourceLevel",
    "height": 320,
    "width": 512,
    "url": "media/popup_24AF77C8_2B0A_AB00_419A_F118A12F78FE_0_3.jpg"
   }
  ]
 },
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid50FB9345_2CE8_50D9_41C1_FBD789D40F2C"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_22CA7678_2B28_50B6_41BE_240CB22323F5",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_3BA0B692_2B28_D07A_41BF_7C31B1A66FED.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_3B0B7F59_2B0B_FB00_41B6_D5FA61080923",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid50F92348_2CE8_50D7_41AE_C20AA3775B2D"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_3EF6CA50_2B58_D0F6_41AF_88DDFBFB9295",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_33B76FBF_2B68_4FAA_41BF_DDBB2DA8E865.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_3E0EE8D0_2B58_D1F6_41C3_24A916E36360",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid50F8034B_2CE8_50EA_41A7_40BE124051CF"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_3105DA62_2B78_B0DA_41BC_E69247CA4CB4",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_0928CF89_2B68_7056_41C4_459AAC4B4DCB.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_32A15801_2B78_B056_41C2_6BC10B35A8AA",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid50F8E34C_2CE8_50EE_4190_AA4F619F2F26"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_3225ADFB_2B78_53A9_41BA_5DA8D7C560E4",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_09286F8A_2B68_706A_41BA_DAC1F92E997D.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_31509B93_2B78_507A_41BE_6FF586B6E809",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid50F7734D_2CE8_50EE_41A9_48F963689445"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_0229F481_2B58_D056_41BD_1CAEF9DE8F00",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_6DA80910_2B78_F076_41B0_F6FC349409F1.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_03DF8247_2B58_D0DA_41C0_97250405E525",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid50F7D34D_2CE8_50EE_41C0_8027388E6102"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_0673CF7D_2B5B_D0AE_41C4_2D68C3CED7CC",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_6DAFA911_2B78_F076_41C4_EE7EC82960D4.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_07F6BCB5_2B5B_D1BE_41C4_417944F0134D",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid50F6234F_2CE8_50EA_41BD_7C9C955CB824"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_316E07CA_2B79_DFEA_41B4_94CEEC7DD389",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_09281F8B_2B68_706A_41BB_DE7A13BB4313.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_32F9A509_2B79_D056_41C3_C9791435C04A",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid50F68350_2CE8_50F6_41B3_39E2171232D1"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_32A45D12_2B77_D07A_41B9_1E89C7C2F766",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_09279F8B_2B68_706A_4195_DC6074CC8CDC.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_312CFAA9_2B77_D1A9_41B4_2A485383A7F1",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid50F56351_2CE8_50F6_41BA_E55087F301FC"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_31E3EA29_2B69_F056_41BE_B00BBDFE598B",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_09271F8C_2B68_706E_41C0_2F8AECD3767C.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_316B3794_2B69_F07E_41A6_B74E6DEAEE20",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid50F58352_2CE8_50FB_41A1_831721F2AABD"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_3406AB30_2B68_70B7_41B8_1F1A3C97FD81",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_0926AF8D_2B68_706E_41AB_D2DED822C73A.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_35E8285D_2B68_70EE_41B4_A1D3555F5130",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid50F4B355_2CE8_50FE_41C5_501822563506"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_199627C4_2B38_BFDE_41C3_0359288D0EF9",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_6DAE7913_2B78_F07A_41B8_E6938D27FB1C.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_1ACCB508_2B38_B056_41C4_EC11BEAC7CA3",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid50F33355_2CE8_50FE_41AB_DEB819B4F6A8"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_1ACA3831_2B38_50B6_41A8_016A71AC9BDE",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_6DADF914_2B78_F07E_419B_0677EF7A3B64.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_1B5C7552_2B38_50FA_41B3_32FE8ADB81AA",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid50F38356_2CE8_50FA_41A2_F07DA3330534"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_19AD0006_2B38_505A_41BD_AEA1DB50005C",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_6DAD6914_2B78_F07E_41BE_BF98A802B246.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_1A211D54_2B38_B0FE_41C3_EC05BEBD3A2A",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid50F27357_2CE8_50FA_41A2_A0FDF82D2D6B"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_1A59D660_2B3F_B0D6_41BD_EF7F148E4AF8",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_6DAC9915_2B78_F07E_41BE_1E14EE697DB3.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_1A3023F2_2B3F_B7BA_41B2_4C313511CDEA",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid50F2F357_2CE8_50F9_41BD_EE979CA75935"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_189C1728_2B39_D056_41C2_D5D01A7E45E3",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_6DAC6916_2B78_F07A_41B9_1A95C82943BA.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_19C834C6_2B39_D1DA_41C2_82B1B834FC1E",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid50F15358_2CE8_50F6_41A0_ABF496FA6223"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_1B6809AD_2B38_D3AE_41B2_602652A126B6",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_6D53B916_2B78_F07A_41B7_BAB9F0C20112.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_181326FB_2B38_D1AA_41BC_014F19FCB6A9",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid50F0335B_2CE8_50EA_41B7_F62150C0886E"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_1F1F226E_2B58_50AA_41C4_4D937032CC21",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_6D530917_2B78_F07A_41BF_31D07960C5D5.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_1F978010_2B58_5076_41A7_6D3C06AE6E2F",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid50F0935C_2CE8_50EE_419A_F8050F4F7D8C"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_1E569350_2B58_D0F6_41A5_512AC1C2C2EA",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_6D52B917_2B78_F079_41C3_4F740519CE89.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_1F3EB0EC_2B58_D1AE_41C1_1281C85577D9",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid510F535C_2CE8_50EE_41B7_942CE0646290"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_193C5803_2B58_D05A_41B8_482F07ECB61D",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_6D523918_2B78_F076_41C5_5C8CEB49EFA4.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_195005A5_2B58_D05E_41AE_B430F46606C7",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid510F335D_2CE8_50EE_41C0_29D4F6748357"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_1F91BE83_2B58_B05A_419C_F817087BA475",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_6D525919_2B78_F076_418F_B846FC23BD51.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_1812DC26_2B58_B05A_41BE_343D6A86EE1C",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid510FF35E_2CE8_50EA_41C4_0250B698288D"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_182A76C8_2B58_51D6_4195_5DE3E41F3EF4",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_6D512919_2B78_F076_41B6_A753A91E2393.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_184933F0_2B58_57B6_4188_25FA6469F73E",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid510E535E_2CE8_50EA_4181_44162102378D"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_18A9F79B_2B5B_D06A_41C2_3D1E92234705",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_6D51591A_2B78_F06A_4193_6E783429DA1B.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_1939A537_2B5B_D0B9_41B5_0049148AC129",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid510EF35F_2CE8_50EA_41B5_63A552B8C523"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_18213EB2_2B59_B1BA_41C4_DB51E25BADBE",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_6D50F91B_2B78_F06A_41C1_3F6C9716FDC0.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_18A63C47_2B59_B0DA_41C5_BFD10DBD28F2",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid510C5362_2CE8_50DA_41C4_8E1496EE253C"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_6A1C5DE5_2B69_B3DE_41C1_043AACFEC932",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_6D50791B_2B78_F06A_41C1_99AA0E850F29.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_6A9CAB79_2B69_B0B6_41BC_6D362232D5F5",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid510E9363_2CE8_50DA_4197_010A25EF54EA"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_6AD94E29_2B78_D056_41BA_FA656C81895E",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_6D57891C_2B78_F06E_41A7_511B94D17FD6.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_6F5D6B66_2B78_D0DA_41B9_A026FFB313B3",
 {
  "footerHeight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "backgroundColor": [],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarWidth": 10,
  "modal": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#888888",
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "children": [
   "this.viewer_uid510D6363_2CE8_50DA_41A7_4CC2C1370888"
  ],
  "shadowOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingTop": 5,
  "overflow": "scroll",
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "bodyPaddingRight": 0,
  "minHeight": 20,
  "titlePaddingRight": 5,
  "closeButtonBorderRadius": 0,
  "paddingTop": 0,
  "minWidth": 20,
  "closeButtonIconWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "gap": 10,
  "paddingRight": 0,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonPressedBorderSize": 0,
  "headerPaddingBottom": 5,
  "closeButtonPressedIconLineWidth": 5,
  "scrollBarMargin": 2,
  "closeButtonPaddingBottom": 5,
  "backgroundOpacity": 1,
  "bodyPaddingLeft": 0,
  "shadowBlurRadius": 6,
  "id": "window_6AA788D7_2B78_51FA_41C3_C9D7688BD031",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarVisible": "rollOver",
  "headerPaddingLeft": 10,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "titlePaddingBottom": 5,
  "contentOpaque": false,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "class": "Window",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonBorderColor": "#000000",
  "headerBackgroundColorDirection": "vertical",
  "close": "this.PlayList_6D57091C_2B78_F06F_41C3_ECEE4464451D.set('selectedIndex', -1);",
  "headerVerticalAlign": "middle",
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "verticalAlign": "middle",
  "closeButtonBackgroundColorDirection": "vertical",
  "borderRadius": 5,
  "backgroundColorRatios": [],
  "titleFontFamily": "Arial",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverIconColor": "#666666",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBorderSize": 0,
  "closeButtonBorderSize": 0,
  "closeButtonPaddingLeft": 5,
  "headerPaddingRight": 0,
  "closeButtonRollOverIconLineWidth": 5,
  "shadowVerticalLength": 0,
  "closeButtonPressedBorderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ]
 },
 "this.popup_6EAC960D_2B78_506E_41C5_0380CA3F44BD",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_512B73AE_2CE8_57AA_41B5_3024294E55AC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.47,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 108,
     "targetPitch": -6.73,
     "easing": "cubic_in_out",
     "targetYaw": -141.9,
     "yawSpeed": 216
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -20.7,
     "easing": "cubic_in_out",
     "targetYaw": -147.14,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -13.03,
     "easing": "cubic_in_out",
     "targetYaw": 130.23,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -5.1,
     "easing": "cubic_in_out",
     "targetYaw": 56.83,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -12.16,
     "easing": "cubic_in_out",
     "targetYaw": 0,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 5)",
     "pitchSpeed": 17.05,
     "targetPitch": -21.49,
     "easing": "cubic_in_out",
     "targetYaw": 85.77,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_512463BF_2CE8_57AA_41C0_967E98B34B91",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 134.84,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "longest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 1.32,
     "targetPitch": -3.51,
     "easing": "cubic_in_out",
     "targetYaw": 127.67,
     "yawSpeed": 1.64
    },
    {
     "path": "longest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, null, null, false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, 0, null, null, false); this.mainPlayList.set('selectedIndex', 1)",
     "pitchSpeed": 11.7,
     "targetPitch": -3.7,
     "easing": "cubic_in_out",
     "targetYaw": -138.77,
     "yawSpeed": 22.5
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_513B93D1_2CE8_57F6_41B8_7351BF6E7F05",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -80.2,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 26.23,
     "targetPitch": -2.63,
     "easing": "cubic_in_out",
     "targetYaw": -174.76,
     "yawSpeed": 51.69
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -5.19,
     "easing": "cubic_in_out",
     "targetYaw": -114.62,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -6.76,
     "easing": "cubic_in_out",
     "targetYaw": -84.12,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -16,
     "easing": "cubic_in_out",
     "targetYaw": -62.5,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -7.37,
     "easing": "cubic_in_out",
     "targetYaw": 125.87,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 8)",
     "pitchSpeed": 17.05,
     "targetPitch": -25.93,
     "easing": "cubic_in_out",
     "targetYaw": -94.58,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_5132A3E3_2CE8_57DA_41A2_43664D509F44",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -93.89,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 68.08,
     "targetPitch": -7.62,
     "easing": "cubic_in_out",
     "targetYaw": -139.92,
     "yawSpeed": 135.8
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -12.68,
     "easing": "cubic_in_out",
     "targetYaw": -129.97,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -19.48,
     "easing": "cubic_in_out",
     "targetYaw": 150.1,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -6.06,
     "easing": "cubic_in_out",
     "targetYaw": 100.77,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -7.71,
     "easing": "cubic_in_out",
     "targetYaw": 47.77,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -11.81,
     "easing": "cubic_in_out",
     "targetYaw": -30.68,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 6)",
     "pitchSpeed": 17.05,
     "targetPitch": -15.21,
     "easing": "cubic_in_out",
     "targetYaw": 85.77,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_5141A3F5_2CE8_57BE_418E_18157F45AC6B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -51.1,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 108,
     "targetPitch": -6.12,
     "easing": "cubic_in_out",
     "targetYaw": 14.65,
     "yawSpeed": 216
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -6.15,
     "easing": "cubic_in_out",
     "targetYaw": 23.88,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 2)",
     "pitchSpeed": 17.05,
     "targetPitch": -43.37,
     "easing": "cubic_in_out",
     "targetYaw": -168.93,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -3.09,
     "easing": "cubic_in_out",
     "targetYaw": 132.58,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_516FE406_2CE8_505A_41C0_540AFBF7252E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 39.04,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "longest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 54.71,
     "targetPitch": 4.55,
     "easing": "cubic_in_out",
     "targetYaw": -76.91,
     "yawSpeed": 108.93
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": 3.79,
     "easing": "cubic_in_out",
     "targetYaw": -111.57,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_517D941A_2CE8_506A_41C4_DF0B542B7BF2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -94.23,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 64.49,
     "targetPitch": -3.35,
     "easing": "cubic_in_out",
     "targetYaw": 122.77,
     "yawSpeed": 128.58
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -8.5,
     "easing": "cubic_in_out",
     "targetYaw": 177.38,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -8.67,
     "easing": "cubic_in_out",
     "targetYaw": -143.13,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -5.54,
     "easing": "cubic_in_out",
     "targetYaw": -121.86,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -10.5,
     "easing": "cubic_in_out",
     "targetYaw": -85.69,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -26.63,
     "easing": "cubic_in_out",
     "targetYaw": -37.74,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -10.07,
     "easing": "cubic_in_out",
     "targetYaw": 54.83,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 9)",
     "pitchSpeed": 17.05,
     "targetPitch": -26.46,
     "easing": "cubic_in_out",
     "targetYaw": -104.16,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_5189242C_2CE8_50AF_41B3_4A3FEC7E4D36",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -167.15,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 108,
     "targetPitch": -10.63,
     "easing": "cubic_in_out",
     "targetYaw": 35.23,
     "yawSpeed": 216
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": 0.04,
     "easing": "cubic_in_out",
     "targetYaw": 11.42,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -3.44,
     "easing": "cubic_in_out",
     "targetYaw": -22.84,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 4)",
     "pitchSpeed": 17.05,
     "targetPitch": -29.16,
     "easing": "cubic_in_out",
     "targetYaw": 13.16,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_5197843F_2CE8_50AA_41C5_682C54F99659",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 90.21,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 108,
     "targetPitch": -7.62,
     "easing": "cubic_in_out",
     "targetYaw": -139.92,
     "yawSpeed": 216
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -12.68,
     "easing": "cubic_in_out",
     "targetYaw": -129.97,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -19.48,
     "easing": "cubic_in_out",
     "targetYaw": 150.1,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -6.06,
     "easing": "cubic_in_out",
     "targetYaw": 100.77,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -7.71,
     "easing": "cubic_in_out",
     "targetYaw": 47.77,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -11.81,
     "easing": "cubic_in_out",
     "targetYaw": -30.68,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 6)",
     "pitchSpeed": 17.05,
     "targetPitch": -15.21,
     "easing": "cubic_in_out",
     "targetYaw": 85.77,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_51A2A451_2CE8_50F6_41A8_37211E695A7E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 84.89,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 70.25,
     "targetPitch": -2.63,
     "easing": "cubic_in_out",
     "targetYaw": -174.76,
     "yawSpeed": 140.14
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -5.19,
     "easing": "cubic_in_out",
     "targetYaw": -114.62,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -6.76,
     "easing": "cubic_in_out",
     "targetYaw": -84.12,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -16,
     "easing": "cubic_in_out",
     "targetYaw": -62.5,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -7.37,
     "easing": "cubic_in_out",
     "targetYaw": 125.87,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 8)",
     "pitchSpeed": 17.05,
     "targetPitch": -25.93,
     "easing": "cubic_in_out",
     "targetYaw": -94.58,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_51CB6463_2CE8_50DA_41C5_C2ADE0465402",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -82.73,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 3.96,
     "targetPitch": -14.17,
     "easing": "cubic_in_out",
     "targetYaw": -67.48,
     "yawSpeed": 6.96
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -30.29,
     "easing": "cubic_in_out",
     "targetYaw": 44.11,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -7.1,
     "easing": "cubic_in_out",
     "targetYaw": 124.13,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -12.42,
     "easing": "cubic_in_out",
     "targetYaw": 162.83,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, null, null, false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, 0, null, null, false)",
     "pitchSpeed": 17.05,
     "targetPitch": -21.75,
     "easing": "cubic_in_out",
     "targetYaw": -129.18,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_51D78475_2CE8_50BE_41C5_8688E73F8E89",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -93.97,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 53.07,
     "targetPitch": -6.73,
     "easing": "cubic_in_out",
     "targetYaw": -141.9,
     "yawSpeed": 105.62
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -20.7,
     "easing": "cubic_in_out",
     "targetYaw": -147.14,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -13.03,
     "easing": "cubic_in_out",
     "targetYaw": 130.23,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -5.1,
     "easing": "cubic_in_out",
     "targetYaw": 56.83,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -12.16,
     "easing": "cubic_in_out",
     "targetYaw": 0,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 5)",
     "pitchSpeed": 17.05,
     "targetPitch": -21.49,
     "easing": "cubic_in_out",
     "targetYaw": 85.77,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_51FEC486_2CE8_505B_41AA_A8704578954F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -21.1,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "longest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 26.92,
     "targetPitch": 4.55,
     "easing": "cubic_in_out",
     "targetYaw": -76.91,
     "yawSpeed": 53.08
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": 3.79,
     "easing": "cubic_in_out",
     "targetYaw": -111.57,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_52046499_2CE8_5076_41B8_8DE4ACC9C282",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 75.52,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 14.86,
     "targetPitch": -3.35,
     "easing": "cubic_in_out",
     "targetYaw": 122.77,
     "yawSpeed": 28.84
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -8.5,
     "easing": "cubic_in_out",
     "targetYaw": 177.38,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -8.67,
     "easing": "cubic_in_out",
     "targetYaw": -143.13,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -5.54,
     "easing": "cubic_in_out",
     "targetYaw": -121.86,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -10.5,
     "easing": "cubic_in_out",
     "targetYaw": -85.69,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -26.63,
     "easing": "cubic_in_out",
     "targetYaw": -37.74,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "targetPitch": -10.07,
     "easing": "cubic_in_out",
     "targetYaw": 54.83,
     "yawSpeed": 33.25
    },
    {
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "end": "this.mainPlayList.set('selectedIndex', 9)",
     "pitchSpeed": 17.05,
     "targetPitch": -26.46,
     "easing": "cubic_in_out",
     "targetYaw": -104.16,
     "yawSpeed": 33.25
    }
   ]
  },
  "automaticRotationSpeed": 4
 },
 {
  "id": "effect_66A993C7_2B68_57DA_41B2_04B39F4CD777",
  "class": "SlideInEffect",
  "easing": "cubic_out",
  "from": "left",
  "duration": 1000
 },
 {
  "id": "effect_25100BD5_2B28_B7FE_41C3_A604D65396B1",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F",
 {
  "id": "effect_521654A1_2CE8_5056_41C1_65BC9C2362B8",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40",
 {
  "id": "effect_521614A2_2CE8_505A_4199_23CEFF6FDB4F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1",
 {
  "id": "effect_521624A2_2CE8_505A_41B4_D356AF47839B",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407",
 {
  "id": "effect_521684A2_2CE8_505B_41B5_D5DB0F262F10",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32",
 {
  "id": "effect_521544A3_2CE8_505A_41B9_C20E70589633",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0C62F4_2B5B_D1BE_4165_0CACFA6A7B75",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0C62F4_2B5B_D1BE_4165_0CACFA6A7B75",
 {
  "id": "effect_521564A3_2CE8_505A_4174_4F4586E7C0C7",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0CA2F5_2B5B_D1BE_41BF_6A0AAF96742A",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0CA2F5_2B5B_D1BE_41BF_6A0AAF96742A",
 {
  "id": "effect_521534A4_2CE8_505E_41C0_364D7EF3F536",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0CF2F6_2B5B_D1BA_41AF_DF00EF28837E",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0CF2F6_2B5B_D1BA_41AF_DF00EF28837E",
 {
  "id": "effect_5215C4A4_2CE8_505E_41B6_3E894DBD10AF",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0D22F6_2B5B_D1BA_41BD_77068B1464D7",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0D22F6_2B5B_D1BA_41BD_77068B1464D7",
 {
  "id": "effect_5215B4A4_2CE8_505E_41A9_99B66AC403F7",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298",
 {
  "id": "effect_521454A5_2CE8_505E_417B_880DB30172FB",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0DB2F7_2B5B_D1BA_41BC_10904047BD1D",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0DB2F7_2B5B_D1BA_41BC_10904047BD1D",
 {
  "id": "effect_521464A5_2CE8_505E_41B3_1D869859FC31",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_7F0DE2F8_2B5B_D1B6_41C1_175D56E7F571",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0DE2F8_2B5B_D1B6_41C1_175D56E7F571",
 {
  "id": "effect_5214D4A5_2CE8_505E_41BA_9BD51F98B204",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_269A2071_2B29_F0B6_41B4_001C61C97291",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_269A7072_2B29_F0BA_41B4_E312EE67E18D",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5214A4A6_2CE8_505A_41C5_1BEF78F8CF8C",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E",
 {
  "id": "effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_521374A6_2CE8_505A_41B9_C8C706D6E06B",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828",
 {
  "id": "effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_521314A6_2CE8_505A_41B1_9D204812EB86",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2",
 {
  "id": "effect_70AC8635_2B38_70BE_41C1_737F1147DA8C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5213D4A7_2CE8_505A_41AB_DCAC4C95E80E",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C",
 {
  "id": "effect_25102BD5_2B28_B7FE_41C4_041AFE0F0BAC",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_25103BD5_2B28_B7FE_41C1_45F7C799132C",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6",
 {
  "id": "effect_521244A7_2CE8_505A_41BB_7FC373A8E26A",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_2517ABD6_2B28_B7FA_41B9_E118F143094B",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_521214A8_2CE8_5056_41B6_A2ACC81E5253",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_25172BD7_2B28_B7FA_41C3_EBDCF02182DF",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_2516CBD7_2B28_B7FA_4184_683EE4B06578",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5212F4A8_2CE8_5056_41B0_0645F9828D37",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_25168BD7_2B28_B7FA_41BB_F5A9D2E4E1C3",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_521294A8_2CE8_5056_41C4_7C5BA0BF5DB1",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_25165BD8_2B28_B7F6_41BF_5C9F0E2EECB7",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA",
 {
  "id": "effect_5212A4A9_2CE8_5056_41A2_E14B903A583D",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_521124A9_2CE8_5056_41C4_2EC070FCEEE8",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F2159CF_2B1A_A700_41BE_5406D4BE81FC",
 {
  "id": "effect_3F20A9CF_2B1A_A700_41C5_3F8E27D3DC43",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5211F4AA_2CE8_51AA_41C0_0127B3EB29BD",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F20A9CF_2B1A_A700_41C5_3F8E27D3DC43",
 {
  "id": "effect_3F20E9D0_2B1A_A700_4194_688EDB99E019",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5211B4AA_2CE8_51AA_41C0_BCFD9E1C7E9A",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F20E9D0_2B1A_A700_4194_688EDB99E019",
 {
  "id": "effect_3F2039D0_2B1A_A700_41C1_D0961B372F16",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5212D4AA_2CE8_51AB_41BD_60238A39A766",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F2039D0_2B1A_A700_41C1_D0961B372F16",
 {
  "id": "effect_3F2079D1_2B1A_A700_41B0_30CA61E53834",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_521294AB_2CE8_51AA_41BC_0BB57EFF61E4",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F2079D1_2B1A_A700_41B0_30CA61E53834",
 {
  "id": "effect_3F23C9D1_2B1A_A700_41C3_4953F2464F7B",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5212A4AB_2CE8_51AA_41C2_8A16A0BAC238",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F23C9D1_2B1A_A700_41C3_4953F2464F7B",
 {
  "id": "effect_3F2309D2_2B1A_A700_41B6_B78C81300286",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_521144AB_2CE8_51AA_41BE_35339C96F377",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F2309D2_2B1A_A700_41B6_B78C81300286",
 {
  "id": "effect_3F2359D3_2B1A_A700_41AD_FF54EABD0A79",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_521104AC_2CE8_51AE_4152_64BB1A3726B0",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F2359D3_2B1A_A700_41AD_FF54EABD0A79",
 {
  "id": "effect_3F22A9D3_2B1A_A700_41A9_250ECCADFFE7",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5211C4AC_2CE8_51AE_41BE_153BC0B6057A",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F22A9D3_2B1A_A700_41A9_250ECCADFFE7",
 {
  "id": "effect_3F22D9D4_2B1A_A700_4194_6E7876152C10",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5211F4AC_2CE8_51AE_41B2_128C5E53FE8E",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F22D9D4_2B1A_A700_4194_6E7876152C10",
 {
  "id": "effect_3F2249D4_2B1A_A700_41C0_5BF343442807",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_521184AD_2CE8_51AE_419C_8B5881F23D4B",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F2249D4_2B1A_A700_41C0_5BF343442807",
 {
  "id": "effect_3F23F9D5_2B1A_A700_41BC_8BC350296405",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_521074AD_2CE8_51AE_41BC_741F66642EEC",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F23F9D5_2B1A_A700_41BC_8BC350296405",
 {
  "id": "effect_3F2349D6_2B1A_A700_41B0_539270F4537C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_521024AD_2CE8_51A9_4197_CA7738968BA9",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F2349D6_2B1A_A700_41B0_539270F4537C",
 {
  "id": "effect_3F22B9D6_2B1A_A700_41C2_A8D2CC82EA66",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5210F4AE_2CE8_51AA_41A6_55B2CB6F46DD",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3F22B9D6_2B1A_A700_41C2_A8D2CC82EA66",
 {
  "id": "effect_309931C2_2B3A_E700_41BB_D77E5464C333",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_5210B4AE_2CE8_51AA_41C2_C53884C8AF83",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_309931C2_2B3A_E700_41BB_D77E5464C333",
 {
  "id": "effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3BB158BB_2B38_D1AA_41B0_BC6D70FE94E6",
 {
  "id": "effect_522F74AE_2CE8_51AB_41B8_5BCE38E4853F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3098B1C3_2B3A_E700_41B4_232B931F0113",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_522F64AF_2CE8_51AA_41C0_9F1C0098115E",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3098B1C3_2B3A_E700_41B4_232B931F0113",
 {
  "id": "effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_522FD4AF_2CE8_51AA_41BF_E95556201B76",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3098F1C3_2B3A_E700_41B3_98DAFF8001BC",
 {
  "id": "effect_3099A1C4_2B3A_E700_4170_E65033069B39",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_522FE4B0_2CE8_51B6_41AD_2851C913385F",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3099A1C4_2B3A_E700_4170_E65033069B39",
 {
  "id": "effect_3099E1C4_2B3A_E701_41B1_BE4BED53379C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_522F94B0_2CE8_51B6_418D_87331F954CBB",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3099E1C4_2B3A_E701_41B1_BE4BED53379C",
 {
  "id": "effect_309921C5_2B3A_E700_41C1_7BBD1322D493",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_522E74B0_2CE8_51B6_4183_B4F11304A3EB",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_309921C5_2B3A_E700_41C1_7BBD1322D493",
 {
  "id": "effect_309961C6_2B3A_E700_41C0_DB4AB36D32A3",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_522E64B1_2CE8_51B6_41BB_913C95A69447",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_309961C6_2B3A_E700_41C0_DB4AB36D32A3",
 {
  "id": "effect_3D412C75_2B0A_5D00_41B4_22EF4999D51C",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3D40CC76_2B0A_5D00_4195_195FBA3D9ABF",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_309881C6_2B3A_E701_41C0_5AB081857C81",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_522EF4B1_2CE8_51B6_41B0_F1FE2642E3E5",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_309881C6_2B3A_E701_41C0_5AB081857C81",
 {
  "id": "effect_309821C7_2B3A_E700_41C0_E75CD3F76820",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_522E84B1_2CE8_51B6_41BC_3F196B60AF22",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_309821C7_2B3A_E700_41C0_E75CD3F76820",
 {
  "id": "effect_309861C8_2B3A_E700_41C1_6120ED54C917",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_522D54B2_2CE8_51BA_41BF_4454B6F9C6DE",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_309861C8_2B3A_E700_41C1_6120ED54C917",
 {
  "id": "effect_3BB108BF_2B38_D1AA_4182_50A68E2673E7",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3BB108BF_2B38_D1AA_4182_50A68E2673E7",
 {
  "id": "effect_522D74B2_2CE8_51BA_41BF_B00047A87AA5",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3E887296_2B58_B07A_41B9_47D8BFFA574E",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E",
 {
  "id": "effect_522DE4B3_2CE8_51BA_41C2_9DF32465F03D",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_66A793D3_2B68_57FA_41B8_11E79F904362",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_522E34B3_2CE8_51BA_41B2_41A2E5B0EE64",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A793D3_2B68_57FA_41B8_11E79F904362",
 {
  "id": "effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA",
 {
  "id": "effect_522EC4B3_2CE8_51B9_41C5_B27C838D14F8",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_3E891297_2B58_B07A_41AF_4F2371C2F200",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200",
 {
  "id": "effect_522EB4B4_2CE8_51BE_41A6_0FA8A40465CE",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_083FF036_2B68_50BA_41B2_BA99A13F9561",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083FF036_2B68_50BA_41B2_BA99A13F9561",
 {
  "id": "effect_522D24B4_2CE8_51BE_417B_7B7B6D8D20E3",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_70FEA952_2B2B_D0FB_41B0_341B5210D6F0",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70FEA952_2B2B_D0FB_41B0_341B5210D6F0",
 {
  "id": "effect_522DC4B5_2CE8_51BE_41AC_DB75C5DFDF32",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_66A163D5_2B68_57F9_41B9_F97797238D6A",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_522D94B5_2CE8_51BE_41BC_843BE8EA7D44",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A163D5_2B68_57F9_41B9_F97797238D6A",
 {
  "id": "effect_083FA037_2B68_50BA_41C5_535FB194808D",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083FA037_2B68_50BA_41C5_535FB194808D",
 {
  "id": "effect_522DA4B5_2CE8_51BE_41BD_203F12994886",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_083F5037_2B68_50B9_41C4_A9729CFC613F",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083F5037_2B68_50B9_41C4_A9729CFC613F",
 {
  "id": "effect_522C74B6_2CE8_51BA_4195_60721279C72C",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_083EA038_2B68_50B6_41C3_0BE33D67069D",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083EA038_2B68_50B6_41C3_0BE33D67069D",
 {
  "id": "effect_522CE4B6_2CE8_51BA_41C4_38C01B8E0C50",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_66A003D7_2B68_57FA_41C5_D20DC33306FF",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_522C94B6_2CE8_51BA_41A5_24405BB2BA81",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A003D7_2B68_57FA_41C5_D20DC33306FF",
 {
  "id": "effect_083E6039_2B68_50B6_41C1_ECDB68119909",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083E6039_2B68_50B6_41C1_ECDB68119909",
 {
  "id": "effect_522B54B7_2CE8_51BA_41A3_0BB223B33825",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_083DF039_2B68_50B6_41B8_2A2374D9FEBF",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_083DF039_2B68_50B6_41B8_2A2374D9FEBF",
 {
  "id": "effect_522B74B7_2CE8_51BA_41B0_B8E8402919E5",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_66A313D9_2B68_57F6_41C2_82515AC235DF",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_522BC4B8_2CE8_51B6_41B7_6B286AFAEAB4",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A313D9_2B68_57F6_41C2_82515AC235DF",
 {
  "id": "effect_63937A53_2B78_F0FA_41C0_DBAC6E60FAF8",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_63937A53_2B78_F0FA_41C0_DBAC6E60FAF8",
 {
  "id": "effect_522A64B8_2CE8_51B6_41BE_9472B78154EF",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_66A033DA_2B68_57EA_4193_A4F6D81D87ED",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_522A04B8_2CE8_51B7_41C3_1D0D10079E0E",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A033DA_2B68_57EA_4193_A4F6D81D87ED",
 {
  "id": "effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_6392BA53_2B78_F0F9_4157_C9F7F4676B34",
 {
  "id": "effect_522AD4B9_2CE8_51B6_41BE_8D74EA6CA647",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_63922A54_2B78_F0FE_41B5_9D0B9F3255BC",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_63922A54_2B78_F0FE_41B5_9D0B9F3255BC",
 {
  "id": "effect_522AE4B9_2CE8_51B6_41B1_857EACEFFABD",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6391BA55_2B78_F0FE_41B7_12877E2E8635",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_6391BA55_2B78_F0FE_41B7_12877E2E8635",
 {
  "id": "effect_522914BA_2CE8_51AA_4187_4031BFE94D97",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_66A3C3DB_2B68_57E9_41C3_2B74E60F7238",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_522904BA_2CE8_51AA_41B8_F75A7E4E864E",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A3C3DB_2B68_57E9_41C3_2B74E60F7238",
 {
  "id": "effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_6391DA55_2B78_F0FE_41B8_AEF165F124F7",
 {
  "id": "effect_5229C4BA_2CE8_51AB_41B3_80C836C221CF",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_63916A56_2B78_F0FA_41B5_906759C4A755",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_63916A56_2B78_F0FA_41B5_906759C4A755",
 {
  "id": "effect_522994BB_2CE8_51AA_419C_DF0D77402A11",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6390FA57_2B78_F0FA_41BC_E439ADCEC2DA",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_6390FA57_2B78_F0FA_41BC_E439ADCEC2DA",
 {
  "id": "effect_522874BB_2CE8_51AA_41A3_D68A07C35C92",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_66A2F3DD_2B68_57EE_41A4_7E9BBFC56AD2",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_522834BC_2CE8_51AE_4180_CC3CC32626C3",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A2F3DD_2B68_57EE_41A4_7E9BBFC56AD2",
 {
  "id": "effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_63900A57_2B78_F0FA_416E_CE3D049A5BE1",
 {
  "id": "effect_5228C4BC_2CE8_51AE_4174_F490A3CC8C13",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "id": "effect_6397AA58_2B78_F0F6_4184_81A73FF7DA94",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_6397AA58_2B78_F0F6_4184_81A73FF7DA94",
 {
  "id": "effect_522884BC_2CE8_51AE_41BA_1F38D6E99583",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A993C7_2B68_57DA_41B2_04B39F4CD777",
 "this.effect_25100BD5_2B28_B7FE_41C3_A604D65396B1",
 "this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F",
 "this.effect_7F0F12F1_2B5B_D1B6_418E_77727DBCB61F",
 {
  "id": "effect_522994BD_2CE8_51AE_41BF_A7E358370F54",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40",
 "this.effect_7F0F62F2_2B5B_D1BA_41A7_AD872A1C7E40",
 {
  "id": "effect_5229A4BD_2CE8_51AE_41C2_72328096C39F",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1",
 "this.effect_7F0F42F3_2B5B_D1BA_41C2_788532E5A3F1",
 {
  "id": "effect_522864BD_2CE8_51A9_41C3_83031FB8C794",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407",
 "this.effect_7F0FE2F3_2B5B_D1BA_41BE_3BB605712407",
 {
  "id": "effect_522804BE_2CE8_51AA_41C5_A3708EEB90B6",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32",
 "this.effect_7F0C22F4_2B5B_D1BE_41C5_57CAF5E00F32",
 {
  "id": "effect_5228E4BE_2CE8_51AA_41A4_C62BF7D825A2",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0C62F4_2B5B_D1BE_4165_0CACFA6A7B75",
 "this.effect_7F0C62F4_2B5B_D1BE_4165_0CACFA6A7B75",
 {
  "id": "effect_5228A4BF_2CE8_51AA_41B6_CD55A6E75322",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0CA2F5_2B5B_D1BE_41BF_6A0AAF96742A",
 "this.effect_7F0CA2F5_2B5B_D1BE_41BF_6A0AAF96742A",
 {
  "id": "effect_522744BF_2CE8_51AA_41B7_B0817B2130CA",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0CF2F6_2B5B_D1BA_41AF_DF00EF28837E",
 "this.effect_7F0CF2F6_2B5B_D1BA_41AF_DF00EF28837E",
 {
  "id": "effect_522734BF_2CE8_51AA_41C4_329B5BD574FD",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0D22F6_2B5B_D1BA_41BD_77068B1464D7",
 "this.effect_7F0D22F6_2B5B_D1BA_41BD_77068B1464D7",
 {
  "id": "effect_522724C0_2CE8_51D6_41C2_0862865F3768",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298",
 "this.effect_7F0D52F7_2B5B_D1BA_41BE_AFACA86C3298",
 {
  "id": "effect_5227F4C0_2CE8_51D6_41B4_51C6E66D3B08",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0DB2F7_2B5B_D1BA_41BC_10904047BD1D",
 "this.effect_7F0DB2F7_2B5B_D1BA_41BC_10904047BD1D",
 {
  "id": "effect_5227B4C0_2CE8_51D6_41AE_CDAD4F4CD0C7",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_7F0DE2F8_2B5B_D1B6_41C1_175D56E7F571",
 "this.effect_7F0DE2F8_2B5B_D1B6_41C1_175D56E7F571",
 {
  "id": "effect_522644C1_2CE8_51D6_41BD_DF66320206D6",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_269BC071_2B29_F0B6_41C4_C189EBBBFEC8",
 "this.effect_269A2071_2B29_F0B6_41B4_001C61C97291",
 "this.effect_269A1071_2B29_F0B6_41A2_5A321C66B0B7",
 "this.effect_269A6071_2B29_F0B9_41C0_C89F8D794D9F",
 "this.effect_269A7072_2B29_F0BA_41B4_E312EE67E18D",
 "this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E",
 {
  "id": "effect_5226D4C1_2CE8_51D6_41BA_DCED58B6951D",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70AC0633_2B38_70BA_41AC_2CD548EDA95E",
 "this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828",
 {
  "id": "effect_5226E4C1_2CE8_51D6_415F_792A59DBD6D6",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70ACE634_2B38_70BE_41A5_7EF5D84E0828",
 "this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2",
 {
  "id": "effect_5226A4C2_2CE8_51DA_41C3_AAABF3123881",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70ACC634_2B38_70BE_4195_BD05FD30C7E2",
 "this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C",
 {
  "id": "effect_522544C2_2CE8_51DA_41C3_472BA1881F94",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_70AC8635_2B38_70BE_41C1_737F1147DA8C",
 "this.effect_25102BD5_2B28_B7FE_41C4_041AFE0F0BAC",
 "this.effect_25103BD5_2B28_B7FE_41C1_45F7C799132C",
 "this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6",
 "this.effect_2659A836_2B2B_B0BA_41A1_37B7C99F3CC6",
 {
  "id": "effect_5225C4C3_2CE8_51DA_41A1_EF4D2F31A843",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_2517ABD6_2B28_B7FA_41B9_E118F143094B",
 "this.effect_25174BD6_2B28_B7FA_41B7_7C2355FFCD1F",
 "this.effect_25176BD6_2B28_B7FA_41AE_7BBE08FADFB7",
 {
  "id": "effect_5225B4C3_2CE8_51DA_41C0_41F0591DF4CF",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_25172BD7_2B28_B7FA_41C3_EBDCF02182DF",
 "this.effect_2516CBD7_2B28_B7FA_4184_683EE4B06578",
 {
  "id": "effect_522444C3_2CE8_51D9_41B5_419996F4414D",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_25168BD7_2B28_B7FA_41BB_F5A9D2E4E1C3",
 "this.effect_25169BD8_2B28_B7F6_41C2_E86E5A5B9EC6",
 {
  "id": "effect_522434C4_2CE8_51DE_41C4_C445AAFCBDF3",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_25165BD8_2B28_B7F6_41BF_5C9F0E2EECB7",
 "this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA",
 "this.effect_26560837_2B2B_B0BA_41C2_BBDAB75198AA",
 {
  "id": "effect_522424C4_2CE8_51DE_41B9_EE8F5F6831C1",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E",
 "this.effect_3E887296_2B58_B07A_41B9_47D8BFFA574E",
 {
  "id": "effect_522374C5_2CE8_51DE_41A3_82173CD232C9",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A793D3_2B68_57FA_41B8_11E79F904362",
 {
  "id": "effect_522304C5_2CE8_51DE_41B9_C14E32659B83",
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_66A793D3_2B68_57FA_41B8_11E79F904362",
 "this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA",
 "this.effect_3E89A296_2B58_B07A_41C1_B66E8CFB72FA",
 {
  "id": "effect_5223C4C5_2CE8_51DE_41C4_0D2ADEA0E02A",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 "this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200",
 "this.effect_3E891297_2B58_B07A_41AF_4F2371C2F200",
 {
  "id": "effect_522384C5_2CE8_51D9_419C_5C15CF78B1EA",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 1000
 },
 {
  "class": "MediaAudio",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_3DA9E88E_2B19_A500_41C0_6174A05A143F.ogg",
   "mp3Url": "media/audio_3DA9E88E_2B19_A500_41C0_6174A05A143F.mp3"
  },
  "id": "audio_3DA9E88E_2B19_A500_41C0_6174A05A143F",
  "autoplay": true
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "height": 1080,
   "width": 1440,
   "mp4Url": "media/video_334B0411_2B57_B076_41AC_7C1A8BDC1C37.mp4"
  },
  "label": "03 Ramprasad",
  "width": 1440,
  "loop": false,
  "id": "video_334B0411_2B57_B076_41AC_7C1A8BDC1C37",
  "height": 1080,
  "thumbnailUrl": "media/video_334B0411_2B57_B076_41AC_7C1A8BDC1C37_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "Video",
  "video": {
   "class": "VideoResource",
   "height": 1080,
   "width": 1440,
   "mp4Url": "media/video_3EC6271F_2B57_B06A_4179_5A8542744F02.mp4"
  },
  "label": "05 Nikitha",
  "width": 1440,
  "loop": false,
  "id": "video_3EC6271F_2B57_B06A_4179_5A8542744F02",
  "height": 1080,
  "thumbnailUrl": "media/video_3EC6271F_2B57_B06A_4179_5A8542744F02_t.jpg",
  "scaleMode": "fit_inside"
 }
], "children": [
 {
  "progressLeft": 10,
  "playbackBarProgressOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBottom": 10,
  "playbackBarHeadBorderColor": "#000000",
  "progressBorderColor": "#AAAAAA",
  "toolTipShadowColor": "#333333",
  "playbackBarOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarBackgroundOpacity": 1,
  "progressBarOpacity": 1,
  "playbackBarBorderSize": 2,
  "toolTipFontFamily": "Arial",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0,
  "progressBottom": 1,
  "toolTipFontSize": 12,
  "progressHeight": 20,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBorderRadius": 3,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipBackgroundColor": "transparent",
  "toolTipPaddingLeft": 6,
  "paddingTop": 0,
  "minWidth": 100,
  "playbackBarHeight": 20,
  "minHeight": 50,
  "borderSize": 0,
  "height": "100%",
  "playbackBarHeadShadowColor": "#000000",
  "width": "100%",
  "playbackBarHeadShadowHorizontalLength": 0,
  "paddingRight": 0,
  "playbackBarHeadWidth": 6,
  "paddingBottom": 0,
  "progressBorderSize": 2,
  "toolTipShadowOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "playbackBarRight": 0,
  "progressOpacity": 1,
  "progressBarBorderRadius": 4,
  "progressRight": 10,
  "progressBarBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarLeft": 0,
  "top": 0,
  "id": "MainViewer",
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipOpacity": 0.35,
  "playbackBarHeadHeight": 30,
  "playbackBarProgressBorderRadius": 0,
  "shadow": false,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "class": "ViewerArea",
  "paddingLeft": 0,
  "toolTipPaddingBottom": 4,
  "toolTipFontStyle": "normal",
  "toolTipPaddingRight": 6,
  "transitionMode": "blending",
  "progressBarBorderColor": "#000000",
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "toolTipFontWeight": "normal",
  "playbackBarBorderColor": "#AAAAAA",
  "borderRadius": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarBorderRadius": 4,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "left": 0,
  "progressBackgroundColorDirection": "vertical"
 },
 {
  "backgroundOpacity": 0.75,
  "bottom": "0%",
  "shadowBlurRadius": 6,
  "id": "Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927",
  "scrollBarMargin": 2,
  "backgroundColor": [
   "#005B9E",
   "#6AA744"
  ],
  "scrollBarVisible": "rollOver",
  "layout": "absolute",
  "scrollBarWidth": 10,
  "shadow": true,
  "contentOpaque": true,
  "visible": false,
  "horizontalAlign": "left",
  "shadowHorizontalLength": 7,
  "class": "Container",
  "backgroundColorDirection": "horizontal",
  "paddingLeft": 0,
  "shadowSpread": 1,
  "children": [
   {
    "backgroundOpacity": 0,
    "id": "Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03",
    "maxWidth": 850,
    "maxHeight": 850,
    "shadow": false,
    "horizontalAlign": "center",
    "class": "Image",
    "paddingLeft": 0,
    "paddingTop": 0,
    "minWidth": 1,
    "width": "100%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "height": "19.793%",
    "borderRadius": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "url": "skin/Image_3D9EF2AA_28BC_D164_4168_FF9E32662D03.png",
    "paddingBottom": 0,
    "left": "0%",
    "top": "1.07%"
   },
   {
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "bottom": "0.25%",
    "id": "Container_3FB65883_2894_7124_41B7_81A73B20B38D",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "layout": "horizontal",
    "shadow": false,
    "contentOpaque": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingLeft": 0,
    "children": [
     {
      "backgroundOpacity": 0,
      "id": "Image_31227ABF_2894_515C_41B6_160BDF6DEA3D",
      "maxWidth": 512,
      "maxHeight": 512,
      "shadow": false,
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "click": "this.openLink(\"https://www.naturalremedy.com/rd/\", \"_blank\")",
      "cursor": "hand",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "15%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "class": "Image",
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_31227ABF_2894_515C_41B6_160BDF6DEA3D.png",
      "paddingBottom": 0
     },
     {
      "backgroundOpacity": 0,
      "id": "Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F",
      "maxWidth": 512,
      "maxHeight": 512,
      "shadow": false,
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "click": "this.openLink(\"https://www.facebook.com/NaturalRemedies.AHP/\", \"_blank\")",
      "cursor": "hand",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "15%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "class": "Image",
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_304B774E_28ED_BF3C_41C0_9E8086B6D65F.png",
      "paddingBottom": 0
     },
     {
      "backgroundOpacity": 0,
      "id": "Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F",
      "maxWidth": 512,
      "maxHeight": 512,
      "shadow": false,
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "click": "this.openLink(\"https://www.youtube.com/channel/UC-pz4IQAXsTO7QccbCpSZqg/videos\", \"_blank\")",
      "cursor": "hand",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "16%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "class": "Image",
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_3055DFE8_28EC_4EE4_41BD_33D6F59E8C6F.png",
      "paddingBottom": 0
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "100%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "height": "9.628%",
    "borderRadius": 0,
    "paddingRight": 0,
    "gap": 53,
    "paddingBottom": 0,
    "left": "0%"
   },
   {
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "bottom": "32.52%",
    "id": "Container_3F192B4B_28F7_D724_41B4_0E77878D5BC5",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "layout": "vertical",
    "shadow": false,
    "contentOpaque": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingLeft": 0,
    "children": [
     {
      "backgroundOpacity": 0,
      "id": "Label_3F1E8129_28F4_5364_41C1_F2B61EBD15FE",
      "textDecoration": "none",
      "shadow": false,
      "fontFamily": "Arial",
      "horizontalAlign": "center",
      "text": "About",
      "paddingLeft": 0,
      "fontColor": "#FFFFFF",
      "click": "this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_73FAE20C_2B37_F06E_41C2_A4D0EFB0DD93, 'showEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, true, 0, this.effect_73FAE20C_2B37_F06E_41C2_A4D0EFB0DD93, 'showEffect', false); this.setComponentVisibility(this.Image_6E0755F2_2994_D2E4_41A3_D278A91C4E10, true, 0, this.effect_73FAE20C_2B37_F06E_41C2_A4D0EFB0DD93, 'showEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, 0, this.effect_402756BA_2CD8_71AA_41C5_9043F9060E01, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, 0, this.effect_402756BA_2CD8_71AA_41C5_9043F9060E01, 'hideEffect', false)",
      "fontWeight": "normal",
      "class": "Label",
      "paddingTop": 0,
      "minWidth": 1,
      "fontSize": 30,
      "verticalAlign": "middle",
      "borderSize": 0,
      "width": "46.377%",
      "minHeight": 1,
      "height": "9.783%",
      "borderRadius": 0,
      "paddingRight": 0,
      "fontStyle": "normal",
      "paddingBottom": 0
     },
     {
      "backgroundOpacity": 0,
      "id": "Label_31993ADD_28F4_56DC_4171_D033A81D6F12",
      "textDecoration": "none",
      "shadow": false,
      "fontFamily": "Arial",
      "horizontalAlign": "center",
      "text": "Laboratories",
      "paddingLeft": 0,
      "fontColor": "#FFFFFF",
      "click": "this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_71DBB227_2B38_505A_41B8_B1684C50BEB5, 'showEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, true, 0, this.effect_71DBB227_2B38_505A_41B8_B1684C50BEB5, 'showEffect', false); this.setComponentVisibility(this.Image_6E0755F2_2994_D2E4_41A3_D278A91C4E10, true, 0, this.effect_71DBB227_2B38_505A_41B8_B1684C50BEB5, 'showEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, 0, this.effect_435D6034_2CD8_D0BE_4145_942921BCE65C, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, false, 0, this.effect_435D6034_2CD8_D0BE_4145_942921BCE65C, 'hideEffect', false)",
      "fontWeight": "normal",
      "class": "Label",
      "paddingTop": 0,
      "minWidth": 1,
      "fontSize": 30,
      "verticalAlign": "middle",
      "borderSize": 0,
      "width": "60.87%",
      "minHeight": 1,
      "height": "10.749%",
      "borderRadius": 0,
      "paddingRight": 0,
      "fontStyle": "normal",
      "paddingBottom": 0
     },
     {
      "backgroundOpacity": 0,
      "id": "Label_307710D4_28F4_512C_41AE_C31F869BD87A",
      "textDecoration": "none",
      "shadow": false,
      "fontFamily": "Arial",
      "horizontalAlign": "center",
      "text": "Virtual Tour",
      "paddingLeft": 0,
      "fontColor": "#FFFFFF",
      "click": "this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, true, 0, this.effect_5EE51B49_2CD9_F0D6_41BB_9916451EC061, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B, true, 0, this.effect_5EE51B49_2CD9_F0D6_41BB_9916451EC061, 'showEffect', false); this.setComponentVisibility(this.Image_6E0755F2_2994_D2E4_41A3_D278A91C4E10, true, 0, this.effect_5EE51B49_2CD9_F0D6_41BB_9916451EC061, 'showEffect', false); this.setComponentVisibility(this.Image_61372758_2994_5F24_41C3_CE568D87E54A, false, 0, this.effect_73734831_2B38_F0B6_41A6_3056DA109D31, 'hideEffect', false); this.setComponentVisibility(this.Image_6F475BB5_2994_D76C_418F_CE09ACD35F01, false, 0, this.effect_73734831_2B38_F0B6_41A6_3056DA109D31, 'hideEffect', false)",
      "fontWeight": "normal",
      "class": "Label",
      "paddingTop": 0,
      "minWidth": 1,
      "fontSize": 30,
      "verticalAlign": "middle",
      "borderSize": 0,
      "width": "59.13%",
      "minHeight": 1,
      "height": "7.971%",
      "borderRadius": 0,
      "paddingRight": 0,
      "fontStyle": "normal",
      "paddingBottom": 0
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "100%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "height": "34.215%",
    "borderRadius": 0,
    "paddingRight": 0,
    "gap": 61,
    "paddingBottom": 0,
    "left": "0%"
   },
   {
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "id": "Container_31C84245_28FC_512C_41B2_C8B8A201BAE0",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "layout": "vertical",
    "shadow": false,
    "contentOpaque": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingLeft": 0,
    "children": [
     {
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "id": "HTMLText_32D6B418_289C_5124_418C_C70EB9200360",
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "shadow": false,
      "class": "HTMLText",
      "paddingLeft": 10,
      "scrollBarColor": "#000000",
      "paddingTop": 10,
      "minWidth": 1,
      "borderColor": "#000000",
      "minHeight": 1,
      "borderSize": 3,
      "scrollBarOpacity": 0.5,
      "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#fdba3d;font-size:48px;\"><B>INNOVATION</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#fdba3d;font-size:48px;\"><B>CENTER</B></SPAN></SPAN></DIV></div>",
      "height": "73.214%",
      "borderRadius": 0,
      "paddingRight": 10,
      "width": "92.754%",
      "paddingBottom": 10
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "100%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "height": "16.157%",
    "borderRadius": 0,
    "paddingRight": 0,
    "gap": 0,
    "paddingBottom": 0,
    "left": "0%",
    "top": "21.94%"
   },
   {
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "id": "Container_063F3017_2894_D12C_41C0_A30FBA33D2C0",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "layout": "horizontal",
    "shadow": false,
    "contentOpaque": false,
    "horizontalAlign": "center",
    "class": "Container",
    "paddingLeft": 0,
    "children": [
     {
      "backgroundOpacity": 0,
      "id": "Image_06E95D0A_2894_7324_41C3_E29CB520D1F6",
      "maxWidth": 512,
      "maxHeight": 512,
      "shadow": false,
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "click": "this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, true, 0, null, null, false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, false, 0, null, null, false)",
      "class": "Image",
      "paddingTop": 0,
      "minWidth": 1,
      "width": "63.433%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": "66.667%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_06E95D0A_2894_7324_41C3_E29CB520D1F6.png",
      "paddingBottom": 0
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "paddingTop": 0,
    "minWidth": 1,
    "width": "16.667%",
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "height": "4.215%",
    "borderRadius": 0,
    "paddingRight": 0,
    "gap": 10,
    "paddingBottom": 0,
    "right": "0%",
    "top": "0.29%"
   }
  ],
  "shadowOpacity": 0.4,
  "minHeight": 1,
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "minWidth": 1,
  "verticalAlign": "top",
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "borderRadius": 0,
  "shadowColor": "#000000",
  "gap": 10,
  "shadowVerticalLength": 0,
  "paddingRight": 0,
  "paddingBottom": 0,
  "left": "0%",
  "right": "84.93%",
  "scrollBarOpacity": 0.5,
  "top": "0%"
 },
 {
  "backgroundOpacity": 0,
  "id": "Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D",
  "maxWidth": 512,
  "maxHeight": 512,
  "shadow": false,
  "visible": false,
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "click": "this.setComponentVisibility(this.Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D, false, 0, this.effect_19316399_289D_D724_41C3_5328AD97CF46, 'hideEffect', false); this.setComponentVisibility(this.Container_3DF4B62E_28B4_B17C_41C1_99B3BDB4B927, true, 0, null, null, false)",
  "class": "Image",
  "paddingTop": 0,
  "minWidth": 1,
  "width": "3.21%",
  "minHeight": 1,
  "verticalAlign": "middle",
  "borderSize": 0,
  "height": "3.802%",
  "borderRadius": 0,
  "paddingRight": 0,
  "scaleMode": "fit_inside",
  "url": "skin/Image_18CDCAE8_28B4_56E4_41B2_FA95D4FFE90D.png",
  "paddingBottom": 0,
  "left": "1.33%",
  "top": "3.51%"
 },
 {
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "bottom": "0%",
  "id": "Container_619C3102_29AC_5324_41C1_3BF76C2BBF06",
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "layout": "absolute",
  "shadow": false,
  "contentOpaque": false,
  "horizontalAlign": "left",
  "class": "Container",
  "paddingLeft": 0,
  "children": [
   {
    "backgroundOpacity": 0,
    "bottom": "15%",
    "id": "Container_61192088_29AC_5124_4182_B40BFFB7B4C6",
    "scrollBarMargin": 2,
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "layout": "absolute",
    "shadow": false,
    "contentOpaque": false,
    "visible": false,
    "class": "Container",
    "paddingLeft": 0,
    "horizontalAlign": "left",
    "children": [
     {
      "backgroundOpacity": 0,
      "id": "Image_61372758_2994_5F24_41C3_CE568D87E54A",
      "maxWidth": 1385,
      "maxHeight": 866,
      "shadow": false,
      "visible": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "width": "100%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_61372758_2994_5F24_41C3_CE568D87E54A.jpg",
      "paddingBottom": 0,
      "left": "0%",
      "top": "0%"
     },
     {
      "backgroundOpacity": 0,
      "id": "Image_6F475BB5_2994_D76C_418F_CE09ACD35F01",
      "maxWidth": 1385,
      "maxHeight": 866,
      "shadow": false,
      "visible": false,
      "horizontalAlign": "center",
      "class": "Image",
      "paddingLeft": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "width": "100%",
      "minHeight": 1,
      "verticalAlign": "middle",
      "borderSize": 0,
      "height": "100%",
      "borderRadius": 0,
      "paddingRight": 0,
      "scaleMode": "fit_inside",
      "url": "skin/Image_6F475BB5_2994_D76C_418F_CE09ACD35F01.jpg",
      "paddingBottom": 0,
      "left": "0%",
      "top": "0%"
     },
     {
      "itemBackgroundColor": [],
      "backgroundColor": [
       "#006CB5",
       "#71A348"
      ],
      "itemPaddingLeft": 3,
      "layout": "vertical",
      "scrollBarWidth": 10,
      "rollOverItemLabelFontColor": "#F06436",
      "scrollBarColor": "#FFFFFF",
      "itemThumbnailShadowOpacity": 0.54,
      "itemThumbnailShadowVerticalLength": 3,
      "itemBackgroundColorRatios": [],
      "minHeight": 20,
      "rollOverItemLabelFontWeight": "normal",
      "paddingTop": 10,
      "minWidth": 20,
      "playList": "this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B_playlist",
      "borderSize": 0,
      "itemHorizontalAlign": "center",
      "itemLabelTextDecoration": "none",
      "itemLabelFontColor": "#FFFFFF",
      "itemLabelHorizontalAlign": "center",
      "paddingRight": 20,
      "gap": 10,
      "paddingBottom": 10,
      "itemBackgroundOpacity": 0,
      "itemLabelFontWeight": "normal",
      "rollOverItemBackgroundOpacity": 0,
      "itemLabelGap": 9,
      "itemLabelFontSize": 30,
      "selectedItemLabelFontColor": "#FFCC00",
      "itemThumbnailScaleMode": "fit_outside",
      "itemOpacity": 1,
      "top": "0%",
      "scrollBarMargin": 2,
      "backgroundOpacity": 0.78,
      "bottom": "0%",
      "id": "ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B",
      "itemBackgroundColorDirection": "vertical",
      "scrollBarVisible": "rollOver",
      "itemPaddingRight": 3,
      "selectedItemLabelFontWeight": "normal",
      "shadow": false,
      "itemThumbnailShadowSpread": 1,
      "itemThumbnailWidth": 200,
      "itemThumbnailBorderRadius": 100,
      "horizontalAlign": "left",
      "class": "ThumbnailList",
      "backgroundColorDirection": "horizontal",
      "paddingLeft": 20,
      "itemThumbnailHeight": 200,
      "itemPaddingTop": 3,
      "itemLabelPosition": "bottom",
      "itemThumbnailShadowBlurRadius": 8,
      "itemThumbnailShadowHorizontalLength": 3,
      "itemPaddingBottom": 3,
      "itemThumbnailShadowColor": "#000000",
      "itemLabelFontStyle": "normal",
      "itemThumbnailOpacity": 1,
      "itemThumbnailShadow": true,
      "verticalAlign": "top",
      "borderRadius": 5,
      "backgroundColorRatios": [
       0,
       1
      ],
      "itemMode": "normal",
      "scrollBarOpacity": 0.5,
      "itemVerticalAlign": "middle",
      "itemLabelFontFamily": "Arial",
      "left": "0%",
      "right": "0%",
      "itemBorderRadius": 0
     },
     {
      "backgroundOpacity": 0,
      "bottom": "93%",
      "id": "Container_6E10A998_29AD_B324_41BF_92FE747F453A",
      "scrollBarMargin": 2,
      "scrollBarWidth": 10,
      "scrollBarVisible": "rollOver",
      "layout": "absolute",
      "shadow": false,
      "contentOpaque": false,
      "horizontalAlign": "left",
      "class": "Container",
      "paddingLeft": 0,
      "children": [
       {
        "backgroundOpacity": 0,
        "id": "Image_6E0755F2_2994_D2E4_41A3_D278A91C4E10",
        "maxWidth": 512,
        "maxHeight": 512,
        "shadow": false,
        "horizontalAlign": "center",
        "paddingLeft": 0,
        "click": "this.setComponentVisibility(this.Container_61192088_29AC_5124_4182_B40BFFB7B4C6, false, 0, null, null, false)",
        "class": "Image",
        "paddingTop": 0,
        "minWidth": 1,
        "minHeight": 1,
        "verticalAlign": "middle",
        "borderSize": 0,
        "height": "100%",
        "borderRadius": 0,
        "paddingRight": 0,
        "scaleMode": "fit_inside",
        "url": "skin/Image_6E0755F2_2994_D2E4_41A3_D278A91C4E10.png",
        "paddingBottom": 0,
        "left": "5%",
        "right": "45%",
        "top": "0%"
       }
      ],
      "scrollBarColor": "#000000",
      "overflow": "scroll",
      "paddingTop": 0,
      "minWidth": 1,
      "minHeight": 1,
      "verticalAlign": "top",
      "borderSize": 0,
      "scrollBarOpacity": 0.5,
      "borderRadius": 0,
      "paddingRight": 0,
      "gap": 10,
      "paddingBottom": 0,
      "left": "95%",
      "right": "0%",
      "top": "0%"
     }
    ],
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "paddingTop": 0,
    "minWidth": 1,
    "minHeight": 1,
    "verticalAlign": "top",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "borderRadius": 0,
    "paddingRight": 0,
    "gap": 10,
    "paddingBottom": 0,
    "left": "15%",
    "right": "15%",
    "top": "15%"
   },
   {
    "backgroundOpacity": 0,
    "bottom": "75%",
    "id": "Image_7615E83C_29EC_D15C_41B6_53D6B9448359",
    "maxWidth": 1705,
    "maxHeight": 600,
    "shadow": false,
    "visible": false,
    "horizontalAlign": "center",
    "class": "Image",
    "paddingLeft": 0,
    "paddingTop": 0,
    "minWidth": 1,
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "borderRadius": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "url": "skin/Image_7615E83C_29EC_D15C_41B6_53D6B9448359.jpg",
    "paddingBottom": 0,
    "left": "57%",
    "right": "3%",
    "top": "0%"
   },
   {
    "backgroundOpacity": 0,
    "bottom": "75%",
    "id": "Image_74AA3858_29EC_5124_41B6_A1E86580D355",
    "maxWidth": 1705,
    "maxHeight": 600,
    "shadow": false,
    "visible": false,
    "horizontalAlign": "center",
    "class": "Image",
    "paddingLeft": 0,
    "paddingTop": 0,
    "minWidth": 1,
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "borderRadius": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "url": "skin/Image_74AA3858_29EC_5124_41B6_A1E86580D355.jpg",
    "paddingBottom": 0,
    "left": "57%",
    "right": "3%",
    "top": "0%"
   },
   {
    "backgroundOpacity": 0,
    "bottom": "75%",
    "id": "Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235",
    "maxWidth": 1705,
    "maxHeight": 600,
    "shadow": false,
    "visible": false,
    "horizontalAlign": "center",
    "class": "Image",
    "paddingLeft": 0,
    "paddingTop": 0,
    "minWidth": 1,
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "borderRadius": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "url": "skin/Image_76B1C0D4_29EC_D12C_41BC_91EFBF1D1235.jpg",
    "paddingBottom": 0,
    "left": "57%",
    "right": "3%",
    "top": "0%"
   },
   {
    "backgroundOpacity": 0,
    "bottom": "75%",
    "id": "Image_4A371192_29EB_D325_41B4_06FF095FB8E1",
    "maxWidth": 1705,
    "maxHeight": 600,
    "shadow": false,
    "visible": false,
    "horizontalAlign": "center",
    "class": "Image",
    "paddingLeft": 0,
    "paddingTop": 0,
    "minWidth": 1,
    "minHeight": 1,
    "verticalAlign": "middle",
    "borderSize": 0,
    "borderRadius": 0,
    "paddingRight": 0,
    "scaleMode": "fit_inside",
    "url": "skin/Image_4A371192_29EB_D325_41B4_06FF095FB8E1.jpg",
    "paddingBottom": 0,
    "left": "57%",
    "right": "3%",
    "top": "0%"
   }
  ],
  "scrollBarColor": "#000000",
  "overflow": "scroll",
  "paddingTop": 0,
  "minWidth": 1,
  "width": "84.956%",
  "minHeight": 1,
  "verticalAlign": "top",
  "borderSize": 0,
  "scrollBarOpacity": 0.5,
  "height": "99.917%",
  "borderRadius": 0,
  "paddingRight": 0,
  "gap": 10,
  "paddingBottom": 0,
  "right": "0%"
 },
 {
  "backgroundOpacity": 0,
  "id": "Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE",
  "maxWidth": 850,
  "maxHeight": 850,
  "shadow": false,
  "visible": false,
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "click": "this.mainPlayList.set('selectedIndex', 0)",
  "class": "Image",
  "paddingTop": 0,
  "minWidth": 1,
  "width": "7.511%",
  "minHeight": 1,
  "verticalAlign": "middle",
  "borderSize": 0,
  "height": "13.636%",
  "borderRadius": 0,
  "paddingRight": 0,
  "scaleMode": "fit_inside",
  "url": "skin/Image_30CCCC87_2B3A_BD00_41C1_834D3FBDA1AE.png",
  "paddingBottom": 0,
  "left": "1.81%",
  "top": "3.55%"
 },
 {
  "backgroundOpacity": 0.55,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "backgroundColor": [
   "#000000"
  ],
  "shadow": false,
  "visible": false,
  "class": "UIComponent",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "paddingTop": 0,
  "minWidth": 0,
  "minHeight": 0,
  "borderSize": 0,
  "backgroundColorRatios": [
   0
  ],
  "borderRadius": 0,
  "paddingRight": 0,
  "paddingBottom": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "left": 0,
  "right": 0,
  "top": 0
 },
 {
  "backgroundOpacity": 1,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "backgroundColor": [],
  "shadow": false,
  "visible": false,
  "class": "ZoomImage",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "paddingTop": 0,
  "minWidth": 0,
  "minHeight": 0,
  "borderSize": 0,
  "backgroundColorRatios": [],
  "borderRadius": 0,
  "paddingRight": 0,
  "scaleMode": "custom",
  "paddingBottom": 0,
  "left": 0,
  "right": 0,
  "top": 0
 },
 {
  "backgroundOpacity": 0.3,
  "shadowBlurRadius": 6,
  "id": "closeButtonPopupPanorama",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "iconColor": "#000000",
  "textDecoration": "none",
  "mode": "push",
  "layout": "horizontal",
  "shadow": false,
  "iconHeight": 20,
  "visible": false,
  "fontFamily": "Arial",
  "horizontalAlign": "center",
  "iconBeforeLabel": true,
  "class": "CloseButton",
  "backgroundColorDirection": "vertical",
  "paddingLeft": 5,
  "shadowSpread": 1,
  "fontColor": "#FFFFFF",
  "fontWeight": "normal",
  "iconLineWidth": 5,
  "cursor": "hand",
  "paddingTop": 5,
  "minWidth": 0,
  "borderColor": "#000000",
  "minHeight": 0,
  "verticalAlign": "middle",
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "fontStyle": "normal",
  "borderRadius": 0,
  "paddingRight": 5,
  "pressedIconColor": "#888888",
  "rollOverIconColor": "#666666",
  "gap": 5,
  "shadowColor": "#000000",
  "paddingBottom": 5,
  "fontSize": 12,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "right": 10,
  "iconWidth": 20,
  "label": "",
  "top": 10
 }
], 
 "id": "rootPlayer",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "scripts": {
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getKey": function(key){  return window[key]; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "existsKey": function(key){  return key in window; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "registerKey": function(key, value){  window[key] = value; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } }
 },
 "shadow": false,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "class": "Player",
 "paddingTop": 0,
 "minWidth": 20,
 "width": "100%",
 "minHeight": 20,
 "verticalAlign": "top",
 "borderSize": 0,
 "height": "100%",
 "borderRadius": 0,
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "vrPolyfillScale": 0.5,
 "gap": 10,
 "start": "this.playAudioList([this.audio_3DA9E88E_2B19_A500_41C0_6174A05A143F]); this.syncPlaylists([this.ThumbnailList_652AD121_299C_D364_41BA_2F81CD29D95B_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": false
})