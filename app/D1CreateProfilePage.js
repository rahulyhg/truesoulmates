/*
 * JS for D1CreateProfilePage generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return 'ac2f1913-e4fd-4043-aae9-c940ec4861d1';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "L1SubmitAdvertisingPage",
    "location": "L1SubmitAdvertisingPage.html"
}, {
    "name": "XAdDialog07",
    "location": "XAdDialog07.html"
}, {
    "name": "XAdDialog05",
    "location": "XAdDialog05.html"
}, {
    "name": "XAdDialog08",
    "location": "XAdDialog08.html"
}, {
    "name": "XAdDialog03",
    "location": "XAdDialog03.html"
}, {
    "name": "XAdDialog02",
    "location": "XAdDialog02.html"
}, {
    "name": "L3TermsandConditionsPage",
    "location": "L3TermsandConditionsPage.html"
}, {
    "name": "XAdDialog04",
    "location": "XAdDialog04.html"
}, {
    "name": "YBridesSonar20170101002",
    "location": "YBridesSonar20170101002.html"
}, {
    "name": "YBridesSonar20170101003",
    "location": "YBridesSonar20170101003.html"
}, {
    "name": "D2EditProfilePage",
    "location": "D2EditProfilePage.html"
}, {
    "name": "L4DeveloperPage",
    "location": "L4DeveloperPage.html"
}, {
    "name": "J1SubmitTestimonialsPage",
    "location": "J1SubmitTestimonialsPage.html"
}, {
    "name": "B0AboutUsPage",
    "location": "B0AboutUsPage.html"
}, {
    "name": "A0HomePageOrg",
    "location": "A0HomePageOrg.html"
}, {
    "name": "D3DeleteProfilePage",
    "location": "D3DeleteProfilePage.html"
}, {
    "name": "H1SubmitNewsPage",
    "location": "H1SubmitNewsPage.html"
}, {
    "name": "L0ContactUsPage",
    "location": "L0ContactUsPage.html"
}, {
    "name": "MaterialDesignPage",
    "location": "MaterialDesignPage.html"
}, {
    "name": "YBridesSonar20170101001",
    "location": "YBridesSonar20170101001.html"
}, {
    "name": "K0HelpPage",
    "location": "K0HelpPage.html"
}, {
    "name": "XAdProfile003",
    "location": "XAdProfile003.html"
}, {
    "name": "ExamplePage",
    "location": "ExamplePage.html"
}, {
    "name": "XAdProfile001",
    "location": "XAdProfile001.html"
}, {
    "name": "A0Homepage",
    "location": "A0Homepage.html"
}, {
    "name": "XAdProfile002",
    "location": "XAdProfile002.html"
}, {
    "name": "ZGroomsSonar20170101003",
    "location": "ZGroomsSonar20170101003.html"
}, {
    "name": "J0TestimonialsPage",
    "location": "J0TestimonialsPage.html"
}, {
    "name": "XAdDialog09",
    "location": "XAdDialog09.html"
}, {
    "name": "ZGroomsSonar20170101001",
    "location": "ZGroomsSonar20170101001.html"
}, {
    "name": "ZGroomsSonar20170101002",
    "location": "ZGroomsSonar20170101002.html"
}, {
    "name": "ZGroomsListPageSonar",
    "location": "ZGroomsListPageSonar.html"
}, {
    "name": "H0NewsPage",
    "location": "H0NewsPage.html"
}, {
    "name": "YBridesListPageSonar",
    "location": "YBridesListPageSonar.html"
}, {
    "name": "G1SubmitEventsPage",
    "location": "G1SubmitEventsPage.html"
}, {
    "name": "L2SubmitSuggestionPage",
    "location": "L2SubmitSuggestionPage.html"
}, {
    "name": "E0DirectoryPage",
    "location": "E0DirectoryPage.html"
}, {
    "name": "G0EventsPage",
    "location": "G0EventsPage.html"
}, {
    "name": "F0ContactsPage",
    "location": "F0ContactsPage.html"
}, {
    "name": "C0SearchSoulmatePage",
    "location": "C0SearchSoulmatePage.html"
}, {
    "name": "D1CreateProfilePage",
    "location": "D1CreateProfilePage.html"
}, {
    "name": "D0RegisterSoulmatePage",
    "location": "D0RegisterSoulmatePage.html"
}, {
    "name": "XAdDialog11",
    "location": "XAdDialog11.html"
}, {
    "name": "XAdDialog10",
    "location": "XAdDialog10.html"
}, {
    "name": "XAdDialog06",
    "location": "XAdDialog06.html"
}, {
    "name": "XAdDialog01",
    "location": "XAdDialog01.html"
}, {
    "name": "I0SocialMediaPage",
    "location": "I0SocialMediaPage.html"
}];

function D1CreateProfilePage_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'PopupLable1Name': 'D1CreateProfilePage_PopupLable1Name'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.datasources = Apperyio.datasources || {};

    Apperyio.CurrentScreen = 'D1CreateProfilePage';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var D1CreateProfilePage_onLoad = function() {
            D1CreateProfilePage_elementsExtraJS();

            D1CreateProfilePage_deviceEvents();
            D1CreateProfilePage_windowEvents();
            D1CreateProfilePage_elementsEvents();
        };

    // screen window events


    function D1CreateProfilePage_windowEvents() {

        $('#D1CreateProfilePage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#D1CreateProfilePage').on({
            pageshow: function(event) {
                var popupElement = Apperyio("D1CreateProfilePopupName");
                if (popupElement.popup("option", "positionTo") === "origin") {
                    popupElement.popup("open", {
                        transition: "pop",
                        positionTo: "#" + $(this).attr("id")
                    });
                } else {
                    popupElement.popup("open", {
                        transition: "pop"
                    });
                };
            },
        });

    };

    // device events


    function D1CreateProfilePage_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function D1CreateProfilePage_elementsExtraJS() {
        // screen (D1CreateProfilePage) extra code

        /* D1CreateProfilePopupName */
        $("#D1CreateProfilePage_D1CreateProfilePopupName").popup("option", "positionTo", "window");

    };

    // screen elements handler


    function D1CreateProfilePage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

    };

    $(document).off("pagebeforeshow", "#D1CreateProfilePage").on("pagebeforeshow", "#D1CreateProfilePage", function(event, ui) {
        Apperyio.CurrentScreen = "D1CreateProfilePage";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    D1CreateProfilePage_onLoad();
};

$(document).off("pagecreate", "#D1CreateProfilePage").on("pagecreate", "#D1CreateProfilePage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    D1CreateProfilePage_js();
});