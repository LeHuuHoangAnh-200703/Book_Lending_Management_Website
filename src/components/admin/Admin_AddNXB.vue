<script setup>
import sidebarAdmin from '@/layouts/admin/sidebarAdmin.vue';
import navbarAdmin from '@/layouts/admin/navbarAdmin.vue';
</script>

<template>
    <div class="flex h-screen">
        <sidebarAdmin />
        <div class="flex-1 flex flex-col overflow-auto">
            <navbarAdmin />
            <div class="flex-1 p-6 bg-gray-100 overflow-hidden">
                <div class="p-6 md:p-10 mb-8 overflow-y-auto max-h-[calc(100vh-150px)]">
                    <form action="/updateprofile" method="post" class="grid bg-white p-7 border-2 rounded-lg gap-6 text-sm grid-cols-1 md:grid-cols-5">
                        <div class="md:col-span-5 text-[#333f48] font-semibold">
                            <p class="text-3xl">Thêm nhà xuất bản</p>
                            <p class="my-2 text-lg">Vui lòng điền đầy đủ.</p>
                        </div>

                        <div class="md:col-span-5">
                            <label for="idNXB" class="font-semibold text-[16px]">Mã nhà xuất bản</label>
                            <input type="text" name="idNXB" id="idNXB" value=""
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Nhập mã nhà xuất bản" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="nameNXB" class="font-semibold text-[16px]">Tên nhà xuất bản</label>
                            <input type="text" name="nameNXB" id="nameNXB" value=""
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                placeholder="Tên nhà xuất bản" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="address" class="font-semibold text-[16px]">Địa chỉ</label>
                            <input type="text" name="address" id="address" value=""
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Tên địa chỉ" />
                        </div>

                        <div class="md:col-span-5 text-center w-full">
                            <div class="w-full">
                                <button type="submit"
                                    class="bg-[#333f48] hover:bg-[#A0522D] text-white font-bold py-3 px-4 rounded">
                                    Thêm mới nhà xuất bản
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>