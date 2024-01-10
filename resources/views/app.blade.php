<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <link rel="stylesheet" href="{{ asset('/css/leven/normalize.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/leven/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/leven/owl.carousel.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/leven/magnific-popup.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/leven/main.css') }}">


    <script src="{{ asset('js/Leven/modernizr.custom.js') }}"></script>



    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="page">

    <div class="lm-animated-bg"></div>


    <div class="preloader">
        <div class="preloader-animation">
            <div class="preloader-spinner">
            </div>
        </div>
    </div>

    <div class="lmpixels-scroll-to-top"><i class="lnr lnr-chevron-up"></i></div>

    <div class="page-scroll">
        <div id="page_container" class="page-container bg-move-effect">
            @inertia
        </div>
    </div>

    <script src="{{ asset('/js/Leven/jquery-2.1.3.min.js') }}"></script>
    <script src="{{ asset('/js/Leven/imagesloaded.pkgd.min.js') }}"></script>
    <script src="{{ asset('/js/Leven/bootstrap.min.js') }}"></script>
    <script src="{{ asset('/js/Leven/jquery.shuffle.min.js') }}"></script>
    <script src="{{ asset('/js/Leven/masonry.pkgd.min.js') }}"></script>
    <script src="{{ asset('/js/Leven/owl.carousel.min.js') }}"></script>
    <script src="{{ asset('/js/Leven/jquery.magnific-popup.min.js') }}"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCrDf32aQTCVENBhFJbMBKOUTiUAABtC2o"></script>
    <script src="{{ asset('/js/Leven/jquery.googlemap.js') }}"></script>
    <script src="{{ asset('/js/Leven/validator.js') }}"></script>
    <script src="{{ asset('/js/Leven/main.js') }}"></script>
</body>

</html>