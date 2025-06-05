<template>
    <div class="mt-5">
        <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap mt-2">
            <h3>Shifts</h3>
            <button class="btn btn-primary">Add New</button>
        </div>

        <div class="table-responsive">
            <table class="table table-bordered mt-3">
                <thead>
                    <tr class="text-center align-middle">
                        <th>No.</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Duration</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center align-middle">
                        <td>1.</td>
                        <td>2025-06-06T08:00:00+08:00</td>
                        <td>2025-06-06T16:00:00+08:00</td>
                        <td>8</td>
                        <td>
                            <div class="d-flex justify-content-center gap-2 align-items-center flex-wrap">
                                <button class="btn btn-primary btn-sm">Update</button>
                                <button class="btn btn-danger btn-sm">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>