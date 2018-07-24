<?php
/**
** activation theme
**/
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
 wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
 wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/css/bootstrap.css' );
 wp_enqueue_style( 'florian', get_stylesheet_directory_uri() . '/florian.css' );
 wp_enqueue_style( 'nenad', get_stylesheet_directory_uri() . '/nenad.css' );
 wp_enqueue_style( 'jeremy', get_stylesheet_directory_uri() . '/jeremy.css' );

}

function header_widgets_init() {
 
 register_sidebar( array(

 'name' => 'Ma nouvelle zone de widget',
 'id' => 'new-widget-area',
 'before_widget' => '<div class="nwa-widget">',
 'after_widget' => '</div>',
 'before_title' => '<h2 class="nwa-title">',
 'after_title' => '</h2>',
 ) );
}

add_action( 'widgets_init', 'header_widgets_init' );


add_shortcode( 'kltdm', 'display_custom_post_type' );

    function display_custom_post_type(){
        $args = array(
            'post_type' => 'photo',
            'post_status' => 'publish',
            'orderby' => 'date',        
            //'category' => $_GET['id_cat']
        );
        $indexNum = 0;
        $tab = array();
        $string = '';
        $stringbefore = '';
        // $string .='<div class="photofull">';
        //     $string .='</div>';
        $string .= '<div>';
        
        
        $query = new WP_Query( $args );
        if( $query->have_posts() ){
   
            


                        $string .= '<div class="photographies row">';
            while( $query->have_posts() ){
                $query->the_post();
                $indexNum++ ;
                if (!in_array(get_field('categorie'),$tab)){
                    array_push($tab,get_field('categorie'));
                }
                
                
                $string .= '<div data-src="'.get_field("image").'" data-index="'.$indexNum.'" class="visible tof photo col-12 col-xs-2 col-md-1col-xl-1 col-lg-1" data-description="'.get_field("description").'" data-cat="'.get_field("categorie").'" >';
                $string .= '<div class="reglage-photo">';
                $string .= '<img src="'.get_field("image").'"  class="img-fluid alignnone ffs laphoto">';
                $string .= '</div>';
                $string .='<p class="text-description-photo">' .get_field("description"). '</p>'; 
                $string .= '</div>';
                
                
   
                
               
                
            }
            $string .= '</div>'; 
        }
        $string .= '</div>';
        wp_reset_postdata();
        $stringbefore = '';
        
        $stringbefore .= '<div class="button-select row">';
        $stringbefore .= '<div class="col-12">';

            foreach ($tab as $key => $value){
                $stringbefore .= '<button type="button" class="photo-type btn btn-success" data-cat-type='.$value.'>'.$value.'</button>';
            }
            $stringbefore .= '<button class="photo-type btn" data-cat-type="all">Tout</button>';
        $stringbefore .='</div>';
        $stringbefore .= '</div>';
        return $stringbefore.$string;

        
    }
    ////////////////////////////////////////////////////////////////////// VIDEO ////////////////////////////////////////////

    add_shortcode( 'ytvideo', 'display_custom_post_type_2' );
   
    function display_custom_post_type_2(){
        $args = array(
            'post_type' => 'videoyoutube',
            'post_status' => 'publish',
            'orderby' => 'date',        
            
        );

        
        $tab = array();
        $stringbefore = '';
        $string = '';
        $string .='<div class="allvideos">';
        $query = new WP_Query( $args );
        while( $query->have_posts() ){
            $query->the_post();
            if (!in_array(get_field('categorie'),$tab)){
                array_push($tab,get_field('categorie'));
            }
            
            

            $string .='<div class="video-slot video" data-cat-type="'.get_field("categorie").'">';
            $string .= '<iframe width="560" height="315" src="https://www.youtube.com/embed/'.get_field("video-youtube").'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
            $string .='<div class="description-video-slot"><p class="text-video-slot">' .get_field("description").' </p></div>'; 
            $string .='</div>';
            
        }
       

        $stringbefore = '';
        $stringbefore .= '<div class="button-select">';


        foreach ($tab as $key => $value){
            $stringbefore .= '<button class="video-type" data-cat-type='.$value.'>'.$value.'</button>';
        }
        $stringbefore .= '<button class="video-type" data-cat-type="all">Tout</button>';
    $stringbefore .='</div>';
    $string .='</div>';
    return $stringbefore.$string;   
           
        
        
      









    }
    /* footer */
