!function t(e,i,r){function s(o,n){if(!i[o]){if(!e[o]){var a="function"==typeof require&&require;if(!n&&a)return a(o,!0);if(c)return c(o,!0);var p=new Error("Cannot find module '"+o+"'");throw p.code="MODULE_NOT_FOUND",p}var l=i[o]={exports:{}};e[o][0].call(l.exports,function(t){var i=e[o][1][t];return s(i?i:t)},l,l.exports,t,e,i,r)}return i[o].exports}for(var c="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(t,e,i){$(function(){$("#032").click(function(){$(".product").css({display:"block"}),$(".gallery").css({display:"block"}),$("#desktopView").attr("srcset","img/mujer.png"),$("#tabletView").attr("srcset","img/mujer.png"),$("#mobileView").attr("src","img/carro-.png"),$("#desktopView2").attr("srcset","img/030.png"),$("#tabletView2").attr("srcset","img/logocopain.png"),$("#mobileView2").attr("src","img/logocopain.png"),$("#desktopView3").attr("srcset","img/026.png"),$("#tabletView3").attr("srcset","img/logocopain.png"),$("#mobileView3").attr("src","img/027.png"),$(".product-images-item-info-material").text("some text"),$(".product-images-item-info-price").text("$200.000"),$(".product-description-paragraf").text()}),$("#030").click(function(){$(".product").css({display:"block"}),$(".gallery").css({display:"block"}),$("#desktopView").attr("srcset","img/030.png"),$("#tabletView").attr("srcset","img/mujer.png"),$("#mobileView").attr("src","img/carro-.png"),$("#desktopView2").attr("srcset","img/mujer.png"),$("#tabletView2").attr("srcset","img/logocopain.png"),$("#mobileView2").attr("src","img/logocopain.png"),$("#desktopView3").attr("srcset","img/030.png"),$("#tabletView3").attr("srcset","img/logocopain.png"),$("#mobileView3").attr("src","img/027.png"),$(".product-images-item-info-material").text("Un zapato zapatón"),$(".product-images-item-info-price").text("$1.000.000"),$(".product-description-paragraf").text("Esta es una descripción ficty")}),$("#closeButton").click(function(){$(".product").css({display:"none"})}),$("#selector1").click(function(){$(".gallery-images-item").fadeOut("400",function(){$("#itemView1").css({display:"block"}),$("#itemView2").css({display:"none"}),$("#itemView3").css({display:"none"})}).fadeIn("400")}),$("#selector2").click(function(){$(".gallery-images-item").fadeOut("400",function(){$("#itemView1").css({display:"none"}),$("#itemView2").css({display:"block"}),$("#itemView3").css({display:"none"})}).fadeIn("400")}),$("#selector3").click(function(){$(".gallery-images-item").fadeOut("400",function(){$("#itemView1").css({display:"none"}),$("#itemView2").css({display:"none"}),$("#itemView3").css({display:"block"})}).fadeIn("400")})}())},{}]},{},[1]);