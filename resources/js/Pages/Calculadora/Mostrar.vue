<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Calculadora
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    
                    <div class="grid grid-cols-3  gap-5 md:gap-8 mt-5 mx-7">
                        <div class="grid grid-cols-1 col-start-2">
                            <label for="firstName" class="uppercase text-center md:text-sm text-xs text-gray-500 text-light font-semibold">Tasa de interes anual%</label>
                            <input type="text" id="firstName" readonly value="5%"
                                class="py-2 px-3 text-center rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div class="grid grid-cols-1">
                            <label for="inver" class="uppercase text-center  md:text-sm text-xs text-gray-500 text-light font-semibold">Ingresa tu Inversión</label>
                            <input type="number" id="inver" min="0" v-model="inversion"
                                class="py-2 px-3 text-center rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                        </div>
                        <div class="grid grid-cols-1">
                            <label for="plazo" class="uppercase  text-center md:text-sm text-xs text-gray-500 text-light font-semibold">Ingresa el plazo</label>
                            <input type="number" id="plazo" min="0" v-model="plazo"
                                class="py-2 px-3 text-center rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                        </div>
                    </div>
                    <div class="p-5">
                        <table class="rounded-t-lg mt-5 min-w-full mx-auto bg-gray-800 text-gray-100">
                            <thead>
                                <tr class="text-left border-b border-gray-300">
                                    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-100 uppercase tracking-wider">#</th>
                                    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-100 uppercase tracking-wider">4 meses</th>
                                    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-100 uppercase tracking-wider">8 meses</th>
                                    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-100 uppercase tracking-wider">12 meses</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(value,key) in registros" class="text-center">
                                    <td class="">{{key+1}} año</td>
                                    <td class="px-6 py-4 whitespce-nowrap">
                                        <div class="flex items-center">
                                            <div class="ml-4">
                                                <div class="text-sm font-medium">
                                                   $ {{ value.cuatro }}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespce-nowrap">
                                        <div class="flex items-center">
                                            <div class="ml-4">
                                                <div class="text-sm font-medium">
                                                   $ {{ value.ocho }}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py4 whitespce-nowrap">$ {{ value.doce }}</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                    <div class="p-3">
                        <table class="rounded-t-lg mt-5 min-w-full mx-auto bg-gray-800 text-gray-100">
                            <thead>
                                <tr class="text-left border-b border-gray-300">
                                    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-100 uppercase tracking-wider">Rendimiento</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td >{{roundNumber(rinversion)}}</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                    <div class="flex justify-end md:gap-8 gap-4 pt-5 pb-5 pr-5">
                        <Link class="flex-shrink-0 bg-gray-500 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200 "
                            as="button"
                            method="get"
                            :href="route('dashboard')"
                        >
                            Cancelar
                        </Link>
                        <!-- <Link class="flex-shrink-0 bg-blue-500 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 "
                            as="button"
                            preserve-state
                            @click="submit()"
                        >
                            Calcular
                        </Link> -->
                        <button type="submit" @click.prevent="submit()" class="flex-shrink-0 bg-blue-500 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 ">
                            Calcular
                        </button>
                    </div>

                </div>
            </div>
        </div>

    </AppLayout>
</template>
<script>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from '@inertiajs/inertia-vue3';

export default {
    props:{
    },
    components:{
        AppLayout,
        Link,
    },
    data(){
        return{
            inversion:0,
            plazo:1,
            registros:[],
            rinversion:0,
        }
    },
    methods:{
        submit(){
            // document.getElementById()
            this.registros=[];
            this.rinversion=0;
            // console.log("Esto es la inversion",this.inversion);
            // console.log("Esto es la plazo",this.plazo);
            let sum=this.inversion;
            for(let i =0;i<this.plazo;i++){
                let sum4 = sum + (sum*0.0125);
                let sum8 = sum + (sum*0.025);
                let sum12 = sum + (sum*0.05);
                let periodo = {
                    'cuatro': this.roundNumber(sum4),
                    'ocho': this.roundNumber(sum8),
                    'doce': this.roundNumber(sum12),
                }
                sum = 0;
                sum+=sum12;
                this.registros.push(periodo);
            }
            this.rinversion = sum - this.inversion;
            // console.log(sum);
            // console.log(this.registros);
        },
        roundNumber(value){
            let n = value.toFixed(3);
            return n;
        }
    }
}
</script>
<style lang="">
    
</style>