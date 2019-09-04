'use strict';

module.exports = {

  // circular loading bar 
  progressBar: {
    xpath: ".//*[@class='android.widget.ProgressBar']",
    ios: "(.//*[@name='In progress'])[1]",
  },


   /**
   * Short wait times do not have a loading bar
   * @returns {number}
   */
  getShortLoadTime: 2,

   /**
   * Long wait times have a loading bar
   * @returns {number}
   */
  getLongWaitTime: 20,

};

//TODO:

// schedule for later
// /hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[5]/android.widget.TextView

// payment cash text
// /hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView

// cash circle image (not tappable, not checkable)
// /hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.widget.ImageView

// cash words next to circle
// /hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.TextView
